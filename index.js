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


// Function SingleRound of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    playersAnswer = playerSelection[0].toUpperCase() + playerSelection.substring(1)
// takes in playerSelection and computerSelection
    if(playerSelection == computerSelection){
        return `It's a tie! ${computerSelection} equals ${playersAnswer}`
    } if(playersAnswer === "Rock" && computerSelection === "Scissors" ||  playersAnswer === "Scissors" && computerSelection === "Paper" || playersAnswer === "Paper" && computerSelection === "Rock"){
        playerScore++;
        return `You Win! ${playersAnswer} beats ${computerSelection}`
    } else{
        playerScore--;
        return `You Lose! ${computerSelection} beats ${playersAnswer}`
    }
// returns a string that declares the winner
}

// Create a function called game
function game(){
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
game();