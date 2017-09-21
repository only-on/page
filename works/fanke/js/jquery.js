/*
* @Author: Administrator
* @Date:   2017-09-12 11:41:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-21 21:18:18
*/
$(function(){
	// 自动轮播	
	let t=0;
	let num=0;
	t=setInterval(fn,3000);
	function fn(dir="r"){
	 	if(dir=='r'){
	 		num++;
		 	if(num==$(".banner>li").length){
		 		num=0;
		 	}			 	
	 	}
	 	if(dir=="l"){
	 		num--;
		 	if(num==-1){
		 		num=$(".banner>li").length-1;
		 	}	
	 	}	
	 	$(".banner>li").hide().eq(num).show();
	 	$(".dian").removeClass('hot1').eq(num).addClass('hot1'); 	
	 }
	 //鼠标移入banner时，停止轮播
	 $('.bannerBox').hover(function(){
	 	clearInterval(t);
	 },function(){
	 	t=setInterval(fn,3000);
	 })
	
	 $(".dian").click(function(){
	 	let i=$(this).index();
	 	$(".banner>li").hide().eq(i).show();
	 	$(".dian").removeClass('hot1').eq(i).addClass('hot1');
	 	num=i;
	 })
	 //后退前进
	 $(".back").click(function(){
	 	fn("l")
	 })
	 $(".forward").click(function(){
	 	fn("r")
	 })


	 ///购物车
	 $('.right2').hover(function(){
	 	$(".goSlide").css({height:26,border:'1px solid #c1383e'});
	 },function(){
	 	$(".goSlide").css({height:0,border:'1px solid transparent'});
	 })
})
$(function(){
	//导航
	let h=$(".item").height();
	$(".items").hover(function(){
		let i=$(this).index();
		let nums=$(this).find(".slide>.item").length;
		$(this).find('.slide').css({height:nums*h+15,border:"1px solid #efefef",borderTop:'5px solid #b81c22'});
	},function(){		
		$(this).find('.slide').css({height:0,border:"none",borderTop:'none'});
	})
	
	//返回顶部
	$(".ding").click(function(){
		$(document.body).animate({scrollTop:0});
	})
})