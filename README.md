//2016 07 20 wednesday
// estoy en la uss
//con mucha gente
// estamos haciendo un codigo que
//hace que el fondo sea verde 
//y que haya un elipse que siga al mouse 

//function nombre funcion (){

var diametro 
diametro =50;


function setup() {
  createCanvas(800,600);
  background (0,225,0)
  
  
}
  
function draw() {
estilo1();
muchasVeces();
var anchoBorde=10;
anchoBorde =10;  
ellipse (mouseX,mouseY,diametro,diametro);

diametro = diametro +3;

}

function estilo1() {
  
  strokeWeight (2)
stroke (355,242,0);
fill(337,28,36); 
}


function muchasVeces() {

var diez= 10;

for(var i = 0; i < 1000; i++){
ellipse (random(width),random (height),diez,diez);
}
}

function mousePressed (){
  if (mouseX > width /2) {
    console.log("hola");
  }
}
