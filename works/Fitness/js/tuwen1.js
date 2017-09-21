/*
* @Author: Administrator
* @Date:   2017-09-04 23:46:16
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-18 18:11:47
*/
$(function(){
	
	$(window).scroll(function(){
		let st=$(document.body).scrollTop();
		if(st>700){
			$(".fanhui").show();
		}else{
			$(".fanhui").hide();
		}
		$(".fanhui")[0].onclick=function(){
			$(document.body).animate({scrollTop:0})
		}
		if(st>0){
			$(".nav").hide();
			$(".logo").hide();
			$(".ding").css({top:0})
		}else{
			$(".nav").show();
			$(".logo").show();
			$(".ding").css({top:-100})
		}
})