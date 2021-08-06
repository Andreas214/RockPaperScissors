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
// takes in playerSelection and computerSelection
    if(playerSelection == computerSelection){
        return `It's a tie! ${computerSelection} equals ${playerSelection}`
    } if(playerSelection === "Rock" && computerSelection === "Scissors" ||  playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock"){
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else{
        playerScore--;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
// returns a string that declares the winner
}

// Create a function called game
function game(){
    for(let i = 0; i<5; i++){
        let playerAnswer = prompt("What do you play?").toUpperCase();
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