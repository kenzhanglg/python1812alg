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

    url(r'^changecartselect/$', views.changecartselect, name='changecartselect'),
url(r'^changecartselectall/$', views.changecartselectall,
    name='changecartselectall'),

    url(r'^addnum/$', views.addnum,name='addnum'),
    url(r'^subnum/$', views.subnum,name='subnum'),
    url(r'^delcart/$', views.delcart, name='delcart'),
    url(r'^delcartall/$', views.delcartall, name='delcartall'),

    url(r'^generateorder/$', views.generateorder, name='generateorder'),
    url(r'orderlist/$', views.orderlist, name='orderlist'),  # 订单列表
    url(r'^orderdetail/(?P<identifier>[\d.]+)/$', views.orderdetail,
        name='orderdetail'),

    url(r'^returnurl/$', views.returnurl, name='returnurl'),
    url(r'^appnotifyurl/$', views.appnotifyurl, name='appnotifyurl'),
    url(r'^pay/$', views.pay, name='pay'),

]