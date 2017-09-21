/*
* @Author: Administrator
* @Date:   2017-08-28 22:17:53
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-30 21:29:24
*/
window.onload=function(){	
	let canvas=document.querySelector('canvas');
	let mask=document.querySelector('.mask');
	let bottom=document.querySelector('.bottom');
	let cw=bottom.offsetWidth,ch=bottom.offsetHeight;
	canvas.width=`${cw}`;
	canvas.height=`${ch}`;			
	let palette=new Palette(canvas,mask);	
	let tools=document.querySelectorAll('.tools');
	tools.forEach(element=>{
		element.onclick=function(){
			let act=document.querySelector('li[active=true]');
			act.setAttribute('active', false);
			element.setAttribute('active', true);	
			if(element.id=='pen'){
				palette.pen();
			}else if(element.id=='start' || element.id=='duobian'){
				let bian=prompt('请选择你想要的边数或角数');		
				palette.draw(this.id,bian);
			}else{
				palette.draw(this.id);
			}					
		}		
	})
		//描边 填充
		let stylebtn=document.querySelectorAll('.style');
		stylebtn.forEach(element=>{	
			element.onclick=function(){
				//点击哪个，哪个为选中状态
				for(let i=0;i<stylebtn.length;i++){
					stylebtn[i].setAttribute('active', false);
				}			
				element.setAttribute('active', true);
				palette.style=element.id;				
			}			
		})
		//色板
		let input1=document.querySelectorAll('input');	
		input1.forEach((element,index)=>{
			element.onchange=function(){				
				if(index==0){
					palette.strokeStyle=element.value;					
				}else{
					palette.fillStyle=element.value;					
				}
			}
		})
		//橡皮
		let eraser=document.querySelector('.icon-xiangpica');
		let eraserobj=document.querySelector('.eraser');
		let w=eraser.offsetWidth,h=eraser.offsetHeight;

		eraser.onclick=function(){
			palette.eraser(eraserobj,20,20);
			
		}
			//撤销
		let chexiao=document.querySelector('.icon-qiepian10');
		chexiao.onclick=function(){
			palette.cancle();
		}
		document.onkeydown=function(e){
			palette.down(e);			
		}
		//文本框
		let wenzi=document.querySelector('.icon-ziti3');		
		wenzi.onclick=function(){
			palette.font();
		}
		//保存
		let save=document.querySelector('.icon-baocun');
		save.onclick=function(){
			save.href=canvas.toDataURL('image/png');
			save.download='a.png';
		}	
		//反向
		let fanxiang=document.querySelector('.icon-xianfanxiang');
		fanxiang.onclick=function(){
			palette.reverse();
		}
		//裁切
		let caiqie=document.querySelector('.icon-caiqie');
		let clipObj=document.querySelector('.clip');
		caiqie.onclick=function(){
			palette.clip(clipObj);
		}
		//新建
		let xinjian=document.querySelector('.icon-xinjian');
		console.log(xinjian)
		xinjian.onclick=function(){
			palette.new();
		}
}//大括号