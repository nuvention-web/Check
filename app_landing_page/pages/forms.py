from django import forms

class EmailForm(forms.Form):
	email = forms.CharField(label='you@example.com', max_length=100)
