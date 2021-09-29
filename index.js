// Function computerplay
function computerPlay(){
// randomly returns Rock, Paper or Scissors
    let x = Math.floor(Math.random() * 3 + 1);

    if(x === 1){
        return "Rock"
    } if (x === 2){
        return "Paper"
    } else {return "Scissors"}
}
let playerScore = 0;
let computerScore = 0;
let player = document.querySelector("#playerScore")
let computer = document.querySelector("#computerScore")

// Function SingleRound of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    playersAnswer = playerSelection[0].toUpperCase() + playerSelection.substring(1)
    let result = document.querySelector("#result")


// takes in playerSelection and computerSelection
    if(playersAnswer === "Scissors" && computerSelection === "Rock" ||  playersAnswer === "Paper" && computerSelection === "Scissors" || playersAnswer === "Rock" && computerSelection === "Paper"){
        result.textContent = `You Lose! ${computerSelection} beats ${playersAnswer}`
        playerScore--;
        computerScore++;
    }else if(playersAnswer === "Rock" && computerSelection === "Scissors" ||  playersAnswer === "Scissors" && computerSelection === "Paper" || playersAnswer === "Paper" && computerSelection === "Rock"){
        playerScore++;
        computerScore--;
        result.textContent = `You Win! ${playersAnswer} beats ${computerSelection}`
    } else{
        result.textContent = `It's a tie! ${computerSelection} equals ${playersAnswer}`
    }
    player.textContent = playerScore;
    computer.textContent = computerScore;

// returns a string that declares the winner

}


// Create a function called game
/* function game(){
    for(let i = 0; i<5; i++){
        let playerAnswer = prompt("Choose Rock, Paper or Scissors").toUpperCase();
        if(playerAnswer === "ROCK" || playerAnswer === "PAPER" || playerAnswer === "SCISSORS"){
            console.log(playRound(playerAnswer, computerPlay()));
            
        }else{
            console.log("invalid input")
            i--;
        }
                
    }
    if(playerScore > 0){
        console.log("You Win!")
    }
    if(playerScore === 0 ){
        console.log("It's a Tie!")
    }
    if(playerScore < 0) {console.log("You Lose!")}
}
game(); */

  