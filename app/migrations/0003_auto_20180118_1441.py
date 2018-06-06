# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-01-18 22:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_districtbyagegroup'),
    ]

    operations = [
        migrations.AddField(
            model_name='districtbyagegroup',
            name='Capital',
            field=models.CharField(default='', max_length=138),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='districtpopulation',
            name='Female',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='districtpopulation',
            name='Male',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='districtpopulation',
            name='Total_Population',
            field=models.IntegerField(),
        ),
    ]