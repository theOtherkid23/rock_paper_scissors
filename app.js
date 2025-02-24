let humanScore = 0
let computerScore = 0

console.log("THIS IS ROCK PAPER SCISSORS SCOREBOARD")
console.log("```````````````````````````````````````")

//Get random computer choice
function getComputerChoice(){
    let rand = Math.floor(Math.random()*3);
    if (rand === 0){
        return 'rock';
    }else if( rand === 1){
        return 'paper'
    }else{
        return 'scissors'
    }
}

//Get Users Prompted Choice
function getUserInput(){
    let userInput = prompt("Enter Rock, Paper, or Scissors:");
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    }else{
        console.log("Wrong, please try again.");
    }
}

//Begin game with rock Paper scissor rules
function playRound(userInput, computerChoice){
    if(userInput === computerChoice) {
        console.log("It's a tie. The score remains: Human", humanScore, "Computer ", computerScore);
    }else if(userInput === 'rock'){
        if(computerChoice === 'paper'){
            computerScore++;
            console.log("Computer Wins! Current Score is: Human ", humanScore, "Computer ", computerScore);
        }else{
            humanScore++;
            console.log("You Win! Current Score is  Human ", humanScore , "Computer ", computerScore);
        }
    }else if(userInput === 'paper'){
        if(computerChoice === 'rock'){
            humanScore++;
            console.log("You Win! Current Score is  Human", humanScore , "Computer ",computerScore);
        }else{
            computerScore++;
            console.log("Computer Wins! Current Score is: Human", humanScore , "Computer ",computerScore);
        }
    }else if(userInput === 'scissors'){
        if(computerChoice === 'rock'){
            computerScore++;
            console.log("Computer Wins! Current Score is: Human ", humanScore , "Computer ",computerScore);
        }else{
            humanScore++;
            console.log("You Win! Current Score is  Human" ,humanScore , "Computer ",computerScore);
        }
    }

}
//Create function that runs through play round 5 times and determines a winner after game is done
function playGame(){
    for(i=1;i<=5;i++){
        userInput = getUserInput();
        computerChoice = getComputerChoice();
        playRound(userInput, computerChoice);
    }
    if(humanScore > computerScore){
        console.log("_____________________________________________________________")
        console.log("Congratulations! You Win! The score is: Human ",humanScore , "Computer ",computerScore);
    }else if(humanScore < computerScore){
        console.log("_____________________________________________________________")
        console.log("Boo, You're a loser! The Score is: Human ",humanScore , "Computer ",computerScore);
    }else if(humanScore = computerScore){
        console.log("_____________________________________________________________")
        console.log("It's a tie! You're both losers! Human score is ",humanScore, "Computer Score is ",computerScore);
    }
}

playGame();