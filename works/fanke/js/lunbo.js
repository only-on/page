/*
* @Author: Administrator
* @Date:   2017-08-15 08:29:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-15 10:41:46
*/
/*
		now(当前窗口) next(下一张)
		就位css
		 	next 右边 (widths,0)
	 	动画
	 		now(0,0)->(-widths,0)
	 		next(widths,0)->(0,0)
 		更新
 			now=next
 */
$(function(){
	let bannerBox=$('.bannerBox')[0];
	lunbo(bannerBox);
function lunbo(bannerBox){	
	let banner=$('.banner',bannerBox)[0];
	let images=$('li',banner);
	let widths=banner.offsetWidth;
	let lunbodian=$('.lubodian',bannerBox)[0];
	let dian=$('.dian',lunbodian);	
	let back=$('.back')[0];
	console.log(back)
	let forward=$('.forward')[0];
	let t;
	let now=next=0;
	let flag=true;
	// 自动轮播
	t=setInterval(move,2000);
	function move(){
		next++;
		if(next==images.length){
			next=0;
		}
		dian[now].classList.remove('hot');
		dian[next].classList.add('hot');

		images[next].style.left=`${widths}px`;
		animate(images[now],{left:-widths});
		animate(images[next],{left:0},function(){flag=true});
		now=next;
	}
	function move1(){
		next--;
		if(next==-1){
			next=images.length-1;
		}
		dian[now].classList.remove('hot');
		dian[next].classList.add('hot');

		images[next].style.left=`${-widths}px`;
		animate(images[now],{left:widths});
		animate(images[next],{left:0},function(){flag=true});
		now=next;
	}
	//鼠标移入，停止轮播,要
	bannerBox.onmouseenter=function(){
		clearInterval(t);
	}
	bannerBox.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	//鼠标点击哪个点，显示哪张图片
	for(let i=0;i<dian.length;i++){
		dian[i].onclick=function(){
			if(now==i){
				return;
			}
			if(now<i){// 点击的i比当前now大,从右边出来
				dian[now].classList.remove('hot');
				dian[i].classList.add('hot');	
				images[i].style.left=`${widths}px`;
				animate(images[now],{left:-widths});
				animate(images[i],{left:0});
				now=next=i;
			}
			if(now>i){//点击的i比当前now小,从左边出来 
				dian[now].classList.remove('hot');
				dian[i].classList.add('hot');	
				images[i].style.left=`${-widths}px`;
				animate(images[now],{left:widths});
				animate(images[i],{left:0});
				now=next=i;
			}
					
		}
	}
	//点击后退
	back.onclick=function(){
		if(!flag){//点击后退时，一张图片显示完，再显示下一张
			return;
		}
		flag=false;
		move();
	}
	forward.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move1();
	}
}
})