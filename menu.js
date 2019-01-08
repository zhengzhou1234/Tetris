var showPara = document.getElementsByClassName("showPara");
var text = document.getElementsByClassName("text");
showPara[0].onmouseover = function(){
	text[0].className = text[0].className + ' show';
}
showPara[0].onmouseout = function(){
	text[0].className = 'text';
}
showPara[1].onmouseover = function(){
	text[1].className = text[1].className + ' show';
}
showPara[1].onmouseout = function(){
	text[1].className = 'text';
}
showPara[2].onmouseover = function(){
	text[2].className = text[2].className + ' show';
}
showPara[2].onmouseout = function(){
	text[2].className = 'text';
}