/*
* @Author: Administrator
* @Date:   2017-09-12 08:45:30
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-12 11:04:35
*/
$(function(){
	///头部
	$(".headRight1").hover(function(){
		$(".wode").show();
	},function(){
		$(".wode").hide();
	})
	$(".headRight2").hover(function(){
		$(".wode1").show();
	},function(){
		$(".wode1").hide();
	})
	$(".shangjia").hover(function(){
		$(".shangSlide").show();
	},function(){
		$(".shangSlide").hide();
	})
	$(".Wangzhan").hover(function(){
		$(".daoHang").show();
	},function(){
		$(".daoHang").hide();
	})
})


$(function(){
	//////////////////////轮播图////////////////
	let t;
	let num=0;
	t=setInterval(fn,2000);
	function fn(){
		num++;
	 	if(num==$(".bannerBox1").length){
	 		num=0;
	 	}
	 	$(".bannerBox1").hide().eq(num).show();
	 	$(".lunbodian1").css({background:"rgba(162,162,162,0.6)"}).eq(num).css({background:"rgba(255,255,255,0.2)"})	 	
	 	
	}
	///移入停止轮播
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(fn,2000);
	})
	
	///点击哪个点，出现那张图片
	$(".lunbodian1").hover(function(){
		let i=$(this).index();
		$(".bannerBox1").hide().eq(i).show();
		$(".lunbodian1").css({background:"rgba(162,162,162,0.6)"}).eq(i).css({background:"rgba(255,255,255,0.2)"});
		num=i;//接着鼠标移入的之后继续轮播 	
	})
})

$(function(){
	////测导航
	$(".cdh").hover(function(){
		let i=$(this).index();
		$(".items").hide().eq(i).show();
	},function(){
		let i=$(this).index();
		$(".items").eq(i).hide();
	})
	//////楼层
	let sflag=true;
	let sg=$(".shisan").offset().top-100;
	let newarr=[];	
 	for(let i=0;i<$(".four-box").length;i++){
 		let lg=$(".four-box").eq(i).offset().top-100;
 		newarr.push(lg);
 	}
 	newarr.push(sg);
 	$(window).scroll(function(){
 		let st=$(document.body).scrollTop();
 		if(st>500){
 			if(sflag){
 				sflag=false;
 				$(".souTop").css({top:0});
 				$(".slide").css({left:10});
 			}
 		}else{
 			if(!sflag){
 				sflag=true;
 				$(".souTop").css({top:-50});
 				$(".slide").css({left:-36});
 			}
 		}

 		//滚动到哪个楼层,哪个楼层颜色发生变化
 		let ch=$(window).innerHeight();
 		let num=0;
	 	for(let i=0;i<newarr.length;i++){
	 		if((st+ch)>newarr[i]+200){
	 			$(".mli").css({background:''}); 
	 			$(".mli").eq(i).css({background:color[i]})	
	 			num=i; 			
	 		}
	 		if((st+ch)<newarr[0]){
	 			$(".mli").css({background:''});
	 		}
	 	}
 	})
 	//点击哪个楼层，滚动到哪个楼层
 	let color=[`#ea5f8d`,`#0aa6e8`,`#64c333`,`#f15453`,`#f7a945`,`#ea5f8d`,`#ff0036`];
 	for(let i=0;i<$(".mli").length;i++){
 		$(".mli").eq(i).click(function(){
 			$(document.body).animate({scrollTop:newarr[i]});
 			$(".mli").css({background:''}).eq(i).css({background:color[i]}); 	
 		}) 		
 	}

 	///返回顶部
 	$(".dingbu").click(function(){
 		$(document.body).animate({scrollTop:0})
 	}) 	
})

$(function(){
	////右边侧边栏
	console.log($(".quan"))
	$(".guding>li").mouseenter(function(){
		$(this).find(".quan").show().animate({right:35});
		$(this).find(".sc").show();
	}).mouseleave(function(){
		$(this).find(".quan").hide().animate({right:70});
		$(this).find(".sc").hide();
	}).eq(9).click(function(){
		$(document.body).animate({scrollTop:0});
	})
	$(".guding>li").click(function(){
		$(this).find(".quan").hide();
		$(this).find(".saoma").show();
	}).mouseleave(function(){
		$(this).find(".saoma").hide();
	})
	

})