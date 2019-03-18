from django.db import models

# Create your models here.
#基础类
class BaseModel(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    trackid = models.CharField(max_length=20)

    class Meta:
        #抽象类
        abstract = True

#轮播图  模型类
class Wheel(BaseModel):
    class Meta:
        db_table = 'alg_wheel'

#品牌上线  模型类
class New_goods (BaseModel):
    class Meta:
        db_table = 'alg_new_goods'

#品牌logo  模型类
class New_goods_brand (BaseModel):
    class Meta:
        db_table = 'alg_new_goods_brand'

class Goods(models.Model):
    # 商品ID
    productid = models.CharField(max_length=20)
    #主页图片
    smallsrc = models.CharField(max_length=200)
    # 商品详情页图片
    bigsrc1 = models.CharField(max_length=200)
    xxsrc1 = models.CharField(max_length=200)

    bigsrc2 = models.CharField(max_length=200)
    xxsrc2 = models.CharField(max_length=200)

    bigsrc3 = models.CharField(max_length=200)
    xxsrc3 = models.CharField(max_length=200)

    bigsrc4 = models.CharField(max_length=200)
    xxsrc4 = models.CharField(max_length=200)

    bigsrc5 = models.CharField(max_length=200)
    xxsrc5 = models.CharField(max_length=200)
    # 商品长名字
    productlongname = models.CharField(max_length=256)
    # 商品信息
    msg = models.CharField(max_length=256)
    #商品打折信息
    salemsg = models.CharField(max_length=256)
    #信息
    news = models.CharField(max_length=256)
    # 商品价格
    oldprice = models.DecimalField(max_digits=6,decimal_places=2)
    # 商品超市价格
    newprice = models.DecimalField(max_digits=6, decimal_places=2)
    # 库存
    remnum = models.IntegerField()
    # 销售
    num = models.IntegerField()
    # 详情页ID
    dealerid = models.CharField(max_length=10)
    class Meta:
        db_table = 'alg_goods'


# 用户 模型类
class User(models.Model):
    # 手机号码
    phone  = models.CharField(max_length=40, unique=True)
    # 密码
    password = models.CharField(max_length=256)
    # 昵称
    name = models.CharField(max_length=100)

    class Meta:
         db_table = 'alg_user'


# 购物车 模型类
class Cart(models.Model):
    # 用户 [添加的这个商品属于哪个用户]
    user = models.ForeignKey(User)

    # 商品 [添加的是哪个商品]
    goods = models.ForeignKey(Goods)

    ## 具体规格 [颜色、内存、版本、大小.....]
    size = models.CharField(max_length=100)

    color = models.CharField(max_length=100)

    # 商品数量
    number = models.IntegerField()

    # 是否选中
    isselect = models.BooleanField(default=True)
    # 是否删除
    isdelete = models.BooleanField(default=False)

    class Meta:
        db_table = 'alg_cart'


class Order(models.Model):
    user = models.ForeignKey(User)
    createtime = models.DateTimeField(auto_now_add=True)
    updatetime = models.DateTimeField(auto_now=True)
    # 状态
    # -1 过期
    # 0 未付款
    # 1 已付款，待发货
    # 2 已发货，待收货
    # 3 已收货，待评价
    # 4 已评价
    status = models.IntegerField(default=0)
    # 订单号
    identifier = models.CharField(max_length=256)

class OrderGoods(models.Model):
    # 订单
    order = models.ForeignKey(Order)
    # 商品
    goods = models.ForeignKey(Goods)

    ## 商品选择规格
    number = models.IntegerField()