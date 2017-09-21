/*
* @Author: Administrator
* @Date:   2017-09-12 11:25:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-12 11:39:50
*/
$(function(){
	let num=0;
	let t;
	t=setInterval(move,3000)
	function move(){
		num++;
		if(num==$(".banner").length){
			num=0;
		}
		$(".banner").hide().eq(num).show();
		$(".lunbo>li").removeClass('hot').eq(num).addClass('hot');		
	}
	//鼠标移入停止轮播
	$(".banners").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,3000)
	})

	$(".yuan").click(function(){
		move();
	})
	$(".yuan1").click(function(){
		move();
	})
	//鼠标点击哪个点显示那张图片
	$(".lunbo>li").click(function(){
		let i=$(this).index();
		$(".banner").hide().eq(i).show();
		$(".lunbo>li").removeClass('hot').eq(i).addClass('hot');
		num=i;	
	})
	///下拉
	$(".bao").click(function(){
		$(".slide").show();
	}).mouseleave(function(){
		$(".slide").hide();
	})
})