/*
* @Author: Administrator
* @Date:   2017-08-13 14:35:49
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-26 14:52:02
*/
$(function(){
	let headRight1=document.getElementsByClassName('headRight1')[0];
	let headRight2=document.getElementsByClassName('headRight2')[0];
	let wode=document.getElementsByClassName('wode')[0];
	let wode1=document.getElementsByClassName('wode1')[0];
	let shangjia=document.getElementsByClassName('shangjia')[0];	
	let shangSlide=document.getElementsByClassName(' shangSlide')[0];
	let Wangzhan=document.getElementsByClassName('Wangzhan')[0];
	let daoHang=document.getElementsByClassName('daoHang')[0];
	headRight1.onmouseenter=function(){
		wode.style.display='block';
	}
	headRight1.onmouseleave=function(){
		wode.style.display='none';
	}
	headRight2.onmouseenter=function(){		
		wode1.style.display='block';
	}
	headRight2.onmouseleave=function(){
		wode1.style.display='none';
	}
	 shangjia.onmouseenter=function(){
	 	 shangSlide.style.display='block';
	 }
	 shangjia.onmouseleave=function(){
	 	 shangSlide.style.display='none';
	 }
	 Wangzhan.onmouseenter=function(){
	 	daoHang.style.display='block';
	 }
	Wangzhan.onmouseleave=function(){
	 	daoHang.style.display='none';
	 }
///////////////////////轮播图//////////////////////////////////
	let banner=document.getElementsByClassName('banner')[0];
	let bannerBox=document.getElementsByClassName('bannerBox')[0];
	let bannerBox1=document.getElementsByClassName('bannerBox1');
	let lunbodian=document.getElementsByClassName('lunbodian')[0];
	let lunbodian1=lunbodian.getElementsByClassName('lunbodian1');
	let num=0;
	for(let i=0;i<lunbodian1.length;i++){
		lunbodian1[i].onmouseenter=function(){
			for(let j=0;j<bannerBox1.length;j++){
				bannerBox1[j].style.display='none';
				lunbodian1[j].style.background='rgba(162,162,162,0.6)';
			}			
			bannerBox1[i].style.display='block';
			lunbodian1[i].style.background='rgba(255,255,255,0.6)';
			num=i;			
		}
	}
	let t;
	t=setInterval(fn,2000);
	function fn(){
		num++;
	 	if(num==bannerBox1.length){
	 		num=0;
	 	}	 	
	 	for(let i=0;i<lunbodian1.length;i++){
	 		bannerBox1[i].style.display='none';
	 		lunbodian1[i].style.background='rgba(162,162,162,0.6)';
	 	}
	 	lunbodian1[num].style.background=' rgba(255,255,255,0.2)';
	 	bannerBox1[num].style.display='block';
	}
	//鼠标移入停止轮播
	  banner.onmouseenter=function(){
	  	clearInterval(t);
	  }
	   banner.onmouseleave=function(){
	  	t=setInterval(fn,3000);
	  }
	  /////////////////////侧导航/////////////
	  let cedaohang=$('.cedaohang')[0];
	  let lis=$('.cdh',cedaohang);
	  for(let i=0;i<lis.length;i++){
	  		lis[i].onmouseenter=function(){
	  			let items=$('.items',lis[i])[0];
	  			items.style.display='block';
	  		}
	  		lis[i].onmouseleave=function(){
	  			let items=$('.items',lis[i])[0];
	  			items.style.display='none';
	  		}
	  }
	 
	  	let souTop=$('.souTop')[0]; ////上面出来的搜索框///
		let sflag=true;
		let fourBox=document.querySelectorAll('.four-box');
		let shisan=document.querySelector('.shisan');
		let slide=document.querySelector('.slide');
		let mli=document.querySelectorAll('.mli');
		let dingbu=document.querySelector('.dingbu');
		let pg=window.innerHeight;
		let sg=shisan.offsetTop-100;
		let newarr=[];
		
		
		fourBox.forEach(element=>{
					let lg=element.offsetTop-100;
					newarr.push(lg);
			})
		newarr.push(sg);
	  	window.onscroll=function(){
  		 	let st=document.body.scrollTop;		  			
			  if(st>500){
					if(sflag){				
						sflag=false;
						souTop.style.top='0';
						slide.style.left='10px';					
					}
				}else{
					if(!sflag){
						sflag=true;
						souTop.style.top='-50px';
						slide.style.left='-36px';
					}
				}
				//点击哪个楼层，滚动到哪个楼层
				for(let i=0;i<mli.length;i++){
					mli[i].onclick=function(){
						animate(document.body,{scrollTop:newarr[i]});
						for(let j=0;j<mli.length;j++){
							mli[j].style.background='';
						}
						mli[i].style.background=`${Color(i)}`;
					}
				}
				//滚动到哪个楼层,哪个楼层颜色发生变化
				for(let i=0;i<newarr.length;i++){
					if((document.body.scrollTop+100)>newarr[i] && (document.body.scrollTop+100)<newarr[i+1]){
						mli[i].style.background=`${Color(i)}`;
					}else if((document.body.scrollTop+100)>newarr[newarr.length-1]){
						mli[i].style.background='';
						mli[newarr.length-1].style.background=`${Color(newarr.length-1)}`;
					}
					else{
						mli[i].style.background='';
					}
				}
				
				dingbu.onclick=function(){
					animate(document.body,{scrollTop:0});
				}	
				
				function Color(num){
					let newarr1=[];
					newarr1.push(`#ea5f8d`,`#0aa6e8`,`#64c333`,`#f15453`,`#f7a945`,`#ea5f8d`,`#ff0036`);
					return newarr1[num];
				}		

	  }//滚轮事件括号
	 /////////////////右边固定//////////
	 let guding=$('.guding')[0];
	 let list=$('li',guding);
	 let quan=$('.quan')[0];
	 let jiao=$('.jiao')[0];
	 let fan=$('.fan')[0];
	
	 //移入时的显示
	 list[0].onmouseenter=function(){
	 	quan.style.display='block';		 	 	
	 	animate(quan,{right:35},300)	 	
	 }
	 list[0].onmouseleave=function(){
	 	quan.style.display='none';	 	 	
	 	animate(quan,{right:70},300);	 	
	 }
	 for(let i=2;i<list.length-1;i++){
	 	let quan=$('.quan')[i-1];	 	
	 	list[i].onmouseenter=function(){
		 	quan.style.display='block';	 		
		 	animate(quan,{right:35},300)	 	
		 }
		 list[i].onmouseleave=function(){
		 	quan.style.display='none';		 		
		 	animate(quan,{right:70},300);	 	
		 }
	 }
	 let sc=$('.sc')[0];
	 list[8].onmouseenter=function(){
	 		sc.style.display='block';
	 }
	 list[8].onmouseleave=function(){
	 		sc.style.display='none';
	 }
	 list[9].onclick=function(){
	 	animate(document.body,{scrollTop:0});
	 }
	 list[9].onmouseenter=function(){
		 	fan.style.display='block';	 		
		 	animate(fan,{right:35},300)	 	
	 }
	 list[9].onmouseleave=function(){
		 	fan.style.display='none';		 		
		 	animate(fan,{right:70},300);	 	
	 }
	 ///点击时的显示
	 let saoma=$('.saoma');
	 // for(let i=0;i<saoma.length;i++){	 		
	 // 		list[i].onclick=function(){	 			
		// 	 	saoma[i].style.display='block';
		// 	 }
		// 	 list[i].onmouseleave=function(){
		// 	 	saoma[i].style.display='none';
		// 	 }
	 // }
	 list[1].onclick=function(){
	 	saoma[0].style.display='block';
	 }
	 list[1].onmouseleave=function(){
	 	saoma[0].style.display='none';
	 }
	 // list[2].onclick=function(){	 	
	 // 	saoma[1].style.display='block';	 	
	 // }
	 // list[2].onmouseleave=function(){
	 // 	saoma[1].style.display='none';
	 // }
	
})//$括号
	
	
	
