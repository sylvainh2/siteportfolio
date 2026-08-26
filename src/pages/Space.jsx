import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { Stage, Ticker, Shape, SpriteSheet, Sprite, Container, Text } from 'createjs-module';
import ReturnB from '../components/ReturnB';

let timerA=0;
let touche=[];
let alienArray=[];
let sens = 1;
let sensFlag = false;
let shootShip = true;
let spaceShip = false;
let shootAlien = false;
let refresh = false;
let pause = false;
let musicFlag = false;
let soundFlag = true;
let shootAble = true;
let game = false;
let bullet, flyingSocer;
let speedBullet = 10;
let speedAlienBullet = 7;
let speedSpace = 3;
let textArray = [];
let scTextDisplay = [];
let alienShootBullet = [];
let ship = [];
let stage = [];
let music = [];
let explode = [];
let zap = [];
const site = "/siteportfolio";

console.log("variables");
let frameR = 60;
let frameS = 60;
let frame = 1/frameS;
let y1 = 100;
let y2 = 150;
let y3 = 200;
let y4 = 250;
let y5 = 300;
let score = 0;
let level = 1;
let lives = 3;
let shootSpeed = 7800;
let timeSC;

let scoreText=[];
let liveText=[];
let levelText=[];

let alien1Sprite = {
    images:[site+"/alien1.png"],
    frames:{width:60,height:45,regx:-30,regy:45},
    animations:{
        run:[0,1,"run",frame*2],
        stand0:0,
        stand1:1
    },

};
let alien2Sprite = {
    images:[site+"/alien2.png"],
    frames:{width:60,height:45,count:2,regx:-30,regy:45},
    animations:{
        run:[0,1,"run",frame*2]
    }
};
let alien3Sprite = {
    images:[site+"/alien3.png"],
    frames:{width:60,height:45,count:2,regx:-30,regy:45},
    animations:{
        run:[0,1,"run",frame*2]
    }
};
let vaisseauSprite = {
    images:[site+"/vaisseau.png"],
    frames:{width:60,height:35,regx:-30,regy:0},
    animations:{
        stand:0
    }
};
let vaisseauMereSprite = {
    images:[site+"/vaisseaumere.png"],
    frames:{width:80,height:40,regx:-40,regy:40},
    animations:{
        stand:0
    }
};

const positionInit=[
    {
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 20,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 80,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 140,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 200,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 260,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 320,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 380,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 440,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 500,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 560,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 620,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 20,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 80,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 140,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 200,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 260,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 320,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 380,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 440,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 500,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 560,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 620,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 20,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 80,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 140,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 200,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 260,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 320,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 380,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 440,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 500,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 560,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 620,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 20,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 80,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 140,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 200,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 260,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 320,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 380,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 440,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 500,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 560,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 620,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 20,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 80,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 140,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 200,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 260,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 320,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 380,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 440,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 500,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 560,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 620,
        "y" : y5,
        "scr" : 10
    }
]

