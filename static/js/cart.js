
$(function(){
	//点击加入购物车
	//移除掉购物车中默认的空状态
	//.empty()
	//有商品时显示购物车清单 和信息 隐藏或者移除空购物车
	
	var uid=location.search;
	console.log(uid);
	// 从cookie中获取商品信息	
	var goodsList = $.cookie("cart");
	var price_var=0;  //初始的商品 总价价格
	var num_var=0;		//初始的商品数量（不同的商品数）
	//判断商品列表不为空
	if (goodsList) {
		goodsList = JSON.parse(goodsList);
		console.log(goodsList);
		//有商品时显示购物车清单 和信息 隐藏或者移除空购物车
		$(".cart_msg").eq(0).show();
		$(".cart_msg").eq(1).html("").hide();
		$(".cart_msg").eq(2).show();

		//遍历数组，显示的所有信息
		//获取商品详情的信息，创建节点并添加到购物车中
		for(var i=0;i<goodsList.length;i++){
			
			var id=goodsList[i].id;	
			var img=goodsList[i].img;//商品图片
			var name=goodsList[i].type;//商品名字类型
			var size=goodsList[i].size;//商品尺码
			var color=goodsList[i].color; //商品颜色
			var sprice=goodsList[i].nowprice;//商品价格
			var num=goodsList[i].num;       //商品数量 
			var total=num*parseInt(sprice.replace("¥",""));//商品总价			
			console.log("id"+id)
			
			var ulNodes=$("<ul/>").addClass("cartlist_info table_msg")
			$(".cartlist_table").append(ulNodes);
			var liNode1=$("<li/>").addClass("cartlist_info_choose table_data");
			var liNode2=$("<li/>").addClass("cartlist_info_goods table_data");
			var liNode3=$("<li/>").addClass("cartlist_info_singleprice table_data");
			var liNode4=$("<li/>").addClass("cartlist_info_number table_data");
			var liNode5=$("<li/>").addClass("cartlist_info_cheap table_data");
			var liNode6=$("<li/>").addClass("cartlist_info_total table_data");
			var liNode7=$("<li/>").addClass("cartlist_info_handle table_data");
			
			$(".cartlist_info").eq(i).append(liNode1);
			$(".cartlist_info").eq(i).append(liNode2);
			$(".cartlist_info").eq(i).append(liNode3);
			$(".cartlist_info").eq(i).append(liNode4);
			$(".cartlist_info").eq(i).append(liNode5);
			$(".cartlist_info").eq(i).append(liNode6);
			$(".cartlist_info").eq(i).append(liNode7);
		
			
			$("<input type='checkbox' checked='checked'/>").appendTo(liNode1);
			var orderdiv=$("<div/>").addClass("order_gooods");
			orderdiv.appendTo(liNode2);
			var tu=$("<div/>").addClass("cartlist_goods_tu").append("<a></a>");
			tu.appendTo(orderdiv);
			var type=$("<div/>").addClass("cartlist_goods_type");
			type.appendTo(orderdiv);
			var typediv1=$("<div/>").addClass("cartlist_goods_msg").append($("<a/>").addClass("goods_type_title"));
//			$("<i></i>").addClass("type_icon").appendTo($(".goods_type_title"));
			var typediv2=$("<div/>").addClass("goods_types");
			var typespan1=$("<span/>").addClass("goods_types_size");
			var typespan2=$("<span/>").addClass("goods_types_color");
			typespan1.appendTo(typediv2);
			typespan2.appendTo(typediv2);
			typediv1.appendTo(type);
			typediv2.appendTo(type);
			$(".cartlist_info_cheap").html("&yen;00.00");
			var infonumdiv=$("<div/>").addClass("info_num");
			infonumdiv.appendTo(liNode4);
			var infoul=$("<ul/>");
			var infoli1=$("<li/>").append($("<a>-</a>"));
			var infoli2=$("<li/>").append($("<input type='text'/>").addClass("cartlist_goods_num"));
			var infoli3=$("<li/>").append($("<a>+</a>"));
			infoli1.appendTo(infoul);
			infoli2.appendTo(infoul);
			infoli3.appendTo(infoul);
			infoul.appendTo(infonumdiv);
			
			$("<span/>").appendTo(liNode6);
			var p1=$("<p><a>移入收藏夹</a></p>");
			var p2=$("<p><a>删除</a></p>");
			p1.appendTo(liNode7);
			p2.appendTo(liNode7);
			
			$(".cartlist_info").eq(i).find(".cartlist_goods_tu a").html(img);//商品图片
			$(".cartlist_info").eq(i).find(".goods_type_title").html(name);  //商品名字类型
			$(".cartlist_info").eq(i).find(".goods_types_size").html(size);  //商品尺码
			$(".cartlist_info").eq(i).find(".goods_types_color").html(color);  //商品尺码
			$(".cartlist_info").eq(i).find(".cartlist_info_singleprice").html(sprice); //商品价格
			$(".cartlist_info").eq(i).find(".cartlist_goods_num").val(num); //商品数量
			$(".cartlist_info").eq(i).find(".cartlist_info_total span").html(total); //商品总价
			
//			$(".buy_total span").html("￥"+);//被选商品的总价
//			$(".buy_num span").html(num); //被选商品的数量
				
			price_var+=total;			
			num_var++;
		}
		$(".buy_total span").html("￥"+price_var);//被选商品的总价
		$(".buy_num span").html(num_var); //被选商品的数量
		$(".cartlist_tittle_l span").html(num);
		
		
		//===============商品数量的增加和减少=============================
		
		//点击+添加 ,在原来已经添加的数量上再加，商品总价也随之增加
		$(".info_num ul li:last-child").click(function(){
			var j=$(this).parent().parent().parent().parent().index();//1开始
			console.log("jiajia"+j)
			var num=parseInt($(".cartlist_goods_num").eq(j-1).val());
			var _price=$(".cartlist_info_singleprice").eq(j-1).html().replace("¥","");
			console.log(_price)
			var price=parseInt(_price);
//			var price=parseInt($(this).parents().find(".cartlist_info_singleprice").html().replace("¥",""));
			var total=price*num;  //单价x数量			
			$(".cartlist_goods_num").eq(j-1).val(num+1);
			$(".cartlist_info_total span").eq(j-1).html(total+price);
			if(num==10){
				alert("商品数量最多添加10件");
				$(".cartlist_goods_num").eq(j-1).val(10);
				$(".cartlist_info_total span").eq(j-1).html(total-price);
			}
			calculate();
			var newnum=parseInt($(".cartlist_info").eq(j-1).find(".cartlist_goods_num").val());    //当前要添加的商品数量
			var newtotal=$(".buy_total span").html();    //所有商品的总价
			console.log("当前商品的数量==="+newnum);
//			var index=$(this).parent().parent().parent().parent().parent().index();
			
			console.log("加减的父元素下标==="+(j-1));
			for(var k=0;k<goodsList.length;k++){
				//判断改变的商品的下标与cookie的商品id是否相同
				if(k==j-1){					
					goodsList[k].num=newnum;
					goodsList[k].total=newtotal;
				}
			}
			$.cookie("cart",JSON.stringify(goodsList),{expires:30, path: "/"}); 
			console.log(goodsList);
			console.log($.cookie("cart"));
			
		})
		
		//点击- 在原来已经添加的数量上减少，数量减少，商品总价也随之减少
		$(".info_num ul li:first-child").click(function(){
			var j=$(this).parent().parent().parent().parent().index();
			console.log("jian"+j);
			var num=parseInt($(this).parents().find(".cartlist_goods_num").eq(j-1).val());
			var _price=$(".cartlist_info_singleprice").eq(j-1).html().replace("¥","");
			console.log(_price)
			var price=parseInt(_price);
			var total=price*num;  //单价x数量	
			$(".cartlist_goods_num").eq(j-1).val(num-1); //商品数量减一，总价也减去一个商平的价格
			$(".cartlist_info_total span").eq(j-1).html(total-price);
			if(num==1){
				alert("商品数量至少添加1件");
				$(".cartlist_goods_num").eq(j-1).val(1);
				$(".cartlist_info_total span").eq(j-1).html(price);
			}
			calculate();
			var newnum=parseInt($(".cartlist_info").eq(j-1).find(".cartlist_goods_num").val());    //当前要添加的商品数量
			var newtotal=$(".buy_total span").html();    //所有商品的总价
			console.log("当前商品的数量==="+newnum);
//			var index=$(this).parent().parent().parent().parent().parent().index();
			
			console.log("加减的父元素下标==="+(j-1));
			for(var k=0;k<goodsList.length;k++){
				//判断改变的商品的下标与cookie的商品id是否相同
				if(k==j-1){					
					goodsList[k].num=newnum;
					goodsList[k].total=newtotal;
				}
			}
			$.cookie("cart",JSON.stringify(goodsList),{expires:30, path: "/"}); 
			console.log(goodsList);
			console.log($.cookie("cart"));
		})
			
		//=========================全选和单选=================================
		//点击全选框，实现全选
		$("#allchecked").click(function(){
			//被选中的状态
			var isCheck=$(this).prop("checked");
			//列表中的复选框状态与当前一致
			$(':checkbox').not(':last').prop('checked',$(this).prop('checked'));
			calculate();
			
		})
		
		
		// 当在购物车总改变商品数量时 ，被选商品的 结算价格
		$(".cartlist_info_choose input").click(function(){

			var j=$(this).parent().parent().index();
			console.log("j===="+j)
			var pp=$(".cartlist_info").eq(j-1);
			//===数量====
			$(".buy_num span").html($(".cartlist_info_choose input:checked").length);
			// 结算价格
			if($(this).prop("checked")){
				var price_x=parseInt(pp.find(".cartlist_info_singleprice").html().replace("¥",""));
				var num_x=parseInt(pp.find(".cartlist_goods_num").val());
				var calsum=parseInt($(".buy_total span").html().replace("￥",""));
				$(".buy_total span").html("￥"+(calsum+num_x*price_x));			
			}
			else{
				var price_x=parseInt(pp.find(".cartlist_info_singleprice").html().replace("¥",""));
				var num_x=parseInt(pp.find(".cartlist_goods_num").val());
				var calsum=parseInt($(".buy_total span").html().replace("￥",""));
				$(".buy_total span").html("￥"+(calsum-num_x*price_x));
				
			}

		})
		
		
		
		function calculate(){			
			var count=0; //结算 初始
			var sum=0;  //商品件数 初始
			for(var k=0;k<$(".cartlist_info").length;k++){
				var ulNode=$(".cartlist_info").eq(k);
				if(ulNode.find($(":checked").prop(":checked"))){
					
					count+=parseInt(ulNode.find($(".cartlist_info_total span")).html());
					sum++;					
				}				
			}
			console.log("结算---"+count);
			$(".buy_total span").html("￥"+count);
			$(".buy_num span").html(sum);
		}
		
			
		
	
		//========================删除商品，移除cookie========================
			// 删除所有商品
			$(".goBuy_l span").eq(2).find("a").click(function(){
				
				if($("#allchecked").prop("checked")){				
					// 清楚当前在cookie中的数据
					console.log("全删=====")
					$.cookie("cart"," ",{expires: 0, path: "/"}); 
					location.href="cart.html";
					$(".cart_msg").eq(1).show();
					$(".cart_msg").eq(2).hide();
					$(".cart_msg").eq(0).hide();
				}
				else{
					alert("请选择要删除的商品！");
				}
			});
			//删除单个商品
			//获取要删除商品对应的cookie数组里面对应商品的下标-----也就是要删除商品对应的购物车中ul的下标
			//将该下标所对应的商品从cookie数组中删除--->goodsList.splice(index,1)
			$(".cartlist_info_handle p").eq(1).find("a").click(function(){
				var index=$(this).parent().parent().parent().parent().index();
				console.log("ul--index==="+index);
				//清除被选商品的cookie
				goodsList.splice(index,1);		
				$.cookie("cart",JSON.stringify(goodsList),{expires:22, path: "/"}); 
				location.href="cart.html";
				calculate();
				var len=$(".cartlist_info").length;
				console.log("len==="+len);
				if(len==0){
					$(".cart_msg").eq(1).show();
					$(".cart_msg").eq(2).hide();
					$(".cart_msg").eq(0).hide();
				}
			})
		
		$(".goBuy_r ul li").eq(1).find("a").click(function(){
			if(!$(':checkbox').prop('checked')){
				alert("请选择要结算的商品")
			}else{
				alert("商品:"+$(".buy_num span").html()+"<br/>总价："+$(".buy_total span").html());
			}
			
			
		})
		
	}
	
	


	//===================底部热卖推荐=================
	//从cart.json中获取数据
	$.get("json/cart_hotsale.json",function(data){
		//遍历json
		for(var i=0;i<data.length;i++){
			var obj=data[i];
			var id=obj.id;
			var src=obj.src;
			var type=obj.type;
			var nowprice=obj.nowprice;
			var delprice=obj.delprice;
			//创建 节点，将其添加到页面中
			$(".cart_hotsale_content ul").append("<li><div class='cart_hotsale_tu'><a href='#' target='_blank'><img src="+src+"/></a></div><div class='cart_hotsale_type'><a href='#' target='_blank'>"+type+"</a></div><div class='cart_hotsale_price'><span>"+nowprice+"</span><del>"+delprice+"</del></div></li>")
		}
		
		
	})
	
	//==========================================
	
	
	
	
	
	
})
