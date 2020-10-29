const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ship,ship_1;
var bomb,catpult;
var pillar1,pillar2;
var gate;
var roof;
var ground;
var gs="sling";
function preload(){
  bg=loadImage("day.jpg");
  ship_1=loadImage("bandook.png");
}

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
ship=createSprite(150,300);
ship.addImage(ship_1);
  ship.scale=1.5;
  bomb=new Bomb(133,191,50);
  pillar2=new Pillar(733,222,50,400);
  pillar1=new Pillar(455,222,50,400);
 gate=new Gate();
 roof=new Roof();
 ground=new Ground();
  catapult=new Catapult(bomb.body,{x:133,y:191});
  Engine.run(engine)
}

function draw() {
  background(bg); 
  bomb.display();
  pillar1.display();
  pillar2.display();
  roof.display();
  gate.display();
  ground.display();
catapult.display();
detectCollision(bomb,pillar1);
detectCollision(bomb,pillar2);
detectCollision(bomb,gate);
detectCollision(bomb,roof);
detectCollision(bomb,ground);



  drawSprites();
}
function mouseDragged(){
  if(gs!=="launched"){
  Matter.Body.setPosition(bomb.body,{x:mouseX,y:mouseY});
}
}
function mouseReleased(){
  if(gs!=="launched"){
 catapult.fly();
  }
 gs="launched";
}
function keyPressed(){
  if((keyCode===32)&&gs==="launched"){
    Matter.Body.setPosition(bomb.body,{x:180,y:200});
   
    catapult.attach(bomb.body);
    gs="sling";
  }
}
function detectCollision(obj1,obj2){
  pos1=obj1.body.position;
  pos2=obj2.body.position;
  if(pos1.x-pos2.x<obj1.r+obj2.width
    &&pos2.x-pos1.x<obj1.r+obj2.width
    &&pos1.y-pos2.y<obj1.r+obj2.height
    &&pos2.y-pos1.y<obj1.r+obj2.height)
    {
      Matter.Body.setStatic(obj2.body,false);
    }
}
