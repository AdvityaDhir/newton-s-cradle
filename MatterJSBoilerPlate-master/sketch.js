const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var holder ;
var rope1,rope2,rope3,rope4,rope5 ; 
var ball1 , ball2 , ball3 , ball4 , ball5 ;

    function preload(){

	}

function setup() {
var canvas = createCanvas(900 , 900);
    engine = Engine.create();
    world = engine.world;

  Engine.run(engine);
  
  ball1 = new ball(200,500,50);
  
  ball2 = new ball(250,500,50);
  ball3 = new ball(300,500,50);
  ball4 = new ball(350,500,50);
  ball5 = new ball(400,500,50);

  holder = new Holder(200,200,100,PI/2);

  
  rope1 = new rope(ball1.body,holder.body);
  rope2 = new rope(ball2.body,holder.body);
  rope3 = new rope(ball3.body,holder.body);
  rope4 = new rope(ball4.body,holder.body);
  rope5 = new rope(ball5.body,holder.body);
  
}


function draw() {
  background("white"); 
  ball1.display();

  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  holder.display();

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  drawSprites();
 
}




