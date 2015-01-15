from django.db import models

class Email(models.Model):
	address = models.CharField(max_length=100)

	def __unicode__(self):
		return self.address
