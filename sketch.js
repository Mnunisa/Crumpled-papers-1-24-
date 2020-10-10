
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var wpaper;
var ground;
var dbin1,dbin2,dbin3;
//function preload()
//{
	
//}

function setup(){
	

	 var canvas = createCanvas(800, 700);


	 engine = Engine.create();
	 world = engine.world;

	 //Create the Bodies Here.
	 wpaper = new Paper(200,100,25);
	 
	 dbin2 = new Dustbin(566,540,20,75);
	 dbin3 = new Dustbin(734,540,20,75);
	 dbin1 = new Dustbin(650,575,150,20);
	 ground = new Ground(400,600,800,20);
	

	 Engine.run(engine);
  
}

function draw(){
 // rectMode(CENTER);
     background("black");
     Engine.update(engine);

	 wpaper.display();
	 dbin1.display();
	 dbin2.display();
	 dbin3.display();
     ground.display();

  
     drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(wpaper.body,wpaper.body.position,{x:x=20,y:y=-20})
	}
}

