# Generated by Django 3.1.5 on 2021-06-06 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='quicklist',
            name='track_code',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='quicklist',
            name='date',
            field=models.DateTimeField(auto_created=True, auto_now_add=True, max_length=50, null=True),
        ),
    ]
