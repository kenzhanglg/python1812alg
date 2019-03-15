$(function(){
	

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
	
	//当鼠标划过全部商品列表  显示nav 商品列表
	$(".nav_l_classify").mouseenter(function(){
		$(".classify_list").show();
		$(".classify_list_box").show();
	})
	//离开则隐藏，但是当鼠标离开了 分类div 划过nav商品列表时 显示
	$(".nav_l_classify").mouseleave(function(){
		$(".classify_list").hide();
		$(".classify_list_box").hide();
		$(".list_icon_r").hide();
	})
	
	//当鼠标划过nav显示商品列表，及改变背景颜色
	$(".classify_list_box").mousemove(function() {
		$(".classify_list").show();
		$(".classify_list_box").show();
		$(this).css("background", "#eee");
		$(this).find($(".list_icon_r")).css("display", "block");
		$(this).find($(".list_msg")).css("display", "block");

	});
	$(".classify_list_box").mouseout(function() {
		$(".classify_list").hide();
		$(".classify_list_box").hide();
		$(this).css("background", "#fff");
		$(this).find($(".list_icon_r")).css("display", "none");
		$(this).find($(".list_msg")).css("display", "none");

	});
	
	//===================购物车=====================
	//	当鼠标划过购物车 标识和文字时，显示购物车小列表
	$(".nav_r_cart").hover(function() {
		$(".nav_cart_list").show();
	}, function() {
		$(".nav_cart_list").hide();

	})
	
	
	//===============商品详情部分======================
	
	if(location.search){
        var id = location.search //获取url？ 后面的  name=du&id=2
//      id = id.split("?")[1];
		var id = location.search.replace("?","");
      }
	//通过json获取到goodslist.json 中的图片信息
	$.get("json/goodslist.json",function(data){
		
		
		for(var j=0;j<data.length;j++){
			var obj=data[j];
			
			if(obj.id==id){
				
				
				if(obj.id==1){
					console.log(id)		
					
					// 小图窗口			
					$(".small_img").append("<img class='smallImg' src="+obj.goodsImg[0].smallsrc+"/>")
					
					// 大图窗口
					$(".bigimg_area").append("<img class='bigImg' src="+ obj.goodsImg[0].bigsrc+"/>")
					
					// 添加小图片列表到最左边
					for(var i=0;i<obj.goodsImg.length;i++){
						$(".smalltu_list ul").append("<li class='goodslist'><img src="+obj.goodsImg[i].xxsrc+"/></li>");		
					}
					// 中间 商品的类型价钱等等
					$(".datamsg_name").append("<i class='name_icon'></i><p>"+obj.title[0].type+"</p>")
					$(".red_tips").append("<span>"+obj.title[0].news+"</span>")
					$(".datamsg_skillprice").append("<em class='skillprice'>秒&nbsp;杀&nbsp;价：<span>"+obj.title[0].nowprice+"</span><del>"+obj.title[0].delprice+"</del></em><br/><i class='skill_icon'></i><em class='skilltime'>距离秒杀结束还有&nbsp;&nbsp;<span></span>时&nbsp;&nbsp;<span></span>分&nbsp;&nbsp;<span></span>秒</em>")
					$(".datamsg_actprice").append("<em class='actprice'>活&nbsp;动&nbsp;价：<span>"+obj.title[0].nowprice+"</span><del>"+obj.title[0].delprice+"</del></em>")
					$(".datamsg_salemsg").append("<em class='salemsg'>促销信息：<span>"+obj.title[0].salemsg+"</span></em>")
					$(".select_color").append("<em class='color'>选择颜色：</em><span class='choose'>深蓝色<i class='sel_icon'></i></span>")
					$(".select_size").append("<em class='size'>选择尺码：</em><span class='choose'>L<i class='sel_icon'></i></span><span>M<i></i></span><span>S<i></i></span><span>XL<i></i></span><span>XXL<i></i></span>")
					$(".select_num").append("<em>选择数量</em><br/><em>剩余<i class='res_num'>"+obj.title[0].remnum+"</i>件</em>")
					$(".add_num").append("<div class='num_val'><input type='text' id='num_val' value="+obj.title[0].num+" /></div><div class='num_do'><a class='add bor'>+</a><a class='rem'>-</a></div>")
					$(".datamsg_r_top").append("<a href='#'><img src="+obj.title[0].src+" /></a>")
					
//					var aNOde = $("<a/>").addClass('a').css({}).text('jghj');
					$(".select_color span").addClass("border");
					$(".select_size span").addClass("border");
					
					
					
					//当鼠标划过列表图片时，切换小图片窗口显示400x400的图
					$(".smalltu_list li").hover(function(){
						var j=$(this).index();
						$(".small_img img").attr("src","imgs/small_goods_00"+(j+1)+".JPG");
						$(".bigimg_area img").attr("src","imgs/big_goods_00"+(j+1)+".JPG");
					})
					
					
				}
				
				if(id>=2&&id<=6){
					// 小图窗口			
					$(".small_img").append("<img class='smallImg' src="+obj.goodsImg[0].smallsrc+"/>")
					
					// 大图窗口
					$(".bigimg_area").append("<img class='bigImg' src="+ obj.goodsImg[0].bigsrc+"/>")
					
					// 添加小图片列表到最左边
					for(var i=0;i<obj.goodsImg.length;i++){
						$(".smalltu_list ul").append("<li class='goodslist'><img src="+obj.goodsImg[i].xxsrc+"/></li>");		
					}
					// 中间 商品的类型价钱等等
					$(".datamsg_name").append("<i class='name_icon'></i><p>"+obj.title[0].type+"</p>")
					$(".red_tips").append("<span>"+obj.title[0].news+"</span>")
					$(".datamsg_skillprice").append("<em class='skillprice'>秒&nbsp;杀&nbsp;价：<span>"+obj.title[0].nowprice+"</span><del>"+obj.title[0].delprice+"</del></em><br/><i class='skill_icon'></i><em class='skilltime'>距离秒杀结束还有&nbsp;&nbsp;<span></span>时&nbsp;&nbsp;<span></span>分&nbsp;&nbsp;<span></span>秒</em>")
					$(".datamsg_actprice").append("<em class='actprice'>活&nbsp;动&nbsp;价：<span>"+obj.title[0].nowprice+"</span><del>"+obj.title[0].delprice+"</del></em>")
					$(".datamsg_salemsg").append("<em class='salemsg'>促销信息：<span>"+obj.title[0].salemsg+"</span></em>")
					$(".select_color").append("<em class='color'>选择颜色：</em><span>漂白<i></i></span><span class='choose'>黄色<i class='sel_icon'></i></span><span>白色<i></i></span><span>黑色<i></i></span>")
					$(".select_size").append("<em class='size'>选择尺码：</em><span class='choose'>L<i class='sel_icon'></i></span><span>M<i></i></span><span>S<i></i></span><span>XL<i></i></span><span>XXL<i></i></span>")
					$(".select_num").append("<em>选择数量</em><br/><em>剩余<i class='res_num'>"+obj.title[0].remnum+"</i>件</em>")
					$(".add_num").append("<div class='num_val'><input type='text' id='num_val' value="+obj.title[0].num+" /></div><div class='num_do'><a class='add bor'>+</a><a class='rem'>-</a></div>")
					$(".datamsg_r_top").append("<a href='#'><img src="+obj.title[0].src+" /></a>")
					
					$(".datamsg_actprice").hide();
					$(".red_tips").show();
					$(".datamsg_skillprice").show();
					
					$(".select_color span").addClass("border");
					$(".select_size span").addClass("border");
					//当鼠标划过列表图片时，切换小图片窗口显示400x400的图
					$(".smalltu_list li").hover(function(){
						var j=$(this).index();
						$(".small_img img").attr("src","imgs/small_goods_0"+(id-1)+(j+1)+".JPG");
						$(".bigimg_area img").attr("src","imgs/big_goods_0"+(id-1)+(j+1)+".JPG");
					})
				}
				
				if(id>=7&&id<=9){
					
					// 小图窗口			
					$(".small_img").append("<img class='smallImg' src="+obj.goodsImg[0].smallsrc+"/>")
					
					// 大图窗口
					$(".bigimg_area").append("<img class='bigImg' src="+ obj.goodsImg[0].bigsrc+"/>")
					
					// 添加小图片列表到最左边
					for(var i=0;i<obj.goodsImg.length;i++){
						$(".smalltu_list ul").append("<li class='goodslist'><img src="+obj.goodsImg[i].xxsrc+"/></li>");		
					}
					// 中间 商品的类型价钱等等
					$(".datamsg_name").append("<i class='name_icon'></i><p>"+obj.title[0].type+"</p>")
					$(".red_tips").append("<span>"+obj.title[0].news+"</span>");
					$(".datamsg_skillprice").append("<em class='skillprice'>秒&nbsp;杀&nbsp;价：<span>"+obj.title[0].nowprice+"</span><del>"+obj.title[0].delprice+"</del></em><br/><i class='skill_icon'></i><em class='skilltime'>距离秒杀结束还有&nbsp;&nbsp;<span></span>时&nbsp;&nbsp;<span></span>分&nbsp;&nbsp;<span></span>秒</em>");
					$(".datamsg_actprice").append("<em class='actprice'>活&nbsp;动&nbsp;价：<span>"+obj.title[0].nowprice+"</span><del>"+obj.title[0].delprice+"</del></em>")
					$(".datamsg_salemsg").append("<em class='salemsg'>促销信息：<span>"+obj.title[0].salemsg+"</span></em>")
					$(".select_color").append("<em class='color'>选择颜色：</em><span>漂白<i></i></span><span class='choose'>黄色<i class='sel_icon'></i></span>")
					$(".select_size").append("<em class='size'>选择尺码：</em><span class='choose'>L<i class='sel_icon'></i></span><span>M<i></i></span><span>S<i></i></span><span>XL<i></i></span><span>XXL<i></i></span>")
					$(".select_num").append("<em>选择数量</em><br/><em>起售<i class='res_num'>"+obj.title[0].snum+"</i>件</em>")
					$(".add_num").append("<div class='num_val'><input type='text' id='num_val' value="+obj.title[0].num+" /></div><div class='num_do'><a class='add bor'>+</a><a class='rem'>-</a></div>")
					$(".datamsg_r_top").append("<a href='#'><img src="+obj.title[0].src+" /></a>")
					$(".datamsg_skillprice").hide();
					$(".datamsg_actprice").show();
					$(".red_tips").hide();
					$(".select_color").hide();
					$(".select_size").hide();
					
					$(".select_color span").addClass("border");
					$(".select_size span").addClass("border");
					//当鼠标划过列表图片时，切换小图片窗口显示400x400的图
					$(".smalltu_list li").hover(function(){
						var j=$(this).index();
						$(".small_img img").attr("src","imgs/small_goods_0"+(id-1)+(j+1)+".JPG");
						$(".bigimg_area img").attr("src","imgs/big_goods_0"+(id-1)+(j+1)+".JPG");
					})
				
				}
				
				var ulNode1=$("<ul/>");
				ulNode1.appendTo($(".calculate"));
				var li1=$("<li>商品：<span></span>件<li/>").addClass("calculate_l");		
				var li2=$("<li/>").addClass("calculate_c");
				var sp=$("<span>总计：</span>");
				sp.appendTo(li2);
				var itotal=$("<i/>").addClass("cul_total");
				li2.append(sp,itotal);
				var li3=$("<li/>").addClass("calculate_r").append($("<a/>").text("去购物车"));
				ulNode1.append(li1,li2,li3);
				
				
				
			}

		}	
			
//			$(".info_r")
			//当鼠标滑入小图片窗口区域 显示  要显示的区域div
			//问题 移动小区域出现一闪一闪情况：放大系数计算的是图片的宽度 ，鼠标滑入应该是图片的父级元素
			//====================放大镜======================
			var smallImg=$(".small_img");//小图
			var smallArea=$(".smallimg_area");//小图区域
			var bigImg=$(".bigImg");//大图
			var bigArea=$(".bigimg_area");//大图区域
			
			//计算小图中的小区域大小
			smallArea.width(bigArea.width()*smallImg.width()/bigImg.width());
			smallArea.height(bigArea.height()*smallImg.height()/bigImg.height());
			
			//计算放大系数或放大倍数
			var scale=bigImg.width()/$(".smallImg").width();
			
			//当鼠标滑入小图片时，显示小区域
			smallImg.mousemove(function(e){
				smallArea.show();
				bigArea.show();
				
				// 获取鼠标距离小图片左边上边的距离
				//pageX/pageY:距离窗口左上边的偏移量（包括隐藏区域）
				var x=e.pageX-smallImg.offset().left-smallArea.width()/2;
				var y=e.pageY-smallImg.offset().top-smallArea.height()/2;
				
				// 控制小图区域的移动范围
				//水平方向
				if(x<=0){//左边界
					x=0;
				}else if(x>=smallImg.width()-smallArea.width()){//右边界
					x=smallImg.width()-smallArea.width();
				}
				// 垂直方向
				if(y<=0){//上边界
					y=0;
				}else if(y>=smallImg.height()-smallArea.height()){//下边界
					x=smallImg.height()-smallArea.height();
				}
				
				//移动小图片区域
				smallArea.css({left:x,top:y});
				
				// 改变大图的位置
				//移动大图。方向相反 乘以负数
				bigImg.css({left:-x*scale,top:-y*scale});				
				
			})
			
			//鼠标移出小图片
			smallImg.mouseout(function(){
				//小图片区域隐藏
				smallArea.hide();
				bigArea.hide(); // 大图隐藏
			})
			
			
		//===================选择颜色尺码购买数量==================
		
		//当点击选择颜色尺码时 给i添加样式 sel_icon 给 要选中的s颜色或尺码 添加 choose样式
			$(".select_color span").click(function(){
				$(this).removeClass("border").addClass("choose").siblings().removeClass("choose").addClass("border");
				$(".select_color em").removeClass("border");
				$(this).find("i").addClass("sel_icon").parent().siblings().find("i").removeClass("sel_icon");
				// 获取选中商品的颜色
				goodscolor=$(this).html();
				$(".info_style span").eq(0).html("颜色："+goodscolor);  //加入到小购物车列表中
			})
			$(".select_size span").click(function(){
				$(this).removeClass("border").addClass("choose").siblings().removeClass("choose").addClass("border");
				$(".select_size em").removeClass("border");
				$(this).find("i").addClass("sel_icon").parent().siblings().find("i").removeClass("sel_icon");					
				// 获取选中商品的尺码
				goodssize=$(this).html();
				$(".info_style span").eq(1).html("尺码："+goodssize);//加入到小购物车列表中
				
			})
			
			//点击+添加 购买数量
			$(".num_do .add").click(function(){
				var num=parseInt($("#num_val").val());
				$("#num_val").val(num+1);
			})
			
			//点击- 减少购买数量
			$(".num_do .rem").click(function(){
				var num=parseInt($("#num_val").val());
				$("#num_val").val(num-1)
				if(num<=0){
					$("#num_val").val(0);
				}
				
			})
			
		
		//===========秒杀倒计时==============
		var date=new Date();
		var date1=new Date("2016/10/15 23:59:59");
		var distend=date1.getTime()-date.getTime();
		var timeSec=parseInt(distend/1000);
		var time=setInterval(function(){		
		var hour=$(".skilltime span:first-child");
		var min=$(".skilltime span:nth-child(2)");
		var sec=$(".skilltime span:last-child");
		timeSec--;
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
		hour.html(h);
		min.html(m);
		sec.html(s);
		
		if(timeSec==0){
			clearInterval(time); //清除定时器
		}				
		},1000);
		//---------------
		
		
		
		
	})

	

})


