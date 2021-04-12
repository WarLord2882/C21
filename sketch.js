var canvas;
var music;
var fixedrect1;
var fixedrect2;
var fixedrect3;
var fixedrect4;
var object1, object2;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    fixedrect1 = createSprite(0, 580, 360,30)
    fixedrect1.shapeColor = "blue";
    fixedrect2= createSprite(295, 580, 200,30)
    fixedrect2.shapeColor = "orange";
    fixedrect3 = createSprite(515, 580, 200,30)
    fixedrect3.shapeColor = "pink";
    fixedrect4 = createSprite(740, 580, 220,30)
    fixedrect4.shapeColor = "green";
    //create box sprite and give velocity
    box = createSprite(random(20,750),100,30,30);
    box.velocityX = 5;
    box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
     edges = createEdgeSprites();
    box.bounceOff(edges);
    
    if(fixedrect1.isTouching(box)&&box.bounceOff(fixedrect1)){
        box.shapeColor = "blue"
        music.play();
    }

    if(fixedrect2.isTouching(box)){
        box.shapeColor = "orange"
        box.velocityX = 0
        box.velocityY = 0;
        music.stop();
    }

    if(fixedrect3.isTouching(box)&&box.bounceOff(fixedrect3)){
        box.shapeColor = "pink"
        music.play();
    }

    if(fixedrect4.isTouching(box)&&box.bounceOff(fixedrect4)){
        box.shapeColor = "green"
        music.play();
    }

    //add condition to check if box touching surface and make it box
    
    drawSprites();
}



