const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//var engine, world, object;
var particles=[];
var plinko=[];
var divisions=[];
var divisionHeight=300;
var ground;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(width/2,height,width,20);

 for(var k=0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
 }

  for(var j=40; j<=width; j=j+50){
    plinko.push(new Plinko(j,75))
  }
  for(var j=15; j<=width-10; j=j+50){
     plinko.push(new Plinko(j,175))
  }
  for(var j=40; j<=width; j=j+50){
    plinko.push(new Plinko(j,275))
  }
  for(var j=15; j<=width-10; j=j+50){
    plinko.push(new Plinko(j,375))
 }
}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display();

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0; k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }

  drawSprites();
}