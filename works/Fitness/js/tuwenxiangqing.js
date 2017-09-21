/*
* @Author: Administrator
* @Date:   2017-09-03 16:58:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 15:28:44
*/
$(function(){

	///推荐食谱
	$(".nav").find("li").eq(3).hover(function(){
		$(".sec").slideDown();
	},function(){
		$(".sec").slideUp();
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

		//中式健康餐
		console.log(st)
		if(st>1000&&st<1700){
			$(".zhe").css({transform:"rotateX(360deg)",transition:"all 1s"});
		}else{
			$(".zhe").css({transform:"none",transition:"none"})
		}
	
	})

	///留言板
	let text=$("textarea");
	let hai=$(".hai")[0]
	let span=$("span",hai)[0];
	let fabu=$(".fabu")[0];
	let commentBox=$(".commentBox");
	let com=$(".com")[0];
	let comR=$(".comR")[0];
	let iconBox=$(".iconBox")[0];
	let max=200;		
	text.keyup(function(){		
		let len=$(this)[0].value.length;
		$(".hai").find("span").html(`${max-len+6}`);
	})
	
	$(".fabu").click(function(){
		fn();
		let h=$(".box1").height();
		let h1=$(".bigBox").height();
		h+=200;
		h1+=200;
		$(".box1").height(h);
		$(".bigBox").height(h1);
		
	})
	function fn(){
		let lis=$("<li>");
		let ele=text.val();	
		this.value='';
		lis[0].innerHTML=`
				<a href="" class="comTu">
					<img src="img/touxiang02.jpg" alt="">
				</a>
				<div class="comR">
					<h3>谨木槿汐</h3>
					<span>FITNESSFITNESS</span>
					<p>${ele}</p>
					<div class="iconBox">
						<div class="icon1 icon-lishi_icon"></div>
						<div class="date">78903人浏览</div>
						<div class="icon1 icon-xiaolianline_"></div>
						<div class="date">2017.8.26</div>
					</div>
				</div>
		`;
		commentBox.prepend(lis);
	}
		let flag=true;
		commentBox.click(function(e){
				let ele=e.target;
				if(flag){
					//真正触发点击事件的			
					if(ele.nodeName == "LI"){	
						$(ele).css({background:"#fafafa"});							
					}
					flag=false;
				}else{//再点击一次，效果消失
					if(ele.nodeName == "LI"){
						$(ele).css({background:"#fff"});					
					}
					flag=true;
				}
		})
		
})//$括号