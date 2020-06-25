
function gifmove (divname,timelength)
{
	var div=document.getElementById(divname);
	var left=div.style.left;
	var leftnum = Number(left.split('px')[0]);
    var num = 1;
    var animate = setInterval(function(){
        if(num>=600)//移动总距离---固定长度
        {
            clearInterval(animate);
        }
        leftnum += 6/timelength;//单次移动距离，移动速度为 ：单次距离/时间间隔，这里是  100px/s
        div.style.left = leftnum+'px';
        num++;
    },10);//每隔10ms移动一下单次距离 ，与速度无关，保证不会突然性移动，设置10左右即可
	
	
	
}


