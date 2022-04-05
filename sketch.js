const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rubber ,iron,stone

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(125,20,50)
    iron = new Iron(400,25,65 )
    stone=new Stone(700,15,75)

    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
}