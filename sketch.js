var hole;
var player;
var timer = 0;
function setup(){
    createCanvas(400,400);
    hole= new Hole (40,40);
   hole.shapeColor = "brown";
}
function draw(){
//background("red");
text(timer ,200,150).fontSize = "150px";

timer = timer+0.1
}