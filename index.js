// Function computerplay
function computerPlay(){
// randomly returns Rock, Paper or Scissors
    let x = ["Rock", "Paper", "Scissors"]
    let y = Math.floor(Math.random() * 3 + 1);
    console.log(x[y])
    
}

computerPlay();