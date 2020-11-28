
const Engine=Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;


var engine, world;

function setup() {
  canvas = createCanvas(400,400);

engine = Engine.create();
world = engine.world;


ground=new Ground(200,390,400,20);
ball = new Ball(50,50,20);
ball1 = new Ball(50,100,30);
ball2=new Ball(50,10,10);

box1=new Box(320,100,100,20);
box2=new Box(300,200,40,40);
box3=new Box(150,150,50,50);
  
}

function draw() {
  background("pink");  
  Engine.update(engine);

  rectMode(CENTER);
  ground.display();

ball.display();
ball1.display();
ball2.display();
box1.display();
box2.display();
box3.display();

text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}
