import ReturnB from "../components/ReturnB"
import { useEffect } from "react";
function Morpion() {
    const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
    let playedSquares=[0,0,0,0,0,0,0,0,0];
    let compt=0;
    let xcomb=[];
    let ycomb=[];
    let arr=[];
    let res1,res2,res3=false;
    let player="X";
    function reloadParty(){
        playedSquares=[0,0,0,0,0,0,0,0,0];
        compt=0;
        xcomb=[];
        ycomb=[];
        arr=[];
        res1=false;
        res2=false;
        res3=false;
        player="X";
        document.querySelectorAll('.square').forEach((data)=>data.textContent="");
        document.querySelector(".player").textContent="Le joueur X doit jouer";
        document.querySelector(".player").style.backgroundColor = "transparent";
        document.querySelector(".player").removeEventListener("click",reloadParty);
    }
    useEffect(()=>{
        document.querySelectorAll('.square').forEach((data)=>data.addEventListener("click",morpionPlay));
        document.querySelector('.retour').className="retour morpionRet";
    },[])
    //******************************************************************************************************************/
    //                                      fonction de la gestion des joueurs                                          /
    //******************************************************************************************************************/

    function morpionPlay(event){
        let e=event.target;
        let playedCase=e.className;
        let played=parseInt(playedCase.substr(-1,1));
        if(playedSquares[played]==0 && compt<9){
            playedSquares[played]=1;
            compt+=1;
            if(player=="X"){
                xcomb.push(played);
                document.querySelector(".s"+played).textContent="X";
                document.querySelector(".player").textContent="Le joueur O doit jouer";
                if(xcomb.length>=3){
                    compt=compare(xcomb,player);
                }
                player="O";
            }else{
                ycomb.push(played);
                document.querySelector(".s"+played).textContent="O";
                document.querySelector(".player").textContent="Le joueur X doit jouer";
                if(ycomb.length>=3){
                    compt=compare(ycomb,player);
                }
                player="X";
            }
        };
        if(compt==9){
            result("");
        }

    };
    //********************************************************************************************************************/
    //                                       Affichage du resultat de la partie                                           /
    //********************************************************************************************************************/
    function result(data){
        if(data==""){
            document.querySelector(".player").textContent="Egalité!! cliquez ici pour redémarrer une partie";
        }else{
            document.querySelector(".player").textContent="Le joueur "+data+" a gagné!! cliquez ici pour redémarrer une partie";
        }
        const messagePlayer = document.querySelector(".player");
        messagePlayer.addEventListener("click",reloadParty);
        messagePlayer.style.display = "inline-block";
        // messagePlayer.style.width = "50%";
        messagePlayer.style.backgroundColor = "blue";
        messagePlayer.style.cursor = "pointer";
    }
    //*******************************************************************************************************************/
    //                                fonction de comparaison avec les solutions gagnantes                               /
    //*******************************************************************************************************************/
    function compare(data,player){
        let res=false;
        for(let i=0;i<8;i++){
            arr=winningCombinations[i];
            res1 =data.includes(arr[0]);
            res2 =data.includes(arr[1]);
            res3 =data.includes(arr[2]);
            res = ((res1 && res2) && res3);
            if(res){
                break;
            }
        }
        if(res){
            result(player);
            compt=10;
        }
        return (compt);
    }
    return(
    <section className="morpionBody">
        <div className="morpionContainer">
            <div className="square s0">
            </div>
            <div className="square s1">
            </div>
            <div className="square s2">
            </div>
            <div className="square s3">
            </div>
            <div className="square s4">
            </div>
            <div className="square s5">
            </div>
            <div className="square s6">
            </div>
            <div className="square s7">
            </div>
            <div className="square s8">
            </div>
        </div>
        <p className="player">Le joueur X doit jouer</p>
        <ReturnB />
    </section>
    )
}
export default Morpion;