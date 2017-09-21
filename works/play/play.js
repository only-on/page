/*
* @Author: Administrator
* @Date:   2017-08-30 18:00:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-31 23:47:29
*/
window.onload=function(){
	let song=document.querySelector('.song');
	let singer=document.querySelector('.singer');
	let audio=document.querySelector('audio');
	let pause=document.querySelector('.icon-zanting2');
	let pre=document.querySelector('.pre');
	let next=document.querySelector('.next');
	let list=document.querySelector('.list');
	let img=document.querySelector('img');
	let bar=document.querySelector('.bar');
	let current=document.querySelector('.current');
	let total=document.querySelector('.total');
	let song1=document.querySelector('.song1');
	let sc=document.querySelector('.icon-aixin1');
	let flag=true;
	sc.onclick=function(){
		if(flag){
			sc.style.color='red';
			flag=false;
		}else{
			sc.style.color='#c1c2d0';
			flag=true;
		}		
	}	
	pause.onclick=function(){
		if(audio.paused){
			audio.play();
			pause.classList.add('icon-zanting3');	
			pause.classList.remove('icon-zanting2');
					
		}else{
			audio.pause();
			pause.classList.remove('icon-zanting3');
			pause.classList.add('icon-zanting2');
		}			
	}
	let i=0;
	let state=0;
	//上一首
	pre.onclick=function(){
		bar.style.width='0';
		i--;
		if(i<0){
			i=database.length-1;
		}
		render(database[i]);
		if(audio.paused){
			audio.play();
			pause.classList.add('icon-zanting3');	
			pause.classList.remove('icon-zanting2');
		}	
	}
	//
	next.onclick=function(){		
		bar.style.width='0';						
		i++;
		if(i>database.length-1){
			i=0;
		}
		render(database[i]);
		if(audio.paused){
			audio.play();
			pause.classList.add('icon-zanting3');	
			pause.classList.remove('icon-zanting2');
		}	
	}
	//播放完自动开始下一首
	audio.onended=function(){
		i++;
		render(database[i]);
		if(audio.paused){
			audio.play();
			pause.classList.add('icon-zanting3');	
			pause.classList.remove('icon-zanting2');
		}
	}
	render(database[i]);
	audio.ontimeupdate=function(){
		//进度条
		let bili=audio.currentTime/audio.duration;
		bar.style.width=`${bili*100}%`;
		let ct=Time(audio.currentTime);
		current.innerText=ct;
		//遍历每一句歌词（歌词，第几句歌词）
		database[i].lyrics.forEach((element,index)=>{
			if(element.time == ct){
				//对应的歌词的时间等于当前播放的时间
				list.innerHTML='';
				//将当前这句歌词对应的下标保存
				let a=index;
				if(index<3){
					//正在播放的index小于3，从第一句开始在屏幕上显示
					index=0;
				}
				if(index>=3){
					//正在播放的index大于3，从index-3开始在屏幕上显示
					index-=3;
				}
				for(let j=index;j<database[i].lyrics.length;j++){
					list.innerHTML+=`<li class="list${j}">${database[i].lyrics[j].lyric}</li>`;
				}
				//获取当前播放的这句歌词
				let obj=document.querySelector(`.list${a}`);
				//设置获取当前播放的这句歌词的颜色
				obj.style.color='#965fea';				
			}
		})
	}	
	function render(data){
		song.innerText=data.songs;
		singer.innerText=data.name;
		audio.src=data.src;
		img.src=data.photo;
		song1.innerText=`${data.songs} - ${data.name}`;
		current.innerText='00:00';
		total.innerText=data.alltime;

		list.innerHTML='';
		for(let i=0;i<data.lyrics.length;i++){
			list.innerHTML+=`
				<li>${data.lyrics[i].lyric}</li>
			`;
		}
	}
	/////时间
	function Time(date){
		//分钟大于10，按两位数显示，小于0，前面加0
		let minute=Math.floor(date/60) >= 10 ? Math.floor(date/60) : `0${Math.floor(date/60)}`;
		let second=Math.floor(date%60)>=10 ? Math.floor(date%60) :`0${Math.floor(date%60)}`;
		return `${minute}:${second}`;
	}
	//音量
	let volumC=document.querySelector('.volumC');
	let volumBtn=document.querySelector('.volumBtn');
	let volum=document.querySelector('.volum');
	let vw=volum.offsetWidth;		
	volumBtn.onmousedown=function(e){
			let that=this;
			let ox=e.clientX;
			let left=this.offsetLeft;
			document.onmousemove=function(e){
				let cx=e.clientX;
				let lefts=cx-ox+left;
				if(lefts<-7){
					lefts=-7;
				}
				if(lefts>vw-14+7){
					lefts=vw-14+7;
				}
				that.style.left=`${lefts}px`;
				volumC.style.width=`${lefts}px`;
				//音量控制
				audio.volume=lefts/vw;
			}
			document.onmouseup=function(){
				document.onmousemove=null;
				this.onmouseup=null;
			}
	}
	//进度条快进
	/*let yuan1=document.querySelector('.yuan1');
	let jindu=document.querySelector('.jindu');
	let w1=jindu.offsetWidth;
	yuan1.onmousedown=function(e){
		let that=this;
			let ox=e.clientX;
			let left=this.offsetLeft;
			document.onmousemove=function(e){
				let cx=e.clientX;
				let lefts=cx-ox+left;
				if(lefts<-7){
					lefts=-7;
				}
				if(lefts>w1-14+7){
					lefts=w1-14+7;
				}
				that.style.left=bar.style.width;
				console.log(bar.style.width)
				bar.style.width=`${lefts}px`;
			}
			document.onmouseup=function(){
				document.onmousemove=null;
				this.onmouseup=null;
			}
	}*/
}