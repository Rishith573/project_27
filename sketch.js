
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var roof, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200, 500, 35);
	bobObject2 = new Bob(270, 500, 35);
	bobObject3 = new Bob(340, 500, 35);
	bobObject4 = new Bob(410, 500, 35);
	bobObject5 = new Bob(480, 500, 35);
	roof = new Roof(335, 210, 400, 20)
	rop1 = new Rope(bobObject1.body, roof.body, bobDiameter*2, 0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  textSize(20);
  text(mouseX + ',' + mouseY, 100, 100)

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roof.display();

	drawSprites();
}



