# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-01 13:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_auto_20180325_1139'),
    ]

    operations = [
        migrations.AddField(
            model_name='districtbyagegroup',
            name='Capital',
            field=models.CharField(default='', max_length=138),
            preserve_default=False,
        ),
    ]
