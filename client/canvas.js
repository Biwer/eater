var canvas = document.getElementById("ctx");
var ctx = canvas.getContext("2d");	
canvas.width = 340;
canvas.height = 400;
var playerImg = document.getElementById("playerImg");	
var logoImg = document.getElementById("logoImg");
var ghostImg = document.getElementById("ghostImg");
var wallImg = document.getElementById("wallImg");

var foodImg=[];
foodImg[0] = document.getElementById("orangeImg");
foodImg[1] = document.getElementById("pineAppImg");
foodImg[2] = document.getElementById("donutImg");

<<<<<<< HEAD
=======
var MonterImg=[];
MonterImg[0] = document.getElementById("Mon1Img");
MonterImg[1] = document.getElementById("Mon2Img");
MonterImg[2] = document.getElementById("Mon3Img");

>>>>>>> refs/remotes/origin/addMonter_BB
function drawEverything(){ //draw players for main loop
	ctx.fillStyle = "#784800";
	ctx.clearRect(0,0,340,400);
	ctx.fillRect(0,0,340,400);
	
	ctx.textAlign = "center";
	ctx.fillStyle = '#00ff99';
	ctx.font = '40px Arial';
<<<<<<< HEAD
	ctx.fillText(gameVersion,170,45);	
=======
	ctx.fillText("Eater v"+gameVersion,170,45);	
>>>>>>> refs/remotes/origin/addMonter_BB
	drawWallPosition();
	drawFoodPosition();
	drawPlayersPosition();
	drawScore();
<<<<<<< HEAD
=======
	drawMonterPosition();
>>>>>>> refs/remotes/origin/addMonter_BB
}