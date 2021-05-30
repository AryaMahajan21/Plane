var Plane;
var CoolBackground;
var Health = 100;
var Birds;
var gameState = "PLAY";
var Distance;
let cam;

function preload() {
  Cool = loadImage("Coolbackground.jpeg");

  j = loadImage("planeGreen1.png");

  Bird = loadImage("download (8).jpeg");
}

function setup() {
  createCanvas(400, 400);
  CoolBackground = createSprite(200, 200);
  CoolBackground.addImage("J", Cool);
  CoolBackground.scale = 4;
  CoolBackground.velocityX = 4;

  Plane = createSprite(30, 200);
  Plane.addImage(j);
  Plane.scale = 0.7;
  Plane.velocityX = 4;

    Distance = 0;


  
  birdsGroup = new Group();
}

function draw() {
  background(220);
  if (gameState === "PLAY") {

    movePlane();



    if (birdsGroup.isTouching(Plane)) {
      birdsGroup.destroyEach();
      Health = Health - 10;
    }
    if (frameCount % 2 == 0){
    Distance = Distance + 1;
    }
  }
  createBirds();
  drawSprites();
  gameOver();
  textSize(20)
  fill("Green")
  text("Health : " + Health, 250, 25);
  fill("Green");
  text("Distance: " + Distance, 100,25)

  if (gameState === "END") {
    background("black");
    textSize(50);
    fill("gold")
    text("Game Over", 0, 200);
    Birds.velocityX = 0;
  }
camera.position.x = Plane.x
camera.position.y  = Plane.y
}

function createBirds() {
  if (frameCount % 80 === 0) {
    Birds = createSprite(random(450,1000),random(0,200));
    Birds.addImage(Bird);
    Birds.scale = 0.2;
    Birds.lifetime = 200;

    birdsGroup.add(Birds);
  }

}
function gameOver(){ 
if (Health === 0) {
    background("black");
    textSize(50);
    fill("gold")
    text("Game Over", 0, 200);
    Birds.velocityX = 0;
    gameState = "END";
  }
}
function movePlane(){
      if (keyDown("up")) {
      Plane.y = Plane.y - 5;
    }
    if (keyDown("down")) {
      Plane.y = Plane.y + 5;
    }
}
function halfHealth(){
}