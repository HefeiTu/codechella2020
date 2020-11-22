# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Applicant
from .models import Comment

from django.shortcuts import render

# Create your views here.
@api_view(['GET'])
def get_applicant(request):
    contact = request.query_params['contact']
    entrys = Applicant.objects.filter(contact=contact)
    res = 0
    if len(entrys) > 0:
        res = 1
    return Response(res)


@api_view(['POST'])
def add_applicant(request):
    res = request.data
    entry = Applicant(
        name = res['name'],
        education = res['education'],
        contact = res['contact'],
        status = 'Applied',
        rate = 0,
        rate_number = 0,
        comment=[]
    )
    entry.save()
    return Response(res)