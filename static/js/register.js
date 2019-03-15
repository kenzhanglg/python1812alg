//注册验证
/*
	思路：
		1、输入框获取焦点，显示提示信息，失去焦点，验证是否合法
		2、判断账户输入是否合法(正则)
		3、账户要求：手机号，暂时只开放手机号码注册
		4、密码要求：6-20位字符，可使用数字，字母，或字符
		5、确认密码：是否和密码一致
		6、4位随机验证码:有大小写字母和数字组成
		7、短信验证:
		8、点击注册 通过flage 判断所有的是否合法 
		//9、判断该用户是否已经注册过了，如果有则提示不能已存在该账户不能重复注册
*/
/*
$(function(){
	var flage = false;
	//给注册账号输入框获取焦点事件
	$("#userphone").focus(function(){
		$('.register_con_tips').eq(0).html("请输入注册的手机号");
		$(".register_con_tips").eq(0).removeClass("phone_error").addClass("phone_pass")
	})
	
	//失去焦点时判断手机号是否合法
	$("#userphone").blur(function(){
		var parent=new RegExp("^[1]\\d{10}$")
		//正则表达式
		if(parent.test($(this).val())) {
			$('.register_con_tips').eq(0).html("手机号码格式正确！");
			$(".register_con_tips").eq(0).addClass("phone_pass")
			flage = true;//合法标记为true
		} else {
			$(".register_con_tips").eq(0).html("账号暂时只开放手机号码注册");
			$(".register_con_tips").eq(0).removeClass("phone_pass").addClass("phone_error");
			flage = false;//不合法标记为false
		}
		if($(this).val().length==0){
			$(".register_con_tips").eq(0).html("账号不能为空");
			$(".register_con_tips").eq(0).removeClass("phone_pass").addClass("phone_error")
			flage=false;
		}
		
	})
	
	//密码框获取焦点
	$("#password").focus(function(){
		$(".register_con_tips").eq(1).html("6-20位字符,可使用数字、字母或字符的组合");	
		$(".register_con_tips").eq(1).removeClass("password_error").addClass("password_pass");
		
	})
	$("#password").blur(function(){
		var parent=/^[\da-zA-Z]{6,20}$/;
		if(parent.test(this.value)) {
			if($(this).val().length>=6&&$(this).val().length<=10){
				$(".register_con_tips").eq(1).html("该密码比较简单，有被盗风险");				
				$(".register_con_tips").eq(1).removeClass("password_pass").addClass("password_error");				
				flage = true;
			}else{
				$(".register_con_tips").eq(1).html("密码格式正确！");
				$(".register_con_tips").eq(1).addClass("phone_pass")
				flage = true;//合法标记为true
			}
		} else {
			if($(this).val().length<6||$(this).val().length>20){
				$(".register_con_tips").eq(1).html("密码长度只能在6-20位字符之间");	
				$(".register_con_tips").eq(1).removeClass("password_pass").addClass("password_error")
				flage = false;
			}else{
				$(".register_con_tips").eq(1).html("密码只能由英文、数字及标点符号组成");
				$(".register_con_tips").eq(1).removeClass("password_pass").addClass("password_error");
				flage = false;//不合法标记为false
			}
		}
	})
	
	
	//确认密码是否一致
	$("#sure_password").focus(function(){
		$(".register_con_tips").eq(2).html("请再次输入密码");	
		$(".register_con_tips").eq(2).removeClass("surepwd_error").addClass("surepwd_pass");
	})
	//失去焦点时判断与密码的值是否一致
	$("#sure_password").blur(function(){
		if($(this).val()!=$("#password").val()){
			$(".register_con_tips").eq(2).html("两次输入密码不一致");				
			$(".register_con_tips").eq(2).removeClass("surepwd_pass").addClass("surepwd_error");
			flage=false;
		}else{
			$(".register_con_tips").eq(2).html("两次输入密码一致");	
			$(".register_con_tips").eq(2).removeClass("surepwd_error").addClass("surepwd_pass");
			flage=true;
		}
	})
	
	//验证码
	$("#testma_text").focus(function(){
		$(".register_con_tips").eq(3).html("输入验证码");	
		$(".register_con_tips").eq(3).removeClass("surepwd_error").addClass("surepwd_pass")
	})
	//设置随机的4位数的验证码
	var str="";//定义一个空字符串存放随机数
		for(var i=0;i<4;i++){			
			var  num= parseInt(Math.random() * 10);
			//  数字0-9---->48-57
            var isNum=parseInt(Math.random()*10)+48;
            //  大写字母A-Z---->65-90
            var isBig=parseInt(Math.random()*26)+65;
            //  小写字母a-z---->97-122
            var isSmall=parseInt(Math.random()*26)+97;
            if(num%3==0){
                str+=String.fromCharCode(isNum);
            }else if(num%3==1){
                str+=String.fromCharCode(isBig);
            }else{
                str+=String.fromCharCode(isSmall);
            }
            $(".ma").html(str);
		}
	$(".ma").click(function(){
		var str="";//定义一个空字符串存放随机数
		for(var i=0;i<4;i++){			
			var  num= parseInt(Math.random() * 10);
			//  数字0-9---->48-57
            var isNum=parseInt(Math.random()*10)+48;
            //  大写字母A-Z---->65-90
            var isBig=parseInt(Math.random()*26)+65;
            //  小写字母a-z---->97-122
            var isSmall=parseInt(Math.random()*26)+97;
            if(num%3==0){
                str+=String.fromCharCode(isNum);
            }else if(num%3==1){
                str+=String.fromCharCode(isBig);
            }else{
                str+=String.fromCharCode(isSmall);
            }
            $(this).html(str);
		}
	})
	
	$("#testma_text").blur(function(){
		if($(this).val()!=$(".ma").html()){
			$(".register_con_tips").eq(3).html("验证码输入有误");	
			$(".register_con_tips").eq(3).removeClass("surepwd_pass").addClass("surepwd_error")
			flage=false;
		}else{
			$(".register_con_tips").eq(3).html("验证码正确");	
			$(".register_con_tips").eq(3).removeClass("surepwd_error").addClass("surepwd_pass");
			flage=true;
		}
		
	})
	
	//点击注册按钮
	$(".register_btn").click(function(){
		if($("#remeberpro").prop("checked")){
			//对上面进行一次总的判断
			if(!flage){
				alert("输入非法，请核对后再注册");	
				$(".register_con_tips").eq(4).html("输入非法，请核对后再注册");	
				$(".register_con_tips").eq(4).removeClass("surepwd_pass").addClass("surepwd_error");	
			}else{
			//先获取之前保存在cookie中的账户
			var oldusers=$.cookie("users")?JSON.parse($.cookie("users")):[];
			//在新添加账户时先判断是否已经存在账户
			//如果存在，则不能注册
			for(var i=0;i<oldusers.length;i++){
				if($("#userphone").val()==oldusers[i].name){
					alert("该用户已经存在，不能注册！");
					return; 
				}
			}
			
			//把账户和密码保存到cookie
			//定义一个对象---->需要保存到cookie的账户
			var user={
				name:$("#userphone").val(),   //
				pwd:$("#password").val()			
			}		
			//添加新的账户
			oldusers.push(user)
			//保存到cookie中		
			$.cookie("users",JSON.stringify(oldusers),{expires:30,path:"/"});
			console.log($.cookie("users"));
			//跳转到登录页面
			alert("注册成功，欢迎进入奥莱购！请前往登录——>")
			location.href = "login.html";
			}
		}
		else{
			alert("请先同意奥莱购会员协议！")
		}
	})

})
*/

