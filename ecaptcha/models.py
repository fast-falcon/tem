from ecaptcha.conf import settings as ecaptcha_settings
from django.db import models
from django.utils import timezone
import datetime
import logging

from ecaptcha.helpers import get_hashkey
from .backends import backend
# # Heavily based on session key generation in Django
# # Use the system (hardware-based) random number generator if it exists.
# if hasattr(random, 'SystemRandom'):
#     randrange = random.SystemRandom().randrange
# else:
#     randrange = random.randrange
# MAX_RANDOM_KEY = 18446744073709551616     # 2 << 63

logger = logging.getLogger(__name__)


class ECaptchaStore(models.Model):
    challenge = models.CharField(blank=False, max_length=32)
    response = models.CharField(blank=False, max_length=32)
    hashkey = models.CharField(blank=False, max_length=40, unique=True)
    expiration = models.DateTimeField(blank=False)

    def save(self, *args, **kwargs):
        self.response = self.response.lower()
        if not self.expiration:
            self.expiration = timezone.now() + datetime.timedelta(minutes=int(ecaptcha_settings.CAPTCHA_TIMEOUT))
        if not self.hashkey:
            # key_ = (
            #     smart_text(randrange(0, MAX_RANDOM_KEY)) +
            #     smart_text(time.time()) +
            #     smart_text(self.challenge, errors='ignore') +
            #     smart_text(self.response, errors='ignore')
            # ).encode('utf8')
            # self.hashkey = hashlib.sha1(key_).hexdigest()
            # del(key_)
            self.hashkey = get_hashkey(self.challenge, self.response)
        super(ECaptchaStore, self).save(*args, **kwargs)

    def __str__(self):
        return self.challenge

    def remove_expired(cls):
        cls.objects.filter(expiration__lte=timezone.now()).delete()
    remove_expired = classmethod(remove_expired)

    @classmethod
    def generate_key(cls, generator=None):
        challenge, response = ecaptcha_settings.get_challenge(generator)()
        # store = cls.objects.create(challenge=challenge, response=response)
        store = backend.create(challenge=challenge, response=response)

        return store.hashkey

    @classmethod
    def pick(cls):
        if not ecaptcha_settings.CAPTCHA_GET_FROM_POOL:
            return cls.generate_key()

        def fallback():
            logger.error("Couldn't get a ecaptcha from pool, generating")
            return cls.generate_key()

        # Pick up a random item from pool
        minimum_expiration = timezone.now() + datetime.timedelta(minutes=int(ecaptcha_settings.CAPTCHA_GET_FROM_POOL_TIMEOUT))
        store = cls.objects.filter(expiration__gt=minimum_expiration).order_by('?').first()

        return (store and store.hashkey) or fallback()

    @classmethod
    def create_pool(cls, count=1000):
        assert count > 0
        while count > 0:
            cls.generate_key()
            count -= 1
