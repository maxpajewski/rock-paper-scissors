let choice = prompt("Would you like to play a game of Rock-Paper-Scissors? (Y or N)")
if(choice == "Y") {
    game();
}
else {
    alert("Goodbye!");
}

function computerSelect() {
    let computerChoices = ['rock', 'paper', 'scissors'];

    return computerChoices[(Math.floor(Math.random() * 3))]; 
    
    
    // let num = (Math.floor(Math.random() * 3)) + 1;
    // let computerChoice = "";
    // if(num === 1) {
    //     computerChoice = "scissors";
    // }
    // else if(num === 2) {
    //     computerChoice = "rock";
    // }
    // else {
    //     computerChoice = "paper";
    // }

    // return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie!";
    }
    else if(playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    }
    else if(playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    }
    else if(playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie!";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper.";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors.";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper.";
    }
    else {
        return "It's a tie!";
    }
}

function game() {
    let playerC = "";
    let compC = "";

    for(let i = 0; i < 5; i++) {
        playerC = prompt("Enter your choice: ");
        playerC = playerC.toLowerCase();
        compC = computerSelect();
        console.log("You chose " + playerC + " and the computer chose " + compC + ". " + playRound(playerC, compC));
    }
}