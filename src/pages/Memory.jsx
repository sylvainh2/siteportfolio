import ReturnB from "../components/ReturnB"
import { useEffect, useState, useRef } from "react"
function Memory() {
    const imgArray = ["alarmclock.svg", "baloon.svg", "box.svg", "butterfly.svg", "hat.svg", "paperplane.svg", "poolball.svg", "radio.svg", "rocket.svg", "rubikscube.svg", "television.svg", "tiebow.svg"];
    let choice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let cardArray = [];
    const imgBack = "question.svg";
    let card2, card3, card4, card5, card6
    let simple = 0;
    let unclickable=false;
    let int;
    let rand;
    // let levCont = document.querySelector(".lev").textContent;
    let level = 1;
    let levelTemp = 1;
    let endLevel=false;
    let clickedCards = [];
    let countClickedCards = 0;
    let countClickedCardsAll = 0;
    let nbCardArray = [12, 16, 24];
    let nbCarte = nbCardArray[level - 1];
    const cardRef = useRef(null);
    const btn1Ref = useRef(null);
    const btn2Ref = useRef(null);
    const btn3Ref = useRef(null);
    useEffect(()=>{
        const card = cardRef.current;
        const btn1 = btn1Ref.current;
        const btn2 = btn2Ref.current;
        const btn3 = btn3Ref.current;
    btn();
    build();
    //*******************************************************************************************************************/
    //                                      fonction de gestion des cartes                                               /
    //*******************************************************************************************************************/

    function play(e) {
        e.preventDefault();
        levelTemp=level;
        document.querySelector(".lev").textContent="level:"+level;
        console.log(e);
        if(!unclickable){
            // btn1.removeEventListener("click", btnFunc);
            // btn2.removeEventListener("click", btnFunc);
            // btn3.removeEventListener("click", reset);
            let ev = e.target;
            let evP = ev.parentNode;

            countClickedCards += 1;
            console.log("count",countClickedCards,evP.clickable);
            if (countClickedCards == 1 && evP.clickable == true) {
                evP.clickable = false;
                // mise en place d'une classe box rot pour la rotation d'une carte face visible 
                evP.parentNode.className = "memoryBox rot";
                clickedCards.push(evP);
                console.log("ccards", clickedCards);
            }
            if (countClickedCards == 2 && evP.clickable == true) {
                clickedCards.push(evP);
                if ((clickedCards[0].nbcard == clickedCards[1].nbcard) && (clickedCards[0].index != clickedCards[1].index)) {
                    clickedCards[0].parentNode.className = "memoryBox rot";
                    clickedCards[1].parentNode.className = "memoryBox rot";
                    let essai0=cardArray[clickedCards[0].index].childNodes[0];
                    let essai1=cardArray[clickedCards[1].index].childNodes[0];
                    essai0.removeEventListener("click", play);
                    essai1.removeEventListener("click", play);
                    clickedCards.splice(0, clickedCards.length);
                    countClickedCardsAll += 2;
                    countClickedCards = 0;
                    if (countClickedCardsAll == nbCarte) {
                        // btn();
                        if(level<3){
                            level+=1;
                            let text = document.querySelector(".lev");
                            text.textContent = "level:" + level;
                            endLevel=true;
                            reset();
                        }else if(level==3){
                            document.querySelector('.h2').textContent = "Bravo!!!";
                        }
                    }
                } else if (clickedCards[0].nbcard != clickedCards[1].nbcard) {
                    unclickable=true;
                    ev.mouseEnable=true;
                    countClickedCards = 0;
                    clickedCards[1].parentNode.className = "memoryBox rot";
                    clickedCards[0].parentNode.className = "memoryBox rot";
                    int = setInterval(att, 700);
                    clickedCards[0].clickable = true;
                    clickedCards[1].clickable = true;
                }
                if(!evP.clickable){
                    console.log(evP.clickable,countClickedCards);
                    countClickedCards = 1;
                    clickedCards[1]=[];
                }
            }
            if(countClickedCards==2 && evP.clickable==false)countClickedCards=1;
        }
    }
    //********************************************************************************************************************/
    //                             fonction d'attente avant retournement des cartes non paires                            /
    //********************************************************************************************************************/
    function att() {
        clearInterval(int);
        clickedCards[0].parentNode.className = "memoryBox";
        clickedCards[1].parentNode.className = "memoryBox";
        clickedCards.splice(0, clickedCards.length);
        unclickable=false;
    }
    //********************************************************************************************************************/
    //                                   fonction de gestion des boutons de level                                         /
    //********************************************************************************************************************/
    function btnFunc(e) {
        e.preventDefault();
        let text = document.querySelector(".lev");
        let ev = e.target.value;
        if (ev == "-" && levelTemp > 1) {
            levelTemp += -1;
        }
        if (ev == "+" && levelTemp < 3) {
            levelTemp += 1;
        }
        text.textContent = "level:" + levelTemp;
    }
    //******************************************************************************************************************/
    //                                  fonction de remise à zero des variables                                         /
    //******************************************************************************************************************/
    function reset() {
        if(endLevel==false)level=levelTemp;
        document.querySelector('.h2').textContent = "";
        document.querySelector('.memoryContainer').className = "memoryContainer cont" + level;
        nbCarte = nbCardArray[level - 1];
        choice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        simple = 0;
        endLevel=false;
        cardArray.map((data) => {
            data.parentNode.removeChild(data);
        })
        cardArray = [];

        build();
    }
    //******************************************************************************************************************/
    //                                  fonction de tirage aléatoire des images                                         /
    //******************************************************************************************************************/
    function pickUp() {
        let rdm = Math.floor(Math.random() * 12);
        let rechoice = false;
        if (choice[rdm] == 1) {
            rechoice = false;
        } else if (choice[rdm] == 0 && simple < (nbCarte / 2)) {
            rechoice = false;
            simple += 1;
        }
        else {
            rechoice = true;
        }
        while (choice[rdm] > 2 || rechoice == true) {
            rdm = Math.floor(Math.random() * 12);
            if (choice[rdm] == 1) {
                rechoice = false;
            } else if (choice[rdm] == 0 && simple < (nbCarte / 2)) {
                rechoice = false;
                simple += 1;
            }
            else {
                rechoice = true;
            }
        }
        choice[rdm] += 1;
        return (rdm);
    }
    //*******************************************************************************************************************/
    //                      fonction d'activation des ecouteurs d'evenements sur les boutons de level                    /
    //*******************************************************************************************************************/
    function btn() {
        btn1.addEventListener("click", btnFunc);
        btn2.addEventListener("click", btnFunc);
        btn3.addEventListener("click", reset);
    }
    //*******************************************************************************************************************/
    //                                  fonction de création de cartes dans le DOM                                       /
    //*******************************************************************************************************************/
    function build() {
        clickedCards=[];
        countClickedCards = 0;
        countClickedCardsAll = 0;
        for (let i = 0; i < nbCarte; i++) {
            card5 = document.createElement("div");
            card5.setAttribute('class', "memoryBox");
            card2 = document.createElement('div');
            card2.setAttribute('class', "cardsOne");
            card3 = document.createElement('img');
            card3.setAttribute('class', 'card-front');
            rand = pickUp();
            card3.setAttribute('src', 'images/' + imgBack);
            card2.append(card3);
            card4 = document.createElement('img');
            card4.setAttribute("src", "images/" + imgArray[rand]);
            card4.setAttribute("class", "card-back");
            card2.append(card4);
            card5.append(card2);
            card.append(card5);
            cardArray.push(card5);
            card2.addEventListener("click", play);
            card2.nbcard = rand;
            card2.clickable = true;
            card2.index = i;
        }
    }
    },[])

    return (
        <section className="memorySection">
            <h1>Memory Cards</h1>
            <div className="btn">
                <input ref={btn1Ref} className="mbtn" type="button" name="moins" value="-"></input>
                <p className="lev">level:1</p>
                <input ref={btn2Ref} className="pbtn" type="button" name="plus" value="+"></input>
                <button ref={btn3Ref} className="memoryButton" type="submit">Nouveau jeu</button>
            </div>
            <div className="table">
                <div className="h2"></div>
                <div ref={cardRef} className="memoryContainer cont1"></div>
            </div>
            <ReturnB />
        </section>
    )
}
export default Memory;