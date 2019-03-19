import hashlib
import random
import time
from urllib.parse import parse_qs

from django.core.cache import cache
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

from app.alipay import alipay
from app.models import Wheel, New_goods, User, Goods, Cart, Order, \
    OrderGoods


def index(request):
    wheels = Wheel.objects.all()
    new_goods  = New_goods.objects.all()
    goods = Goods.objects.all()

    response_data = {
        'wheels':wheels,
        'new_goods':new_goods,
        'user': None,
        'goods':goods,
    }

    token = request.session.get('token')
    userid = cache.get(token)
    if userid:
        user = User.objects.get(pk=userid)
        carts = Cart.objects.filter(user=user)
        carts_num = carts.count()
        response_data['user'] = user
        response_data['carts_num'] = carts_num
    return render(request,'index.html',context=response_data)


def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        phone = request.POST.get('phone')
        password = request.POST.get('password')

        users = User.objects.filter(phone=phone)
        if users.exists():  # 存在
            user = users.first()
            if user.password == password:    # 验证通过
                # 更新token
                token = generate_token()
                # 状态保持
                cache.set(token, user.id, 60*60*24*3)
                # 传递客户端
                request.session['token'] = token

                return redirect('alg:index')
            else:   # 密码错误
                return render(request, 'login.html', context={'p_err': '密码错误'})
        else:   # 不存在
            return render(request, 'login.html', context={'u_err':'用户不存在'})

def generate_token():
    temp = str(time.time()) + str(random.random())
    md5 = hashlib.md5()
    md5.update(temp.encode('utf-8'))
    return md5.hexdigest()

def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        # 获取数据
        phone = request.POST.get('phone')
        name = request.POST.get('name')
        passoword = request.POST.get('password')

        # 存入数据库
        user = User()
        user.phone = phone
        user.password = passoword
        user.name = name
        user.save()

        # 状态保持
        token = generate_token()
        cache.set(token, user.id, 60*60*24*3)

        request.session['token'] = token

        return redirect('alg:index')

def logout(request):
    request.session.flush()

    return redirect('alg:index')

def checkphone(request):
    phone = request.GET.get('phone')

    # 去数据库中查找
    users = User.objects.filter(phone=phone)
    if users.exists():  # 账号被占用
        response_data = {
            'status': 0,  # 1可用， 0不可用
            'msg': '账号被占用!'
        }
    else:   # 账号可用
        response_data = {
            'status':1,  # 1可用， 0不可用
            'msg': '账号可用!'
        }

    # 返回JSON数据
    return JsonResponse(response_data)


def goodslist(request,dealerid):

    goods = Goods.objects.filter(dealerid=dealerid)

    response_data = {
        'goods':goods,
        'user':None
    }
    # 获取购物车信息
    token = request.session.get('token')
    userid = cache.get(token)

    if userid:
        user = User.objects.get(pk=userid)
        carts = user.cart_set.all()
        carts_num = carts.count()
        response_data['carts'] = carts
        response_data['user'] = user
        response_data['carts_num'] = carts_num
    return render(request,'goodslist.html',context=response_data)


def cart(request):

    response_data = {
        'iscart':None
    }
    token = request.session.get('token')
    userid = cache.get(token)
    if userid:
        user = User.objects.get(pk=userid)
        goodsid = request.GET.get('goodid')
        carts = user.cart_set.all()
        response_data['carts'] = carts
        response_data['user'] = user
        response_data['goodsid'] = goodsid
        if carts.exists():
            iscart = True
        else:
            iscart = False
        isall = True
        for cart in carts:
            if not cart.isselect:
                isall = False
        response_data['iscart'] = iscart
        response_data['isall'] = isall
    else:
        response_data['user'] = None

    return render(request,'cart.html',context=response_data)


def addtocart(request):
    token = request.session.get('token')
    response_data = {}
    if token:
        userid = cache.get(token)
        if userid:  # 已经登录
            user = User.objects.get(pk=userid)
            goodsid = request.GET.get('goodid')
            color = request.GET.get('color')
            size = request.GET.get('size')
            number = request.GET.get('number')
            goods = Goods.objects.get(pk=goodsid)
            carts = Cart.objects.filter(user=user).filter(goods=goods)

            if carts.exists():
                carts1 = carts.filter(color=color).filter(size=size)
                if carts1.exists():
                    cart = carts1.first()
                    cart.number = int(number) + cart.number
                    cart.save()
                else:
                    cart = Cart()
                    cart.goods = goods
                    cart.user = user
                    cart.number = number
                    cart.size = size
                    cart.color = color
                    cart.save()

            else:
                cart = Cart()
                cart.goods = goods
                cart.user = user
                cart.number = number
                cart.size = size
                cart.color = color
                cart.save()
            response_data['status'] = 1
            response_data['msg'] = '添加 购物车成功'

            return  JsonResponse(response_data)
    else:
        response_data['status'] = -1
        response_data['msg'] = '请登录后操作'

        return JsonResponse(response_data)

