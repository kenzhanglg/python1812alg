
//登录页面
//1、用户名验证：用户名长度只能在4-20位字符之间，只能为手机号或者邮箱
//2、记住密码，保存到cookie
//3、点击立即登录，判断是否匹配用户名和密码

$(function() {
	$('#login-i').click(function () {
        // 设置cookie
        $.cookie('back', 'mine', {expires: 3, path: '/'})

        window.open('/login/', '_self')
    })




/*
	//用户名输入框获取焦点
	$("#username").focus(function(){
		$(".login_con_tips").eq(0).html("请输入用户名");
		$(".login_con_tips").eq(0).removeClass("name_error").addClass("name_pass")
		
	})
		
	$("#username").blur(function(){
		var parent1=/^[1]\d{10}$/g;
		var parent2=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
		if(parent1.test(this.value)||parent2.test(this.value)){
			$(".login_con_tips").eq(0).html("用户名格式正确！");
			$(".login_con_tips").eq(0).removeClass("name_error").addClass("name_pass")
			flage = true;//合法标记为true
		} else {
		
			if($(this).val().length<4||$(this).val().length>20){
				$(".login_con_tips").eq(0).html("用户名长度只能在4-20位字符之间");	
				$(".login_con_tips").eq(0).removeClass("name_pass").addClass("name_error")
				flage = false;
			}else{
				$(".login_con_tips").eq(0).html("用户名只能为手机号或者邮箱");
				$(".login_con_tips").eq(0).removeClass("name_pass").addClass("name_error");
				flage = false;//不合法标记为false
			}
		}
	})
	
	
	
		//点击登录按钮
		$(".login_con_btn_now").click(function() {
			//如果选上了 记住密码 存入cookie			
				var oldusers = $.cookie("users"); //是一个数组
				if(oldusers) {
					//获取cookie中所有注册过的账户
					var oldusers = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
					//遍历查找是否有匹配的用户
					var isExist=false;//表示是否存在该账户，默认表示不存在
					for(var i = 0; i < oldusers.length; i++) {
						//如果账户和密码是匹配的
						if($("#username").val() == oldusers[i].name && $("#userpwd").val() == oldusers[i].pwd) {
							alert("登录成功！");
							isExist=true;//表示存在
							//跳转到登录页面
							location.href = "index.html";
							$(".top_login a").html("欢迎登录")
//							$(".top_login").append("<span/>").addClass("logined_user").text(oldusers[i].name);
							$(".top_register a").html("退出登录")
							console.log(oldusers);									
						}
					}					
					//如果不存在,没有找到匹配的账户或密码
					if(!isExist){
						alert("用户名或密码不存在！核对后重新输入")
					}		
				}
			
			
			
			//===================存一个临时的用户===========================
			
			var  loginuser= $.cookie("username");
			var _username=$.cookie("username")?JSON.parse($.cookie("username")):[];
			var isExist=false;
			for(var j=0;j<_username.length;j++){
				//如果
				if(name==_username[j].name){
					isExist=true;
				}
				
			}
			var username=$("#username").val();
			if(!isExist){
				var name={
					name:username
				}
				_username.push(name);
			}
			
			//解析，获取cookie
			$.cookie(loginuser,JSON.stringify(_username),{
				expires:none,
			    path: "/"
			})
			console.log($.cookie(loginuser));
			
			
			
		})
		
		*/
	})