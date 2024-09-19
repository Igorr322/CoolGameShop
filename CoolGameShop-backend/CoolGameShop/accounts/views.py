from rest_framework import generics
from .serializers import RegisterSerializer
from rest_framework.response import Response


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


# class RegisterAPIView(generics.CreateAPIView):
#     serializer_class = UserSerializer


# class UserCreateView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