//===================加入购物车=========================

$(function(){
	/*	购买商品飞入购物车的效果
        	给按钮绑定点击事件
                        复制当前商品图片(用于实现动画效果)
                        把复制的图片写入页面，并设置样式
                        动画效果
	*/
	
	
	//点击加入购物车按钮
	
	
	$(".addToCart").click(function(e){
		
	//飞入侧边栏的购物车
	//找到要添加的商品的第一张图
	var $curImg=$(".smalltu_list ul li:first-child").find("img");
	//复制这张图
	var $copyImg=$curImg.clone();
	//将其添加到页面中
	$("body").append($copyImg);
	//获取目标图片的位置，就是 我鼠标所在的位置的上方---->起始位置
	var copyImgLeft=e.pageX;
	var copyImgTop=e.pageY;
	var copyImgWidth=$curImg.width();
	//添加图片样式
	$copyImg.css({
		"position":"absolute",
    	"left":copyImgLeft,
    	"top":copyImgTop,
    	"width":copyImgWidth,
    	"opacity":1
	})
	//飞到的位置---》侧边栏购物车的位置
	var $cartBar=$(".cart_bar");
	var flyToLeft=$cartBar.offset().left;
	var flyToTop=$cartBar.offset().top+$(".cart_bar").height()/1.5;
	//动画效果
	$copyImg.animate({
		width:0,
		left:flyToLeft,
		top:flyToTop
	},700,function(){
		//动画结束时移除图片
		$copyImg.remove();
	})
	
	
	//获取商品的信息
//	var goodsId=location.search.split("?")[1];
	var goodsId=location.search.replace("?","");
	var type=$(".datamsg_name").html(); //商品名称类型
	var img=$(".goodslist").eq(0).html();     //商品图片
	var nowprice=$(".actprice span:eq(0)").html(); //商品现在的价格
	var delprice=$(".actprice span:eq(1)").html(); //商品原价
	var cheap=$(".salemsg span").html();      //商品的优惠信息
	var color=$(".select_color .choose").text(); //商品颜色
	var size=$(".select_size .choose").text();  //商品尺码
	var num=parseInt($("#num_val").val());      //当前要添加的商品数量
	var nav_num=$("#nav_cart_num").html();//导航栏显示的商品数	
	var bar_num=$(".cart_bar_num").html();//侧边栏显示的商品数
	var sum=0;
	var a =parseInt($(".cart_bar").find(".cart_bar_num").html());//之前 的商品数量	
	
	//在加入购物车添加商品之前，先遍历数组
	var name = "cart";
	//获取之前保存在cookie中的购物车信息
	var goodsArr=$.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
	
	//遍历 查找是否之前的购物车cookie中存在即将要添加的商品
	//定义一个变量来判断	
	var isExist=false;
	for(var i=0;i<goodsArr.length;i++){
		// 如果存在该商品,数量增加++
		if(goodsId==goodsArr[i].id){
			// 每点击一次就添加一个新商品

			var sum=goodsArr[i].num++
			goodsArr[i].num=Number(sum+num);
			isExist=true;  //表示商品亦存在
			
		}
		
	}



	//遍历后，如果不存在商品，则添加一个新的商品
	if(!isExist){
		//定义个对象将商品存起来
		var goods={
				id:goodsId,
				type:type,
				img:img,
				nowprice:nowprice,
				delprice:delprice,
				cheap:cheap,
				color:color,
				size:size,
				num:num,
				bar_num:bar_num*num,
				nav_num:nav_num*num
		}
		
		//将商品对象添加到商品数组中
		goodsArr.push(goods);
	}
		
		//获取cookie
		//JSON.stringify(arr)  ---->解析后的字符串，作为cookie的value来用
		$.cookie(name, JSON.stringify(goodsArr), {
			expires: 30,
			path: "/"
		});
		console.log($.cookie(name));

//获取已经添加商品

var smallList = $.cookie("cart");
if (smallList) {
		smallList = JSON.parse(smallList);
		console.log(smallList);
		var price_var=0;  //初始的商品 总价价格
		var num_var=0;		//初始的商品数量（不同的商品数）
		//有商品时显示购物车清单 和信息 隐藏或者移除空购物车
		for(var j=0;j<smallList.length;j++){
			var id=smallList[j].id;	
			var img=smallList[j].img;//商品图片
			var name=smallList[j].type;//商品名字类型
			var size=smallList[j].size;//商品尺码
			var color=smallList[j].color; //商品颜色
			var sprice=smallList[j].nowprice;//商品价格
			var num=smallList[j].num;       //商品数量 
			var total=num*parseInt(sprice.replace("¥",""));//商品总价			
			console.log("id"+id)
			
			//在nav 购物车里添加商品小列表
				var smalllistDiv=$("<div/>").addClass("goods_smalllist_info");
				smalllistDiv.appendTo($(".nav_cart_msg"));
				var listinfo=$("<div/>").addClass("smalllist_info");
				listinfo.appendTo(smalllistDiv);
				var ulNode=$("<ul></ul>");
				ulNode.appendTo(listinfo);
				var liNode1=$("<li></li>").addClass("info_l");
				ulNode.append(liNode1)
				var imgA=$("<a/>").append($("<img/>"));
				imgA.appendTo(liNode1);				
				var liNode2=$("<li></li>").addClass("info_c");
				var infoType=$("<div/>").addClass("info_type").append($("<a/>"));
//				infoType.prepend($("<i/>").addClass('type_icon'));
				var infoStyle=$("<div/>").addClass("info_style").append($("<span></span><span></span>"));
				liNode2.append(infoType,infoStyle);
				ulNode.append(liNode2)
				var liNode3=$("<li/>").addClass("info_r");
				var em1=$("<em></em>").addClass("price_num").append($("<span></span>"));				
				var em2=$("<em/>").addClass("price_cheap").append($("<span/>").text("优惠00.00"));				
				var em3=$("<em/>").addClass("del").append($("<a/>").text("删除"));
				liNode3.append(em1,em2,em3);
				em1.after($("<br/>"));
				em2.after($("<br/>"));
				em3.after($("<br/>"));
				ulNode.append(liNode3);
								
			
				$(".goods_smalllist_info").eq(j).find(".info_l").html(img);
				$(".goods_smalllist_info").eq(j).find(".info_type a").html(name);
				$(".goods_smalllist_info").eq(j).find(".info_style span:eq(0)").html(color);
				$(".goods_smalllist_info").eq(j).find(".info_style span:eq(1)").html(size);
				$(".goods_smalllist_info").eq(j).find(".price_num >span").html(total+"*"+num);
				
				price_var+=total;			
				num_var++;	
				$(".calculate_l span").eq(0).html(num);	//商品总件数
				//获取 购物车商品数量
				$(".cart_bar").find(".cart_bar_num").html(num);  //侧边栏的商品数量
				$("#nav_cart_num").html(num);		//导航栏的商品数量
//			
		}
				
				


			//当点击当前商品加入购物车，获取该商品的id
			var uid=location.href.replace("?","");
			var nownum=parseInt($("#num_val").val()); //当前要添加的数量
			console.log("当前添加数量----"+nownum);
			console.log(num)
//			nownum+=num;
			
//			nownum;  //添加后的数量
			if(uid==id){				
				$(".price_num span").html(nowprice+"*"+(nownum+num));  //				
				var total=parseInt(nowprice.replace("¥",""))*(nownum+num);   // 商品总价
					//商品总件数
			}
				$(".calculate_l span").eq(0).html(nownum);  //商品件数
				//获取 购物车商品数量
				$(".cart_bar").find(".cart_bar_num").html(nownum+num-1);  //侧边栏的商品数量
				$("#nav_cart_num").html(nownum+num-1);		//导航栏的商品数量
				var nownum=parseInt($("#num_val").val());
				var countprice=$(".cul_total").html(price_var*(nownum+num));
			
		
		//存小列表的商品
		var ssList=$.cookie("sList") ? JSON.parse( $.cookie("sList")):[];		
		var isExist=false;
		for(var i=0;i<ssList.length;i++){
			// 如果存在该商品,商品数量增加+当前选中的商品个数
			if(ssList[i].id==id){
				var ssnum=parseInt($("#num_val").val());
				// 每点击一次就添加一个新商品	
				ssList[i].num=Number(ssnum+num);
				isExist=true;  //表示商品亦存在
				
			}
			
		}
	
		//遍历后，如果不存在商品，则添加一个新的商品
		if(!isExist){
			//定义个对象将商品存起来
			var smallgoods={
				id:goodsId,
				name:name,
				size:size,
				color:color,
				num:num,
				countprice:countprice
				
			}				
		//将商品对象添加到商品数组中
		ssList.push(smallgoods);
	}		
		//获取cookie
		//JSON.stringify(arr)  ---->解析后的字符串，作为cookie的value来用
		$.cookie("sList", JSON.stringify(ssList),{
			expires: 30,
			path: "/"
		});
		console.log($.cookie("sList"));
		
		
}



















		//------------导航的购物车--------------
		if(num>0){
//			console.log('===='+sum);
			$(".nav_cart_list_empty").hide();
		}else{
			$(".nav_cart_msg").hide();	
			$(".calculate").hide();
		}
		
//		为空时显示空的div  不为空时 显示 小商品列表
		$(".nav_r_cart").hover(function() {
			$(".nav_cart_list").show();					
			$(".nav_cart_msg").show();	
			$(".calculate").show();
			
		}, function() {
			$(".nav_cart_list").hide();
	
		})
		
		
		//==========删除=====================
		$(".del").click(function(){
			$(".calculate_l span").eq(0).html(0);//商品件数
			$("#nav_cart_num").html(0); //导航栏显示的商品数
			$(".price_num span").html(0); //
			$(".cart_bar_num").html(0)  //侧边栏显示的商品数
			$(".cul_total").html(0);  //总价
			$(".nav_cart_list_empty").show();
			$(".nav_cart_msg").hide();
				$.cookie("cart", "", {
						expires: 0,
						path: "/"
					}); //清空cookie
			
			
		})
		
		//===========保存 页面中的商品数量===============
		//刷新后这个值就得从cookie取
		//判断cookie是否为空
		// 从cookie中获取商品信息	
		//判断商品列表不为空
		//==========去购物车结算================
		$(".calculate_r a").click(function(){
			location.href = "cart.html";
		})
		
			
		
		
	})
	
	
	

	
})

