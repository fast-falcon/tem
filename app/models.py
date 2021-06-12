import uuid

from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="profile")


class Report(models.Model):
    report_title = models.CharField(max_length=50)
    report_txt = models.CharField(max_length=256)
    seen = models.BooleanField(default=False)

    def __str__(self):
        return self.report_title


class QuickList(models.Model):
    title = models.CharField(max_length=50, null=True)
    explain = models.CharField(max_length=150, null=True)
    date = models.DateTimeField(max_length=50, null=True, auto_created=True, auto_now_add=True)
    track_code = models.CharField(max_length=50, null=True)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        self.track_code = uuid.uuid4().hex
        instance = super(QuickList, self).save()
        return instance


class QuickListItems(models.Model):
    MEASUREMENT = (
        (0, "عدد"),
        (1, "بسته"),
        (2, "کیلوگرم"),
        (3, "گرم")
    )
    quick_list = models.ForeignKey(QuickList, on_delete=models.CASCADE, related_name="items")
    name = models.CharField(max_length=40)
    explain_item = models.CharField(max_length=500)
    num = models.CharField(max_length=25)
    measurement = models.IntegerField(default=0, choices=MEASUREMENT)


class Items(models.Model):
    parent = models.ForeignKey('Items', null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=200, blank=False, null=False)

