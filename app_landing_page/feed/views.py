from django.shortcuts import render
from django.models import Event
import datetime


def get_feed(request):
	# delete events older than 3 hours
	current_time = datetime.datetime.now()
	events = Event.objects.filter(end_time>current_time)

	return render(request, 'feed.html', locals())

def create_event(request):
	if request.method == 'POST':
		name = reqest.POST['name']
		event = request.POST['']



