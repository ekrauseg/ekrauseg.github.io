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
var anchoBorde=10;
anchoBorde =10;  
ellipse (mouseX,mouseY,diametro,diametro);

diametro = diametro +1;

}

function estilo1() {
  
  strokeWeight (2)
stroke (255,242,0);
fill(237,28,36); 
}