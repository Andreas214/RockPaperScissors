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

// Function SingleRound of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
// takes in playerSelection and computerSelection
    if(playerSelection == computerSelection){
        return "It's a tie! " + computerSelection + " equals " + playerSelection
    } if(playerSelection === "Rock" && computerSelection === "Scissors" ||  playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
// returns a string that declares the winner
}

const playerSelection = "Rock";
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))