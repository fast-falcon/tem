from ecaptcha.conf import settings
from django.utils.module_loading import import_module


def get_backend():
    return import_module(settings.CAPTCHA_BACKEND)


backend = get_backend()
