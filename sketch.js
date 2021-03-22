var dog,Dogimg, database,foodS, foodStock,doghappy;

function preload()
{
  Dogimg = loadImage('Dog.png');
  doghappy = loadImage('happydog.png');
}

function setup() {
  database= firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage("Dogimg");
  dog.scale = 0.19;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  
  background(46,139,87);
 
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage("doghappy");
 }

 
 
 drawSprites();
  textSize(20);
  fill("white");
  text("Note: Press UP_ARROW key To feed drago Milk",100,50);

}

function readstock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}












