# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import TweetLocation

from django.shortcuts import render

# Create your views here.
@api_view(['GET'])
def get_summary(request):
    username = request.query_params['username']
    entrys = TweetLocation.objects.filter(username=username)
    summary = {}
    latest_filename = entrys[-1]
    # get S3 data by latest_filename

    return Response(summary)


@api_view(['POST'])
def add_recording_location(request):
    res = request.data
    entry = TweetLocation(
        username=res['username'],
        filename=res['filename'],
        location=res['location'],
    )
    entry.save()
    return Response(res)
