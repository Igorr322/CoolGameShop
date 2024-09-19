from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission


class CustomUser(AbstractUser):
    # Ваши дополнительные поля

    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',  # Убедитесь, что название уникально
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups'
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',  # Убедитесь, что название уникально
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions'
    )


# class CustomUser(AbstractUser):
#     phone_number = models.CharField(max_length=15, blank=True, null=True)
#
#     def __str__(self):
#         return self.username


# class UserManager(BaseUserManager):
#     def create_user(self, email, name, password=None):
#         if not email:
#             raise ValueError('Users must have an email address')
#         email = self.normalize_email(email)
#         user = self.model(email=email, name=name)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user
#
#     def create_superuser(self, email, name, password=None):
#         user = self.create_user(email, name, password)
#         user.is_staff = True
#         user.is_superuser = True
#         user.save(using=self._db)
#         return user
#
#
# class User(AbstractBaseUser, PermissionsMixin):
#     name = models.CharField(max_length=255)
#     email = models.EmailField(unique=True)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)
#
#     objects = UserManager()
#
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['name']
#
#     def __str__(self):
#         return self.email