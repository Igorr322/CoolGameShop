from django.urls import path
from . import views


urlpatterns = [
    path('games', views.GameAPIView.as_view()),
]