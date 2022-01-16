var astronauta;
var fondo, fondoI;
var dormir, sleep;//dormir
var cepillar, brush;//cepillarse los dientes
var gym, gymI;//ejercitarse
var comer, eat;//comer
var baño, bath;//bañarse
var mover, move;

var pared,pared1,pared2,pared3;

function preload() {
  fondoI = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png","images/brush.png","images/brush.png","images/brush.png","images/drink1.png",
  "images/drink1.png","images/drink1.png","images/drink2.png","images/drink2.png");
  gymI = loadAnimation("images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  move = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png");

}

function setup() {
  createCanvas(400, 200);

  fondo = createSprite(200,100);
  fondo.addImage("fondo", fondoI);
  fondo.scale=0.09;

  astronauta = createSprite(200,100);
  astronauta.addAnimation("astronauta", move);
  astronauta.addAnimation("dormir", sleep);
  astronauta.addAnimation("cepillandose", brush);
  astronauta.addAnimation("ejercitandose", gymI);
  astronauta.addAnimation("comiendo", eat);
  astronauta.addAnimation("bañandose", bath);
  astronauta.scale=0.05;
  astronauta.setCollider("rectangle",0,0,2000,2300);
  astronauta.debug=true;  

  pared = createSprite(200,0,400,1);
  pared1 = createSprite(200,200,400,1);
  pared2 = createSprite(0,100,1,200);
  pared3 = createSprite(400,100,1,200);
}

function draw() {
  background(0);
  //no se porque no salen las letritas
  textSize(20);
  fill(255);
  text("Instrucciones ",50,50);
  text("flecha hacia arriba =  cepillarse",50,50);
  text("flecha hacia abajo = ejercitarse",50,50);
  text("flecha hacia la izquierda = comer",50,50);
  text("flecha hacia la derecha = bañarse",50,50);
  text("tecla m = moverse",50,50);
  text("tecla n = dormir",50,50);

  if(keyDown("UP_ARROW")) {
    astronauta.changeAnimation("cepillandose", brush);
    astronauta.velocityX  =  .5;
    astronauta.velocityY = -1;
  }
  if(keyDown("DOWN_ARROW")) {
    astronauta.changeAnimation("ejercitandose", gymI);
    astronauta.velocityX  =  0;
    astronauta.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")) {
    astronauta.changeAnimation("bañandose", bath);
    astronauta.velocityX  =  1.5;
    astronauta.velocityY = 2;
  }
  if(keyDown("RIGHT_ARROW")) {
    astronauta.changeAnimation("comiendo", eat);
    astronauta.velocityX  =  .9;
    astronauta.velocityY = 1;
  }
  if(keyDown("m")) {
    astronauta.addAnimation("corriendo",move);
    astronauta.changeAnimation("corriendo", move);
    astronauta.velocityX  =  1;
    astronauta.velocityY = -2;
  }
  if(keyDown("n")) {
    astronauta.changeAnimation("dormir", sleep);
    astronauta.velocityX  =  -2;
    astronauta.velocityY = 1;
  }
  
  // no se como usar la libreria, aparte lo intente de todas las maneras que pense el como se haria y nada :c
  astronauta.bounceOff(pared);
  astronauta.bounceOff(pared1);
  astronauta.bounceOff(pared2);
  astronauta.bounceOff(pared3);
  

  

  
  drawSprites();
}


