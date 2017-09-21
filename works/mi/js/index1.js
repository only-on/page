/*
* @Author: Administrator
* @Date:   2017-09-06 18:54:02
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-21 21:20:33
*/
$(function(){
	////////banner图/////////////
	//自动轮播
	let num=0;
	let t;
	t=setInterval(fn,3000);
	function fn(dir="right"){
	 	if(dir=="right"){
	 		num++;
		 	if(num==$(".bannerTu>li").length){
		 		num=0;
		 	}
	 	}
	 	if(dir=="left"){
	 		num--;
		 	if(num==-1){
		 		num=$(".bannerTu>li").length-1;
		 	}
	 	}	 
	 	$(".lunbodian>div").removeClass('hot').eq(num).addClass('hot');	 	
	 	$(".bannerTu>li").hide().eq(num).show();	
	 	
	 }
	
	 //点击哪个显示哪张	 
	 $(".lunbodian>div").click(function(){
	 	let i=$(this).index();
	 	$(".lunbodian>div").removeClass('hot').eq(i).addClass('hot');	 	
	 	$(".bannerTu>li").hide().eq(num).show(); 	
	 	num=i;
	 })
	 //移入，停止轮播
	 $(".bannerRight").mouseenter(function(){
	 	clearInterval(t);
	 }).mouseleave(function(){t=setInterval(fn,3000);})

	 //左右箭头
	 $(".back").click(function(){
	 	fn("left");
	 });
	 $(".forward").click(function(){
	 	fn("right");
	 });
	 	
	 ///测导航
	 $(".midOne").mouseenter(function(){
	 	let i=$(this).index();
	 	$(".items").eq(i).show();
	 }).mouseleave(function(){
	 	let i=$(this).index();
	 	$(".items").eq(i).hide();
	 })	 
	 //////////导航下拉///////
	 $(".Middli").mouseenter(function(){
	 	let i=$(this).index();
	 	if(i<$(".Middli").length-2){
	 		$(".navSlide").eq(i).css({height:233,boxShaow:" 0px 3px 3px 0px rgba(10, 10,10, 0.2)"})
	 		$(".navi").css({borderBottom:"1px solid #e0e0e0"})
	 	}
	 }).mouseleave(function(){
	 	let i=$(this).index();
	 	if(i<$(".Middli").length-2){
	 		$(".navSlide").eq(i).css({height:0,boxShaow:" 0px 3px 3px 0px rgba(10, 10,10, 0)"})
	 		$(".navi").css({borderBottom:"1px solid #fff"})
	 	}
	 })
	////////////搜索框下拉/////////////
	$(".right1").focus(function(){
		$(".right11").hide();
		$(".right12").hide();
		$(this).css({borderColor:"orange"});
		$(".right2").css({borderColor:"orange"});
		$(".slide").removeClass("slideNone");
		$(".slide").css({borderColor:"orange"});
	}).blur(function(){
		$(".right11").show();
		$(".right12").show();
		$(this).css({borderColor:"#e0e0e0"});
		$(".right2").css({borderColor:"#e0e0e0"});
		$(".slide").addClass("slideNone");
		$(".slide").css({borderColor:"#fff"});
	})
	///购物车
	$(".headRight1").mouseenter(function(){
		$(".xiala").css({height:100});
	}).mouseleave(function(){
		$(".xiala").css({height:0});
	})

	/////////明星单品
	//轮播
		let widths=$(".twoBig").width();
		let next=now=0;
		let t1=setInterval(move,3000);
		function move(){
			next++;
			if(next==$(".two2").length){
				next=0;	
				$(".two2").eq(next).css({left:-widths});
				$(".two2").eq(now).animate({left:widths});
				$(".two2").eq(next).animate({left:0});
				now=next;		
			}else{				
				$(".two2").eq(next).css({left:widths});
				$(".two2").eq(now).animate({left:-widths});
				$(".two2").eq(next).animate({left:0});
				now=next;
			}
		
		}
		//移入停止轮播
		 $(".two1").mouseenter(function(){
	 	clearInterval(t1);
	 }).mouseleave(function(){t1=setInterval(move,3000);})

		//点击右箭头
		let index=0;
		$(".two112").click(function(){			
			if(index==1){
				return;
			}
			index++;
			$(".two2").eq(1).css({left:widths});
			$(".two2").eq(0).animate({left:-widths});
			$(".two2").eq(1).animate({left:0});
			$(this).removeClass('hot1').siblings().addClass('hot1');
		})
		//左箭头
		$(".two111").click(function(){
			if(index==0){
				return;
			}
			index--;
			$(".two2").eq(0).css({left:-widths});
			$(".two2").eq(1).animate({left:widths});
			$(".two2").eq(0).animate({left:0});
			$(this).removeClass('hot1').siblings().addClass('hot1');			
		})
	
	///////智能硬件
	let box=$('.sanBox');	
	let renmen=$('.renmen');	
	for(let k=0;k<box.length;k++){
		remen(box[k],renmen[k])
	}		
	function remen(box,renmen){
		let a=$('.men',renmen);
		let Box=$('.san-bor-box',box);
		for(let i=0;i<a.length;i++){
		a[i].onmouseenter=function(){
			for(let j=0;j<a.length;j++){
				Box[j].style.display='none';
			}
			Box[i].style.display='block';
		}
	}
	}

})

