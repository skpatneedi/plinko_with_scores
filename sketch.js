var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  text(mouseX , mouseX,mouseY)
  text(mouseY,mouseX,mouseY-40)
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  

  textSize(35)
  text(" 100 ", 5, 550);
  text(" 200 ", 80, 550);
  text(" 200 ", 160, 550);
  text(" 300 ", 240, 550);
  text(" 300 ", 320, 550);
  text(" 400 ", 400, 550);
  text(" 300 ", 480, 550);
  text(" 300 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 100 ", 720, 550);
  
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
  
  if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
            if (particle.body.position.x < 89) 
              {
                  score=score+100;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


           else if (particle.body.position.x < 250 && particle.body.position.x > 90 ) 
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
            else if (particle.body.position.x < 400 && particle.body.position.x > 251 )
              {
                    score = score + 300;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }    
              else if (particle.body.position.x < 488 && particle.body.position.x > 401 )
              {
                    score = score + 400;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }  
              else if (particle.body.position.x < 646 && particle.body.position.x > 489 )
              {
                    score = score + 300;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }
              else if (particle.body.position.x < 720 && particle.body.position.x > 647 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }
              else if (particle.body.position.x < 800 && particle.body.position.x > 721 )
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  } 
}  
