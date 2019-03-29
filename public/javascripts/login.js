window.onload = function () {
    var screen = document.getElementById("screen");
    var ul = screen.children[0];
    var ol = screen.children[1];
    var div = screen.children[2];
    var imgWidth = screen.offsetWidth;
    var tempLi = ul.children[0].cloneNode(true);
    ul.appendChild(tempLi);
    for(var i = 0; i < ul.children.length - 1; i++) {
        var newOlLi = document.createElement("li");
        newOlLi.innerHTML = i + 1;
        ol.appendChild(newOlLi);
    }
    var olLiArr = ol.children;
    olLiArr[0].className = "current";
    for(var i = 0, len = olLiArr.length; i < len; i++) {
    	olLiArr[i].index = i;
    	olLiArr[i].onmouseover = function (ev) {
    		for(var j = 0; j < len; j++) {
                olLiArr[j].className = "";
            }
            var outer=document.getElementById("outer");
			var inner=document.getElementById("inner");
			var olis=inner.getElementsByTagName("li");
			var list=document.getElementById("list");
			var span=list.getElementsByTagName("span");
			var left=document.getElementById("left");
			var right=document.getElementById("right");
			var timer1=null,timer2=null,x=0;
			let _this = this;
			function move(){
				timer1=setInterval(function(){
					x++;
					if(x>=olis.length){
						x=0;
					}
					_this.public();
				},1000)
			}
			function public(){
				var start=inner.scrollLeft;
				var end=olis[0].clientWidth*x;
//				console.log(x);
				var step=0;
				var maxstep=20;
				var everystep=(end-start)/maxstep;
				timer2=setInterval(function(){
					step++;
					if(step>=maxstep){
						step=0;
						clearInterval(timer2);
					}
					start+=everystep;
					inner.scrollLeft=start;
				},1)

				for(var i=0;i<span.length;i++){
					span[i].style.background="";
				}
				span[x].style.background="green";

				clearInterval(timer1);
				move();


    		}
    		this.className = "current";
    		key = square = this.index;
    		animate(ul, -this.index * imgWidth);
    	}
    }
    var key = 0;
    var square = 0;
    var timer = setInterval(autoPlay, 2000);
    screen.onmouseover = function (ev) {
    	clearInterval(timer);
    	div.style.display = "block";
    }
    screen.onmouseout = function (ev) {
    	timer = setInterval(autoPlay, 2000);
        div.style.display = "none";
    }
    var divArr = div.children;
    divArr[0].onclick = function (ev) {
    	key--;
        if(key < 0) {
        	ul.style.left = -(ul.children.length-1) * imgWidth + "px";
            key = 5;
        }
        animate(ul, -key * imgWidth);
        square--;
        if(square < 0) {
            square = 5;
        }
        for(var k = 0; k < len; k++) {
            olLiArr[k].className = "";
        }
        olLiArr[square].className = "current";
    }
     divArr[1].onclick = autoPlay;
    function autoPlay() {
        key++;
        if(key > ul.children.length - 1) {
            ul.style.left = 0;
            key = 1;
        }
        animate(ul, -key * imgWidth);
        square++;
        if(square > 5) {
            square = 0;
        }
        for(var k = 0; k < len; k++) {
             olLiArr[k].className = "";
        }
        olLiArr[square].className = "current";
    }
    function animate(ele,target){
    	clearInterval(ele.timer);
        var speed = target>ele.offsetLeft?10:-10;
        ele.timer = setInterval(function () {
        	var val = target - ele.offsetLeft;
        	ele.style.left = ele.offsetLeft + speed + "px";
        	if(Math.abs(val)<Math.abs(speed)){
        		ele.style.left = target + "px";
                clearInterval(ele.timer);
        	}
        },10)
    }
}