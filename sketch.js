const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1

function preload(){
	//paperImg = loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);

    //rectangle1=createSprite(1380,648,200,20)
	//rectangle1.shapeColor=color("red");

	//rectangle2=createSprite(1290,600,20,100)
	//rectangle2.shapeColor=color("red");
	
	//rectangle3=createSprite(1470,600,20,100)
	//rectangle3.shapeColor=color("red");

  groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color(255)
  
	engine = Engine.create();
	world = engine.world;

 ball1 = new paper(200,450)

 dustbin1 = new dustbin(1200,560)

 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 World.add(world, ground);
 
//ball1.addImage(paperImg);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  ball1.display();
  dustbin1.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
  }

}

