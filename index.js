
function doFirst(){
mypic = document.getElementById('unipictwo', 'unipicthree');
mypic.addEventListener("dragstart", startDrag, false);
mypic.addEventListener("dragend", endDrag, false);
firstbox = document.getElementById('firstbox');
firstbox.addEventListener("dragenter", dragenter, false);
firstbox.addEventListener("dragleave", dragleave, false);
firstbox.addEventListener("dragover", function(e) {e.preventDefault();}, false);
firstbox.addEventListener("drop", dropped, false);
}
function doSecond(){
mysecondpic = document.getElementById('unipicthree');
mysecondpic.addEventListener("dragstart", startDrag, false);
mysecondpic.addEventListener("dragend", endDrag, false);
firstbox = document.getElementById('firstbox');
firstbox.addEventListener("dragenter", dragenter, false);
firstbox.addEventListener("dragleave", dragleave, false);
firstbox.addEventListener("dragover", function(e) {e.preventDefault();}, false);
firstbox.addEventListener("drop", dropped, false);
}
/*function doThird(){
mythirdpic = document.getElementById('unipicthree');
mythirdpic.addEventListener("dragstart", startDrag, false);
mythirdpic.addEventListener("dragend", endDrag, false);
thirdbox = document.getElementById('thirdbox');
thirdbox.addEventListener("dragenter", dragenter, false);
thirdbox.addEventListener("dragleave", dragleave, false);
thirdbox.addEventListener("dragover", function(e) {e.preventDefault();}, false);
thirdbox.addEventListener("drop", dropped, false);
}*/

function endDrag(e){
	pic = e.target;
	pic.style.visibility ='hidden';

}
function dragenter(e){
	e.preventDefault();
	firstbox.style.background="https://s-media-cache-ak0.pinimg.com/236x/29/0e/a0/290ea051b531a128b2064dc3e0a85d26.jpg";
	firstbox.style.border="3px solid red";
	/*secondbox.style.background="SkyBlue";
	secondbox.style.border="3px solid red"
	thirdbox.style.background="SkyBlue";
	thirdbox.style.border="3px solid red"*/

}
function dragleave(e){
	e.preventDefault();
	firstbox.style.background="https://s-media-cache-ak0.pinimg.com/236x/29/0e/a0/290ea051b531a128b2064dc3e0a85d26.jpg";
	firstbox.style.border="3px solid blue";
	/*secondbox.style.background="White";
	secondbox.style.border="3px solid blue"
	thirdbox.style.background="White";
	thirdbox.style.border="3px solid blue"*/
}
//stores var code in new box	
function startDrag(e){
	//var code = '<img src="images/unicorn.png">';
	var blkCode = '<img src="images/blckunicorn.png">';
	var blueCode = '<img src="images/blueunicorn.png">';
	//var redCode = '<img src="images/redunicorn.png">';
	//var whiteCode = '<img src="images/whiteunicorn.png">';

	//var backCode = url('https://s-media-cache-ak0.pinimg.com/236x/29/0e/a0/290ea051b531a128b2064dc3e0a85d26.jpg')
	e.dataTransfer.setData('Text', blkCode, blueCode);

	/*var code = '<img src="images/blckunicorn.png">';
	e.dataTransfer.setData('Text',code);
	var code = '<img src="images/blueunicorn.png">';
	e.dataTransfer.setData('Text',code);*/

}
function dropped(e){
	e.preventDefault();
	firstbox.innerHTML = e.dataTransfer.getData('Text');
	/*secondbox.innerHTML = e.dataTransfer.getData('Text');
	thirdbox.innerHTML = e.dataTransfer.getData('Text');*/
	
}
window.addEventListener("load", doFirst, doSecond, false);