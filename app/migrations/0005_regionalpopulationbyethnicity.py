# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-01-18 23:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20180118_1510'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegionalPopulationByEthnicity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('REGION', models.CharField(max_length=125, verbose_name='Region')),
                ('Capital', models.CharField(max_length=125)),
                ('Total', models.IntegerField()),
                ('Akan', models.FloatField(verbose_name='% Akan')),
                ('Ga_Dangme', models.FloatField(verbose_name='% Ga-Dangme')),
                ('Ewe', models.FloatField(verbose_name='% Ewe')),
                ('Guan', models.FloatField(verbose_name='% Guan')),
                ('Gurma', models.FloatField(verbose_name='% Gurma')),
                ('Mole_Dagbani', models.FloatField(verbose_name='% Mole Dagbani')),
                ('Grusi', models.FloatField(verbose_name='% Grusi')),
                ('Mande', models.FloatField(verbose_name='% Mande')),
                ('Other', models.FloatField(verbose_name='% Other')),
                ('Akan_population', models.IntegerField(verbose_name='Akan')),
                ('Ga_Dangme_population', models.IntegerField(verbose_name='Ga-Dangbe')),
                ('pop_Ewe', models.IntegerField(verbose_name='Ewe')),
                ('Guan_population', models.IntegerField(verbose_name='Guan')),
                ('Gurma_population', models.IntegerField(verbose_name='Gurma')),
                ('Mole_Dagbani_population', models.IntegerField(verbose_name='Mole Dagbani')),
                ('Grusi_population', models.IntegerField(verbose_name='Grusi')),
                ('Mande_population', models.IntegerField(verbose_name='Mande')),
                ('Other_population', models.IntegerField(verbose_name='Other')),
            ],
        ),
    ]