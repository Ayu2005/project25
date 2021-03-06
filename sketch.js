
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground1;
var paper1;
var box1,box2,box3;

var bin,binImage;

function preload(){

binImage=loadImage("sprites/dustbin.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.


	bin = createSprite(595,620,100,70);
	bin.addImage(binImage);
	bin.scale=0.3;



	box1 = new Box(550,620,20,100);
	
	box2 = new Box(610,660,80,20);
	box3 = new Box(640,620,20,100);


	paper1 = new Paper(100,600,10);


	ground1 = new Ground(400,680,width,15);


	

	
	

	

	
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  Engine.update(engine);

  paper1.display();

  ground1.display();

  box1.display();
  box2.display();
  box3.display();
 

  

   
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW ) {
	  Matter.Body.applyForce(paper1.body, paper1.body.position, {
		x: 11,
		y: -13
	  });
	}
  }
  
