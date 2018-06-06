# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-03-25 18:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_auto_20180325_1114'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegionalPopulationReligiousAffiliation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Region', models.CharField(max_length=128, unique=True)),
                ('Total', models.IntegerField()),
                ('per_No_Religion', models.FloatField(verbose_name='% No Religion')),
                ('per_Catholic', models.FloatField(verbose_name='% Catholic')),
                ('per_Protestant', models.FloatField(verbose_name='% Protestant')),
                ('per_Pentecostal_Charismatic', models.FloatField(verbose_name='% Pentecostal/Charismatic')),
                ('per_Other_Christian', models.FloatField(verbose_name='% Other Christian')),
                ('per_Islam', models.FloatField(verbose_name='% Islam')),
                ('per_Traditionalist', models.FloatField(verbose_name='% Traditionalist')),
                ('per_Other', models.FloatField(verbose_name='% Other')),
                ('pop_No_Religion', models.IntegerField(verbose_name='No Religion')),
                ('pop_Catholic', models.IntegerField(verbose_name='Catholic')),
                ('pop_Protestant', models.IntegerField(verbose_name='Protestant')),
                ('pop_Pentecostal_Charismatic', models.IntegerField(verbose_name='Pentecostal/Charismatic')),
                ('pop_Other_Christian', models.IntegerField(verbose_name='Other Christian')),
                ('pop_Islam', models.IntegerField(verbose_name='Islam')),
                ('pop_Traditionalist', models.IntegerField(verbose_name='Traditionalist')),
                ('pop_Other', models.IntegerField(verbose_name='Other')),
            ],
            options={
                'verbose_name_plural': 'Regional Population By Religious Affiliation',
            },
        ),
        migrations.DeleteModel(
            name='RegionalPopulationByReligiousAffiliation',
        ),
    ]