$(function(){
	var _goodsList = $.cookie("cart");
	//判断商品列表不为空
	if (_goodsList) {
		_goodsList = JSON.parse(_goodsList);
		console.log(_goodsList);
		for(var i=0;i<_goodsList.length;i++){
			_goodsList[i].num+=_goodsList[i].nav_num;
			$(".cart_bar_num").html(_goodsList[i].num); 
			$("#nav_cart_num").html(_goodsList[i].num);
		}

	}else{
		$(".cart_bar_num").html(0); 
		$("#nav_cart_num").html(0);
	}
	
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




/*
 //----js---------
 var url = location.search; //获取url中"?"符后的字串
 var theRequest = new Object();
 if (url.indexOf("?") != -1) {
  var str = url.substr(1);
  strs = str.split("&");
  for(var i = 0; i < strs.length; i ++) {
   theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
  }
 }
 return theRequest;
} 
 //调用
 <Script language="javascript">
var Request = new Object();
Request = GetRequest();
var 参数1,参数2,参数3,参数N;
参数1 = Request[''参数1''];
参数2 = Request[''参数2''];
参数3 = Request[''参数3''];
参数N = Request[''参数N''];
</Script>



//jq
function getQueryString(id)

{

        var  reg = new RegExp("(^|&)"+id+"=([^&]*)(&|$))","i");

        var  r = window.location.search(1).match(reg);

        if(r!=null) return unescape(r[2]);   return null;

}

 

//调用

var name = getQueryString(id)
*/