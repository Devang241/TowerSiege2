const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(100,200,30);
    ground = new Ground(600,height,1200,20)
    slingShot = new SlingShot(polygon.body,{x:150,y:200});
    roof = new Roof(580,300,225,10)
    roof2 = new Roof(975,200,160,10)

    block = new Block(490,276,30,40);
    block2 = new Block(520,276,30,40);
    block3 = new Block(550,276,30,40);
    block4 = new Block(580,276,30,40);
    block5 = new Block(610,276,30,40);
    block6 = new Block(640,276,30,40);
    block7 = new Block(670,276,30,40);

    block8 = new Block2(520,236,30,40);
    block9 = new Block2(550,236,30,40);
    block10 = new Block2(580,236,30,40);
    block11 = new Block2(610,236,30,40);
    block12 = new Block2(640,236,30,40);

    block13 = new Block3(550,196,30,40);
    block14 = new Block3(580,196,30,40);
    block15 = new Block3(610,196,30,40);

    block16 = new Block(580,156,30,40);

    block17 = new Block3(910,176,30,40);
    block18 = new Block3(940,176,30,40);
    block19 = new Block3(970,176,30,40);
    block20 = new Block3(1000,176,30,40);
    block21 = new Block3(1030,176,30,40);

    block22 = new Block2(940,136,30,40);
    block23 = new Block2(970,136,30,40);
    block24 = new Block2(1000,136,30,40);

    block25 = new Block(970,96,30,40);
    
}

function draw(){
    background(0)
    Engine.update(engine);
    
    ground.display();
    polygon.display();
    slingShot.display();
    roof.display();
    roof2.display();

    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();

    fill(255);
    textSize(20)
   text("press space bar for second chance",200,100);

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, {x:100, y:200}) 
	  slingShot.attach(polygon.body);
	}
  }
