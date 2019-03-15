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

#今日特价  模型类
class Sale_goods(BaseModel):
    class Meta:
        db_table = 'alg_sale_goods'

#品牌上线  模型类
class New_goods (BaseModel):
    class Meta:
        db_table = 'alg_new_goods'

#品牌logo  模型类
class New_goods_brand (BaseModel):
    class Meta:
        db_table = 'alg_new_goods_brand'

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