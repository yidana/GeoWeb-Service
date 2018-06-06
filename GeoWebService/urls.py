"""
Definition of urls for GeoWebService.
"""

from datetime import datetime
from django.conf.urls import url
import django.contrib.auth.views
from django.conf import settings
from django.conf.urls.static import static

import app.forms
import app.views

# Uncomment the next lines to enable the admin:
from django.conf.urls import include
from django.contrib import admin
admin.autodiscover()
admin.site.site_title="GeoWeb Admin"
admin.site.site_header = "GeoWeb Admin"

urlpatterns = [
    # Examples:
    
    url(r'^$', app.views.home, name='home'),
    url(r'^contact$', app.views.contact, name='contact'),
    url(r'^about', app.views.about, name='about'),
    url(r'^home$', app.views.home, name='home'),
    url(r'^geoweb$', app.views.geoweb, name='geoweb'),
    url(r'^downloadcenter$', app.views.downloadcenter, name='downloadcenter'),
    url(r'^mail$',app.views.mail, name='mail'),
    url(r'^single$',app.views.single, name='single'),
    

    # Uncomment the admin/doc line below to enable admin documentation:
    #url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', admin.site.urls),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
