from django.conf.urls import patterns, url
from django.views.generic import TemplateView
from feed import views

urlpatterns = patterns(
	'feed.views',
    url(r'feed/$', views.get_feed),
    url(r'feed/create$', views.create_event)
)