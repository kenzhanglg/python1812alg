import hashlib
import random
import time

from django.core.cache import cache
from django.http import JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from app.models import Wheel, Sale_goods, New_goods, User


def index(request):
    wheels = Wheel.objects.all()
    sale_goods = Sale_goods.objects.all()
    new_goods  = New_goods.objects.all()

    response_data = {
        'wheels':wheels,
        'sale_goods':sale_goods,
        'new_goods':new_goods,
        'user': None
    }

    token = request.session.get('token')
    userid = cache.get(token)
    if userid:
        user = User.objects.get(pk=userid)
        response_data['user'] = user
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


def goodslist(request):
    return render(request,'goodslist.html')


def cart(request):
    return render(request,'cart.html')