$(function () {

    // 手机验证 (失去焦点，即是输入完成后验证)
    $('#phone input').blur(function () {

        var reg = new RegExp("^1\\d{10}$") //正则表达式

        // 格式是否正确
        if (reg.test($(this).val())) {  // 符合

            request_data = {
                'phone': $(this).val()
            }

            $.get('/checkphone/', request_data, function (response) {   // 回调函数
                // 客户端接受到数据之后的处理
                console.log(response)
                if (response.status) {   // 1可用
                    $('#userphone').attr('data-content', '恭喜你账号是可用').popover('hide')
                    $('#phone').removeClass('has-error').addClass('has-success')
                    $('#phone>span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                } else {    // 0不可用
                    $('#userphone').attr('data-content', response.msg).popover('show')
                    $('#phone').removeClass('has-success').addClass('has-error')
                    $('#phone>span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                }
            })

        } else {    // 不符合
            $('#userphone').attr('data-content', '数据格式不正确').popover('show')
            $('#phone').removeClass('has-success').addClass('has-error')
            $('#phone>span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }

    })


    // 密码验证
    $('#password-head input').blur(function () {
        var reg = new RegExp("^[a-zA-Z0-9_]{6,10}$"); //正则表达式
        // 格式是否正确
        if (reg.test($(this).val())) {  // 符合
            $('#password-head').removeClass('has-error').addClass('has-success')
            $('#password-head>span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {    // 不符合
            $('#password-head').removeClass('has-success').addClass('has-error')
            $('#password-head>span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })

    // 验证密码
    $('#password-footer input').blur(function () {
        var f_val = $('#password-head input').val()
        var d_val = $('#password-footer input').val()

        // 格式是否正确
        if (f_val == d_val) {  // 符合
            $('#sure_password').popover('hide')
            $('#password-footer').removeClass('has-error').addClass('has-success')
            $('#password-footer>span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {    // 不符合
            $('#sure_password').popover('show')
            $('#password-footer').removeClass('has-success').addClass('has-error')
            $('#password-footer>span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })


    // 验证昵称
    $('#name input').blur(function () {

        // 格式是否正确
        if ($(this).val().length >= 3 && $(this).val().length <= 10) {  // 符合
            $('#name').removeClass('has-error').addClass('has-success')
            $('#name>span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {    // 不符合
            $('#name').removeClass('has-success').addClass('has-error')
            $('#name>span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })

    //验证码
    $("#testma_text").focus(function () {
        $(".register_con_tips").eq(0).html("输入验证码")
        $(".register_con_tips").eq(0).removeClass("surepwd_error").addClass("surepwd_pass")
    })
    //设置随机的4位数的验证码
    var str = "";//定义一个空字符串存放随机数
    for (var i = 0; i < 4; i++) {
        var num = parseInt(Math.random() * 10);
        //  数字0-9---->48-57
        var isNum = parseInt(Math.random() * 10) + 48;
        //  大写字母A-Z---->65-90
        var isBig = parseInt(Math.random() * 26) + 65;
        //  小写字母a-z---->97-122
        var isSmall = parseInt(Math.random() * 26) + 97;
        if (num % 3 == 0) {
            str += String.fromCharCode(isNum);
        } else if (num % 3 == 1) {
            str += String.fromCharCode(isBig);
        } else {
            str += String.fromCharCode(isSmall);
        }
        $(".ma").html(str);
    }
    $(".ma").click(function () {
        var str = "";//定义一个空字符串存放随机数
        for (var i = 0; i < 4; i++) {
            var num = parseInt(Math.random() * 10);
            //  数字0-9---->48-57
            var isNum = parseInt(Math.random() * 10) + 48;
            //  大写字母A-Z---->65-90
            var isBig = parseInt(Math.random() * 26) + 65;
            //  小写字母a-z---->97-122
            var isSmall = parseInt(Math.random() * 26) + 97;
            if (num % 3 == 0) {
                str += String.fromCharCode(isNum);
            } else if (num % 3 == 1) {
                str += String.fromCharCode(isBig);
            } else {
                str += String.fromCharCode(isSmall);
            }
            $(this).html(str);
        }
    })

    $("#testma_text").blur(function () {
        if ($(this).val() != $(".ma").html()) {
            $(".register_con_tips").eq(0).html("验证码输入有误");
            $(".register_con_tips").eq(0).removeClass("surepwd_pass").addClass("surepwd_error")
            flage = false;
        } else {
            $(".register_con_tips").eq(0).html("验证码正确");
            $(".register_con_tips").eq(0).removeClass("surepwd_error").addClass("surepwd_pass");
            flage = true;
        }

    })


    // 注册按钮
    $('#subButton').click(function () {
        console.log('注册')

        var isregister = false

        $('.register_content_r .form-group').each(function () {
            if ($(this).is('.has-success')) {
                if ($('.register_con_tips').is('.surepwd_pass')) {

                    if ($('#remeberpro').is(':checked')) {
                        isregister = true
                    }

                }
            }
        })

        if (isregister) {    // 允许注册
            $('.register_content_r form').submit()

        }else{
            alert("请检查信息是否正确或者同意奥莱购会员协议！")
        }
    })
})