/*
* @Author: Administrator
* @Date:   2017-08-26 14:53:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-26 18:13:55
*/
$(function(){
	let banners=$('.banners')[0];
	let banner=$('.banner',banners);
	let nav=$('nav')[0];
	let widths=banners.offsetWidth;
	let lunbo=$('.lunbo')[0];
	let dian=$('li',lunbo);
	let yuan=$('.yuan')[0];
	let yuan1=$('.yuan1')[0];
	let num=0;
	let t;
	t=setInterval(move,3000)
	function move(){
		num++;
		if(num==banner.length){
			num=0;
		}
		for(let i=0;i<banner.length;i++){
			dian[i].classList.remove('hot');
			banner[i].style.display='none';
		}
		dian[num].classList.add('hot');
		banner[num].style.display='block';
	}
	//鼠标移入停止轮播
	banners.onmouseenter=function(){
		clearInterval(t);
	}
	banners.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	yuan.onclick=function(){
		move();
	}
	yuan1.onclick=function(){
		move();
	}
	//鼠标点击哪个点显示那张图片
	for(let i=0;i<dian.length;i++){
		dian[i].onclick=function(){
			for(let j=0;j<dian.length;j++){
				banner[j].style.display='none';
				dian[j].classList.remove('hot');
			}
			banner[i].style.display='block';
			dian[i].classList.remove('hot');
		}
	}
	
	////下拉
	let slide=$('.slide')[0];
	let bao=$('.bao')[0];
	bao.onclick=function(){
		slide.style.display='block';
	}
	console.log(slide)

})//$括号