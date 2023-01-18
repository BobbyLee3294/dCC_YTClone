from django.urls import path, include
from comment import views

urlpatterns = [
    path('', views.user_comments),
    path('/all', views.get_comments_by_video_id),
]
