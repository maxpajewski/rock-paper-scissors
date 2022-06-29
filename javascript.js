
let playerChoice = "";
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if(button.id == 'get-rock') {
        document.getElementById('get-rock').onclick = changeButtonRock();
        playRound('rock', computerSelect());
      }
      else if(button.id == 'get-paper') {
        document.getElementById('get-rock').onclick = changeButtonPaper();
        playRound('paper', computerSelect());
      }
      else if(button.id == 'get-scissors') {
        document.getElementById('get-rock').onclick = changeButtonScissors();
        playRound('scissors', computerSelect());
      }
    });
});

function changeButtonRock() {
    document.getElementById('get-rock').style.cssText = "background-color: grey; opacity: 0.75";
    setTimeout(() => {
        document.getElementById('get-rock').style.cssText = "background-color: #1F2937; opacity: 1";
    }, 2000);
}

function changeButtonPaper() {
    document.getElementById('get-paper').style.cssText = "background-color: grey; opacity: 0.75";
    setTimeout(() => {
        document.getElementById('get-paper').style.cssText = "background-color: #1F2937; opacity: 1";
    }, 2000);
}

function changeButtonScissors() {
    document.getElementById('get-scissors').style.cssText = "background-color: grey; opacity: 0.75";
    setTimeout(() => {
        document.getElementById('get-scissors').style.cssText = "background-color: #1F2937; opacity: 1";
    }, 2000);
}

function computerSelect() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    if(computerChoices[(Math.floor(Math.random() * 3))] == 'rock') {
        image1.classList.add('show-comp-selection');
        setTimeout(() => {
            image1.classList.remove('show-comp-selection');
        }, 2000);
        return 'rock';
    }
    else if(computerChoices[(Math.floor(Math.random() * 3))] == 'paper') {
        image2.classList.add('show-comp-selection');
        setTimeout(() => {
            image2.classList.remove('show-comp-selection');
        }, 2000);
        return 'paper';
    }
    else {
        image3.classList.add('show-comp-selection');
        setTimeout(() => {
            image3.classList.remove('show-comp-selection');
        }, 2000);
        return 'scissors';
    }
}

const displayResult = document.querySelector('.results');
const content = document.createElement('p');
content.classList.add('text-content');
content.textContent = playerScore + " - " + computerScore;
displayResult.appendChild(content);

const wordOutput = document.querySelector('.word-output');
const content1 = document.createElement('p');
content1.classList.add('text-content');
content1.textContent = "";
wordOutput.appendChild(content1);

const image1 = document.createElement('img');
image1.src = './Icons/rock-white.png';
document.querySelector('.user-comp-buttons2').appendChild(image1);

const image2 = document.createElement('img');
image2.src = './Icons/paper-white.png';
document.querySelector('.user-comp-buttons2').appendChild(image2);

const image3 = document.createElement('img');
image3.src = './Icons/scissors-white.png';
document.querySelector('.user-comp-buttons2').appendChild(image3);



function playRound(playerSelection, computerSelection) {
    // tie 
    if(playerSelection == "rock" && computerSelection == "rock") {
        content1.textContent = "It's a tie!";
        content.textContent = playerScore + " - " + computerScore;
    }
    //computer win
    else if(playerSelection == "rock" && computerSelection == "paper") {
        content1.textContent = "Human loses! Paper beats rock.";
        computerScore++;
        content.textContent = playerScore + " - " + computerScore;
    }
    //human win
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        content1.textContent = "Human wins! Rock beats scissors.";
        playerScore++;
        content.textContent = playerScore + " - " + computerScore;
    }
    // human win
    else if(playerSelection == "paper" && computerSelection == "rock") {
        content1.textContent = "Human wins! Paper beats rock.";
        playerScore++;
        content.textContent = playerScore + " - " + computerScore;
    }
    // tie
    else if(playerSelection == "paper" && computerSelection == "paper") {
        content1.textContent = "It's a tie!";
        content.textContent = playerScore + " - " + computerScore;
    }
    // computer win
    else if(playerSelection == "paper" && computerSelection == "scissors") {
        content1.textContent = "Human loses! Scissors beats paper.";
        computerScore++;
        content.textContent = playerScore + " - " + computerScore;
    }
    // computer win
    else if(playerSelection == "scissors" && computerSelection == "rock") {
        content1.textContent = "Human loses! Rock beats scissors.";
        computerScore++;
        content.textContent = playerScore + " - " + computerScore;
    }
    // human win
    else if(playerSelection == "scissors" && computerSelection == "paper") {
        content1.textContent =  "Human wins! Scissors beats paper.";
        playerScore++;
        content.textContent = playerScore + " - " + computerScore;
    }
    // tie
    else {
        content1.textContent = "It's a tie!";
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