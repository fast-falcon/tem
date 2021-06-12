# -*- coding: utf-8 -*-
import unittest

from ecaptcha.conf import settings
from ecaptcha.fields import ECaptchaField, ECaptchaTextInput
from ecaptcha.models import ECaptchaStore
import django
from django.core import management
from django.core.exceptions import ImproperlyConfigured
if django.VERSION < (1, 10):  # NOQA
    from django.core.urlresolvers import reverse  # NOQA
else:  # NOQA
    from django.urls import reverse  # NOQA
from django.test import TestCase, override_settings
from django.utils.translation import ugettext_lazy
from django.utils import timezone
import datetime
import json
import re
import six
import warnings
from testfixtures import LogCapture
import os
try:
    from cStringIO import StringIO
except ImportError:
    from io import BytesIO as StringIO

from six import u, text_type
from PIL import Image


@override_settings(ROOT_URLCONF='ecaptcha.tests.urls')
class ECaptchaCase(TestCase):

    def setUp(self):

        self.stores = {}
        self.__current_settings_output_format = settings.CAPTCHA_OUTPUT_FORMAT
        self.__current_settings_dictionary = settings.CAPTCHA_WORDS_DICTIONARY
        self.__current_settings_punctuation = settings.CAPTCHA_PUNCTUATION

        tested_helpers = ['ecaptcha.helpers.math_challenge', 'ecaptcha.helpers.random_char_challenge', 'ecaptcha.helpers.unicode_challenge']
        if os.path.exists('/usr/share/dict/words'):
            settings.CAPTCHA_WORDS_DICTIONARY = '/usr/share/dict/words'
            settings.CAPTCHA_PUNCTUATION = ';-,.'
            tested_helpers.append('ecaptcha.helpers.word_challenge')
            tested_helpers.append('ecaptcha.helpers.huge_words_and_punctuation_challenge')
        for helper in tested_helpers:
            challenge, response = settings._callable_from_string(helper)()
            self.stores[helper.rsplit('.', 1)[-1].replace('_challenge', '_store')], _ = ECaptchaStore.objects.get_or_create(challenge=challenge, response=response)
        challenge, response = settings.get_challenge()()
        self.stores['default_store'], _ = ECaptchaStore.objects.get_or_create(challenge=challenge, response=response)
        self.default_store = self.stores['default_store']

    def tearDown(self):
        settings.CAPTCHA_OUTPUT_FORMAT = self.__current_settings_output_format
        settings.CAPTCHA_WORDS_DICTIONARY = self.__current_settings_dictionary
        settings.CAPTCHA_PUNCTUATION = self.__current_settings_punctuation

    def __extract_hash_and_response(self, r):
        hash_ = re.findall(r'value="([0-9a-f]+)"', str(r.content))[0]
        response = ECaptchaStore.objects.get(hashkey=hash_).response
        return hash_, response

    def test_image(self):
        for key in [store.hashkey for store in six.itervalues(self.stores)]:
            response = self.client.get(reverse('ecaptcha-image', kwargs=dict(key=key)))
            self.assertEqual(response.status_code, 200)
            self.assertTrue(response.has_header('content-type'))
            self.assertEqual(response._headers.get('content-type'), ('Content-Type', 'image/png'))

    def test_audio(self):
        if not settings.CAPTCHA_FLITE_PATH:
            return
        for key in (self.stores.get('math_store').hashkey, self.stores.get('math_store').hashkey, self.default_store.hashkey):
            response = self.client.get(reverse('ecaptcha-audio', kwargs=dict(key=key)))
            self.assertEqual(response.status_code, 200)
            self.assertTrue(response.ranged_file.size > 1024)
            self.assertTrue(response.has_header('content-type'))
            self.assertEqual(response._headers.get('content-type'), ('Content-Type', 'audio/wav'))

    def test_form_submit(self):
        r = self.client.get(reverse('ecaptcha-test'))
        self.assertEqual(r.status_code, 200)
        hash_, response = self.__extract_hash_and_response(r)

        r = self.client.post(reverse('ecaptcha-test'), dict(ecaptcha_0=hash_, ecaptcha_1=response, subject='xxx', sender='asasd@asdasd.com'))
        self.assertEqual(r.status_code, 200)
        self.assertTrue(str(r.content).find('Form validated') > 0)

        r = self.client.post(reverse('ecaptcha-test'), dict(ecaptcha_0=hash_, ecaptcha_1=response, subject='xxx', sender='asasd@asdasd.com'))
        self.assertEqual(r.status_code, 200)
        self.assertFalse(str(r.content).find('Form validated') > 0)

    def test_modelform(self):
        r = self.client.get(reverse('ecaptcha-test-model-form'))
        self.assertEqual(r.status_code, 200)
        hash_, response = self.__extract_hash_and_response(r)

        r = self.client.post(reverse('ecaptcha-test-model-form'), dict(ecaptcha_0=hash_, ecaptcha_1=response, subject='xxx', sender='asasd@asdasd.com'))
        self.assertEqual(r.status_code, 200)
        self.assertTrue(str(r.content).find('Form validated') > 0)

        r = self.client.post(reverse('ecaptcha-test-model-form'), dict(ecaptcha_0=hash_, ecaptcha_1=response, subject='xxx', sender='asasd@asdasd.com'))
        self.assertEqual(r.status_code, 200)
        self.assertFalse(str(r.content).find('Form validated') > 0)

    def test_wrong_submit(self):
        for urlname in ('ecaptcha-test', 'ecaptcha-test-model-form'):
            r = self.client.get(reverse(urlname))
            self.assertEqual(r.status_code, 200)
            r = self.client.post(reverse(urlname), dict(ecaptcha_0='abc', ecaptcha_1='wrong response', subject='xxx', sender='asasd@asdasd.com'))
            self.assertFormError(r, 'form', 'ecaptcha', ugettext_lazy('Invalid CAPTCHA'))

    def test_deleted_expired(self):
        self.default_store.expiration = timezone.now() - datetime.timedelta(minutes=5)
        self.default_store.save()
        hash_ = self.default_store.hashkey
        r = self.client.post(reverse('ecaptcha-test'), dict(ecaptcha_0=hash_, ecaptcha_1=self.default_store.response, subject='xxx', sender='asasd@asdasd.com'))

        self.assertEqual(r.status_code, 200)
        self.assertFalse('Form validated' in str(r.content))

        # expired -> deleted
        try:
            ECaptchaStore.objects.get(hashkey=hash_)
            self.fail()
        except:
            pass

    def test_custom_error_message(self):
        r = self.client.get(reverse('ecaptcha-test-custom-error-message'))
        self.assertEqual(r.status_code, 200)
        # Wrong answer
        r = self.client.post(reverse('ecaptcha-test-custom-error-message'), dict(ecaptcha_0='abc', ecaptcha_1='wrong response'))
        self.assertFormError(r, 'form', 'ecaptcha', 'TEST CUSTOM ERROR MESSAGE')
        # empty answer
        r = self.client.post(reverse('ecaptcha-test-custom-error-message'), dict(ecaptcha_0='abc', ecaptcha_1=''))
        self.assertFormError(r, 'form', 'ecaptcha', ugettext_lazy('This field is required.'))

    def test_repeated_challenge(self):
        ECaptchaStore.objects.create(challenge='xxx', response='xxx')
        try:
            ECaptchaStore.objects.create(challenge='xxx', response='xxx')
        except Exception:
            self.fail()

    def test_repeated_challenge_form_submit(self):
        __current_challange_function = settings.CAPTCHA_CHALLENGE_FUNCT
        for urlname in ('ecaptcha-test', 'ecaptcha-test-model-form'):
            settings.CAPTCHA_CHALLENGE_FUNCT = 'ecaptcha.tests.trivial_challenge'

            r1 = self.client.get(reverse(urlname))
            r2 = self.client.get(reverse(urlname))
            self.assertEqual(r1.status_code, 200)
            self.assertEqual(r2.status_code, 200)
            if re.findall(r'value="([0-9a-f]+)"', str(r1.content)):
                hash_1 = re.findall(r'value="([0-9a-f]+)"', str(r1.content))[0]
            else:
                self.fail()

            if re.findall(r'value="([0-9a-f]+)"', str(r2.content)):
                hash_2 = re.findall(r'value="([0-9a-f]+)"', str(r2.content))[0]
            else:
                self.fail()
            try:
                store_1 = ECaptchaStore.objects.get(hashkey=hash_1)
                store_2 = ECaptchaStore.objects.get(hashkey=hash_2)
            except:
                self.fail()

            self.assertTrue(store_1.pk != store_2.pk)
            self.assertTrue(store_1.response == store_2.response)
            self.assertTrue(hash_1 != hash_2)

            r1 = self.client.post(reverse(urlname), dict(ecaptcha_0=hash_1, ecaptcha_1=store_1.response, subject='xxx', sender='asasd@asdasd.com'))
            self.assertEqual(r1.status_code, 200)
            self.assertTrue(str(r1.content).find('Form validated') > 0)

            try:
                store_2 = ECaptchaStore.objects.get(hashkey=hash_2)
            except:
                self.fail()

            r2 = self.client.post(reverse(urlname), dict(ecaptcha_0=hash_2, ecaptcha_1=store_2.response, subject='xxx', sender='asasd@asdasd.com'))
            self.assertEqual(r2.status_code, 200)
            self.assertTrue(str(r2.content).find('Form validated') > 0)
        settings.CAPTCHA_CHALLENGE_FUNCT = __current_challange_function

    def test_output_format(self):
        for urlname in ('ecaptcha-test', 'ecaptcha-test-model-form'):
            settings.CAPTCHA_OUTPUT_FORMAT = u('%(image)s<p>Hello, ecaptcha world</p>%(hidden_field)s%(text_field)s')
            r = self.client.get(reverse(urlname))
            self.assertEqual(r.status_code, 200)
            self.assertTrue('<p>Hello, ecaptcha world</p>' in str(r.content))

    def test_invalid_output_format(self):
        for urlname in ('ecaptcha-test', 'ecaptcha-test-model-form'):
            settings.CAPTCHA_OUTPUT_FORMAT = u('%(image)s')
            try:
                with warnings.catch_warnings(record=True) as w:
                    self.client.get(reverse(urlname))
                    assert len(w) == 1
                    self.assertTrue('CAPTCHA_OUTPUT_FORMAT' in str(w[-1].message))
                    self.fail()

            except ImproperlyConfigured as e:
                self.assertTrue('CAPTCHA_OUTPUT_FORMAT' in str(e))

    def test_per_form_format(self):
        settings.CAPTCHA_OUTPUT_FORMAT = u('%(image)s testCustomFormatString %(hidden_field)s %(text_field)s')
        r = self.client.get(reverse('ecaptcha-test'))
        self.assertTrue('testCustomFormatString' in str(r.content))
        r = self.client.get(reverse('test_per_form_format'))
        self.assertTrue('testPerFieldCustomFormatString' in str(r.content))

    def test_custom_generator(self):
        r = self.client.get(reverse('test_custom_generator'))
        hash_, response = self.__extract_hash_and_response(r)
        self.assertEqual(response, '111111')

    def test_issue31_proper_abel(self):
        settings.CAPTCHA_OUTPUT_FORMAT = u('%(image)s %(hidden_field)s %(text_field)s')
        r = self.client.get(reverse('ecaptcha-test'))
        self.assertTrue('<label for="id_ecaptcha_1"' in str(r.content))

    def test_refresh_view(self):
        r = self.client.get(reverse('ecaptcha-refresh'), HTTP_X_REQUESTED_WITH='XMLHttpRequest')
        try:
            new_data = json.loads(six.text_type(r.content, encoding='ascii'))
            self.assertTrue('image_url' in new_data)
            self.assertTrue('audio_url' in new_data)
        except:
            self.fail()

    def test_content_length(self):
        for key in [store.hashkey for store in six.itervalues(self.stores)]:
            response = self.client.get(reverse('ecaptcha-image', kwargs=dict(key=key)))
            self.assertTrue(response.has_header('content-length'))
            self.assertTrue(response['content-length'].isdigit())
            self.assertTrue(int(response['content-length']))

    def test_issue12_proper_instantiation(self):
        """
        This test covers a default django field and widget behavior
        It not assert anything. If something is wrong it will raise a error!
        """
        settings.CAPTCHA_OUTPUT_FORMAT = u('%(image)s %(hidden_field)s %(text_field)s')
        widget = ECaptchaTextInput(attrs={'class': 'required'})
        ECaptchaField(widget=widget)

    def test_test_mode_issue15(self):
        __current_test_mode_setting = settings.CAPTCHA_TEST_MODE
        settings.CAPTCHA_TEST_MODE = False
        r = self.client.get(reverse('ecaptcha-test'))
        self.assertEqual(r.status_code, 200)
        r = self.client.post(reverse('ecaptcha-test'), dict(ecaptcha_0='abc', ecaptcha_1='wrong response', subject='xxx', sender='asasd@asdasd.com'))
        self.assertFormError(r, 'form', 'ecaptcha', ugettext_lazy('Invalid CAPTCHA'))

        settings.CAPTCHA_TEST_MODE = True
        # Test mode, only 'PASSED' is accepted
        r = self.client.get(reverse('ecaptcha-test'))
        self.assertEqual(r.status_code, 200)
        r = self.client.post(reverse('ecaptcha-test'), dict(ecaptcha_0='abc', ecaptcha_1='wrong response', subject='xxx', sender='asasd@asdasd.com'))
        self.assertFormError(r, 'form', 'ecaptcha', ugettext_lazy('Invalid CAPTCHA'))

        r = self.client.get(reverse('ecaptcha-test'))
        self.assertEqual(r.status_code, 200)
        r = self.client.post(reverse('ecaptcha-test'), dict(ecaptcha_0='abc', ecaptcha_1='passed', subject='xxx', sender='asasd@asdasd.com'))
        self.assertTrue(str(r.content).find('Form validated') > 0)
        settings.CAPTCHA_TEST_MODE = __current_test_mode_setting

    def test_get_version(self):
        import ecaptcha
        ecaptcha.get_version(True)

    def test_missing_value(self):
        r = self.client.get(reverse('ecaptcha-test-non-required'))
        self.assertEqual(r.status_code, 200)
        hash_, response = self.__extract_hash_and_response(r)

        # Empty response is okay when required is False
        r = self.client.post(reverse('ecaptcha-test-non-required'), dict(subject='xxx', sender='asasd@asdasd.com'))
        self.assertEqual(r.status_code, 200)
        self.assertTrue(str(r.content).find('Form validated') > 0)

        # But a valid response is okay, too
        r = self.client.get(reverse('ecaptcha-test-non-required'))
        self.assertEqual(r.status_code, 200)
        hash_, response = self.__extract_hash_and_response(r)

        r = self.client.post(reverse('ecaptcha-test-non-required'), dict(ecaptcha_0=hash_, ecaptcha_1=response, subject='xxx', sender='asasd@asdasd.com'))
        self.assertEqual(r.status_code, 200)
        self.assertTrue(str(r.content).find('Form validated') > 0)

    @unittest.skipUnless(django.VERSION < (1, 11), "Test only for Django < 1.11")
    def test_autocomplete_off_django_110(self):
        r = self.client.get(reverse('ecaptcha-test'))
        ecaptcha_input = ('<input type="text" name="ecaptcha_1" autocomplete="off" spellcheck="false" autocorrect="off" '
                         'autocapitalize="off" id="id_ecaptcha_1" />')
        self.assertContains(r, ecaptcha_input, html=True)

    @unittest.skipIf(django.VERSION < (1, 11), "Test only for Django >= 1.11")
    def test_autocomplete_off(self):
        r = self.client.get(reverse('ecaptcha-test'))
        ecaptcha_input = ('<input type="text" name="ecaptcha_1" autocomplete="off" spellcheck="false" autocorrect="off" '
                         'autocapitalize="off" id="id_ecaptcha_1" required />')
        self.assertContains(r, ecaptcha_input, html=True)

    def test_autocomplete_not_on_hidden_input(self):
        r = self.client.get(reverse('ecaptcha-test'))
        self.assertFalse('autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" type="hidden" name="ecaptcha_0"' in six.text_type(r.content))
        self.assertFalse('autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" id="id_ecaptcha_0" name="ecaptcha_0" type="hidden"' in six.text_type(r.content))

    def test_transparent_background(self):
        __current_test_mode_setting = settings.CAPTCHA_BACKGROUND_COLOR
        settings.CAPTCHA_BACKGROUND_COLOR = "transparent"
        for key in [store.hashkey for store in six.itervalues(self.stores)]:
            response = self.client.get(reverse('ecaptcha-image', kwargs=dict(key=key)))
            self.assertEqual(response.status_code, 200)
            self.assertTrue(response.has_header('content-type'))
            self.assertEqual(response._headers.get('content-type'), ('Content-Type', 'image/png'))

        settings.CAPTCHA_BACKGROUND_COLOR = __current_test_mode_setting

    def test_expired_ecaptcha_returns_410(self):
        for key in [store.hashkey for store in six.itervalues(self.stores)]:
            response = self.client.get(reverse('ecaptcha-image', kwargs=dict(key=key)))
            self.assertEqual(response.status_code, 200)
            ECaptchaStore.objects.filter(hashkey=key).delete()
            response = self.client.get(reverse('ecaptcha-image', kwargs=dict(key=key)))
            self.assertEqual(response.status_code, 410)

    def test_id_prefix(self):
        r = self.client.get(reverse('ecaptcha-test-id-prefix'))
        self.assertTrue('<label for="form1_id_ecaptcha1_1">ECaptcha1:</label>' in six.text_type(r.content))
        self.assertTrue('id="form1_id_ecaptcha1_1"' in six.text_type(r.content))
        self.assertTrue('<label for="form2_id_ecaptcha2_1">ECaptcha2:</label>' in six.text_type(r.content))
        self.assertTrue('id="form2_id_ecaptcha2_1"' in six.text_type(r.content))

    def test_image_size(self):
        __current_test_mode_setting = settings.CAPTCHA_IMAGE_SIZE
        for key in [store.hashkey for store in six.itervalues(self.stores)]:
            settings.CAPTCHA_IMAGE_SIZE = (201, 97)
            response = self.client.get(reverse('ecaptcha-image', kwargs=dict(key=key)))
            self.assertEqual(response.status_code, 200)
            self.assertTrue(response.has_header('content-type'))
            self.assertEqual(response._headers.get('content-type'), ('Content-Type', 'image/png'))
            self.assertEqual(Image.open(StringIO(response.content)).size, (201, 97))

        settings.CAPTCHA_IMAGE_SIZE = __current_test_mode_setting

    def test_multiple_fonts(self):
        vera = os.path.join(os.path.dirname(__file__), '..', 'fonts', 'Vera.ttf')
        __current_test_mode_setting = settings.CAPTCHA_FONT_PATH
        settings.CAPTCHA_FONT_PATH = vera

        for key in [store.hashkey for store in six.itervalues(self.stores)]:
            response = self.client.get(reverse('ecaptcha-image', kwargs=dict(key=key)))
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response._headers.get('content-type'), ('Content-Type', 'image/png'))

        settings.CAPTCHA_FONT_PATH = [vera, vera, vera]
        for key in [store.hashkey for store in six.itervalues(self.stores)]:
            response = self.client.get(reverse('ecaptcha-image', kwargs=dict(key=key)))
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response._headers.get('content-type'), ('Content-Type', 'image/png'))

        settings.CAPTCHA_FONT_PATH = False
        for key in [store.hashkey for store in six.itervalues(self.stores)]:
            try:
                response = self.client.get(reverse('ecaptcha-image', kwargs=dict(key=key)))
                self.fail()
            except ImproperlyConfigured:
                pass

        settings.CAPTCHA_FONT_PATH = __current_test_mode_setting

    def test_template_overrides(self):
        __current_test_mode_setting = settings.CAPTCHA_IMAGE_TEMPLATE
        __current_field_template = settings.CAPTCHA_FIELD_TEMPLATE
        settings.CAPTCHA_IMAGE_TEMPLATE = 'ecaptcha_test/image.html'
        settings.CAPTCHA_FIELD_TEMPLATE = 'ecaptcha/field.html'

        for urlname in ('ecaptcha-test', 'ecaptcha-test-model-form'):
            settings.CAPTCHA_CHALLENGE_FUNCT = 'ecaptcha.tests.trivial_challenge'
            r = self.client.get(reverse(urlname))
            self.assertTrue('ecaptcha-template-test' in six.text_type(r.content))
        settings.CAPTCHA_IMAGE_TEMPLATE = __current_test_mode_setting
        settings.CAPTCHA_FIELD_TEMPLATE = __current_field_template

    def test_math_challenge(self):
        __current_test_mode_setting = settings.CAPTCHA_MATH_CHALLENGE_OPERATOR
        settings.CAPTCHA_MATH_CHALLENGE_OPERATOR = '~'
        helper = 'ecaptcha.helpers.math_challenge'
        challenge, response = settings._callable_from_string(helper)()

        while settings.CAPTCHA_MATH_CHALLENGE_OPERATOR not in challenge:
            challenge, response = settings._callable_from_string(helper)()

        self.assertEqual(response, text_type(eval(challenge.replace(settings.CAPTCHA_MATH_CHALLENGE_OPERATOR, '*')[:-1])))
        settings.CAPTCHA_MATH_CHALLENGE_OPERATOR = __current_test_mode_setting

    def test_get_from_pool(self):
        __current_test_get_from_pool_setting = settings.CAPTCHA_GET_FROM_POOL
        __current_test_get_from_pool_timeout_setting = settings.CAPTCHA_GET_FROM_POOL_TIMEOUT
        __current_test_timeout_setting = settings.CAPTCHA_TIMEOUT
        settings.CAPTCHA_GET_FROM_POOL = True
        settings.CAPTCHA_GET_FROM_POOL_TIMEOUT = 5
        settings.CAPTCHA_TIMEOUT = 90
        ECaptchaStore.objects.all().delete()  # Delete objects created during SetUp
        POOL_SIZE = 10
        ECaptchaStore.create_pool(count=POOL_SIZE)
        self.assertEqual(ECaptchaStore.objects.count(), POOL_SIZE)
        pool = ECaptchaStore.objects.values_list('hashkey', flat=True)
        random_pick = ECaptchaStore.pick()
        self.assertIn(random_pick, pool)
        # pick() should not create any extra ecaptcha
        self.assertEqual(ECaptchaStore.objects.count(), POOL_SIZE)
        settings.CAPTCHA_GET_FROM_POOL = __current_test_get_from_pool_setting
        settings.CAPTCHA_GET_FROM_POOL_TIMEOUT = __current_test_get_from_pool_timeout_setting
        settings.CAPTCHA_TIMEOUT = __current_test_timeout_setting

    def test_ecaptcha_create_pool(self):
        ECaptchaStore.objects.all().delete()  # Delete objects created during SetUp
        POOL_SIZE = 10
        management.call_command('ecaptcha_create_pool', pool_size=POOL_SIZE, verbosity=0)
        self.assertEqual(ECaptchaStore.objects.count(), POOL_SIZE)

    def test_empty_pool_fallback(self):
        __current_test_get_from_pool_setting = settings.CAPTCHA_GET_FROM_POOL
        settings.CAPTCHA_GET_FROM_POOL = True
        ECaptchaStore.objects.all().delete()  # Delete objects created during SetUp
        with LogCapture() as l:
            ECaptchaStore.pick()
        l.check(('ecaptcha.models', 'ERROR', "Couldn't get a ecaptcha from pool, generating"),)
        self.assertEqual(ECaptchaStore.objects.count(), 1)
        settings.CAPTCHA_GET_FROM_POOL = __current_test_get_from_pool_setting


def trivial_challenge():
    return 'trivial', 'trivial'
