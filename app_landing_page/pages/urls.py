from django.conf.urls import patterns, url
from django.views.generic import TemplateView
from pages import views

urlpatterns = patterns(
	'pages.views',
    url('^$', TemplateView.as_view(template_name='index.html')),
    url(r'submit_email/$', views.submit_email)
)