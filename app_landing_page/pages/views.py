from django.shortcuts import render
from django.http import HttpResponse
# from pages.forms import EmailForm
from pages.models import Email

import json

def submit_email(request):
    print 'ayo technology'
    response_data = {}
    if request.method == 'POST':
        # form = EmailForm(request.POST)
        form_email = request.POST.get('email')
        email = Email(address=form_email)
        email.save()

        response_data['result'] = 'Submit email successful!'

        return HttpResponse(          
            json.dumps(response_data),
            content_type="application/json"
        )

    else:
        return HttpResponse(
            json.dumps({"nothing to see": "this isn't happening"}),
            content_type="application/json"
        )





