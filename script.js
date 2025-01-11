let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=() =>{
    const options=["rock","paper","scissors"];
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx]; 
};
const drawGame=()=>{

    msg.innerText="game was draw.play again.";
    msg.style.backgroundColor = "#081b31";

};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win!your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.imnnerText=compScore;
        console.log("you lose!");
        msg.innerText=`you lose! ${compChoice}beats your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
};
const playGame=(userChoice) =>{
    
    // generate comp choice
    const compChoice=genCompChoice();
    
    if(userChoice===compChoice){
        // draw game 
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // scissor ,paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice ==="paper"){
            // rock scissor
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            // rock ,paper
            userWin=compChoice==="rock"?false:true;
        }
        showwinner(userWin,userChoice,compChoice);
        
    }
};
choices.forEach((choice) => {
    choice.addEventListener( "click",()=>{
        const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });
});