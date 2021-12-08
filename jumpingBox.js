var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    music = loadSound("music.mp3")
}

function setup(){
    createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(500,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(790,580,360,30);
    bloco4.shapeColor = "green";
    
    
    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = 5;
    bola.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    
    createEdgeSprites();

    bola.bounceOff(edges[0]);
    bola.bounceOff(edges[1]);
    bola.bounceOff(edges[2]);
    bola.bounceOff(edges[3]);
    

    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        bola.velocityX = 0
        bola.velocityY = 0
        music.stop();
    }

    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        music.play();
    }
    
    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        music.play();
    }  
     drawSprites();
}