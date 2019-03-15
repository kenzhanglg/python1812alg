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


	// $.get("json/banner_move.json", function(data) {
	// 		//遍历数组，将每个图片显示在页面上
	// 		for(var i = 0; i < data.length; i++) {
	// 			var obj = data[i];
	// 			var img = obj.img;
	// 			var bgcolor = obj.bgcolor;
	// 			var classname = obj.classname;
	// 			//创建节点将其添加到页面上
	// 			$(".banner_list").append("<div class='banner_img'><a><img src=" + img + " /></a></div>");
	// 			$(".banner_page ul").append("<li>" + (i + 1) + "</li>")
	// 			if(i == 0) {
	// 				$(".banner_page ul li").addClass("active")
	// 			}
	// 			$(".banner_img").eq(i).css("background", bgcolor);
	// 		}
	// 		//调用轮播 函数
	// 		lunbo();
	// 	})
	// 	//轮播函数
	// function lunbo() {
	// 	//显示数据到页面上
	// 	var bannerList = $(".banner_list");
	// 	var bannerPage = $(".banner_page");
	// 	var bannerImg = $(".banner_img");
	// 	var pageLi = $(".banner_page li");
	//
	// 	//复制第一张图片到最后
	// 	//bannerImg.first().clone().appendTo(bannerList);
	// 	var size = $(".banner_img").find("img").length;
	// 	console.log(size);
	// 	//即将显示的图片下标
	// 	var i = 0;
	// 	//开启定时器自动轮播
	// 	var timer = setInterval(function() {
	// 		i++;
	// 		move();
	//
	// 	}, 3000);
	// 	//===============开始轮播======================
	// 	function move() {
	// 		if(i == size) {
	// 			i = 0; //瞬间又显示第一张图
	// 		} else if(i < 0) {
	// 			i = size - 1;
	// 		}
	//
	// 		//图片透明度变化
	// 		bannerImg.find("img").fadeOut();
	// 		bannerImg.find("img").eq(i).fadeIn();
	// 		//						bannerImg.find("img").eq(i).fadeIn().parents(".banner_img").siblings().find("img").fadeOut();
	//
	// 		//					console.log(bannerImg.find("img").eq(i))
	// 		//console.log(i)
	//
	// 		//更改按钮的选中状态
	// 		pageLi.removeClass("active").eq(i).addClass("active");
	// 		if(i == size) {
	// 			pageLi.removeClass("active").eq(0).addClass("active");
	// 		}
	//
	// 	}
	//
	// 	//---点击上一页和下一个按钮-------
	// 	//上一页-->prev()
	// 	$(".banner_prev").click(function() {
	// 			i--;
	// 			move();
	// 		})
	// 		//下一页--->next()
	// 	$(".banner_next").click(function() {
	// 		i++;
	// 		move();
	// 	})
	//
	// 	//------页码-------
	// 	//添加鼠标移入事件，跟着滑到的li，显示相应的按钮
	// 	pageLi.mousemove(function() {
	// 		i = $(this).index(); //图片的下标就是按钮的下标
	// 		move();
	// 	})
	// 	$("#banner").hover(function() {
	// 		clearInterval(timer); //停止定时器
	// 		//并显示相应的图片
	// 	}, function() { //回调函数
	// 		clearInterval(timer); //先清除原来的定时器
	// 		timer = setInterval(function() { //开启新的定时器
	// 			i++;
	// 			move(); //继续轮播
	// 		}, 3000)
	// 	})
	//
	// 	//鼠标滑入图片区域时停止轮播，添加鼠标移入事件
	// 	//移出又开始轮播
	// 	bannerImg.on('mouseenter', function() {
	// 		clearInterval(timer);
	// 	}).on('mouseleave', function() { //继续轮播
	// 		timer = setInterval(function() {
	// 			i++;
	// 			move(); //继续轮播
	// 		}, 3000);
	// 	});
	//
	// }

	//===================nav购物车=====================
	//	当鼠标划过购物车 标识和文字时，显示购物车小列表
	// $(".nav_r_cart").hover(function() {
	// 	$(".nav_cart_list").show();
