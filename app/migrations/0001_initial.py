# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-01-18 22:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DistrictPopulation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('District', models.CharField(max_length=100)),
                ('Capital', models.CharField(max_length=100)),
                ('Total_Population', models.IntegerField(max_length=100)),
                ('Male', models.IntegerField(max_length=100)),
                ('Female', models.IntegerField(max_length=100)),
                ('Region', models.CharField(max_length=100)),
            ],
        ),
    ]
