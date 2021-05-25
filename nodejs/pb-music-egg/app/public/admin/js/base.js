
//这个是字调用函数，页面已加载就会调用里面的函数， 可以把一些需要一开始就加载的函数放到这里面
$(function(){
	
	app.init();

	app.deleteConfirm();

	
	
})

	let app = {


		init(){

			//让左侧导航栏前三栏折叠
			 $(".aside>li:nth-child(1) ul, .aside>li:nth-child(2) ul, .aside>li:nth-child(3) ul").hide();

				$('.aside h4').click(function(){
					//$(this).toggleClass('active');
					$(this).siblings('ul').slideToggle();


					if($(this).find("span").hasClass("nav_bottom")){
						$(this).find("span").removeClass("nav_bottom");
						$(this).find("span").addClass("nav_top");
					}else{
						$(this).find("span").removeClass("nav_top");
						$(this).find("span").addClass("nav_bottom");
					}
				})
		},

		//调整iframe页面高度
		resizeIframe: function(){
			let height = document.documentElement.clientHeight - 100;
			document.getElementById("rightMain").height = height;
		},


		//删除确认
		deleteConfirm:function(){
			$(".delete").click(function(){
				let flag = confirm("确定要删除吗?");
				return flag;
			});
		},

		/**
		 *  修改状态
		 * @param {*} el  带修改的元素
		 * @param {*} model 数据库
		 * @param {*} attr  要修改的属性名
		 * @param {*} _id   id
		 */
		changeStatus(el, model, attr, _id){
			$.get("/admin/changeStatus", {
				model, attr, _id
			}, data=>{
				if(data.success){
					if(el.src.indexOf("yes")> -1){
						el.src= "/public/admin/images/no.gif";
					}else{
						el.src= "/public/admin/images/yes.gif";
					}
				}
			});

		},
	

		/**
		 * 修改文本数字
		 * @param {*} el 要修改的元素
		 * @param {*} model  表名
		 * @param {*} attr 修改的属性名
		 * @param {*} id  id
		 */
		editNum(el, model, attr, id){


			//  获取当前的元素值
			let val = $(el).html();
			console.log(val);

			let input = $("<input  value='' />");

			$(el).html(input);

			
			//让input 自动获取焦点
			$(input).trigger("focus").val(val);

			$(input).on("click",function(){
				return false; //阻止冒泡事件
			})

			// 失去焦点
			$(input).on("blur", function(){  //这里不要使用es6的语法， 浏览器不支持
				// alert($(this).val());
				val = $(this).val(); //获取失去焦点时的值
				if(val == ""){
					val = 0;
				}
				$(el).html(val);

				//失去焦点时触发修改apI
				$.get("/admin/editNum", {
					model, attr, value: val,  id
				}, data=>{
					if(data.success){
						console.log("修改成功");
					}
				});
			})


		}

	}



