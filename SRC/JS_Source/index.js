//export * from "./ind"
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
var paddleY = (canvas.width-paddleHeight) / 2 - 100;
console.log(paddleX + "   " + paddleY)
var BallonSpirit = new Image();
BallonSpirit.src = "./IMG/ballon-spirit.png"

//isGameStart = false
function StopGame() {
alert("XD")
}

//if(isGameStart == false){throw "PANEL; CLICK \"START\" TO PLAY"}

    console.log("Started")

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
var background = new Image();
background.src = "./IMG/Spirits/Chmurki.png";


function drawBall() {
    var imageObj;
    var imageObj2;
    ctx.beginPath();
   // ctx.rect(paddleX, paddleY, 100, 100);
   
               
   var img = new Image();
   img.src = "./IMG/Spirits/Wall.png";    
             imageObj2 = new Image();
                 imageObj2.src = "./IMG/Spirits/Wall.png";
    // The image object hasn't been defined yet.
    imageObj = new Image();
    imageObj.src = "./IMG/Spirits/ballon-spirit.png";

playerObj = imageObj
    
    if (!imageObj.naturalWidth) {
        console.log("acc3")
        
        imageObj.onload = function() {
          //  console.log("acc1")
                    
            console.log("acc4")
            background.onload = function() {
                
                ctx.drawImage(background, 0, 0);
               
            }
            
            ctx.drawImage(playerObj,paddleX, paddleY,100, 100);
        };
        
        img.onload = function()
        {
        ctx.drawImage(img,canvas.width,canvas.height,0,0);   
        };
        
        alert("done with Canvas");
        
    }else{
         
        ctx.drawImage(background, 0, 0);
        ctx.drawImage(img,canvas.width,canvas.height,0,0,);  
        ctx.drawImage(playerObj,paddleX, paddleY,100, 100);
    }
   // ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    //ctx.fillStyle = "#0095DD";
   // ctx.fill();
    ctx.closePath();
}

 function draw () {
   // requestAnimationFrame(animate)
console.log("XD")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    alert("HEJ")
    console.log("JEST")
    drawBall();
    
    if(rightPressed) {
        paddleX += 5;
        function Czas(){
        paddleY += Math.floor(Math.random() * (0 - 1)) + 2;
        return
    }
   // setTimeout(Czas, 1000)
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
   // setTimeout(Czas, 1000)
        if (paddleX < 0){
            paddleX = 0;
        }
        
       // Fan_Random_Minus()
    }else if(upPressed){
        paddleY -= 5;
        console.log("XD")
        function Czas(){
        paddleY -= Math.floor(Math.random() * (0 - 1)) + 3;
return
        }
    
       // setTimeout(Czas, 1000)
        if (paddleY < 0 || paddleY > canvas.height){
           // println("hmmm")
           paddleY = 0
          
           console.log(paddleY)
        }
        //Fan_Random_Minus()
    }else if(downPressed){
        paddleY += 5;
        console.log("XDDDDDDD")
        console.log(paddleY)
        console.log(canvas.height)
        if (paddleY +paddleWidth > canvas.height ){
            paddleY = canvas.height - paddleHeight
          console.log("XDDD")
            console.log(paddleY)
        }
        function Czas(){
        paddleY += Math.floor(Math.random() * (1 - 0)) + 2;
        
        return
    }
   // setTimeout(Czas, 1000)
        if (paddleY < 0){
         paddleY = 0;
        }
      //  Fan_Random_Plus()
    }
    
}
setInterval(draw,10)



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


//setInterval(Looking, 1)

