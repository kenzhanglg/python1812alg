$(function() {

	$('#login-i').click(function () {
        // 设置cookie
        $.cookie('back', 'mine', {expires: 3, path: '/'})

        window.open('/login/', '_self')
    })


	//========top菜单-我的奥莱购li================
	//获取我的奥莱购li,当鼠标划过，显示下拉列表
	var top_mygo = $(".top_mygo");
	top_mygo.mousemove(function() {
		$(".top_mygo dl").css("display", "block");
	})
	top_mygo.mouseout(function() {
		$(".top_mygo dl").css("display", "none");
	})

	//==============广告图========================
	//点击小叉叉，隐藏图片，实现关闭小广告
	$(".adimg .ad_close").click(function() {
		$(".adimg").css("display", "none");
	})

	//===============相关app======================
	//当鼠标划过app1移动端ul,显示相关的app
	$(".head_app1").mousemove(function() {
		$(".app1_rel").css("display", "block");
	});
	$(".head_app1").mouseout(function() {
		$(".app1_rel").css("display", "none");
	});
	
	//=============搜索框=========================
	//当搜索框获取焦点时 显示提示信息，失去焦点时还原
	$(".search_l_text").focus(function(){
		$(".search_l_text").attr("value","");
		$(".search_l_text").attr("placeholder","请输入您想寻找的商品名称")
	})
	$(".search_l_text").blur(function(){
		$(".search_l_text").attr("value","拉夏贝尔");
		$(".search_l_text").attr("placeholder","")
	})
	
	//============导航nav=========================
	//当鼠标划过nav显示商品列表，及改变背景颜色
	$(".classify_list_box").mousemove(function() {
		$(this).css("background", "#eee");
		$(this).find($(".list_icon_r")).css("display", "block");
		$(this).find($(".list_msg")).css("display", "block");

	});
	$(".classify_list_box").mouseout(function() {
		$(this).css("background", "#fff");
		$(this).find($(".list_icon_r")).css("display", "none");
		$(this).find($(".list_msg")).css("display", "none");

	});

	//=================banner轮播图================
	//获取数据
    var topSwiper = new Swiper('#topSwiper', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 3000,
        effect: 'coverflow',
    });


	
})
