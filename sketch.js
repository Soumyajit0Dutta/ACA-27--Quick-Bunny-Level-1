function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
 player=createSprite(50,550,30,30);
 target=createSprite(550,50,30,30);
 target.shapeColor="blue";
 bar1Group=new Group;
 bar2Group=new Group;
}

function draw() {
  background("black");
  generateBlocks();
  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }
  if(keyDown("left")){
    player.x=player.x-3;
  }
  if(player.isTouching(target)){
    text("you won",500,78);
  }
  destroy(bar1Group);
  destroy(bar2Group);
  drawSprites();
}
function generateBlocks(){
  if(frameCount % 40 ==0)
  {
    obs1=createSprite(-20,380,100,20);
    obs2=createSprite(620,200,100,20);
    obs1.shapeColor="red";
    obs2.shapeColor="red";
    obs1.velocityX=6;
    obs2.velocityX=-8;
    bar1Group.add(obs1);
    bar1Group.add(obs2);
  }
}
function destroy(x){
  for(var i = 0 ; i< (x).length ;i++){
    var temp = (x).get(i) ;
    if (player.isTouching(temp)) {
      player.x=50;
      player.y=550;
      temp=null;
      }   
    }
}