var cat,cat1,cat2,cat3,cat4,cat1img,cat2img,cat3img,cat4img;
var garden,gardenimg;
var mouse,mouse1,mouse2,mouse3,mouse4,mouse1img,mouse2img,mouse3img,mouse4img;
function preload() {
    //load the images here
    cat1img=loadAnimation("images/cat1.png");
    cat2img=loadAnimation("images/cat2.png");
    cat3img=loadAnimation("images/cat3.png");
    cat4img=loadAnimation("images/cat4.png");
    gardenimg=loadImage("images/garden.png");
    mouse1img=loadAnimation("images/mouse1.png");
    mouse2img=loadAnimation("images/mouse2.png");
    mouse3img=loadAnimation("images/mouse3.png");
    mouse4img=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    cat =createSprite(650,660);
    cat.addAnimation("catsitting",cat1img);
    cat.scale=0.2;
    mouse=createSprite(100,660);
    mouse.addAnimation("mouserunning",mouse1img);
    mouse.scale= 0.2;
}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x-mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("cathappy",cat4img);
        cat.changeAnimation("cathappy");
        cat.scale=0.2;
        cat.x = 500;
        cat.y = 660;
        mouse.addAnimation("mousehappy",mouse2img);
        mouse.changeAnimation("mousehappy");
        mouse.scale = 0.2;
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
       mouse.addAnimation("mouseTeasing",mouse3img);
       mouse.changeAnimation("mouseTeasing");
       mouse.frameDelay=25;
       cat.addAnimation("catmoving",cat2img);
       cat.velocityX=-2;
       cat.changeAnimation("catmoving");

   }
   
}
