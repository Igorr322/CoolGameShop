from django.shortcuts import render
from django.http import HttpResponse
from .models import Games


def show_all(request):
    games = Games.objects.all()
    return HttpResponse("URL 1")
