


var sp,spp





function setup() {
  createCanvas(800,400);
 
 sp = createSprite(400, 200, 50, 50);
 spp = createSprite(150,200,10,30);
spp.velocityX=5
sp.velocityX=-5

}

function draw() {
  background("black")
 /* spp.x=mouseX
  spp.y=mouseY*/
  


bounceOff(sp,spp);  
  drawSprites();
}








