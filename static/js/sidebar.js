//侧边栏+登录注册
$(function(){
	
	$.get("json/sidebar.json",function(data){
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var id=obj.id;
			var src = obj.img;
			var result=obj.num;
//			if(id==1){
//				$(".sidebar_login_msg ul li").eq(0).append("<img src="+src+"/>");
//			}
//			if(id>=2&&id<=19){
//				$(".sidebar_login_msg ul li").eq(4).append("<img id='img_ma' src="+src+"/>");
//			}
		}
		
	})
	
	
	//鼠标划上logo，出现小提示框
	$(".sidebar_nav_msg ul .sidebar_logo").hover(function(){
		$(".logo_tip").show();
	},function(){
		$(".logo_tip").hide();		
	})
	
	//点击侧边栏logo  展开侧边栏 显示或者隐藏登录页
	$(".sidebar_logo").click(function(){
		if($(".sidebar_login").is(":visible")){
			$("#sidebar").animate({"right":0},200)
			$(".sidebar_login").hide();
		}else if($(".sidebar_login").is(":hidden")){
			$("#sidebar").animate({"right":270},200)
			$(".sidebar_login").show();		
		}		
	})
	
	//当鼠标点击品牌广告时，显示或隐藏广告图
	$(".sidebar_ad").click(function(){
		if($(".sidebar_ad_tu").is(":visible")){
			$("#sidebar").animate({"right":0},200)
			$(".sidebar_ad_tu").hide();
		}else if($(".sidebar_ad_tu").is(":hidden")){
			$("#sidebar").animate({"right":270},200)
			$(".sidebar_ad_tu").show();		
		}	
	})
	
	//鼠标划过二维码时 显示小提示框
	$(".sidebar_twoma").hover(function(){
		$(".two_tip").show();
	},function(){
		$(".two_tip").hide();		
	})
	//点击二维码图标时 展开二维码图
	$(".sidebar_twoma").click(function(){
		if($(".sidebar_twoma_tu").is(":visible")){
			$("#sidebar").animate({"right":0},200)
			$(".sidebar_twoma_tu").hide();
		}else if($(".sidebar_twoma_tu").is(":hidden")){
			$("#sidebar").animate({"right":270},200)
			$(".sidebar_twoma_tu").show();		
		}	
	})
	
//	if($(".tab_sidebar").is(":visible")){
//		//----切换-----
//		$(".tab_sign").click(function(){
//			j=$(this).index();
//			$(".tab_sidebar").eq(j).show().siblings().hide();
//		})
//	}
		
	//当鼠标划过优惠券图标，显示小提示
	$(".sidebar_chip").hover(function(){
		$(".chip_tip").show();
	},function(){
		$(".chip_tip").hide();		
	})
	//当鼠标划过客户联系图标，显示小提示信息
	$(".sidebar_chat").hover(function(){
		$(".chat_tip").show();
	},function(){
		$(".chat_tip").hide();		
	})
	
	//点击缓冲运动回到顶部
	$(".back_top").click(function(){
	 $('body,html').animate({scrollTop:0},800);//某个元素执行动画，这里的元素是$('body,html')，滚动条的位置为0
        return false;//防止执行默认动作
	})
	
	
	//点击关闭图标 隐藏侧边栏
	$(".close_sidebar").click(function(){
		$("#sidebar").hide();
	})
	
	
	
	
	
})
