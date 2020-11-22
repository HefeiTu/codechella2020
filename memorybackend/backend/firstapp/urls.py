from django.urls import path
from . import views

urlpatterns = [
    path('add-recording-location', views.add_recording_location),
    path('get-applicant', views.get_summary),
]
