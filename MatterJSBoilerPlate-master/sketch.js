const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof ;
var rope1,rope2,rope3,rope4,rope5 ; 
var bobObject1 , bobObject2 , bobObject3 , bobObject4 , bobObject5 ;

    function preload(){
     backgrond = colour("grey");
	}

function setup() {
var canvas = createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(grey); 
  
  drawSprites();
 
}




