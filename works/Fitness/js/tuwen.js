/*
* @Author: Administrator
* @Date:   2017-08-27 00:29:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-21 19:45:32
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
		
		//男生热门
		if(st>1200&&st<2100){		
			$(".zhe").css({left:0});			
		}else{
			$(".zhe").css({left:-460});
		}	
		

		
	})

	///推荐食谱
	$(".nav").find("li").eq(3).hover(function(){
		$(".sec").slideDown();
	},function(){
		$(".sec").slideUp();
	})

	
	let widths=$('.qingBox1').width();		
	let icon4=$('.icon4');
	let now=next=0;	
	

	function move(){
		next++;
		if(next==$(".qingBox1").length){
			next=0;
		}	
		$(".qingBox1").eq(next).css({left:widths});
		$(".qingBox1").eq(now).css({left:-widths});
		$(".qingBox1").eq(next).css({left:0});			
		now=next;
	}
	function move1(){
		next--;
		if(next<0){
			next=$(".qingBox1").length-1;
		}
		$(".qingBox1").eq(next).css({left:-widths});
		$(".qingBox1").eq(now).css({left:widths});
		$(".qingBox1").eq(next).css({left:0});			
		now=next;
	}
	icon4.eq(0).click(function(){
		if(next==0){
			return;
		}
		move1();
	})
	icon4.eq(1).click(function(){
		if(next==$(".qingBox1").length-1){
			return;
		}
		move();
	})

	//团队介绍
	$(".more").hover(function(){
		$(this).find(".morzhe").fadeIn(600);
		$(this).css({color:"#fff"})		
	},function(){
		$(this).find(".morzhe").fadeOut(600);
		$(this).css({color:"#3c3d46"})			
	})	
	
	/*$(".tu1").hover(function(){
		$(this).find(".zhen").css({left:0})	
		
	},function(){
		$(this).find(".zhen").css({left:-330});
	})*/
	$(".tu1>a").sliphover();
	///热门活动
	// $(".box21>.tu2").hover(function(){
	// 	$(this).find("h3").animate({left:0})
	// })


})//$括号
