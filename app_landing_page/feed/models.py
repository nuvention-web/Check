from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
	start_time = models.DateField(auto_now=True)
	end_time = models.DateField()
	user = models.CharField(maxlength=15)
	text = models.TextField(maxlength=140)

	def __unicode__(self):
		return self.text
