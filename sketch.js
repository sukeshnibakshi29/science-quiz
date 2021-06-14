var quizbg,quizbg2,system,security,code,form; 


function preload(){
  quizbg = loadImage("quizbg.jpg");
  quizbg2 = loadImage("quizbg2.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  //system = new System();
  
  }


function draw(){
background(quizbg);
clues()
security.display();
//system.display();

 
drawSprites();
}
