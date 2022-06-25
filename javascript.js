function computerSelection() {
    let num = (Math.floor(Math.random() * 3)) + 1;
    let computerChoice = "";
    if(num === 1) {
        computerChoice = "scissors";
    }
    else if(num === 2) {
        computerChoice = "rock";
    }
    else {
        computerChoice = "paper";
    }

    return computerChoice;
}

function playerSelection() {
    let playerChoice = prompt("Please enter your choice:");
    playerChoice = playerChoice.toLowerCase(); 
    return playerChoice; 
}

function playRound() {
    let compChoice = computerSelection();
    let playChoice = playerSelection();

    if(playChoice === "rock" && compChoice === "rock") {
        console.log("It's a tie!");
    }
    else if(playChoice === "rock" && compChoice === "paper") {
        console.log("You lose! Paper beats rock.");
    }
    else if(playChoice === "rock" && compChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
    }
    else if(playChoice === "paper" && compChoice === "rock") {
        console.log("You win! Paper beats rock.")
    }
    else if(playChoice === "paper" && compChoice === "paper") {
        console.log("It's a tie!");
    }
    else if(playChoice === "paper" && compChoice === "scissors") {
        console.log("You lose! Scissors beats paper.");
    }
    else if(playChoice === "scissors" && compChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
    }
    else if(playChoice === "scissors" && compChoice === "paper") {
        console.log("You win! Scissors beats paper.");
    }
    else {
        console.log("It's a tie!");
    }

}

function game() {
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}

