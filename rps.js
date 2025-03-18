let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const humanScoreSpan = document.querySelector('.human-score')
const computerScoreSpan = document.querySelector('.computer-score')

function getComputerChoice(){
    const options  = ['rock','paper','scissors']
    computerChoice = options[Math.floor(Math.random()*options.length)]
    return computerChoice
}

const checkForWinner = (humanScore, computerScore) =>{
    if(humanScore ===5){
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `Game over You Won! ${humanScore} to ${computerScore}`
        outcomeDiv.append(h2)
    }else if(computerScore === 5){
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `Game Over You Lose! ${humanScore} to ${computerScore}`
        outcomeDiv.append(h2)
    }
    
} 

const updateScores = (humanScore, computerScore) => {
    humanScoreSpan.innerText = `Player ${humanScore}`
    computerScoreSpan.innerText = `Computer ${computerScore}`
}

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(humanScore,computerScore)
    checkForWinner(humanScore,computerScore)
})
paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(humanScore,computerScore)
    checkForWinner(humanScore,computerScore)
})
scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(humanScore,computerScore)
    checkForWinner(humanScore,computerScore)
})
function playRound(playerSelection, computerSelection){
   if(playerSelection === computerSelection) {
    const p = document.createElement('p')
    p.innerText = `It's a tie.`
    outcomeDiv.appendChild(p)
}else if(playerSelection === 'rock'){
    if(computerSelection === 'paper'){
        computerScore++;
        const p = document.createElement('p')
        p.innerText = `Computer Wins! Paper Beats Rock`
        outcomeDiv.appendChild(p)
    }else{
        humanScore++;
        const p = document.createElement('p')
        p.innerText = `You Win! Rock Beats Scissors`
        outcomeDiv.appendChild(p)
    }
}else if(playerSelection === 'paper'){
    if(computerSelection === 'rock'){
        humanScore++;
        const p = document.createElement('p')
        p.innerText = `You Win! Paper Beats Rock`
        outcomeDiv.appendChild(p)
    }else{
        computerScore++;
        const p = document.createElement('p')
        p.innerText = `Computer Wins! Scissors Beats Paper`
        outcomeDiv.appendChild(p)
    }
}else if(playerSelection === 'scissors'){
    if(computerSelection === 'rock'){
        computerScore++;
        const p = document.createElement('p')
        p.innerText = `Computer Wins! Rock Beats Scissors`
        outcomeDiv.appendChild(p)
    }else{
        humanScore++;
        const p = document.createElement('p')
        p.innerText = `You Win! Scissors Beats Paper`
        outcomeDiv.appendChild(p)
    }
 }
}


