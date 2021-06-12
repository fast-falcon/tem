import datetime
from ecaptcha.models import ECaptchaStore


def create(challenge, response):
    return ECaptchaStore.objects.create(challenge=challenge, response=response)


def remove_expired():
    ECaptchaStore.remove_expired()


def get(hashkey):
    try:
        return ECaptchaStore.objects.get(hashkey=hashkey, expiration__gt=datetime.datetime.now())
    except ECaptchaStore.DoesNotExist:
        return None


def check(response, hashkey):
    store = ECaptchaStore.objects.get(response=response, hashkey=hashkey, expiration__gt=datetime.datetime.now())
    store.delete()