//		var s=parseInt($("#nav_cart_num").html());
//		if(s==0){
//			$(".nav_cart_msg").hide();	
//			$(".calculate").hide();
//		}
//		else{
//			$(".nav_cart_list_empty").hide();
//			$(".nav_cart_msg").show();	
//			$(".calculate").show();
//		}
// 	}, function() {
// 		$(".nav_cart_list").hide();
//
// 	})

	//==================今日特价商品================
	//从json中获取到数据
	$.get("json/goodslist.json", function(data) {
		
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var coversrc = obj.title[0].coversrc;
			var id = obj.id;
			var type = obj.title[0].type;
			var delprice = obj.title[0].delprice;
			var nowprice = obj.title[0].nowprice;
			//创建li 添加到 ul上
			var saleLi = $("<li></li>");
			$(".sale_goods_list").append(saleLi);
			var salegoodsImg = $("<div/>").addClass("sale_goods_t");
			saleLi.append(salegoodsImg);
			var aNode=$("<a/>").attr('href','goodslist.html?'+id);
			salegoodsImg.append(aNode);
			var imgNode=$("<img src="+coversrc+"/>");
			aNode.append(imgNode);
			var salegoodsMsg = $("<div></div>").addClass("sale_goods_c");
			salegoodsMsg.appendTo(saleLi);
			var imgMsg=$("<a></a>").html(type)
			salegoodsMsg.append(imgMsg)
			var salegoodsPrice = $("<div></div>").addClass("sale_goods_b");
			salegoodsPrice.appendTo(saleLi);
			var delprice=$("<span></span>").addClass("delprice").html(delprice);
			var nowprice=$("<span></span/>").addClass("nowprice").html(nowprice);
			delprice.appendTo(salegoodsPrice);
			nowprice.appendTo(salegoodsPrice);
			console.log(saleLi + "," + salegoodsImg + "," + salegoodsMsg + "," + salegoodsPrice)
			if(id == obj.id){
				if(id>=2&&id<=6){
					$(".sale_goods_list").append("<li><div class='sale_goods_t'><a href='goodslist.html?"+id+"'target='_blank'><img src=" +coversrc+ "/></a></div><div class='sale_goods_c'><a href='#' target='_blank'>" +type + "</a></div><div class='sale_goods_b'><span class='oldprice'>" + delprice + "</span><span class='newprice'>" + nowprice + "</span/></div></li>")
				}
				if(id>=7&&id<=10){
					$(".overseas_box_l_bottom ul").append("<li><div class='overseasgoods_tu'><a href='goodslist.html?"+id+"' target='_blank'><img src="+coversrc+"/></a></div><div class='overseas_goods_msg'><div class='overseas_delprice'><del>"+delprice+"</del></div><span class='overseas_type'><a href='#' target='_blank'>"+type+"</a></span><span class='overseas_nowprice'>"+nowprice+"</span></div></li>");
				}
			}
		}
		//-----倒计时-----------
			
			var date=new Date();
			var oDate=new Date("2016/10/15 23:59:59");
			var timeInterval=oDate.getTime()-date.getTime();
			var timeSecond=parseInt(timeInterval/1000);
			//开启定时器
			var timer=setInterval(function(){
				var span1=$(".sale_time_msg span").eq(0);
				var span2=$(".sale_time_msg span").eq(1);
				var span3=$(".sale_time_msg span").eq(2);
				timeSecond--;
				var day=parseInt(timeSecond/24/3600);//天
				var hour=parseInt(timeSecond/60/60)%24;
				var mintue=parseInt(timeSecond/60)%60;
				var second=parseInt(timeSecond%60);
				if(second<10){
					second="0"+second;
				}
				if(mintue<10){
					mintue="0"+mintue;
				}
				if(hour<10){
					hour="0"+hour;
				}
				span1.html(hour);
				span2.html(mintue);
				span3.html(second);
				
				if(timeSecond==0){
					clearInterval(timer); //清除定时器
				}				
			},1000);
		
		
	})
	

	//====================品牌上新==================
	//从brand_new.json中获取数据
	$.get("json/brand_new.json", function(data) {
		//遍历json
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var bfimg = obj.bfimg;
			var sign = obj.sign;
			var type = obj.type;
			var price = obj.price;
			var msg1 = "<div class='before_msg'><a href='#' target='_blank'><img src=" + bfimg + "/></a>";
			var msg2 = "<div class='brand_name'><a href='#' target='_blank'><img src=" + sign + "/></a></div>";
			var msg3 = "<div class='brand_msg'><div class='brand_type'>" + type + "</div><div class='brand_price'>" + price + "</div></div></div>";
			//创建div添加到 大div上	
			$(".new_brand_goods").append(msg1 + msg2 + msg3)
				$(".new_brand_goods").append("<div class='before_msg' class='after_msg'><a href='#' target='_blank'><img src="+bfimg+"/></a><div class='brand_name'><a href='#' target='_blank'><img src="+sign+"/></a></div><div class='brand_msg'><div class='brand_type'>"+type+"</div><div class='brand_price'>"+price+"</div></div></div>")
		}
		$(".new_brand_goods div").eq(0).removeClass("before_msg").addClass("after_msg");
		
		
		$(".before_msg").hover(function() {
			//判断是否是移动的
			
			//removeClass("before_msg").
			//给当前的 div去除当前类 添加新类	
//				$(this).addClass("selected").siblings().removeClass("selected");
			if($(this).hasClass("before_msg")){
				$(this).removeClass("before_msg").addClass("after_msg");
				$(this).animate({"width": 398,"overflow": "hidden"},200).siblings().animate({"width": 200,"overflow": "hidden"},200);
				$(this).siblings().addClass("before_msg");
			}
			if($(".new_brand_goods div:eq(0)").siblings().hasClass("after_msg")){
				$(".new_brand_goods div").eq(0).removeClass("after_msg").addClass("before_msg");
			}

				
			
		}, function() {
			if($(this).is(':animated') || $(this).siblings().is(':animated')) {
				return;
			}
				$(this).removeClass("after_msg").addClass("before_msg");
				$(this).animate({"width":200,"overflow":"hidden"},200);	
			
			
			if($(".new_brand_goods div:eq(0)").siblings().hasClass("after_msg")){
				$(".new_brand_goods div").eq(0).removeClass("after_msg").addClass("before_msg");
			}
										
		});

	})

	//====================广告=======================
	$.get("json/brand_ad.json", function(data) {
		//遍历json
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var adsrc = obj.adsrc;
			var id = obj.id;
			//创建div 加到相应 广告div中
			switch(id) {
				case 1:
					$(".brand_ad").append("<a href='#' target='_blank'><img src=" + adsrc + "/></a>");
					break;
				case 2:
					$(".mall_ad").append("<a href='#' target='_blank'><img src=" + adsrc + "/></a>");
					break;
				case 3:
					$(".luxury_ad").append("<a href='#' target='_blank'><img src=" + adsrc + "/></a>");
					break;
				default:
					break;
			}

		}
	});

	//===================奢侈品======================
	$.get("json/luxury_goods.json", function(data) {
		//遍历json
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var src = obj.img;
			var id = obj.id;
			var nowprice = obj.nowprice;
			var delprice = obj.delprice;
			var type = obj.type;
			//创建div 加到奢侈品 tabbox中
			//tab_content2 内容2---->爆款单品
			if(id >= 10) {
				$(".tab_content2 ul").append("<li><div class='goods_tu'><a><img src=" + src + "/></a></div><div class='goods_type'><a href='#' target='_blank'>" + type + "</a></div><div class='goods_price'><span class='nowprice'>" + nowprice + "</span><del>" + delprice + "</del></div></li>");

			}
			//内容1---->热卖推荐						
			switch(id) {
				case 1:
					$(".tab_content1_l").append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 2:
					$(".tab_content1_c ul li").eq(0).append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 3:
					$(".tab_content1_c ul li").eq(1).append("<a href='#' target='_blank'><img src=" + src + "/></a>");

					break;
				case 4:
					$(".tab_content1_r1 ul li").eq(0).append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 5:
					$(".tab_content1_r1 ul li").eq(1).append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 6:
					$(".tab_content1_r1 ul li").eq(2).append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 7:
					$(".tab_content1_r2 ul li").eq(0).append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 8:
					$(".tab_content1_r2 ul li").eq(1).append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 9:
					$(".tab_content1_r2 ul li").eq(2).append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				default:
					break;
			}
			//----------------tab切换-------------

			//当鼠标划过爆款单品字样时，背景色改变，切换到内容2
			$(".hot_design").hover(function() {
				$(".tab_content1").css("display", "none");
				$(".tab_content2").css("display", "block");
				$(this).addClass("selected");
				$(".hot_sale").removeClass("selected");
			})
			$(".hot_sale").hover(function() {
				$(".tab_content1").css("display", "block");
				$(".tab_content2").css("display", "none");
				$(this).addClass("selected");
				$(".hot_design").removeClass("selected").css("right", 10);
			})
		}
		//在页面加载时默认的选中状态
		$(".hot_sale").addClass("selected");
	});

	//===================华盛商城mall==================
	$.get("json/mall.json", function(data) {
		//遍历json

		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var src = obj.src;
			var id = obj.id;
			var nowprice = obj.nowprice;
			var delprice = obj.delprice;
			var type = obj.type;

			//----内容1热卖推荐----
			switch(id) {
				case 1:
					$(".content_left_t").append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 2:
					$(".content_right_a .right_ali1").append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 3:
					$(".content_right_a .right_ali2").append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 4:
					$(".content_right_b .right_bli1").append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 5:
					$(".content_right_b .right_bli2").append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 6:
					$(".content_right_cen .right_center li").eq(0).append("<a href='#' target='_blank'><img src=" + src + "/></a>");
					break;
				case 7:
					$(".content_right_cen .right_center li").eq(1).append("<a href='#' target='_blank'><img src=" + src + "/></a>");

					break;
				case 8:
					$(".mall_moveImg").append("<li><a href='#' target='_blank'><img src=" + src + "/></a></<li>")
					$(".mall_moveBtn").append("<span class='mall_page'></span>")
					break;
				case 9:
					$(".mall_moveImg").append("<li><a href='#' target='_blank'><img src=" + src + "/></a></<li>")
					$(".mall_moveBtn").append("<span class='mall_page'></span>")
					break;
				case 10:
					$(".mall_moveImg").append("<li><a href='#' target='_blank'><img src=" + src + "/></a></<li>")
					$(".mall_moveBtn").append("<span class='mall_page'></span>")
					break;
				case 11:
					$(".mall_moveImg").append("<li><a href='#' target='_blank'><img src=" + src + "/></a></<li>")
					$(".mall_moveBtn").append("<span class='mall_page'></span>")
					break;
				default:
					break;
			}
			malllunbo();

			//----内容2男女服饰----
			if(id >= 12 && id <= 19) {
				$(".tab_content_right2 ul").append("<li><div class='mallgoods_tu'><a href='#' target='_blank'><img src=" + src + "/></a></div><div class='mallgoods_type'><a href='#' target='_blank'>" + type + "</a></div><div class='mallgoods_price'><span>" + nowprice + "</span><del>" + delprice + "</del></div></li>");
			}
			//----内容3运动户外----
			if(id >= 20 && id <= 27) {
				$(".tab_content_right3 ul").append("<li><div class='mallgoods_tu'><a href='#' target='_blank'><img src=" + src + "/></a></div><div class='mallgoods_type'><a href='#' target='_blank'>" + type + "</a></div><div class='mallgoods_price'><span>" + nowprice + "</span><del>" + delprice + "</del></div></li>");
			}
			//----内容6美妆----
			if(id >= 28 && id <= 35) {
				$(".tab_content_right6 ul").append("<li><div class='mallgoods_tu'><a href='#' target='_blank'><img src=" + src + "/></a></div><div class='mallgoods_type'><a href='#' target='_blank'>" + type + "</a></div><div class='mallgoods_price'><span>" + nowprice + "</span><del>" + delprice + "</del></div></li>");
			}

			//----------------tab切换----------------------

			//当鼠标划过，背景色改变，切换到相应的内容，
			$(".tab_btn span").hover(function() {
				j = $(this).index();
				console.log(j)
				//删除其他span的选中样式
				$(this).addClass("selected").siblings().removeClass("selected");
				$(".malltab").eq(j).show().siblings().hide();
				console.log($(".malltab").eq(j));

			})

		}

		//------------内容1的轮播---------------
		function malllunbo() {
			var i = 0; //显示图片索引
			var len = $(".mall_moveImg").children('li').length;

			//开启定时器自动轮播
			var timer = setInterval(function() {
				i++;
				mallmove();
			}, 2000);

			function mallmove() {
				if(i == len) {
					i = 0; //瞬间又显示第一张图
				} else if(i < 0) {
					i = len - 1;
				}

				//图片显示隐藏
				//当前图片显示其他图片隐藏
				$(".mall_moveImg").find("img").css("display", "none");
				$(".mall_moveImg").find("img").eq(i).css("display", "block");
				//更改按钮的选中状态
				
				$(".mall_moveBtn span").eq(i).addClass("page_selected").siblings().removeClass("page_selected");
				if(i == len) {
					$(".mall_moveBtn span").removeClass("page_selected").eq(0).addClass("page_selected");
				}
			}

			//------页码-------	
			//添加鼠标移入事件，跟着滑到的li，显示相应的按钮
			$(".mall_moveBtn span").mousemove(function() {
					i = $(this).index(); //图片的下标就是按钮的下标
					mallmove();
				})
				// 鼠标移入停止，移除继续
			$(".mall_move").on('mouseenter', function() {
				clearInterval(timer);
			}).on('mouseleave', function() {
				timer = setInterval(mallmove, 2000);
			});

			if(id >= 36 && id <= 43) {
				$(".mall_brand ul").eq(0).append("<li><a href='#'><img src=" + src + "/></a></li>")
			}
			if(id >= 44 && id <= 51) {
				$(".mall_brand ul").eq(1).append("<li><a href='#'><img src=" + src + "/></a></li>")
			}

			//----------------mall_brand切换透明度-----------------------

			$(".mallbrand_icon_l").click(function() {
				if($(".mall_brand_ul1").is(":visible")) {
					$(".mall_brand_ul1").fadeOut(300, function() {
						$(".mall_brand_ul2").fadeIn(300);
					})
				} else {
					$(".mall_brand_ul2").fadeOut(300, function() {
						$(".mall_brand_ul1").fadeIn(300);
					})
				}

			})
			$(".mallbrand_icon_r").click(function() {
				if($(".mall_brand_ul1").is(":visible")) {
					$(".mall_brand_ul1").fadeOut(300, function() {
						$(".mall_brand_ul2").fadeIn(300);
					})
				} else {
					$(".mall_brand_ul2").fadeOut(300, function() {
						$(".mall_brand_ul1").fadeIn(300);
					})
				}

			})

		}
		//============tab切换==================
		//在页面加载时默认的选中状态
		$(".mall_hot_sale").addClass("selected");

	})
	
	//===================跨境汇overseas===============
	$.get("json/overseas.json",function(data){
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var src = obj.src;
			var id = obj.id;
			var nowprice = obj.nowprice;
			var delprice = obj.delprice;
			var type = obj.type;
			switch (id){
				case 1:
				$(".overseas_box_l_top").append("<div class='overseas_goods'><a href='#'><img src="+src+"/></a></div>");
				break;
				case 2:
				$(".overseas_box_l_top").append("<div class='overseas_goods'><a href='#'><img src="+src+"/></a></div>");
				break;
				
				default:
					break;
			}
			
			if(id>=7&&id<=12){
				$(".overseas_box_r_ul").append("<li><a href='#' target='_blank'><img src="+src+"/></a></li>")
			}
				
		}
		//点击小箭头 ul淡入淡出
		$(".overseas_box_l_top div").eq(1).css("margin-left",10);
		$(".overseas_icon_t").click(function(){
			$(".overseas_box_r_ul").fadeOut(200,function(){
				$(".overseas_box_r_ul").fadeIn(200);
			})
		})
		$(".overseas_icon_b").click(function(){
			$(".overseas_box_r_ul").fadeOut(200,function(){
				$(".overseas_box_r_ul").fadeIn(200);
			})
		})
		
	})
	
	
	
	//===================品牌热卖=====================
	$.get("json/brandsale.json",function(data){
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var src = obj.src;
			var id = obj.id;
			
			var brandsale_time="<div class='brandsale_time'><i class='time_icon'></i><div class='time_msg'>仅剩<span></span>天<span></span>时<span></span>分<span></span>秒</div></div>"
			var brandsale_btn="<div class='brandsale_btn'><a href='#' target='_blank'>马上抢购</a></div>"
			$(".brandsale_box").append("<div class='brandsale_goods'><a href='#' target='_blank'><img src="+src+"/></a>"+brandsale_time+brandsale_btn+"</div>")
			
			
		}
		
		
	//===============底部倒计时================
	var date=new Date();
	var date1=new Date("2016/10/15 23:59:59");
	var distend=date1.getTime()-date.getTime();
	var timeSec=parseInt(distend/1000);
	var time=setInterval(function(){		
		var day=$(".time_msg span:first-child");
		var hour=$(".time_msg span:nth-child(2)");
		var min=$(".time_msg span:nth-child(3)");
		var sec=$(".time_msg span:last-child");
		timeSec--;
		var d=parseInt(timeSec/24/3600);//天
		var h=parseInt(timeSec/60/60)%24;//时
		var m=parseInt(timeSec/60)%60;//分
		var s=parseInt(timeSec%60);//秒
		if(s<10){
			s="0"+s;
		}
		if(m<10){
			m="0"+m;
		}
		if(h<10){
			h="0"+h;
		}
		if(d<10){
			d="0"+d
		}
		day.html(d)
		hour.html(h);
		min.html(m);
		sec.html(s);
		
		if(timeSec==0){
			clearInterval(time); //清除定时器
		}				
		},1000);
	
	})
	
	

	
})



//当用户登录时 首页显示登录的用户名
//====================================================
$(function(){
	var usersArr = $.cookie("users");
	//表示存在用户，不为空
	if(usersArr){
		usersArr = JSON.parse(usersArr);
		console.log(usersArr);
		for(var i=0;i<usersArr.length;i++){
			$(".top_login a").html("欢迎登录");
			$(".top_login").append($("<span/>").addClass("logined_user").text(usersArr[i].name));
		}
	
	}
	
})
