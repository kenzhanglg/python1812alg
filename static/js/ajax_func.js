


//创建xhr 对象
function createXHR(){
	//判断是否支持该属性，如果支持，则是IE7+ ,FF,Chrome,
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}
	//IE6-
	return new ActiveXObject("Microsoft.XMLHTTP");
}

//====================ajax的封装===============================
//声明一个函数：
/*假设外界传了一个对象obj ：
 * 
 * method:是get,还是post
 * url:请求数据的接口
 * async：如果是true -->异步请求；如果是false-->同步请求
 * data：参数对象，保存http请求所需要的参数
 * data{
 * 	id:1,
 * pageNo:2,
 * }
 */

function ajax(obj){
	//1、创建xhr对象
	var xhr=createXHR();
	//判断
	obj.data=parsms(obj.data);
	
	//2、调用open()
	//参数1：GET/POST
	//参数2：请求的url
	//参数3：同步/异步
	if(/get/i.test(obj.method)){
		//如果为真表示-->GET
		//如果是GET请求，我们要考虑是否需要拼接参数
		obj.url+=obj.data.length>0 ? ("?"+obj.data):"";
	}
	xhr.open(obj.method,obj.url,obj.async);
	
	//3、调用send();
	if(/get/i.test(obj.method)){//如果是get请求
		xhr.send(null);
	}
	else{
		xhr.setRequestHeader("Content-Type","applocation/x-www-form-urlencoder");		
		//POST请求需要把参数放到send中
		xhr.send(obj.data);
		
	}
	
	//4、监听状态onready
	if(obj.async){//异步请求
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				//函数封装，回调函数
				callback();				
			}
		}
	else{//如果是同步
		callBack();
	}
		
	}
	
	function callback(){
		if(xhr.status==200){
			//回调执行obj的额success
			obj.success(xhr.responseText);
		}
		else{
			//回调obj的failure
			obj.failure(xhr.status);
			
		}
	}
	
}


/*
 	把data对象里的url参数转化成字符串，type=send&id7
 	
 */
function parsms(data){
	var arr=[];
	
	for(var i in data){
		var str=i+"="+data[i];//type=send
		//存到数组
		arr.push(str);
		//[type=send,name=Andy.....]
	
	}
	return arr.join("&");
		
}


//==============================测试代码
ajax({
	method:"GET",
	url="http://localhost:8080/ajax/checkname",
	data:{
		ragname:"lisa",
		age:18
			
	},
	async:true,
	//两个回调函数
	success:function(responseText){
		console.log("请求成功！"+responseText);
	}
	failure:function(code){
		console.log(:"请求失败了！"+code)
	}
});
