from django.core.cache import cache
from ecaptcha.conf import settings
from ecaptcha.helpers import get_hashkey


class CaptchaStore(object):
    challenge = None
    response = None
    hashkey = None


def create(challenge, response):
    response = response.lower()
    hashkey = get_hashkey(challenge, response)

    captcha = CaptchaStore()
    captcha.response = response
    captcha.challenge = challenge
    captcha.hashkey = hashkey
    cache.add('%s%s' % (settings.CAPTCHA_CACHE_PREFIX, hashkey), captcha, settings.CAPTCHA_TIMEOUT * 60)
    return captcha


def remove_expired():
    pass


def get(hashkey):
    return cache.get('%s%s' % (settings.CAPTCHA_CACHE_PREFIX, hashkey))


def check(response, hashkey):
    captcha = cache.get('%s%s' % (settings.CAPTCHA_CACHE_PREFIX, hashkey))
    if captcha is None:
        raise Exception('not_exists')
    else:
        if not captcha.response == response:
            raise Exception('not_exists')
        else:
            cache.delete('%s%s' % (settings.CAPTCHA_CACHE_PREFIX, hashkey))
