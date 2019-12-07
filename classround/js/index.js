//将名字添加到框中
var data = ["袁成新","李明鑫","苟丽特","成洪印","任宏瑞","王娟","龚子威",
						"王甜甜","吴坤霞","周萌","丰林","杨国建",
						"付跃林","李涵","俞苗","张海峰","张华","张利",
						"周朝兵","张洋","王飞","李甜","夏哲显","谢松贝","于佳宁",
						"姜驱寒","杨益洲","喻洁","侯政强","贾振天","袁紫薇","彭涛"];
var big = document.getElementsByClassName("big")[0];
for (let i = 0; i < data.length; i++) {
	var cname = document.createElement("div");
	cname.className = " all n" + i;
	cname.innerHTML = data[i];
	big.appendChild(cname);
}

var luck = document.getElementById("luck");
var all = document.getElementsByClassName("all");
var num;
var allnum;
var luckchange = true;
var num1,num2,num3,num4,num5,num6,time1,time2,time3,time4,time5,time6;
//幸运玩家点击事件
luck.onclick = function(){
	if(luckchange == true){
		luckchange =false;
	allnum = parseInt(Math.random()*31-1);
	num1 = parseInt(Math.random()*128);
	num2 = parseInt(Math.random()*16);
	num3 = parseInt(Math.random()*16);
	num4 = parseInt(Math.random()*8);
	num5 = parseInt(Math.random()*4);
	num6 = parseInt(Math.random()*3);
	time1 = setInterval(fun1,50);	
	}
}
//更新样式函数
function cleanall(){
	for (var i = 0; i < all.length; i++) {
	all[i].className = "all n" + i;
	}
}
//第一个定时器
function fun1(){
 cleanall();
 num1--;
 allnum ++;
all[allnum].className = "all change n" + allnum;	
	if(allnum == 31){					
		allnum = -1;
	}
	if(num1 <= 0){
		clearInterval(time1);
		time2 = setInterval(fun2,80);
	}
}
//第二个定时器
function fun2(){
 cleanall();
 num2--;
 allnum ++;
all[allnum].className = "all change n" + allnum;	
	if(allnum == 31){					
		allnum = -1;
	}
	if(num2 <= 0){
		clearInterval(time2);
		time3 = setInterval(fun3,250);
	}
}
//第三个定时器
function fun3(){
 cleanall();
 num3--;
 allnum ++;
all[allnum].className = "all change n" + allnum;	
	if(allnum == 31){					
		allnum = -1;
	}
	if(num3 <= 0){
		clearInterval(time3);
		time4 = setInterval(fun4,350);
	}
}
//第四个定时器
function fun4(){
 cleanall();
 num4--;
 allnum ++;
all[allnum].className = "all change n" + allnum;	
	if(allnum == 31){					
		allnum = -1;
	}
	if(num4 <= 0){
		clearInterval(time4);
		time5 = setInterval(fun5,450);
	}
}
//第五个定时器
function fun5(){
 cleanall();
 num5--;
 allnum ++;
all[allnum].className = "all change n" + allnum;	
	if(allnum == 31){					
		allnum = -1;
	}
	if(num5 <= 0){
		clearInterval(time5);
		time6 = setInterval(fun6,600);
	}
}
//第六个定时器
function fun6(){
 cleanall();
 num6--;
 allnum ++;
all[allnum].className = "all change n" + allnum;	
	if(allnum == 31){					
		allnum = -1;
	}
	if(num6 <= 0){
		clearInterval(time6);
		luckchange = true;
	}
}	