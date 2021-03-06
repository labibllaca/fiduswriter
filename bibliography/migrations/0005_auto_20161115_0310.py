# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-11-15 09:10
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bibliography', '0004_remove_entry_entry_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='entryfieldalias',
            name='field_alias',
        ),
        migrations.RemoveField(
            model_name='entrytype',
            name='eitheror_fields',
        ),
        migrations.RemoveField(
            model_name='entrytype',
            name='optional_fields',
        ),
        migrations.RemoveField(
            model_name='entrytype',
            name='required_fields',
        ),
        migrations.RemoveField(
            model_name='entrytypealias',
            name='type_alias',
        ),
        migrations.DeleteModel(
            name='LocalizationKey',
        ),
        migrations.DeleteModel(
            name='TexSpecialChar',
        ),
        migrations.DeleteModel(
            name='EntryField',
        ),
        migrations.DeleteModel(
            name='EntryFieldAlias',
        ),
        migrations.DeleteModel(
            name='EntryType',
        ),
        migrations.DeleteModel(
            name='EntryTypeAlias',
        ),
    ]
