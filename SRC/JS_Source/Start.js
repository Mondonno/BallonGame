//import { draw } from "./index.js";
console.log("xd")

function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}
function isInside(pos, rect){
	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var rect = {
	x:400,
	y:200,
	width:200,
	heigth:100
};

canvas.addEventListener('click', function(evt) {
	var mousePos = getMousePos(canvas, evt);
    //debugger;
    console.log(mousePos)
    console.log(rect)
    console.log(isInside(mousePos,rect))
	if (isInside(mousePos,rect)) {
    isGameStart = true
    console.log(isGameStart)
    game = setInterval(draw,10)
    draw()
    console.log("XHMMHMHM")
    }else{
        return
    }	
}, false);
function Setup() {
context.clearRect(0, 0, canvas.width, canvas.height);
context.beginPath();
context.lineJoin = "round";
context.lineWidth = 20;

var rectWidth = 200;
var rectHeight = 100;
var cornerRadius = 20;

// Set faux rounded corners
context.lineJoin = "round";
context.lineWidth = cornerRadius;

// Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
context.strokeRect(canvas.width / 2 - 100, canvas.height / 2 -50, rectWidth - cornerRadius, rectHeight - cornerRadius);
context.fillStyle = "#0000ff";
context.fillRect(canvas.width / 2 - 100, canvas.height / 2 -50, rectWidth - cornerRadius, rectHeight - cornerRadius);
context.fill();
//context.rect( canvas.width / 2 - 100, canvas.height / 2 -50, 200, 100); 

context.lineWidth = 2;
context.strokeStyle = '#0000cc'; 
context.stroke();
context.closePath();
context.font = '50px Fredoka One';
context.fillStyle = '#000000';

context.fillText('Start', canvas.width / 2 - 70, canvas.height / 2 +10);

context.stroke();

 
  
}

Setup()