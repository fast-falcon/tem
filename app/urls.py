from django.urls import path

from . import views
from .views import login_tem
from django.contrib import admin

app_name = 'app'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('reports', views.reports, name='reports'),
    path('send_report', views.send_report, name='send_report'),
    path('quick_list', views.quick_list, name='quick_list'),
    path('quick_list_save', views.quick_list_save, name='quick_list_save'),
    path('kala_quick_list/<str:track_code>/', views.kala_quick_list, name='kala_quick_list'),
    path('login/', login_tem, name="login"),
    path('logout/', views.logout_tem, name="logout"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("test/", views.test)
]
