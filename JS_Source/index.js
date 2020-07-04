var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var dx = 2;
var dy = -2;
let przegrles = false;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var x = canvas.width/2;
var y = canvas.height-30;
var ballRadius = 10;
canvas.height = 500;
canvas.width  = 1000;
var paddleHeight = 100;
var paddleWidth = 100;
var paddleX = (canvas.width-paddleWidth) / 2;
var paddleY = (canvas.width-paddleHeight) / 2;


function Fan_Random_Plus(){
    min = Math.ceil(paddleY);
    max = Math.floor(paddleX);
    
    paddleY = Math.floor(Math.random() * (max - min)) + min;
    paddleX = Math.floor(Math.random() * (max - min)) + min;
}
// function Fan_Random_Minus(min, max){
//     min = Math.ceil(-10);
//     max = Math.floor(-20);
    
//     paddleY = Math.floor(Math.random() * (max - min +1)) + min;
//     paddleX = Math.floor(Math.random() * (max - min+ 1)) + min;
// }
// setInterval(Fan_Random_Minus, 1000)
setInterval(Fan_Random_Plus, 800)
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawBall() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, 100, 100);
   // ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(rightPressed) {
        paddleX += 5;
        function Czas(){
        paddleY += Math.floor(Math.random() * (0 - 1)) + 2;
        return
    }
    setTimeout(Czas, 1000)
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
       // Fan_Random_Plus()
    }
    else if(leftPressed) {
        paddleX -= 5;
        function Czas(){
        paddleX -= Math.floor(Math.random() * (1 - 0)) + 3;
        return
    }
    setTimeout(Czas, 1000)
        if (paddleX < 0){
            paddleX = 0;
        }
        
       // Fan_Random_Minus()
    }else if(upPressed){
        paddleY -= 5;
        function Czas(){
        paddleY -= Math.floor(Math.random() * (0 - 1)) + 3;
return
        }
    
        setTimeout(Czas, 1000)
        if (paddleY < 0 || paddleY > canvas.height){
            y = 0;
        }
        //Fan_Random_Minus()
    }else if(downPressed){
        paddleY += 5;
        function Czas(){
        paddleY += Math.floor(Math.random() * (1 - 0)) + 2;
        if (paddleY + paddleHeight > canvas.height){
            paddleY = canvas.height - paddleHeight;
        }
        return
    }
    setTimeout(Czas, 1000)
        if (paddleY < 0){
            y = 0;
        }
      //  Fan_Random_Plus()
    }
    // x += dx;
    // y += dy;
}
draw()



function keyDownHandler(e) {
    if (e.keyCode == 39 || e.keyCode == 68) {
        rightPressed = true;
    }
    else if (e.keyCode == 37 || e.keyCode == 65) {
        leftPressed = true;
    }
    else if (e.keyCode == 38 || e.keyCode == 87) {
       upPressed = true;
    }
    else if (e.keyCode == 40 || e.keyCode == 83) {
        
        downPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 39 || e.keyCode == 68) {
        rightPressed = false;
    }
    else if (e.keyCode == 37 || e.keyCode == 65) {
        leftPressed = false;
    }
    else if (e.keyCode == 38 || e.keyCode == 87) {
        upPressed = false;
    }
    else if (e.keyCode == 40 || e.keyCode == 83) {
        downPressed = false;
    }
}

console.log(rightPressed)
console.log(rightPressed)
function Sprawdz(){
if(przegrles){
    alert("Przegrales!")
    window.location.replace("");
    window.location("");
    przegrles = false
    draw()
}
}
function RESTART(){

}
setInterval(Sprawdz, 10)
