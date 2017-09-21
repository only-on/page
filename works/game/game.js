/*
* @Author: Administrator
* @Date:   2017-08-23 09:05:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-24 01:02:07
*/
/*
属性
	哪些字符
	个数 速度 得分 关卡 生命 减分
方法 
	开始
	消除
	产生字符
		哪些字符 
		个数
	下一关
	重新开始
属性 charSheet length
 */

function Game(){
	this.charSheet=[
	['Q','zimu/Q.png'],
	['W','zimu/W.png'],
	['E','zimu/E.png'],
	['R','zimu/R.png'],
	['T','zimu/T.png'],
	['Y','zimu/Y.png'],
	['U','zimu/U.png'],
	['I','zimu/I.png'],
	['O','zimu/O.png'],
	['P','zimu/P.png'],
	['A','zimu/A.png'],
	['S','zimu/S.png'],
	['D','zimu/D.png'],
	['F','zimu/F.png'],
	['G','zimu/G.png'],
	['H','zimu/H.png'],
	['J','zimu/J.png'],
	['K','zimu/K.png'],
	['L','zimu/L.png'],
	['Z','zimu/Z.png'],
	['X','zimu/X.png'],
	['C','zimu/C.png'],
	['V','zimu/V.png'],
	['B','zimu/B.png'],
	['N','zimu/N.png'],
	['M','zimu/M.png']
	];
	this.length=5;
	this.elements=[];
	this.position=[];
	this.speed=10;
	this.score=0;
	this.scoreobj=document.querySelector('div.score>span');
	this.shengming=document.querySelector('div.shengming>span');
	this.begain=document.querySelector('.begain');
	this.guan=document.querySelector('div.guan>span');	
	this.guanqia=10;
	this.stop=document.querySelector('.pause');
	this.jixu=document.querySelector('.jixu');
}
Game.prototype={
	start:function(){
		this.getChars(this.length);//产生字符
		this.drop();
		this.key();	
		this.pause();
		this.continue();	
	},
	getChars:function(length){
		for(let i=0;i<length;i++){
			this.getChar();//每次产生一个字符
		}
	},
	checkRepeat:function(num){
		let that=this;
		return this.elements.some(value=>value.innerText == that.charSheet[num][0])
	},
	checkPosition:function(lefts){
		return this.position.some(value=>Math.abs(lefts-value)<50);
	},
	getChar:function(){
		let num;//随机下标
		let lefts;
		let tops=Math.random()*60;
		//判断是否有重复的
		do{
			num=Math.floor(Math.random()*this.charSheet.length);
		}while(this.checkRepeat(num));
		// 有重叠的再产生
		do{
			lefts=(innerWidth-400)*Math.random()+200;
		}while(this.checkPosition(lefts));
		let divs=document.createElement('div');//创建元素
		divs.classList.add('char');//设置元素的样式
		divs.style.cssText=`
			left:${lefts}px;top:${tops}px;
			
			`;//元素位置随机
		divs.innerText=this.charSheet[num][0];//设置元素内容为随机的字符
		document.body.appendChild(divs);//元素插入页面中
		this.elements.push(divs);
		this.position.push(lefts);
	},
	drop:function(){
		let that=this;
		this.t=setInterval(function(){
			for(let i=0;i<that.elements.length;i++){
				let tops=that.elements[i].offsetTop;//获取当前位置
				that.elements[i].style.top=`${tops+that.speed}px`;
				if(tops>=400){//到页面某个位置之后，从页面中删除
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);//数组中也删除
					that.position.splice(i,1);//数组中也删除
					that.getChar();								
					that.shengming.innerText--;
					//生命值为0，停止
					if(that.shengming.innerText==0){
						clearInterval(that.t);
						confirm('你确定退出游戏吗？')
						if(confirm){							
							that.shengming.innerText=10;
							that.scoreobj.innerText=0;//停止之后得分清0
							//停止之后页面中元素清空
							for(let i=0;i<that.elements.length;i++){
								document.body.removeChild(that.elements[i]);			
							}
							that.elements=[];
							that.positioon=[];
							}else{
								close();
							}
					}					
				}				
			}
		},300)
	},
	key:function(){
		let that=this;
		document.onkeydown=function(e){
			let char=String.fromCharCode(e.keyCode);
			for(let i=0;i<that.elements.length;i++){
				if(char == that.elements[i].innerText){
					that.score++;					
					that.scoreobj.innerText=that.score;
					if(that.scoreobj.innerText == that.guanqia){
						that.next();//得分等于关卡数，下一关
					}
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);//将数组中的清除
					that.position.splice(i,1);//将位置清除
					that.getChar();//在产生一个
				}
			}
		}
	},
	next:function(){
		clearInterval(this.t);
		this.guan.innerText++;//关卡数增加
		this.guanqia+=5;//每一关需要打的字母数增加5个
		for(let i=0;i<this.length;i++){
			document.body.removeChild(this.elements[i]);			
		}//清除上一关页面中所有的
		this.elements=[];//清除上一关页面中所有的元素
		this.position=[];//清除上一关页面中所有元素的位置

		this.length++;	
		this.score=0;	
		this.shengming.innerText=10;
		this.start();
		if(this.guan.innerText>='5'){
			this.speed+=5;
			this.length=6;
		}
		if(this.guan.innerText=='10'){
			alert('你已经通关');
			return;
		}
	},	
	pause:function(){
		let that=this;
		this.stop.onclick=function(){
			clearInterval(that.t);
		}
	},
	continue:function(){
		let that=this;
		this.jixu.onclick=function(){
			that.t=setInterval(function(){
			for(let i=0;i<that.elements.length;i++){
				let tops=that.elements[i].offsetTop;//获取当前位置
				that.elements[i].style.top=`${tops+that.speed}px`;
				if(tops>=400){//到页面某个位置之后，从页面中删除
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);//数组中也删除
					that.position.splice(i,1);//数组中也删除
					that.getChar();								
					that.shengming.innerText--;
					//生命值为0，停止
					if(that.shengming.innerText==0){
						clearInterval(that.t);
						confirm('你确定退出游戏吗？')
						if(confirm){							
							that.shengming.innerText=10;
							that.scoreobj.innerText=0;//停止之后得分清0
							//停止之后页面中元素清空
							for(let i=0;i<that.elements.length;i++){
								document.body.removeChild(that.elements[i]);			
							}
							that.elements=[];
							that.positioon=[];
							}else{
								close();
							}
					}					
				}				
			}
		},300)
		}
	}

}
