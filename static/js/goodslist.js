$(function () {

    $('.goodslist img').mouseover(function () {
        var src = $(this).attr('src');
        var new_src = src.slice(0, 13) + 'big_goods' + src.slice(22,)
        console.log(new_src)
        $('.small_img').find('img').attr('src', new_src);
    });


    color_text = ''
    size_text = ''
    $('.select_color span:eq(0)').click(function () {
        $('.shenlan i').addClass('sel_icon')
        $('.huangse i').removeClass('sel_icon')
        $('.lvse i').removeClass('sel_icon')
        $('.hongse i').removeClass('sel_icon')
        color_text = $(this).text()

    })
    $('.select_color span:eq(1)').click(function () {
        $('.huangse i').addClass('sel_icon')
        $('.shenlan i').removeClass('sel_icon')
        $('.lvse i').removeClass('sel_icon')
        $('.hongse i').removeClass('sel_icon')
        color_text = $(this).text()
    })
    $('.select_color span:eq(2)').click(function () {
        $('.lvse i').addClass('sel_icon')
        $('.shenlan i').removeClass('sel_icon')
        $('.huangse i').removeClass('sel_icon')
        $('.hongse i').removeClass('sel_icon')
        color_text = $(this).text()
    })
    $('.select_color span:eq(3)').click(function () {
        $('.hongse i').addClass('sel_icon')
        $('.shenlan i').removeClass('sel_icon')
        $('.lvse i').removeClass('sel_icon')
        $('.huangse i').removeClass('sel_icon')
        color_text = $(this).text()
    })

    $('.select_size span:eq(0)').click(function () {
        $('.xiaoma i').addClass('sel_icon')
        $('.zhongma i').removeClass('sel_icon')
        $('.dama i').removeClass('sel_icon')
        $('.jiayihao i').removeClass('sel_icon')
        $('.jiadahao i').removeClass('sel_icon')
        size_text = $(this).text()
    })
    $('.select_size span:eq(1)').click(function () {
        $('.zhongma i').addClass('sel_icon')
        $('.xiaoma i').removeClass('sel_icon')
        $('.dama i').removeClass('sel_icon')
        $('.jiayihao i').removeClass('sel_icon')
        $('.jiadahao i').removeClass('sel_icon')
        size_text = $(this).text()
    })
    $('.select_size span:eq(2)').click(function () {
        $('.dama i').addClass('sel_icon')
        $('.zhongma i').removeClass('sel_icon')
        $('.xiaoma i').removeClass('sel_icon')
        $('.jiayihao i').removeClass('sel_icon')
        $('.jiadahao i').removeClass('sel_icon')
        size_text = $(this).text()
    })
    $('.select_size span:eq(3)').click(function () {
        $('.jiayihao i').addClass('sel_icon')
        $('.zhongma i').removeClass('sel_icon')
        $('.dama i').removeClass('sel_icon')
        $('.xiaoma i').removeClass('sel_icon')
        $('.jiadahao i').removeClass('sel_icon')
        size_text = $(this).text()
    })
    $('.select_size span:eq(4)').click(function () {
        $('.jiadahao i').addClass('sel_icon')
        $('.zhongma i').removeClass('sel_icon')
        $('.dama i').removeClass('sel_icon')
        $('.jiayihao i').removeClass('sel_icon')
        $('.xiaoma i').removeClass('sel_icon')
        size_text = $(this).text()
    })

    number = 1
    //点击+添加 购买数量
    $(".num_do .add").click(function () {
        var num = parseInt($("#num_val").val());
        $("#num_val").val(num + 1);
        number = $("#num_val").val();
    })

    //点击- 减少购买数量
    $(".num_do .rem").click(function () {
        var num = parseInt($("#num_val").val());
        $("#num_val").val(num - 1)
        number = $("#num_val").val();
        if (num <= 0) {
            $("#num_val").val(0);
            number = 0
        }
    })
    if (parseInt($("#num_val").val()) < 0 || number < 0) {

        alert('数量输入有误，请重新输入')
        $("#num_val").val(0)
        number = 0

    }

    $('.addToCart').click(function () {
        if (color_text == '' || size_text == '') {
            alert('请选择颜色或大小')
        }
        request_data = {
            'goodid': $(this).attr('data-goodid'),
            'color': color_text,
            'size': size_text,
            'number': number,
        }

        console.log(color_text, size_text, number, request_data['goodid'])

        $.get('/addtocart/', request_data, function (response) {
            console.log(response)
            if (response.status == -1){ // 未登录

                // 设置cookie
                $.cookie('back', 'goodslist', {expires: 3, path: '/'})

                window.open('/login/', '_self')
            }else if (response.status ==1 ){
            alert('添加购物车成功')
        }

        }

        )


    })


//========top菜单-我的奥莱购li================
//获取我的奥莱购li,当鼠标划过，显示下拉列表
var top_mygo = $(".top_mygo");
top_mygo.mousemove(function () {
    $(".top_mygo dl").css("display", "block");
})
top_mygo.mouseout(function () {
    $(".top_mygo dl").css("display", "none");
})

//==============广告图========================
//点击小叉叉，隐藏图片，实现关闭小广告
$(".adimg .ad_close").click(function () {
    $(".adimg").css("display", "none");
})

//===============相关app======================
//当鼠标划过app1移动端ul,显示相关的app
$(".head_app1").mousemove(function () {
    $(".app1_rel").css("display", "block");
});
$(".head_app1").mouseout(function () {
    $(".app1_rel").css("display", "none");
});

//=============搜索框=========================
//当搜索框获取焦点时 显示提示信息，失去焦点时还原
$(".search_l_text").focus(function () {
    $(".search_l_text").attr("value", "");
    $(".search_l_text").attr("placeholder", "请输入您想寻找的商品名称")
})
$(".search_l_text").blur(function () {
    $(".search_l_text").attr("value", "拉夏贝尔");
    $(".search_l_text").attr("placeholder", "")
})


//============导航nav=========================

//当鼠标划过全部商品列表  显示nav 商品列表
$(".nav_l_classify").mouseenter(function () {
    $(".classify_list").show();
    $(".classify_list_box").show();
})
//离开则隐藏，但是当鼠标离开了 分类div 划过nav商品列表时 显示
$(".nav_l_classify").mouseleave(function () {
    $(".classify_list").hide();
    $(".classify_list_box").hide();
    $(".list_icon_r").hide();
})

//当鼠标划过nav显示商品列表，及改变背景颜色
$(".classify_list_box").mousemove(function () {
    $(".classify_list").show();
    $(".classify_list_box").show();
    $(this).css("background", "#eee");
    $(this).find($(".list_icon_r")).css("display", "block");
    $(this).find($(".list_msg")).css("display", "block");

});
$(".classify_list_box").mouseout(function () {
    $(".classify_list").hide();
    $(".classify_list_box").hide();
    $(this).css("background", "#fff");
    $(this).find($(".list_icon_r")).css("display", "none");
    $(this).find($(".list_msg")).css("display", "none");

});

//===================购物车=====================
//	当鼠标划过购物车 标识和文字时，显示购物车小列表
$(".nav_r_cart").hover(function () {
    $(".nav_cart_list").show();
}, function () {
    $(".nav_cart_list").hide();

})




})


