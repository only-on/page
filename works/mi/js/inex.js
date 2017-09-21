/*
* @Author: Administrator
* @Date:   2017-08-10 16:10:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-20 10:14:00
*/


$(function(){
		let slide=document.getElementsByClassName('xiala')[0];
	let headRight1=document.getElementsByClassName('headRight1')[0];
	
	 headRight1.onmouseenter=function(){		
			slide.className='xiala';	
	}
	headRight1.onmouseleave=function(){		
			slide.className='xiala xiala1';		
	}
	//搜索框
	let right1=document.getElementsByClassName('right1')[0];
	let right11=document.getElementsByClassName('right11')[0];
	let right12=document.getElementsByClassName('right12')[0];
	let right2=document.getElementsByClassName('right2')[0];
		//搜索框下拉
	let slides=document.getElementsByClassName('slide')[0];	
	right1.onfocus=function(){
		right11.style.display='none';
		right12.style.display='none';
		this.style.borderColor='orange';
		right2.style.borderColor='orange';
		slides.className='slide';
		slides.style.borderColor='orange';
	}
	right1.onblur=function(){
		right11.style.display='block';
		right12.style.display='block';
		this.style.borderColor='#e0e0e0';
		right2.style.borderColor='#e0e0e0';
		slides.className='slide slideNone';
		slides.style.borderColor='#fff';
	}
	//////////////////////导航下拉//////////////////////////////////////
	let navSlide=document.getElementsByClassName('navSlide');	
	let navi=document.getElementsByClassName('navi')[0];	
	let Midd=document.getElementsByClassName('Midd')[0];	
	let list=Midd.getElementsByClassName('Middli');
	for(let i=0;i<list.length-2;i++){
		list[i].onmouseenter=function(){
		   navSlide[i].style.height='233px';	 
		   navSlide[i].style.boxShadow=' 0px 3px 3px 0px rgba(10, 10,10, 0.2)';		  
		   navi.style.borderBottom='1px solid #e0e0e0';	 
		}
		list[i].onmouseleave=function(){
		  navSlide[i].style.height='0';	
		  navSlide[i].style.boxShadow=' 0px 3px 3px 0px rgba(10, 10,10, 0)';	
		 navi.style.borderBottom='1px solid #fff';	
		}
	}	


	//////////////////////测导航///////////////////
	let mid=document.getElementsByClassName('mid')[0];
	let lis=mid.getElementsByClassName('midOne');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			let items=this.getElementsByClassName('items')[0];
			items.style.display='block';
		}
		lis[i].onmouseleave=function(){
			let items=this.getElementsByClassName('items')[0];
			items.style.display='none';
		}
	}
////////////////////////////轮播图//////////////////////////////////////
	let bannerRight=document.getElementsByClassName('bannerRight')[0];	
	let bannerTu=document.getElementsByClassName('bannerTu')[0];
	let images=bannerTu.getElementsByTagName('li');
	let lunbodian=document.getElementsByClassName('lunbodian')[0];
	let dian1=lunbodian.getElementsByTagName('div');
	let back=document.getElementsByClassName('back')[0];	
	let forward=document.getElementsByClassName('forward')[0];
	//法1
	let num=0;//当前窗口（num）消失，点击对应图片i显示
	for(let i=0;i<dian1.length;i++){
		dian1[i].onclick=function(){
			images[num].style.display='none';
			images[i].style.display='block';
			num=i;			
		}
	}
	// 自动轮播
	let t;
	t=setInterval(fn,3000);
	function fn(){
	 	num++;
	 	if(num==images.length){
	 		num=0;
	 	}	 	
	 	for(let i=0;i<dian1.length;i++){
	 		images[i].style.display='none';
	 		dian1[i].classList.remove('hot');
	 	}
	 	dian1[num].classList.add('hot');
	 	images[num].style.display='block';
	 }
	 //鼠标移入banner时，停止轮播
	  bannerRight.onmouseenter=function(){
	  	clearInterval(t);
	  }
	   bannerRight.onmouseleave=function(){
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
	 	for(let i=0;i<dian1.length;i++){
	 		images[i].style.display='none';
	 		dian1[i].classList.remove('hot');
	 	}
	 	dian1[num].classList.add('hot');
	 	images[num].style.display='block';
	 }
	// 法2
	// for(let i=0;i<dian1.length;i++){
	// 	dian1[i].onclick=function(){
	// 		for(let j=0;j<images.length;j++){
	// 			images[j].style.display='none';
	// 		}
	// 			images[i].style.display='block';
	// 	}
	// }
