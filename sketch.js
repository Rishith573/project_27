
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var roof, rope1, rope2, rope3, rope4, rope5;
var bobDiameter = 35;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200, 500, 17.5);
	bobObject2 = new Bob(270, 500, 17.5);
	bobObject3 = new Bob(340, 500, 17.5);
	bobObject4 = new Bob(410, 500, 17.5);
	bobObject5 = new Bob(480, 500, 17.5);
	roof = new Roof(335, 210, 400, 20)
	rope1 = new Rope(bobObject1.body, roof.body, bobDiameter*-2, 0);
	rope2 = new Rope(bobObject2.body, roof.body, bobDiameter*-1, 0);
	rope3 = new Rope(bobObject3.body, roof.body, bobDiameter*0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, bobDiameter*1, 0);
	rope5 = new Rope(bobObject5.body, roof.body, bobDiameter*2, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);

  textSize(20);
  text(mouseX + ',' + mouseY, 100, 100)

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50, y:100});
	}
}


