from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^login/$', views.login, name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^checkphone/$', views.checkphone, name='checkphone'),
    url(r'^goodslist/$', views.goodslist, name='goodslist'),
    url(r'^cart/$', views.cart, name='cart'),

]