//////////////////////小米明星单品/////////////////////////
	let two111=$('.two111')[0];
	let two112=$('.two112')[0];
	let twoBig=$('.twoBig')[0];
	let widths=twoBig.offsetWidth;
	let two2=$('.two2');
	let two=$('.two-big')[0];
	let flag=true;	
	//点击右箭头
	two112.onclick=function(){
		if(!flag){
			flag=true;
			return flag;
		}
		two2[1].style.left=`${-widths}px`;
		animate(two2[0],{left:widths});
		animate(two2[1],{left:0});
		two112.style.color='#e0e0e2'
		two111.style.color='#a29fa0';
		flag=false;
	}
	
	two111.onclick=function(){		
		if(!flag){
			flag=true;
			return flag;
		}
		flag=false;
		two2[0].style.left=`${widths}px`;
		animate(two2[1],{left:-widths});
		animate(two2[0],{left:0});
		two111.style.color="#e0e0e2";
		two112.style.color="#a29fa0";
	}
	//轮播
	let next=now=0;
	let t1=setInterval(move,3000);
	function move(){
		next++;
		if(next==two2.length){
			next=0;	
			two2[next].style.left=`${-widths}px`;
			animate(two2[now],{left:widths});
			animate(two2[next],{left:0});
			now=next;		
		}else{
			two2[next].style.left=`${widths}px`;
			animate(two2[now],{left:-widths});
			animate(two2[next],{left:0});
			now=next;
		}
		
	}
	// function move1(){
	// 	next--;
	// 	if(next<0){
	// 		next=two2.length-1;
	// 	}
	// 	two2[next].style.left=`${-widths}px`;
	// 	animate(two2[now],{left:widths});
	// 	animate(two2[next],{left:0});
	// }
	//鼠标移入停止轮播
	two.onmouseenter=function(){
		clearInterval(t1);
	}
	two.onmouseleave=function(){
		t1=setInterval(move,3000);
	}

//////////////////////////为你推荐//////////////////////////////
	let tuijian=$('.tuijian');
	let jianzuo=$('.jianzuo')[0];
	let jianyou=$('.jianyou')[0];
	let width=tuijian[0].offsetWidth;
	let next1=now1=0;
	jianyou.onclick=function(){
		if(next1==3){			
			return;
		}		
		next1++;
		tuijian[next1].style.left=`${width}px`;
		animate(tuijian[now1],{left:-width});
		animate(tuijian[next1],{left:0});		
		now1=next1;
	}
	jianzuo.onclick=function(){
		if(next1==0){			
			return;
		}		
		next1--;
		tuijian[next1].style.left=`${-width}px`;
		animate(tuijian[now1],{left:width});
		animate(tuijian[next1],{left:0});		
		now1=next1;
	}
	///////////////////////////搭配///////////////////////
	let box1=$('.sanBox')[0];	
	let renmen1=$('.renmen')[0];
	remen(box1,renmen1);
	let box2=$('.sanBox')[1];	
	let renmen2=$('.renmen')[1];
	remen(box2,renmen2);
	let box3=$('.sanBox')[2];	
	let renmen3=$('.renmen')[2];
	remen(box3,renmen3);
	let box4=$('.sanBox')[3];	
	let renmen4=$('.renmen')[3];
	remen(box4,renmen4);	
	
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
////////////////////////内容/////////////////////////////////////
	let fBox1=$('.fBox')[0];
	let one1=$('.one-1',fBox1);
	let lunbo1=$('.lunbo',fBox1)[0];
	neirong(fBox1,lunbo1,one1);
	let fBox2=$('.fBox')[1];
	let one2=$('.one-1',fBox2);
	let lunbo2=$('.lunbo',fBox2)[0];
	neirong(fBox2,lunbo2,one2);
	let fBox3=$('.fBox')[2];
	let one3=$('.one-1',fBox3);
	let lunbo3=$('.lunbo',fBox3)[0];
	neirong(fBox3,lunbo3,one3);
	let fBox4=$('.fBox')[3];
	let one4=$('.one-1',fBox4);
	let lunbo4=$('.lunbo',fBox4)[0];
	neirong(fBox4,lunbo4,one4);

	let now2=next2=0;
	function neirong(fBox,lunbo,one){
		let widht1=fBox.offsetWidth;		
		let lunbo2=$('.lunbo2',lunbo);
		let you=$('.jiantou-right',fBox);
		let zuo=$('.jiantou-left',fBox);
		for(let i=0;i<you.length;i++){
			you[i].onclick=function(){
				if(next2==2){
					return;
				}
				next2++;
				lunbo2[now2].classList.remove('lunbo1');
				lunbo2[next2].classList.add('lunbo1');
				one[next2].style.left=`${widht1}px`;
				one[now2].style.left=`${-widht1}px`;
				one[next2].style.left=`${0}px`;
				now2=next2;
			}
		}
		for(let i=0;i<zuo.length;i++){
			zuo[i].onclick=function(){
				if(next2==0){
					return;
				}
				next2--;
				lunbo2[now2].classList.remove('lunbo1');
				lunbo2[next2].classList.add('lunbo1');
				one[next2].style.left=`${-widht1}px`;
				one[now2].style.left=`${widht1}px`;
				one[next2].style.left=`${0}px`;
				now2=next2;
			}
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
						one[i].style.left=`${widths}px`;
						one[now2].style.left=`${-widht1}px`;
						one[i].style.left=`${0}px`;
						now2=next2=i;
					}
					if(now2>i){//点击的i比当前now小,从左边出来
						lunbo2[now2].classList.remove('lunbo1');
						lunbo2[i].classList.add('lunbo1'); 
						one[i].style.left=`${-widths}px`;
						one[now2].style.left=`${widht1}px`;
						one[i].style.left=`${0}px`;
						now2=next2=i;
					}
							
			}
		}
	
	}
	

	
	
})
	
