from rest_framework.viewsets import ModelViewSet
from ..models import Post
from .serializers import PostSerializer
from django.http import JsonResponse

from django.http import JsonResponse

class PostViewSet(ModelViewSet):
    queryset=Post.objects.all()
    serializer_class=PostSerializer

