/*
* @Author: Administrator
* @Date:   2017-08-28 18:12:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-31 08:39:32
*/
/*
	属性
		线宽 端点  颜色  边数 角 橡皮擦尺寸 
		画布width、height  history  ctx
		canvas

	方法
		画线 画虚线 铅笔  多边形  圆 矩形  多角形
		橡皮 裁切  文字
		新建  保存
 */
 
	function Palette(canvas,mask){
		this.canvas=canvas;
		this.mask=mask;
		this.ctx=canvas.getContext("2d");		
		//history canvas尺寸
		this.history=[];
		this.cw=canvas.width;
		this.ch=canvas.height;
		//样式
		this.lineWidth=1;
		this.lineCap='butt';
		this.fillStyle='#000';
		this.strokeStyle='#d8d8f8';
		//描边 填充
		this.style='stroke';
		//裁切
		this.temp=null;	
	}
	Palette.prototype={
		//线的样式
		init:function(){
			this.ctx.lineCap=this.lineCap;
			this.ctx.lineWidth=this.lineWidth;
			this.ctx.strokeStyle=this.strokeStyle;
			this.ctx.fillStyle=this.fillStyle;
			this.ctx.setLineDash([0,0]);
		},
		//直线
		line:function(ox,oy,cx,cy){			
			this.init();
			this.ctx.beginPath();			
			this.ctx.moveTo(ox,oy);
			this.ctx.lineTo(cx,cy);
			this.ctx.closePath();
			this.ctx[this.style]();		
		},
		//虚线		
		dash:function(ox,oy,cx,cy){
			this.init();
			this.ctx.beginPath();
			this.ctx.setLineDash([10,20]);
			this.ctx.moveTo(ox,oy);
			this.ctx.lineTo(cx,cy);
			this.ctx.closePath();
			this.ctx[this.style]();	
		},
		//矩形
		juxing:function(ox,oy,cx,cy){
			this.init();
			this.ctx.beginPath();
			this.ctx.rect(ox,oy,cx-ox,cy-oy);	
			this.ctx[this.style]();				
		},
		//圆
		arc:function(ox,oy,cx,cy){
			this.init();
			this.ctx.beginPath();
			let r=Math.sqrt(Math.pow((cx-ox),2)+Math.pow((cy-oy),2))				
			this.ctx.arc(ox,oy,r,0,2*Math.PI);
			this.ctx.closePath();
			this.ctx[this.style]();							
		},
		//铅笔
		pen:function(){
			let that=this;
			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				//每次开始画之前不需要清除之前的鼠标按下开始路径
				that.init();
				that.ctx.beginPath();
				that.ctx.setLineDash([10,0]);
				that.ctx.moveTo(ox,oy);
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;//鼠标停止的地方	
					if(that.history.length>0){
						//将上一次画的放在画布中，然后开始下一次画
						that.ctx.putImageData(that.history[that.history.length-1],0,0);
					}	
					that.ctx.lineTo(cx,cy);			
					that.ctx[that.style]();//不需要关闭路径
					that.mask.onmouseup=function(){
						//鼠标抬起之后保存所画的
						that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
						that.mask.onmousemove=null;
						that.mask.onmouseup=null;
						}
					}
				}			
		},	
		//多边形	
		duobian:function(ox,oy,cx,cy,bianshu){
			let that=this;
			const PI=Math.PI;				
			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));						
			ploy(ox,oy,bianshu,r);		
			function ploy(x,y,bian,r){
				that.ctx.clearRect(0, 0,that.canvas.width,that.canvas.height);//再次画的时候清除上一次的
				if(that.history.length>0){
					//将上一次画的放在画布中，然后开始下一次画
					that.ctx.putImageData(that.history[that.history.length-1],0,0);
				}
				let ang=360/bian*PI/180;
				that.init();
				that.ctx.beginPath();
				that.ctx.setLineDash([10,0]);
				that.ctx.moveTo(x+r,y);//在圆内画多边形，将路径移到圆的一侧，圆心为（150，150）
				for(let i=1;i<bian;i++){
					that.ctx.lineTo(x+r*Math.cos(i*ang),y+r*Math.sin(i*ang));
				}
				that.ctx.closePath();
				that.ctx[that.style]();
			}
		
		},
		//五角星		
		start:function(ox,oy,cx,cy,bianshu){
			let that=this;
			const PI=Math.PI;				
			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));						
			ploy(ox,oy,bianshu,r);		
			function ploy(x,y,bian,r){
				that.ctx.clearRect(0, 0,that.canvas.width,that.canvas.height);//再次画的时候清除上一次的
				if(that.history.length>0){
					//将上一次画的放在画布中，然后开始下一次画
					that.ctx.putImageData(that.history[that.history.length-1],0,0);
				}
				let ang=360/(bian*2)*PI/180;
				that.init();
				that.ctx.beginPath();				
				that.ctx.moveTo(x+r,y);//在圆内画多边形，将路径移到圆的一侧，圆心为（150，150）
				let r1=r/2;				
				for(let i=1;i<bian*2;i++){
					if(i%2){
						that.ctx.lineTo(x+r1*Math.cos(i*ang),y+r1*Math.sin(i*ang));
					}else{
						that.ctx.lineTo(x+r*Math.cos(i*ang),y+r*Math.sin(i*ang));
					}
				}
				that.ctx.closePath();
				that.ctx[that.style]();
			}		
		},
		/*
			draw('line')
		 */
		draw:function(type,num){
			let that=this;
			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					that.ctx.clearRect(0,0,that.cw,that.ch);
					that.init();
					if(that.history.length>0){
						//将上一次画的放在画布中，然后开始下一次画
						that.ctx.putImageData(that.history[that.history.length-1],0,0);
					}
					that[type](ox,oy,cx,cy,num);
				}
				that.mask.onmouseup=function(){
					//鼠标抬起之后保存所画的
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
			}			
		},
		//橡皮
		eraser:function(obj,w,h){
			let that=this;
			this.mask.onmousedown=function(){
				obj.style.display='block';
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					let lefts=cx-w/2;
					let tops=cy-h/2;
					//让橡皮在画布范围之内
					if(lefts<0){
						lefts=0;
					}
					if(lefts>that.cw-w){
						lefts=that.cw-w;
					}
					if(tops<0){
						tops=0;
					}
					if(tops>that.ch-h){
						tops=that.ch-h;
					}
					obj.style.left=`${lefts}px`;
					obj.style.top=`${tops}px`;
					that.ctx.clearRect(lefts,tops, w, h);
				}
				that.mask.onmouseup=function(){
					obj.style.display='none';
					//橡皮擦除后的画布的内容保存下来
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
			}
		},
		//撤销
		cancle:function(){
			this.history.pop();
			if(this.history.length){
				this.ctx.putImageData(this.history[this.history.length-1],0,0);
			}else{
				this.ctx.clearRect(0, 0,this.cw,this.ch);
			}
		},
		//ctrl+z
		down:function(e){			
			if(e.ctrlKey && e.keyCode==90){
				this.history.pop();//删除历史记录最后一个
				if(this.history.length){
					//历史记录长度不为0，显示删除后的历史记录最后一个
					this.ctx.putImageData(this.history[this.history.length-1],0,0);
				}else{
					this.ctx.clearRect(0, 0,this.cw,this.ch);
				}
			}
		},
		//文字
	font:function(){
		this.mask.onmousedown=function(e){
			let that=this;
			let ox=e.offsetX,oy=e.offsetY;
			let divs=document.createElement('div');
			divs.style.cssText=`
				width:100px;height:30px;
				border:1px dashed #000;				
				position:absolute;
				left:${ox}px;top:${oy}px;				
			`
			divs.contentEditable=true;
			this.mask.appendChild(divs);
			this.mask.onmousedown=null;

			let lefts=ox;
			let tops=oy;
			divs.onmousedown=function(e){				
				let ox1 =e.offsetX,oy1=e.offsetY;
				let leftw=e.clientX-ox1-divs.offsetLeft;
				let toph=e.clientY-oy1-divs.offsetTop;
				that.mask.onmousemove=function(e){
					let cx=e.clientX,cy=e.clientY;
				 	lefts=cx-ox1-leftw;
				 	tops=cy-oy1-toph;
				 	if(lefts<=0){
				 		lefts=0;
				 	}
				 	if(lefts>=that.cw-100){
				 		lefts=that.cw-100;
				 	}
				 	if(tops<=0){
				 		tops=0;
				 	}
				 	if(tops>=that.ch-30){
				 		tops=that.ch-30;
				 	}
				 	divs.style.left=`${lefts}px`
				 	divs.style.top=`${tops}px`
				}
				divs.onmouseup=function(){
			 		that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
			 		that.mask.onmousemove=null;
			 		this.onmouseup=null;
			 	}
			}
			divs.onblur=function(){
				let value=divs.innerText;
				that.mask.removeChild(divs);
				that.ctx.font='blod 50px sans-serif';
				that.ctx.textAlign='center';
				that.ctx.textBaseLine='middle';
				that.ctx.fillText(value, lefts, tops);
			}
		}.bind(this)
	},		
	//反向
		reverse:function(){
			this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch))
			let imgData=this.ctx.getImageData(0,0,this.cw,this.ch);
			let data=imgData.data;
			for(let i=0;i<data.length;i+=4){
				data[i]=255-data[i];
				data[i+1]=255-data[i+1];
				data[i+1]=255-data[i+2];
			}
			this.ctx.putImageData(imgData,0,0);
		},
	//裁切
	clip:function(clipObj){
		let that=this;
		this.mask.onmousedown=function(e){
			let w,h,minX,minY;
			let ox=e.offsetX,oy=e.offsetY;
			that.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				w=Math.abs(cx-ox);
				h=Math.abs(cy-oy);
				minX=cx>ox ? ox :cx;
				minY=cy>oy ?oy :cy;
				clipObj.style.cssText=`
					display:block;
					left:${minX}px; top:${minY}px;
					width:${w}px;height:${h}px;					
				`;
				that.mask.onmouseup=function(){										
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
					that.temp=that.ctx.getImageData(minX,minY,w,h);
					that.ctx.clearRect(minX,minY,w,h);
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.ctx.putImageData(that.temp,minX,minY);
					that.drag(minX,minY,w,h,clipObj);
				}
			}
		}
	},
	//拖拽 参数：拖拽范围，对象
	drag:function(minX,minY,w,h,clipObj){
			let that=this;			
			this.mask.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				if(ox>minX && ox<minX+w && oy>minY && oy<minY+h){
					//在裁切的范围内鼠标样式为拖拽
					that.mask.style.cursor='move';
				}else{
					//其他范围内为默认的
					that.mask.style.cursor='default';
				}
			}
			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					//lefts=原始位置minX+鼠标移动的距离cx-ox
					let lefts=cx-ox+minX;
					let tops=cy-oy+minY;
					if(lefts<0){
						lefts=0;
					}
					if(lefts>that.cw-w){
						lefts=that.cw-w;
					}
					if(tops<0){
						tops=0;
					}
					if(tops>that.ch-h){
						tops=that.ch-h;
					}
					clipObj.style.left=`${lefts}px`;
					clipObj.style.top=`${tops}px`;

					that.ctx.clearRect(0,0,that.cw,that.ch);
					if(that.history.length){
						that.ctx.putImageData(that.history[that.history.length-1],0,0);
					}
					if(that.temp){
						that.ctx.putImageData(that.temp,lefts,tops);
					}
										
				}
				
				that.mask.onmouseup=function(){
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
					clipObj.style.display='none';
					that.mask.style.cursor='default';
					that.temp=null;
					that.mask.onmousedown=null;
					that.mask.onmouseup=null;
				}
			}
	},
	new:function(){
		this.history=[];
		this.ctx.clearRect(0,0,this.cw,this.ch);
	},

}//大括号