from django.shortcuts import render
from django.http import HttpResponse
from .models import Game
from rest_framework import generics
from . serializers import GameSerializer


# def show_all(request):
#     games = Game.objects.all()
#     return HttpResponse("URL 1")


class GameAPIView(generics.ListAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