/*$(function(){
	///智能硬件
	for(let i=0;i<$(".renmen").length;i++){
		$(".renmen").eq(i+1).find('a').mouseenter(function(){
			let j=$(this).index();
			console.log($(this),j)
			$(".four-big2").eq(i+1).find('.san-bor-box').hide().eq(j).show();
		})
	}
})*/
$(function(){
	///为你推荐
	let next1=now1=0;
	$(".jianyou").click(function(){
		if(next1==3){
			$(this).removeClass('hot1').siblings().addClass('hot1');
			return;
		}
		next1++;
		$(".tuijian").eq(next1).css({left:1226});
		$(".tuijian").eq(now1).animate({left:-1226});
		$(".tuijian").eq(next1).animate({left:0});
		now1=next1;		
	})
	$(".jianzuo").click(function(){
		if(next1==0){
			$(this).removeClass('hot1').siblings().addClass('hot1');
			return;
		}
		next1--;
		$(".tuijian").eq(next1).css({left:-1226});
		$(".tuijian").eq(now1).animate({left:1226});
		$(".tuijian").eq(next1).animate({left:0});
		now1=next1;		
	})
})
$(function(){
	/*let now2=0;
	let next2=0;
	let width1=$(".fBox").width();	
	for(let i=0;i<$(".jiantou-right").length;i++){
		$(".jiantou-right").eq(i).click(function(){			
			if(next2==2){
				return;
			}			
			next2++;
			$(".fBox").eq(i).find(".one-1").eq(next2).css({left:width1});
			$(".fBox").eq(i).find(".one-1").eq(now2).css({left:-width1});
			$(".fBox").eq(i).find(".one-1").eq(next2).css({left:0});
			$(".fBox").eq(i).find("lunbo2").eq(now2).removeClass('lunbo1');
			$(".fBox").eq(i).find("lunbo2").eq(next2).addClass('lunbo1');			
			now2=next2;
		})
	}*/
	//内容
	let fBox=$('.fBox');	
	for(let j=0;j<fBox.length;j++){
		neirong(fBox[j]);
	}	
	function neirong(fBox){
		let now2=0;
		let next2=0;
		let lunbo=$('.lunbo',fBox)[0];
		let one=$('.one-1',fBox);
		let width1=fBox.offsetWidth;		
		let lunbo2=$('.lunbo2',lunbo);
		let you=$('.jiantou-right',fBox)[0];
		let zuo=$('.jiantou-left',fBox)[0];	
		you.onclick=function(){			
			if(next2==2){
				return;
			}
			next2++;			
			lunbo2[now2].classList.remove('lunbo1');
			lunbo2[next2].classList.add('lunbo1');
			one[next2].style.left=`${ width1}px`;
			one[now2].style.left=`${- width1}px`;
			one[next2].style.left=`${0}px`;
			now2=next2;
		}		
		
		zuo.onclick=function(){
			if(next2==0){
				return;
			}
			next2--;
			lunbo2[now2].classList.remove('lunbo1');
			lunbo2[next2].classList.add('lunbo1');
			one[next2].style.left=`${- width1}px`;
			one[now2].style.left=`${ width1}px`;
			one[next2].style.left=`${0}px`;
			now2=next2;
		}
	
		////////鼠标点击哪个点,显示那张图片
			for(let i=0;i<lunbo2.length;i++){
				lunbo2[i].onclick=function(){
					if(now2==i){
						return;
					}
					if(now2<i){// 点击的i比当前now大,从右边出来
						lunbo2[now2].classList.remove('lunbo1');
						lunbo2[i].classList.add('lunbo1');
						one[i].style.left=`${width1}px`;
						one[now2].style.left=`${- width1}px`;
						one[i].style.left=`${0}px`;
						now2=next2=i;
					}
					if(now2>i){//点击的i比当前now小,从左边出来
						lunbo2[now2].classList.remove('lunbo1');
						lunbo2[i].classList.add('lunbo1'); 
						one[i].style.left=`${-width1}px`;
						one[now2].style.left=`${ width1}px`;
						one[i].style.left=`${0}px`;
						now2=next2=i;
					}
							
			}
		}
	
	}	
	
})