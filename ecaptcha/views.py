from ecaptcha.conf import settings
from ecaptcha.helpers import ecaptcha_image_url, ecaptcha_audio_url
# from ecaptcha.models import ECaptchaStore
from ecaptcha.backends import backend
from django.http import HttpResponse, Http404
from django.core.exceptions import ImproperlyConfigured
from ranged_response import RangedFileResponse
import random
import tempfile
import os
import subprocess
import six


try:
    from cStringIO import StringIO as StringIO
except ImportError:
    from io import BytesIO as StringIO

from PIL import Image, ImageDraw, ImageFont

try:
    import json
except ImportError:
    from django.utils import simplejson as json

# Distance of the drawn text from the top of the ecaptcha image
DISTANCE_FROM_TOP = 4


def getsize(font, text):
    if hasattr(font, 'getoffset'):
        return tuple([x + y for x, y in zip(font.getsize(text), font.getoffset(text))])
    else:
        return font.getsize(text)


def makeimg(size):
    if settings.CAPTCHA_BACKGROUND_COLOR == "transparent":
        image = Image.new('RGBA', size)
    else:
        image = Image.new('RGB', size, settings.CAPTCHA_BACKGROUND_COLOR)
    return image


def ecaptcha_image(request, key, scale=1):
    # try:
    #     store = ECaptchaStore.objects.get(hashkey=key)
    # except ECaptchaStore.DoesNotExist:
    #     HTTP 410 Gone status so that crawlers don't index these expired urls.
    # return HttpResponse(status=410)
    store = backend.get(hashkey=key)

    if not store:
        raise Http404
    # try:
    # store = CaptchaStore.objects.get(hashkey=key)
    # except CaptchaStore.DoesNotExist:
    # # HTTP 410 Gone status so that crawlers don't index these expired urls.
    # return HttpResponse(status=410)

    text = store.challenge

    if isinstance(settings.CAPTCHA_FONT_PATH, six.string_types):
        fontpath = settings.CAPTCHA_FONT_PATH
    elif isinstance(settings.CAPTCHA_FONT_PATH, (list, tuple)):
        fontpath = random.choice(settings.CAPTCHA_FONT_PATH)
    else:
        raise ImproperlyConfigured('settings.CAPTCHA_FONT_PATH needs to be a path to a font or list of paths to fonts')

    if fontpath.lower().strip().endswith('ttf'):
        font = ImageFont.truetype(fontpath, settings.CAPTCHA_FONT_SIZE * scale)
    else:
        font = ImageFont.load(fontpath)

    if settings.CAPTCHA_IMAGE_SIZE:
        size = settings.CAPTCHA_IMAGE_SIZE
    else:
        size = getsize(font, text)
        size = (size[0] * 2, int(size[1] * 1.4))

    image = makeimg(size)
    xpos = 2

    charlist = []
    for char in text:
        if char in settings.CAPTCHA_PUNCTUATION and len(charlist) >= 1:
            charlist[-1] += char
        else:
            charlist.append(char)
    for char in charlist:
        fgimage = Image.new('RGB', size, "#1ab394")
        charimage = Image.new('L', getsize(font, ' %s ' % char), '#000000')
        chardraw = ImageDraw.Draw(charimage)
        chardraw.text((0, 0), ' %s ' % char, font=font, fill='#ffffff')
        if settings.CAPTCHA_LETTER_ROTATION:
            charimage = charimage.rotate(random.randrange(*settings.CAPTCHA_LETTER_ROTATION), expand=0,
                                         resample=Image.BICUBIC)
        charimage = charimage.crop(charimage.getbbox())
        maskimage = Image.new('L', size)

        maskimage.paste(charimage,
                        (xpos, DISTANCE_FROM_TOP, xpos + charimage.size[0], DISTANCE_FROM_TOP + charimage.size[1]))
        size = maskimage.size
        image = Image.composite(fgimage, image, maskimage)
        xpos = xpos + 2 + charimage.size[0]

    if settings.CAPTCHA_IMAGE_SIZE:
        # centering ecaptcha on the image
        tmpimg = makeimg(size)
        tmpimg.paste(image, (int((size[0] - xpos) / 2), int((size[1] - charimage.size[1]) / 2 - DISTANCE_FROM_TOP)))
        image = tmpimg.crop((0, 0, size[0], size[1]))
    else:
        image = image.crop((0, 0, xpos + 1, size[1]))
    draw = ImageDraw.Draw(image)

    for f in settings.noise_functions():
        draw = f(draw, image)
    for f in settings.filter_functions():
        image = f(image)

    out = StringIO()
    image.save(out, "PNG")
    out.seek(0)

    response = HttpResponse(content_type='image/png')
    response.write(out.read())
    response['Content-length'] = out.tell()

    return response


def ecaptcha_audio(request, key):
    if settings.CAPTCHA_FLITE_PATH:
        # try:
        #     store = ECaptchaStore.objects.get(hashkey=key)
        # except ECaptchaStore.DoesNotExist:
        #     # HTTP 410 Gone status so that crawlers don't index these expired urls.
        #     return HttpResponse(status=410)
        store = backend.get(hashkey=key)
        if not store:
            raise Http404

        text = store.challenge
        if 'ecaptcha.helpers.math_challenge' == settings.CAPTCHA_CHALLENGE_FUNCT:
            text = text.replace('*', 'times').replace('-', 'minus')
        else:
            text = ', '.join(list(text))
        path = str(os.path.join(tempfile.gettempdir(), '%s.wav' % key))
        subprocess.call([settings.CAPTCHA_FLITE_PATH, "-t", text, "-o", path])

        # Add arbitrary noise if sox is installed
        if settings.CAPTCHA_SOX_PATH:
            arbnoisepath = str(os.path.join(tempfile.gettempdir(), '%s_arbitrary.wav') % key)
            mergedpath = str(os.path.join(tempfile.gettempdir(), '%s_merged.wav') % key)
            subprocess.call(
                [settings.CAPTCHA_SOX_PATH, '-r', '8000', '-n', arbnoisepath, 'synth', '2', 'brownnoise', 'gain',
                 '-15'])
            subprocess.call(
                [settings.CAPTCHA_SOX_PATH, '-m', arbnoisepath, path, '-t', 'wavpcm', '-b', '16', mergedpath])
            os.remove(arbnoisepath)
            os.remove(path)
            os.rename(mergedpath, path)

        if os.path.isfile(path):
            response = RangedFileResponse(request, open(path, 'rb'), content_type='audio/wav')
            response['Content-Disposition'] = 'attachment; filename="{}.wav"'.format(key)
            return response
    raise Http404


def ecaptcha_refresh(request):
    """  Return json with new ecaptcha for ajax refresh request """
    if not request.is_ajax():
        raise Http404

    # new_key = ECaptchaStore.pick()
    new_key = captcha_new_key(request)
    to_json_response = {
        # 'key': new_key,
        # 'image_url': ecaptcha_image_url(new_key),
        'key': new_key.content.decode(),
        'image_url': ecaptcha_image_url(new_key.content.decode()),
        'audio_url': ecaptcha_audio_url(new_key) if settings.CAPTCHA_FLITE_PATH else None
    }
    return HttpResponse(json.dumps(to_json_response), content_type='application/json')


def captcha_new_key(request):
    challenge, response = settings.get_challenge()()
    store = backend.create(challenge=challenge, response=response)
    return HttpResponse(store.hashkey)
