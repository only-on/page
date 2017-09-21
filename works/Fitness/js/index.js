/*
* @Author: Administrator
* @Date:   2017-08-22 08:49:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-18 23:11:49
*/
$(function(){
	////////轮播图///////////////////////////		
	let next=now=0;
	let t;
	let widths=$(".banner").width();	
	t=setInterval(fn,3000)
	function fn(){
		next++;
		if(next==$(".banner>li").length){
			next=0;
		}
		$(".banner>li").eq(next).css({left:widths});
		$(".banner>li").eq(now).animate({left:-widths});
		$(".banner>li").eq(next).animate({left:0});

		$(".lunbo1").removeClass('hot').eq(next).addClass('hot');
		now=next;				
	}
	///点击哪张，显示哪张
	$(".lunbo1").click(function(){
		let i=$(this).index();
		if(now==i){
			return;
		}
		if(now>i){
			$(".banner>li").eq(i).css({left:-widths});
			$(".banner>li").eq(now).animate({left:widths});
			$(".banner>li").eq(i).animate({left:0});
			$(".lunbo1").removeClass('hot').eq(i).addClass('hot');
			now=next=i;			
		}
		if(now<i){
			$(".banner>li").eq(i).css({left:widths});
			$(".banner>li").eq(now).animate({left:-widths});
			$(".banner>li").eq(i).animate({left:0});
			$(".lunbo1").removeClass('hot').eq(i).addClass('hot');
			now=next=i;
		}
	})
	
	///鼠标移入轮播点时，停止轮播
	$(".lunbo").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(fn,3000);
	})
	
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
	///推荐食谱
	$(".nav").find("li").eq(3).hover(function(){
		$(".sec").slideDown();
	},function(){
		$(".sec").slideUp();
	})

	
	
})//$括号
