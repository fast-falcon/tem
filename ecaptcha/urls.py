from django.conf.urls import url
from ecaptcha import views

urlpatterns = [
    url(r'image/(?P<key>\w+)/$', views.ecaptcha_image, name='ecaptcha-image', kwargs={'scale': 1}),
    url(r'image/(?P<key>\w+)@2/$', views.ecaptcha_image, name='ecaptcha-image-2x', kwargs={'scale': 2}),
    url(r'audio/(?P<key>\w+).wav$', views.ecaptcha_audio, name='ecaptcha-audio'),
    url(r'refresh/$', views.ecaptcha_refresh, name='ecaptcha-refresh'),
]
