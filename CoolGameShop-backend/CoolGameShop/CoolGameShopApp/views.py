from django.shortcuts import render
from django.http import HttpResponse
from .models import Game
from rest_framework import generics
from . serializers import GameSerializer


class GameAPIView(generics.ListAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
