let humanScore =0;
let computerScore =0;

//for computer choice
function getComputerChoice(random){
   
    
    if(random>=1&&random<=4){
       return "rock";
    }
    else if(random>4&&random<=7){
      return "paper";
    }
    else{
        return "scissor";
    }
}


//for human choice

function getHumanChoice(humanChoice){
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}




//playing rounds
function playRound(humanChoice,computerChoice){
    
    if (humanChoice==="rock" && computerChoice==="paper"){
        console.log("paper wins rock loose");
        computerScore++;
    }
    else if(humanChoice==="rock" && computerChoice==="scissor"){
        console.log("rock wins scissor loose");
        humanScore++;
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        console.log("paper wins rock loose");
        humanScore++;
    }
    else if (humanChoice==="paper" && computerChoice==="scissor"){
        console.log("scissor wins paper loose");
        computerScore++;
    }
    else if(humanChoice==="scissor" && computerChoice==="rock"){
        console.log("rock wins scissor loose");
        computerScore++;
    }
    else if(humanChoice==="scissor" && computerChoice==="paper"){
        console.log("scissor wins paper loose");
        humanScore++;
    }
    else if (humanChoice === computerChoice){
        console.log("draw");
        
    }

}

function playGame(){
    let rounds =0;
    while (rounds<5){
        let choice = prompt("Enter rock,paper or scissor:");
        let humanChoice = getHumanChoice(choice);
        let computerChoice = getComputerChoice(Math.random()*10);
        console.log("Human Choice: ",humanChoice);
        console.log("Computer Choice:",computerChoice);
        playRound(humanChoice,computerChoice);
        rounds++;
    }
    if(computerScore>humanScore){
        console.log("Computer Wins!")
        console.log("Final Score - Human", humanScore , "computer", computerScore );
    }
    else if(humanScore>computerScore){
        console.log("Human Wins!")
        console.log("Final Score - Human", humanScore , "computer", computerScore );
    }
    else{
        console.log("Draw!")
        console.log("Final Score - Human", humanScore , "computer", computerScore );
    }
    
   
}
playGame();



