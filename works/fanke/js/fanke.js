/*
* @Author: Administrator
* @Date:   2017-08-15 12:41:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-12 11:53:16
*/
$(function(){
	let bannerBox=$('.bannerBox')[0];
	let banner=$('.banner',bannerBox)[0];
	let images=$('li',banner);
	let widths=banner.offsetWidth;
	let lunbodian=$('.lubodian',bannerBox)[0];
	let dian=$('.dian',lunbodian);	
	let back=$('.back')[0];	
	let forward=$('.forward')[0];
	let t;	
	let flag=true;
	let num=0;//当前窗口（num）消失，点击对应图片i显示
	for(let i=0;i<dian.length;i++){
		dian[i].onclick=function(){
			images[num].style.display='none';
			images[i].style.display='block';
			num=i;			
		}
	}
	// 自动轮播	
	t=setInterval(fn,3000);
	function fn(){
	 	num++;
	 	if(num==images.length){
	 		num=0;
	 	}	 	
	 	for(let i=0;i<dian.length;i++){
	 		images[i].style.display='none';
	 		dian[i].classList.remove('hot1');
	 	}
	 	dian[num].classList.add('hot1');
	 	images[num].style.display='block';
	 }
	 //鼠标移入banner时，停止轮播
	  bannerBox.onmouseenter=function(){
	  	clearInterval(t);
	  }
	   bannerBox.onmouseleave=function(){
	  	t=setInterval(fn,3000);
	  }
	   //鼠标点击后退时，轮播开始
	  back.onclick=fn1;
	  forward.onclick= fn;
	  function fn1(){
	 	num--;
	 	if(num==-1){
	 		num=images.length-1;
	 	}	 	
	 	for(let i=0;i<dian.length;i++){
	 		images[i].style.display='none';
	 		dian[i].classList.remove('hot1');
	 	}
	 	dian[num].classList.add('hot1');
	 	images[num].style.display='block';
	 }
	 /////////////////////导航///////////////////////////////
	 let navRight=$('.navRight')[0];	
	 let items=$('.items',navRight);
	 let slide=$('.slide');
	 console.log(items);	 
	 	items[0].onmouseenter=function(){
	 		slide[0].style.height='420px';	 		
	 		slide[0].style.border='1px solid #efefef';
	 		slide[0].style.borderTop='5px solid #b81c22';	 		
	 	}
	 	items[0].onmouseleave=function(){
	 		slide[0].style.height='0';
	 		slide[0].style.border='none';	 		
	 		slide[0].style.borderTop='none';
	 	}
	 	items[1].onmouseenter=function(){
	 		slide[1].style.height='497px';	 		
	 		slide[1].style.border='1px solid #efefef';
	 		slide[1].style.borderTop='5px solid #b81c22';	 		
	 	}
	 	items[1].onmouseleave=function(){
	 		slide[1].style.height='0';
	 		slide[1].style.border='none';	 		
	 		slide[1].style.borderTop='none';
	 	}
	 	items[2].onmouseenter=function(){
	 		slide[2].style.height='105px';	 		
	 		slide[2].style.border='1px solid #efefef';
	 		slide[2].style.borderTop='5px solid #b81c22';	 		
	 	}
	 	items[2].onmouseleave=function(){
	 		slide[2].style.height='0';
	 		slide[2].style.border='none';	 		
	 		slide[2].style.borderTop='none';
	 	}
	 	items[3].onmouseenter=function(){
	 		slide[3].style.height='170px';	 		
	 		slide[3].style.border='1px solid #efefef';
	 		slide[3].style.borderTop='5px solid #b81c22';	 		
	 	}
	 	items[3].onmouseleave=function(){
	 		slide[3].style.height='0';
	 		slide[3].style.border='none';	 		
	 		slide[3].style.borderTop='none';
	 	}
	 	items[4].onmouseenter=function(){
	 		slide[4].style.height='47px';	 		
	 		slide[4].style.border='1px solid #efefef';
	 		slide[4].style.borderTop='5px solid #b81c22';	 		
	 	}
	 	items[4].onmouseleave=function(){
	 		slide[4].style.height='0';
	 		slide[4].style.border='none';	 		
	 		slide[4].style.borderTop='none';
	 	}
	 	items[5].onmouseenter=function(){
	 		slide[5].style.height='102px';	 		
	 		slide[5].style.border='1px solid #efefef';
	 		slide[5].style.borderTop='5px solid #b81c22';	 		
	 	}
	 	items[5].onmouseleave=function(){
	 		slide[5].style.height='0';
	 		slide[5].style.border='none';	 		
	 		slide[5].style.borderTop='none';
	 	}
	 	items[6].onmouseenter=function(){
	 		slide[6].style.height='70px';	 		
	 		slide[6].style.border='1px solid #efefef';
	 		slide[6].style.borderTop='5px solid #b81c22';	 		
	 	}
	 	items[6].onmouseleave=function(){
	 		slide[6].style.height='0';
	 		slide[6].style.border='none';	 		
	 		slide[6].style.borderTop='none';
	 	}
	 	items[7].onmouseenter=function(){
	 		slide[7].style.height='140px';	 		
	 		slide[7].style.border='1px solid #efefef';
	 		slide[7].style.borderTop='5px solid #b81c22';	 		
	 	}
	 	items[7].onmouseleave=function(){
	 		slide[7].style.height='0';
	 		slide[7].style.border='none';	 		
	 		slide[7].style.borderTop='none';
	 	}
	 	items[8].onmouseenter=function(){
	 		slide[8].style.height='330px';	 		
	 		slide[8].style.border='1px solid #efefef';
	 		slide[8].style.borderTop='5px solid #b81c22';	 		
	 	}
	 	items[8].onmouseleave=function(){
	 		slide[8].style.height='0';
	 		slide[8].style.border='none';	 		
	 		slide[8].style.borderTop='none';
	 	}
	 
	////////////////购物车////////////////////////////////
	let right2=$('.right2')[0];
	let goSlide=$('.goSlide')[0];
	right2.onmouseenter=function(){
		goSlide.style.height='26px';
		goSlide.style.border='1px solid #c1383e';
	}
	right2.onmouseleave=function(){
		goSlide.style.height='0px';
		goSlide.style.border='1px solid transparent';
	}
})
