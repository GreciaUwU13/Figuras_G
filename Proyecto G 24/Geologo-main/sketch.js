const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, hierro;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    hierro = new Hierro(800,200,100,20)
    hammer = new Hammer(100,100);//martillo del geólogo
    rubber = new Rubber(700, 500, 70, 70);//hule
    stone = new Stone(500, 20, 1000, 20);
    suelo = new Ground(600, 595, 1200, 20);

}

function draw(){
    background("lightPink");
    Engine.update(engine);

    hierro.display();
    hammer.display();
    rubber.display();
    stone.display(); 
    suelo.display();

}
//Holaaa este es el código terminado, espero que le guste y que tenga una ,inda noche maestra :D