from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^login/$', views.login, name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^checkphone/$', views.checkphone, name='checkphone'),
    url(r'^goodslist/(?P<dealerid>\d+)/$', views.goodslist, name='goodslist'),
    url(r'^goodslist/(?P<dealerid>\d+)/$', views.goodslist,
        name='good'),
    url(r'^cart/$', views.cart, name='cart'),
    url(r'^addtocart/$', views.addtocart, name='addtocart'),


]