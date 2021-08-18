const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;

var con;
var roof;
var bob1, bob2, bob3, bob4, bob5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


bob1 = Bodies.circle(299,50,10,ball_options);
bob2 = Bodies.circle(309,50,10,ball_options);
bob3 = Bodies.circle(319,50,10,ball_options);
bob4 = Bodies.circle(329,50,10,ball_options);
bob5 = Bodies.circle(339,50,10,ball_options);


rope1=new rope(bob1,roof,-80,0);
rope2=new rope(bob1,roof,-80,0);
rope3=new rope(bob1,roof,-80,0);
rope4=new rope(bob1,roof,-80,0);
rope5=new rope(bob1,roof,-80,0);

World.add(world,bob1);
World.add(world,bob2);
World.add(world,bob1);
World.add(world,bob4);
World.add(world,bob5);


	Engine.run(engine);



	constructor(body1,body2,pointA,pointB); 
	{
        this.pointA=pointA
		this.pointB=pointB

		var options={
        bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA, y:this.pointB}

		}

          



	}
	con = Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });
	  con = Matter.Constraint.create({
		pointA:{x:210,y:20},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });
	  con = Matter.Constraint.create({
		pointA:{x:220,y:20},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });
	  con = Matter.Constraint.create({
		pointA:{x:230,y:20},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });
}
     con = Matter.Constraint.create({
	 pointA:{x:240,y:20},
	 pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
      });

	  World.add(world,con);

	  rectMode(CENTER);
	  ellipseMode(RADIUS) 

function draw() {
	background(51);
	Engine.update(engine);
  
  

  rect(roof.position.x,roof.position.y,230,20);

 display()
 {
	 var pointA=this.rope.bodyA.position
	 var pointB=this.rope.bodyB.position

	 strokeWeight(2);
 }

  
  ellipse(bob1.position.x, ball.position.y,10);
  ellipse(bob1.position.x, ball.position.y,12);
  ellipse(bob3.position.x, ball.position.y,14);
  ellipse(bob4.position.x, ball.position.y,16);
  ellipse(bob5.position.x, ball.position.y,18);

 
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(bob1,bob2,bob3,bob4,bob5,{x:0,y:0},{x:0.05,y:0});
    }
}
