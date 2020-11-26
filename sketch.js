
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground,ball;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(0,470,12000,20);
    ball = new paper(100,450,40);
	box1 = new Box(1265,385,30,150);
	box2 = new Box(1150,450,200,20);
	box3 = new Box(1050,385,30,150);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-85})
	}
}

