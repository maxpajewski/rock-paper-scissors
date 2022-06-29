let playerChoice = "";

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if(button.id == 'get-rock') {
        playerChoice = 'rock';
      }
      else if(button.id == 'get-paper') {
        playerChoice = 'paper';
      }
      else if(button.id == 'get-scissors') {
        playerChoice = 'scissors'; 
      }
    });
});

function computerSelect() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[(Math.floor(Math.random() * 3))]; 
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