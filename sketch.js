var dog,happyDog, database,foodS, foodStock;

function preload()
{
  Dog = loadImage('images/Dog.png');
  doghappy = loadImage('images/happydog.png');
}

function setup() {

  createCanvas(500, 500);
  database= firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage("Dog");
  dog.scale = 0.19;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  
  background(46,139,87);
 
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(doghappy);
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
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}