function Space(){

    const demoCanvas = useRef(null);
    const musique = useRef(null);
    const explosion = useRef(null);
    const tir = useRef(null);
    useEffect(()=>{
    const myCanvas = demoCanvas.current;
    if(myCanvas){
    stage = new Stage(myCanvas);

    music = musique.current;
    // music.autoplay = true;
    // music.play();
    music.volume = 0.1;
    explode = explosion.current;
    zap = tir.current;
    zap.volume = 0.2;

    const container = new Container();
    const menuCont = new Shape();
    menuCont.graphics.beginFill("darkgrey").drawRect(-300,-200,600,400);
    stage.addChild(menuCont);
    const titre1 = new Text("","bold 30px Arial","red");
    const titre2 = new Text("", "bold 20px Arial","black");
    const ligne1 = new Text("", "bold 20px Arial","black");
    const ligne2 = new Text("", "bold 20px Arial","black");
    const ligne3 = new Text("", "bold 20px Arial","black");
    const ligne4 = new Text("", "bold 20px Arial","black");
    const ligne5 = new Text("", "bold 20px Arial","black");
    const ligne6 = new Text("", "bold 20px Arial","black");
    const containerClick = new Container();
    const validCont = new Shape();
    validCont.graphics.beginFill("lightgrey").drawRect(-150,-15,300,30);
    containerClick.addEventListener("click",(e)=>{
        stage.removeChild(container);
        stage.update();
        game = true;
        start();
    });
    container.addChild(menuCont,titre1,titre2,ligne1,ligne2,ligne3,ligne4,ligne5,containerClick);
    containerClick.addChild(validCont,ligne6);
    stage.addChild(container);
    container.x = 500;
    container.y = 275;
    titre1.text = "SPACE INVADERS";
    titre1.textAlign = "center";
    titre1.y = -180;
    titre2.text = "Action des touches";
    titre2.textAlign = "center";
    titre2.y = -140;
    ligne1.text = "M ......... active/désactive la musique";
    ligne1.y = -60;
    ligne1.x = -250;
    ligne2.text = "S ......... active/désactive les effets sonores";
    ligne2.y = -30;
    ligne2.x = -250;
    ligne3.text = "+/- ....... augmente/baisse le volume de la musique";
    ligne3.y = 0;
    ligne3.x = -250;
    ligne4.text = "<= / => ... deplacement gauche/droite";
    ligne4.y = 30;
    ligne4.x = -250;
    ligne5.text = "Espace .... tir";
    ligne5.y = 60;
    ligne5.x = -250;
    ligne6.text = "Commencer la partie";
    validCont.y = 140;
    ligne6.y = 130;
    ligne6.textAlign = "center";
    stage.update();

    function start(){
        //****************************************************************************************************//
        //                                  création de la flotte d'aliens                                    //
        //****************************************************************************************************//

        console.log("debut");
        music.play();
        musicFlag = true;
        window.addEventListener("keydown",keyDown);
        window.addEventListener("keyup",keyUp);
    
        textDisplay(scoreText, "SCORE:", 80);
        textDisplay(levelText, "NIVEAU:", 450);
        textDisplay(liveText, "VIES:", 800);
    
        textArray[0].text = "SCORE:"+score;
        textArray[1].text = "NIVEAU:"+level;
        textArray[2].text = "VIES:"+lives;
    
        createShip(480);
        
        ennemiDisplay(positionInit);
    
    //********************************************************************************************************//
    //                            mise en place de la routine principale de gestion                           //
    //********************************************************************************************************//
    
        Ticker.setFPS(frameR);
        Ticker.addEventListener("tick",tickFunc);
}
}
//------------------------------------------- gestion des touches --------------------------------------------//
function keyDown(event){
    let e = event.keyCode;
    console.log(e);
    touche[e]=true;
    if (pause && touche[80]){
        console.log("pause",pause);
        Ticker.setFPS(frameR);
        Ticker.addEventListener("tick",tickFunc);
        if(musicFlag)music.play();
    }
    if (!pause && touche[80]){
        console.log("pause",pause);
        Ticker.removeEventListener("tick", tickFunc);
        if(musicFlag)music.pause();
    }
    if(touche[80]){
        pause = !pause;
    }
    if (touche[77]){
        if (musicFlag && !pause){
            music.pause();
        }
        if (!musicFlag && !pause){
            music.play();
        }
        musicFlag = !musicFlag;
    }
    if (touche[83]){
            soundFlag = !soundFlag;
    }
    if (touche[107] && music.volume<0.9){
        music.volume += 0.1;
    }
    if (touche[109] && music.volume>0.2){
        music.volume -= 0.1;
    }

}

function keyUp(event){
    let e = event.keyCode;
    touche[e]=false;
}

//------------------------------------------- déplacements des aliens ----------------------------------------//

function alienMove(){

    timerA += 1;
    if(timerA%(frameS/2) === 0){
        if(refresh){
            ennemiDisplay(positionInit);
            refresh = false;
            sens = 1;
            sensFlag = false;
        }
        alienArray.map((alienData)=> {
            alienData.x += (10*sens);
            if (alienData.x > (stage.canvas.width-60) || alienData.x < 20){
                if(!sensFlag){
                    sensFlag = true;
                }
            }
        })
        if(sensFlag){
            alienArray.map((alienDat)=> {
                alienDat.y += 15;
                
                if (alienDat.y > 490) {
                    // Game Over
                    gameOver();
                }
            })
            sens *= (-1);
            sensFlag = false;
        }
        timerA = 0;
    }
}

//--------------------------------------------- tir du vaisseau ----------------------------------------------//

function shootBul(x){
    if(shootShip){
        bullet = new Shape();
        bullet.graphics.beginFill("red").drawRect(0, 0, 4, 10);
        bullet.x = x - 2;
        bullet.y = 510;
        stage.addChild(bullet);
        if(soundFlag)zap.play();
        shootShip = false;
    }
}

//-------------------------------------- déplacement du tir du vaisseau --------------------------------------//

function moveBul(){
    if(!shootShip){
        bullet.y -= speedBullet;
        if (bullet.y < 50){
            shootShip = true;
            stage.removeChild(bullet);
        }
    }
}

//---------------------------------------- tirs des vaisseaux aliens -----------------------------------------//

function alienShootBul(xAlien,yAlien){
    const bulletAlien = new Shape();
    bulletAlien.graphics.beginFill("blue").drawRect(0,0,4,15);
    bulletAlien.x = xAlien + 28;
    bulletAlien.y = yAlien + 45;
    stage.addChild(bulletAlien);
    alienShootBullet.push(bulletAlien);
    shootAlien = true;
}

//--------------------------------------- déplacements des tirs aliens ---------------------------------------//

function alienBulletMove(){
    if(shootAlien){
        for(let i=0; i<alienShootBullet.length; i++){
            alienShootBullet[i].y += speedAlienBullet;
        }
    }

}

//---------------------------------------- apparition vaisseau mère ------------------------------------------//

function spaceShipBuild(vaisseauMereSprite){
    if (!spaceShip){
        const spriteSheet = new SpriteSheet(vaisseauMereSprite);
        flyingSocer = new Sprite(spriteSheet,"stand");
        flyingSocer.x = 1000;
        flyingSocer.y = 50;
        flyingSocer.scaleX = 0.8;
        flyingSocer.scaleY = 0.7;
        stage.addChild(flyingSocer);
        spaceShip = true;
    }
}

//----------------------------------------- déplacement vaisseau mère ----------------------------------------//

function spaceShipMove(){
    if (spaceShip){
        flyingSocer.x -= speedSpace;
        if (flyingSocer.x <-60){
            spaceShip = false;
            stage.removeChild(flyingSocer);
        }
    }
}

//----------------------------------- calcul colision tirs du vaisseau ---------------------------------------//

function colisions(){
    if (!shootShip){
        for(let i = 0; i <= alienArray.length-1; i++){
            const alienData = alienArray[i];
            if ((alienData.x+5)<bullet.x && (alienData.x+40)>bullet.x && alienData.y<=bullet.y && alienData.y+25>=bullet.y){
                score += alienArray[i].scr;
                stage.removeChild(alienData);
                stage.removeChild(bullet);
                alienArray.splice(i,1);
                shootShip = true;
                textArray[0].text = "SCORE:"+score;
                if (alienArray.length === 0){
                    lives += 1;
                    level += 1;
                    textArray[1].text="NIVEAU:"+level;
                    textArray[2].text="VIES:"+lives;
                    refresh = true;

                }
            }
        }
        if (spaceShip){
            if ((flyingSocer.x+5) < bullet.x && (flyingSocer.x+65) > bullet.x && flyingSocer.y < bullet.y && flyingSocer.y+20 > bullet.y){
                let sc=0;
                if(flyingSocer.x>=370 && flyingSocer.x<=570)sc=300;
                if((flyingSocer.x>=170 && flyingSocer.x<370) || (flyingSocer.x>570 && flyingSocer.x<=770))sc=200;
                if((flyingSocer.x>=-60 && flyingSocer.x<170) || (flyingSocer.x>770 && flyingSocer.x<1000))sc=100;
                textArray[0].text = "SCORE:"+(score+sc);
                let scText = flyingSocer.x+30;
                stage.removeChild(flyingSocer);
                stage.removeChild(bullet);
                scTextDisplay = new Text(sc,"bold 12px arial","red");
                scTextDisplay.x = scText-15;
                scTextDisplay.y = 60;
                stage.addChild(scTextDisplay);
                timeSC = 0;
                score += sc;
                shootShip = true;
                spaceShip = false;
            }
        }

    }

}

//----------------------------------------- création de la flotte alien --------------------------------------//

function ennemiDisplay(positionInit){
    for(let i=0; i<positionInit.length;i++){
        const spriteSheet=new SpriteSheet(positionInit[i].src);
        const alien=new Sprite(spriteSheet,positionInit[i].stage);
        alien.x=positionInit[i].x;
        alien.y=positionInit[i].y;
        alien.scr = positionInit[i].scr;
        alien.scaleX=0.8;
        alien.scaleY=0.7;
        alienArray.push(alien);
        stage.addChild(alien);
    };
}

//-------------------------------- creation des textes de score, niveau, vies --------------------------------//

function textDisplay(dataText,textLine,xData){
    dataText = new Text(textLine,"bold 20px Arial","black");
    dataText.textAlign="left";
    dataText.textBaseline="middle";
    dataText.x = xData;
    dataText.y = 20;
    stage.addChild(dataText);
    textArray.push(dataText);
}

//----------------------------------------------- fin de jeu -------------------------------------------------//

function gameOver(){
    music.pause();
    Ticker.removeEventListener("tick", tickFunc);
    // alert("Game Over");
    const gOverCont = new Container();
    const gOverWindow = new  Shape();
    gOverWindow.graphics.beginFill("darkgrey").drawRect(-300,-200,600,400);
    const gOText = new Text("GAME OVER", "bold 30px Arial","red");
    const butCont = new Container();
    const backButText = new Shape();
    backButText.graphics.beginFill("lightgrey").drawRect(-150,-15,300,30);
    const butText = new Text("Nouvelle Partie","bold 20px Arial","black");
    butCont.addChild(backButText,butText);
    gOverCont.addChild(gOverWindow, gOText, butCont);
    stage.addChild(gOverCont);
    gOverCont.x = 500;
    gOverCont.y = 275;
    gOText.textAlign = "center";
    gOText.y = -50;
    butText.textAlign = "center";
    butText.textBaseline = "middle";
    butText.y = 50;
    backButText.y = 50;
    backButText.addEventListener("click",()=>{
        gOverCont.removeAllChildren();
        Ticker.setFPS(frameR);
        Ticker.addEventListener("tick",tickFunc);
        reset();
        stage.update();
    })
}

//------------------------------------------- remise à zero et restart ---------------------------------------//

function reset(){
    if(game){
        console.log("reset");
        if(musicFlag){
            music.play();
            musicFlag = true;
        }
        score = 0;
        level = 1;
        lives = 3;
        textArray[0].text = "SCORE:"+score;
        textArray[1].text = "NIVEAU:"+level;
        textArray[2].text = "VIES:"+lives;
        timerA = 0;
        sens = 1;
        sensFlag = false;
        shootAble = true;
        //--------------------------- on efface les tirs des aliens ---------------------//
        if(shootAlien){
            alienShootBullet.map((data)=>{
                stage.removeChild(data);
            })
        }
        shootAlien = false;
        //--------------------------- on efface le tir du vaisseau ----------------------//
        if(!shootShip){
            stage.removeChild(bullet);
        }
        shootShip = true;
        alienShootBullet = [];
        //------------------------------ on efface les aliens ---------------------------//
        if(alienArray.length>0){
            alienArray.map((data)=>{
                stage.removeChild(data);
                console.log(data);
            })
            alienArray=[];
            console.log(alienArray.length,alienArray);
        }
        //---------------- on réinitialise le tableau des touches appuyées --------------//
        if(touche.length>0){
            touche.map((data,index)=>{
                touche[index] = false;
            })
        }
        ennemiDisplay(positionInit);
    }

}

//-------------------------------------- gestion des colisions de tirs aliens --------------------------------//

function alienBulletColision(){
    if(shootAlien){
        for(let i=0; i<alienShootBullet.length; i++){
            if((alienShootBullet[i].x>ship.x && alienShootBullet[i].x<ship.x+46) && alienShootBullet[i].y>ship.y && shootAble){
                lives -= 1;
                textArray[2].text="VIES:"+lives;
                waitTime();
                stage.update();
                if(lives <= 0){
                    gameOver();
                }
                stage.removeChild(alienShootBullet[i]);
                alienShootBullet.splice(i,1);
                if(alienShootBullet.length===0)shootAlien = false;
            }
            else if(alienShootBullet[i].y>535){
                stage.removeChild(alienShootBullet[i]);
                alienShootBullet.splice(i,1);
                if(alienShootBullet.length===0)shootAlien = false;
            }
        }
    }

}

//-------------------------------------- création tirs du vaisseau -------------------------------------------//

function alienShoot(){
    alienArray.map((data)=>{
        let shoot = Math.floor(Math.random()*(shootSpeed/(56-alienArray.length)+200));
        if(shoot===50){
            alienShootBul(data.x,data.y);
        }

    })
}

//----------------------- attente entre l'état de vaisseau touché et un nouveau vaisseau ---------------------//

function waitTime(){
    shootAble = false;
    ship.visible = false;
    if(soundFlag)explode.play();
    setTimeout(()=>{
        ship.visible = true;
        shootAble = true;
    },2000);
}

//------------------------------------------ création du vaisseau --------------------------------------------//

function createShip(dataX){
    const spriteSheet = new SpriteSheet(vaisseauSprite);
    ship = new Sprite(spriteSheet,"stand");
    ship.x = dataX;
    ship.y = 520;
    ship.scaleX = 0.8;
    ship.scaleY = 0.7;
    stage.addChild(ship);
}

//------------------------------- gestion des diverses fonctions par temporisation régulée -------------------//

function tickFunc(){
    alienMove();
    moveBul();
    spaceShipMove();
    alienShoot();
    colisions();
    alienBulletMove();
    alienBulletColision();

    if(Math.floor(Math.random()*700)===50){
        spaceShipBuild(vaisseauMereSprite);
    }
    if(timeSC && timeSC===frameR){
        stage.removeChild(scTextDisplay);
        timeSC = null;
    }

    if (touche[37] && shootAble){
        ship.x -= 5;
        if (ship.x<10) ship.x = 10;
    }
    if (touche[39] && shootAble){
        ship.x += 5;
        if (ship.x > 940) ship.x = 940;
    }
    if (touche[32] && shootAble){
        shootBul(ship.x+25);
    }

    stage.update();
    timeSC +=1;
}
return () => {
    // Arrêter le Ticker
    Ticker.removeEventListener("tick",tickFunc);

    // Vider la scène, supprimer tous les éléments ajoutés et mise a jour des variables
    stage.removeAllChildren();
    stage.clear();
    console.log("musique en pause");
    music.pause();
    timerA=0;
    touche=[];
    alienArray=[];
    sens = 1;
    sensFlag = false;
    shootShip = true;
    spaceShip = false;
    shootAlien = false;
    refresh = false;
    pause = false;
    musicFlag = true;
    soundFlag = true;
    shootAble = true;
    game = false;
    bullet = [];
    flyingSocer = [];
    speedBullet = 10;
    speedAlienBullet = 7;
    speedSpace = 3;
    textArray = [];
    scTextDisplay = [];
    alienShootBullet = [];
    ship = [];
    // stage = [];
    // music = [];
    // explode = [];
    // zap = [];
    
    frameR = 60;
    frameS = 60;
    frame = 1/frameS;
    y1 = 100;
    y2 = 150;
    y3 = 200;
    y4 = 250;
    y5 = 300;
    score = 0;
    level = 1;
    lives = 3;
    shootSpeed = 7800;
    timeSC = false;
    
    scoreText=[];
    liveText=[];
    levelText=[];

    window.removeEventListener("keyup",keyUp);
    window.removeEventListener("keydown",keyDown);

    console.log("Nettoyage effectué : Ticker arrêté et scène nettoyée.");
  };
},[]);


    return(
        <>
            <div className="canvasDisp" id="canvasContainer">
                <h2 id="invaderTitle">space invaders</h2>
                <canvas ref={demoCanvas} width="1000" height="550">
                Désolé, votre navigateur ne prend pas en charge &lt;canvas&gt;.
                </canvas>
            </div>
            <ReturnB />
            <audio loop ref={musique} src={site+"/sound/reflex-193612.mp3"} type="audio/mpeg"></audio>
            <audio ref={explosion} src={site+"/sound/explosion-91872.mp3"} type="audio/mpeg"></audio>
            <audio ref={tir} src={site+"/sound/shoot.wav"} type="audio/wav"></audio>
        </>
    )
}
export default Space;