const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var engine , world;
var Background,snow1,snow2,snow3,snow4;



function preload(){
 Background = loadImage("snow3.jpg");
 snowImg = loadImage("snow4.webp");
 
}
function setup() {
  createCanvas(800,400);
  snow1 = createSprite(3,3,3,3);
  snow2 = createSprite(200,30,3,3);
  snow3 = createSprite(700,40,3,3);
  snow4 = createSprite(500,300,3,3);
  snow1.scale = 0.3;
  snow2.scale = 0.3;
  snow3.scale = 0.3;
  snow4.scale = 0.3;
  snow1.addImage("snowPic",snowImg);
  snow2.addImage("snowPic",snowImg);
  snow3.addImage("snowPic",snowImg);
  snow4.addImage("snowPic",snowImg);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
}
function draw() {
  background(Background);  
  drawSprites();
  snow1.display();
}