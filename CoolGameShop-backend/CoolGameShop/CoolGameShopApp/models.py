from django.db import models


class Game(models.Model):
    name = models.TextField('Название')
    link = models.TextField('Ссылка')
    price = models.DecimalField(max_digits=12, decimal_places=2)
    description = models.TextField('Описание')
    link_img = models.TextField('Картинка')

    class Meta:
        db_table = 'game'

    def __str__(self):
        return f"{self.id} | {self.name}  |   {self.link}. | Цена: {self.price} р |  {self.description} "
