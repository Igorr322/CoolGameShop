from django.contrib.auth.models import User
from rest_framework import serializers
from . models import CustomUser


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email']
        )
        return user


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['username', 'email', 'password']
#         extra_kwargs = {'password': {'write_only': True}}
#
#     # def create(self, validated_data):
#     #     user = User(**validated_data)
#     #     user.set_password(validated_data['password'])
#
#     def create(self, validated_data):
#         user = User(**validated_data)
#         user.set_password(validated_data['password'])  # Установка хэшированного пароля
#         user.save()
#         return user


# from .models import User
#
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'name', 'email', 'password']
#         extra_kwargs = {'password': {'write_only': True}}
#
#     def create(self, validated_data):
#         user = User(
#             email=validated_data['email'],
#             name=validated_data['name'],
#         )
#         user.set_password(validated_data['password'])
#         user.save()
#         return user