var fundo;
var chao;
var scooby, scoobyI, scoobyP;
var salsicha, salsichaI;
var velma, velmaI;
var biscoito, biscoitoI;
var obstaculo, obstaculoI;

var Score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
fundo = loadImage("./imagens/background.jpg");
scoobyI = loadAnimation("./imagens/correndo 1.png","./imagens/correndo 2.png", "./imagens/correndo 3.png", "./imagens/correndo 4.png", "./imagens/correndo 5.png");
scoobyP = loadAnimation("./imagens/parado.png");
salsichaI = loadImage("./imagens/salsicha.png");
velmaI = loadImage("./imagens/velma.png");
biscoitoI = loadImage("./imagens/biscoito.png");
obstaculoI = loadImage("./imagens/obstaculo.png");
}


function setup() {
 createCanvas(windowWidth, windowHeight);

 chao = createSprite(width/2, height -20, width, 20);
 chao.x = chao.width / 2;
 chao.shapeColor = "black";

 scooby = createSprite(50, height -70, 20, 50);
 scooby.addAnimation("correndo", scoobyI);
 scooby.addAnimation("parado", scoobyP);

 salsicha = createSprite(250, height -95, 20, 50);
 salsicha.addImage("salsicha", salsichaI);
 salsicha.scale = 1.20;
 //salsicha.visible = false;

 velma = createSprite(300, height -80, 20, 50);
 velma.addImage("velma", velmaI);
 velma.scale = 1.20;
 //velma.visible = false;

 biscoito = createSprite(1500,100, 20, 50);
 biscoito.addImage("biscoito", biscoitoI);
 biscoito.scale = 0.08

 obstaculo = createSprite(1600, height -80,20,50);
 obstaculo.addImage("Obastaculo", obstaculoI);
 obstaculo.scale = 0.5;
}



function draw() {
scooby.collide(chao);
background(fundo);
textSize(40);
fill("black");
stroke("purple");
text("Score: " + Score, 20, 50);

if (keyDown(RIGHT_ARROW)){
scooby.position.x = scooby.position.x + 10;
}
if (keyDown(LEFT_ARROW)) {
scooby.position.x = scooby.position.x -10;
}
criandobiscoito();
drawSprites();

}
if (biscoito.isTouching(scooby)) {
    score = score +1;
}


function criandobiscoito(){
if (frameCount %30 == 0) {
biscoito = createSprite(random(50, 1500),100, 20, 50)
biscoito.addImage("biscoito", biscoitoI);
biscoito.scale = 0.08
biscoito.velocityY =5
biscoito.lifetime = 200
}}








