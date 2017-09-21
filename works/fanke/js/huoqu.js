/*
* @Author: Administrator
* @Date:   2017-08-14 09:26:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-14 16:44:34
*/
/*获取元素，返回
添加window.onload
$(select[,ranger])
参数：
	select 字符串->选择器 #box .box div
			函数->window.onload
	ranger 范围
1.判断首字符
	# ->document.getElementById
	. ->document.getElementByClassName
	符合标签
2.return

*/
function $(select,ranger=document){
	if(typeof select=='string'){
		/*if(ranger == undefined){
			ranger==document;
		}
		ranger=ranger?ranger:document;
		ranger=ranger || document;*/
		let selector=select.trim();
		let firstChar=selector.charAt();
		if(firstChar=='#'){
			return document.getElementById(selector.substring(1));
		}else if(firstChar=='.'){
			return ranger.getElementsByClassName(selector.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
		//正则表达式 第一位a-z或者A-Z,第二位a-z或者A-Z或者1-6，第二位最少出现0次，最多8次
			return ranger.getElementsByTagName(selector);
		}
	}else if(typeof select=='function'){
		window.onload=function(){
			select();
		}
	}
}
/*html()获取或设置元素内容
*/
function html(element,content){
	if(arguments.length==2){
		element.innerHTML=content;
	}else if(arguments.length==1){
		return element.innerHTML;
	}
}
/*text()获取或设置元素内容*/
/*function text(element,content){
	if(arguments.length==2){
		element.innerText=content;
	}else(arguments.length==1){
		return element.innerText;
	}
}*/
/*设置样式
	css(element,yangshi)
*/
function css(element,attrObj){
	for(let i in attrObj){
		element.style[i]=attrObj[i];
	}
}
/*添加事件 集合，事件，事件函数
on(collection,type,fn)
 */
function on(collection,type,fn){
	for(let i=0;i<collection.length;i++){
			collection[i][type]=fn;
	}
}
function off(collection,type){
	for(let i=0;i<collection.length;i++){
		collection[i][type]=null;
	}
}
/*animate*/
function animate(element,attrObj,speed,fn){
	let t=setInterval(function(){
		for(let i in attrObj){
			let start=parseInt(getComputedStyle(element,null)[i]);
			if(start>=attrObj[i]){
				clearInterval(t);
				if(fn){					
					fn();
				}
			}
			element.style[i]=`${start+speed}px`;
		}
	},60);
}