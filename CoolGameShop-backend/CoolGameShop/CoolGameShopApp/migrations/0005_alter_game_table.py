# Generated by Django 5.1.1 on 2024-09-10 14:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('CoolGameShopApp', '0004_rename_games_game_alter_game_table'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='game',
            table='gameshop',
        ),
    ]
