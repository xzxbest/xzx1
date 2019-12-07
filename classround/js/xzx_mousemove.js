var body = document.getElementsByTagName("body")[0];
	body.style.overflow = "hidden";
		window.onmousemove = function(e){
			var x = 0;
			var div = document.createElement("abc");
			div.style.position = "absolute";
			div.style.left = e.clientX + "px";
			div.style.top = e.clientY + "px";
			div.style.border = "2px solid #155397";
			div.style.borderRadius = "50%";
			body.appendChild(div);
			var time = setInterval(function(){
				x += 5;				
				div.style.opacity = (50 - x)/50;
				div.style.width = (x + 10) + "px";
				div.style.height = (x + 10) + "px";
			},30);
			setTimeout(function(){
				clearInterval(time);
				body.removeChild(div);
			},300)
		}