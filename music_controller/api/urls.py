from django.urls import path
from .views import RoomView, CreateRoom, GetRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoom.as_view()),
    path('get-room', GetRoom.as_view())
]