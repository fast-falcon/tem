from django.core.management.base import BaseCommand
from django.db import transaction
from ecaptcha.models import ECaptchaStore


class Command(BaseCommand):

    help = "Create a pool of random ecaptchas."

    def add_arguments(self, parser):
        parser.add_argument('--pool-size',
                            type=int,
                            default=1000,
                            help='Number of new ecaptchas to create, default=1000')
        parser.add_argument('--cleanup-expired',
                            action='store_true',
                            default=True,
                            help='Cleanup expired ecaptchas after creating new ones')

    @transaction.atomic()
    def handle(self, **options):
        verbose = int(options.get('verbosity'))
        count = options.get('pool_size')
        ECaptchaStore.create_pool(count)
        verbose and self.stdout.write('Created %d new ecaptchas\n' % count)
        options.get('cleanup_expired') and ECaptchaStore.remove_expired()
        options.get('cleanup_expired') and verbose and self.stdout.write('Expired ecaptchas cleaned up\n')
