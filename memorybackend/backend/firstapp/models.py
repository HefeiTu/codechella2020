# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django import forms
from djongo import models

# Create your models here.
class TweetLocation(models.Model):
    username = models.CharField(max_length=200)
    filename = models.CharField(max_length=200)
    location = models.CharField(max_length=300)