def changecartselect(request):
    cartid = request.GET.get('cartid')

    cart = Cart.objects.get(pk=cartid)
    cart.isselect = not cart.isselect
    cart.save()

    response_data = {
        'msg': '状态修改成功',
        'status': 1,
        'isselect': cart.isselect
    }

    return JsonResponse(response_data)


def addnum(request):
    goodsid = request.GET.get('goodsid')
    cartid = request.GET.get('cartid')
    goods = Goods.objects.get(pk=goodsid)
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)
    cart = Cart.objects.filter(user=user).filter(goods=goods).get(
        pk=cartid)
    cart.number = cart.number + 1
    cart.save()
    response_data = {
        'msg': '增加商品成功',
        'status': 1,
    }

    return JsonResponse(response_data)


def subnum(request):
    goodsid = request.GET.get('goodsid')
    cartid = request.GET.get('cartid')
    goods = Goods.objects.get(pk=goodsid)
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)
    cart = Cart.objects.filter(user=user).filter(goods=goods).get(
        pk=cartid)
    cart.number = cart.number - 1
    cart.save()

    response_data = {
        'msg': '减少商品成功',
        'status': 1,
        'cart_number': cart.number
    }

    return JsonResponse(response_data)


def delcart(request):
    cartid = request.GET.get('cartid')
    cart = Cart.objects.get(pk=cartid)
    cart.delete()
    # cart.save()
    response_data = {
        'msg':'删除成功',
        'status':1
    }

    return JsonResponse(response_data)


def delcartall(request):
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)
    carts = Cart.objects.filter(user=user)
    carts.delete()
    # for cart in carts:
    #     cart.delete()
    response_data = {
        'msg':'删除购车成功',
        'status':1,
    }

    return JsonResponse(response_data)


def changecartselectall(request):
        isall = request.GET.get('isall')
        token = request.session.get('token')
        userid = cache.get(token)
        user = User.objects.get(pk=userid)
        carts = user.cart_set.all()

        if isall == 'true':
            isall = True
        else:
            isall = False

        for cart in carts:
            cart.isselect = isall
            cart.save()

        response_data = {
            'msg': '全选/取消全选 成功',
            'status': 1
        }

        return JsonResponse(response_data)

def generate_identifier():
    temp = str(time.time()) + str(random.randrange(1000,10000))
    return temp


def generateorder(request):
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)
    order = Order()
    order.user = user
    order.identifier = generate_identifier()
    order.save()
    carts = user.cart_set.filter(isselect=True)
    for cart in carts:
        orderGoods = OrderGoods()
        orderGoods.order = order
        orderGoods.goods = cart.goods
        orderGoods.number = cart.number
        orderGoods.save()
        cart.delete()

    return render(request, 'genrateorder.html',
                  context={'order': order,'user':user})

def orderlist(request):
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)

    orders = user.order_set.all()

    return render(request, 'orderlist.html', context={
        'orders':orders,'user':user})

def orderdetail(request, identifier):
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)

    order = Order.objects.filter(identifier=identifier).first()

    return render(request, 'orderdetail.html', context={'order': order,
                                                        'user':user})


def returnurl(request):
    return redirect('alg:index')


@csrf_exempt
def appnotifyurl(request):
    if request.method == 'POST':
        body_str = request.body.decode('utf-8')
        post_data = parse_qs(body_str)
        post_dic = {}
        for k,v in post_data.items():
            post_dic[k] = v[0]

        out_trade_no = post_dic['out_trade_no']
        Order.objects.filter(identifier=out_trade_no).update(status=1)
    return JsonResponse({'msg':'success'})


def pay(request):
    orderid = request.GET.get('orderid')
    order = Order.objects.get(pk=orderid)
    sum = 0
    for orderGoods in order.ordergoods_set.all():
        sum += orderGoods.goods.newprice * orderGoods.number

    data = alipay.direct_pay(
        subject='奥莱购 购物成功  Mar',
        out_trade_no=order.identifier,
        total_amount=str(sum),
        return_url='http://47.112.107.146/returnurl/'
    )
    alipay_url = 'https://openapi.alipaydev.com/gateway.do?{data}'.format(data=data)

    response_data = {
        'msg': '调用支付接口',
        'alipayurl': alipay_url,
        'status': 1
    }

    return JsonResponse(response_data)