var pages = document.getElementsByClassName('page');//获取页面的节点集合
var startY,endY,dis = 0; //第一次触碰的焦点 ，最后触碰的焦点 ，滑动距离
var index = 0;//页码

//获取第一次触碰屏幕的焦点startY的事件
document.addEventListener('touchstart',function(e){
	var touch = e.touches[0];
	startY = touch.pageY;
})

//获取最后触摸的焦点endY , 算出滑动屏幕的距离dis的事件
document.addEventListener('touchmove',function(e){
	var touch = e.touches[0];
	endY = touch.pageY;
	dis = startY - endY;
})

//滑动事件结束 如果手指滑动距离大于50 并且正向则执行pageTop函数 -->向上滑动翻页
//滑动事件结束 如果手指滑动距离大于50 方向为负则执行pageDown函数 -->向下滑动翻页
//翻页完毕 执行qingling函数 进行数值清零
document.addEventListener('touchend',function(e){
	if(Math.abs(dis)>50){
		if(dis>0){
			pageTop(index);
			qingling();
		}else{
			pageDown(index);
			qingling();
		}
	}
})

//向上翻页并添加翻页动画的样式
function pageTop(n){
	if(n<pages.length-1){
		n++;
		index++;
		
//  		这个定时器的作用执行此函数一秒后  本页面添加一个隐藏的样式  随后滑走
		setTimeout(function(){
			pages[n-1].classList.add('hide');
		},1000)
		
		pages[n-1].classList.add('out_top');
		pages[n-1].classList.remove('in_top','out_down','in_down');
		pages[n].classList.add('in_top');
		pages[n].classList.remove('out_top','out_down','in_down');
		pages[n].style.display = 'block';
	}
}

//向下翻页并添加翻页动画的样式
function pageDown(n){
	if(n>0){
		n--;
		index--;
		
		setTimeout(function(){
			pages[n+1].classList.add('hide');
		},1000)
		
		pages[n+1].classList.add('out_down');
		pages[n+1].classList.remove('in_top','out_top','in_down');
		pages[n].classList.add('in_down');
		pages[n].classList.remove('out_top','out_down','in_top');
	}
}

//使相关参数清零
function qingling(){
	startY = 0;
	endY = 0;
	dis = 0;
}

