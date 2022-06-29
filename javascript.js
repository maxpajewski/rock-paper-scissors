
let playerChoice = "";
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    if(button.id == 'get-rock') {
        playRound('rock', computerSelect());
    }
    else if(button.id == 'get-paper') {
        playRound('paper', computerSelect());
    }
    else if(button.id == 'get-scissors') {
        playRound('scissors', computerSelect());
    }
    });
});

function computerSelect() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[(Math.floor(Math.random() * 3))];
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

const rockImage = document.createElement('img');
rockImage.src = './Icons/rock-white.png';
document.querySelector('.user-comp-buttons2').appendChild(rockImage);

const paperImage = document.createElement('img');
paperImage.src = './Icons/paper-white.png';
document.querySelector('.user-comp-buttons2').appendChild(paperImage);

const scissorsImage = document.createElement('img');
scissorsImage.src = './Icons/scissors-white.png';
document.querySelector('.user-comp-buttons2').appendChild(scissorsImage);



function playRound(playerSelection, computerSelection) {
    // tie 
    if(playerSelection == "rock" && computerSelection == "rock") {
        content1.textContent = "It's a tie!";
        content.textContent = playerScore + " - " + computerScore;

        document.getElementById('get-rock').style.cssText = "background-color: grey; opacity: 0.75";
        rockImage.classList.add('show-comp-selection');
        setTimeout(() => {
            document.getElementById('get-rock').style.cssText = "background-color: #1F2937; opacity: 1";
            rockImage.classList.remove('show-comp-selection');
        }, 2000);
        checkIfWinner();
    }
    //computer win
    else if(playerSelection == "rock" && computerSelection == "paper") {
        content1.textContent = "Human loses! Paper beats rock.";
        computerScore++;
        content.textContent = playerScore + " - " + computerScore;

        document.getElementById('get-rock').style.cssText = "background-color: red; opacity: 0.75";
        paperImage.classList.add('comp-green');
        setTimeout(() => {
            document.getElementById('get-rock').style.cssText = "background-color: #1F2937; opacity: 1";
            paperImage.classList.remove('comp-green');
        }, 2000);
        checkIfWinner();
    }
    //human win
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        content1.textContent = "Human wins! Rock beats scissors.";
        playerScore++;
        content.textContent = playerScore + " - " + computerScore;
        
        document.getElementById('get-rock').style.cssText = "background-color: green; opacity: 0.75";
        scissorsImage.classList.add('comp-red');
        setTimeout(() => {
            document.getElementById('get-rock').style.cssText = "background-color: #1F2937; opacity: 1";
            scissorsImage.classList.remove('comp-red');
        }, 2000);
        checkIfWinner();
    }
    // human win
    else if(playerSelection == "paper" && computerSelection == "rock") {
        content1.textContent = "Human wins! Paper beats rock.";
        playerScore++;
        content.textContent = playerScore + " - " + computerScore;

        document.getElementById('get-paper').style.cssText = "background-color: green; opacity: 0.75";
        rockImage.classList.add('comp-red');
        setTimeout(() => {
            document.getElementById('get-paper').style.cssText = "background-color: #1F2937; opacity: 1";
            rockImage.classList.remove('comp-red');
        }, 2000);
        checkIfWinner();
    }
    // tie
    else if(playerSelection == "paper" && computerSelection == "paper") {
        content1.textContent = "It's a tie!";
        content.textContent = playerScore + " - " + computerScore;

        document.getElementById('get-paper').style.cssText = "background-color: grey; opacity: 0.75";
        paperImage.classList.add('show-comp-selection');
        setTimeout(() => {
            document.getElementById('get-paper').style.cssText = "background-color: #1F2937; opacity: 1";
            paperImage.classList.remove('show-comp-selection');
        }, 2000);
        checkIfWinner();
    }
    // computer win
    else if(playerSelection == "paper" && computerSelection == "scissors") {
        content1.textContent = "Human loses! Scissors beats paper.";
        computerScore++;
        content.textContent = playerScore + " - " + computerScore;

        document.getElementById('get-paper').style.cssText = "background-color: red; opacity: 0.75";
        scissorsImage.classList.add('comp-green');
        setTimeout(() => {
            document.getElementById('get-paper').style.cssText = "background-color: #1F2937; opacity: 1";
            scissorsImage.classList.remove('comp-green');
        }, 2000);
        checkIfWinner();
    }
    // computer win
    else if(playerSelection == "scissors" && computerSelection == "rock") {
        content1.textContent = "Human loses! Rock beats scissors.";
        computerScore++;
        content.textContent = playerScore + " - " + computerScore;

        document.getElementById('get-scissors').style.cssText = "background-color: red; opacity: 0.75";
        rockImage.classList.add('comp-green');
        setTimeout(() => {
            document.getElementById('get-scissors').style.cssText = "background-color: #1F2937; opacity: 1";
            rockImage.classList.remove('comp-green');
        }, 2000);
        checkIfWinner();
    }
    // human win
    else if(playerSelection == "scissors" && computerSelection == "paper") {
        content1.textContent =  "Human wins! Scissors beats paper.";
        playerScore++;
        content.textContent = playerScore + " - " + computerScore;

        document.getElementById('get-scissors').style.cssText = "background-color: green; opacity: 0.75";
        paperImage.classList.add('comp-red');
        setTimeout(() => {
            document.getElementById('get-scissors').style.cssText = "background-color: #1F2937; opacity: 1";
            paperImage.classList.remove('comp-red');
        }, 2000);
        checkIfWinner();
    }
    // tie
    else {
        content1.textContent = "It's a tie!";

        document.getElementById('get-scissors').style.cssText = "background-color: grey; opacity: 0.75";
        scissorsImage.classList.add('show-comp-selection');
        setTimeout(() => {
            document.getElementById('get-scissors').style.cssText = "background-color: #1F2937; opacity: 1";
            scissorsImage.classList.remove('show-comp-selection');
        }, 2000);
        checkIfWinner();
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

function checkIfWinner() {
    if(playerScore === 5) {
        document.getElementById('human-outcome').style.cssText = "background-color: green; opacity: 0.5; border: 4px solid green; border-radius: 4px;";
        document.getElementById('computer-outcome').style.cssText = "background-color: red; opacity: 0.5; border: 4px solid red; border-radius: 4px;";
        content1.textContent = 'Human has won the game with a score of ' + playerScore + " to " + computerScore + ". Choose rock, paper, or scissors to play again.";
        computerScore = 0;
        playerScore = 0; 
        content.textContent = playerScore + " - " + computerScore;
        setTimeout(() => {
            document.getElementById('computer-outcome').style.cssText = "background-color: #1F2937; opacity: 1; border: none; border-radius: 4px;";
            document.getElementById('human-outcome').style.cssText = "background-color: #1F2937; opacity: 1; border: none; border-radius: 4px;";
        }, 5000);

    }
    else if(computerScore === 5) {
        document.getElementById('computer-outcome').style.cssText = "background-color: green; opacity: 0.5; border: 4px solid green; border-radius: 4px;";
        document.getElementById('human-outcome').style.cssText = "background-color: red; opacity: 0.5; border: 4px solid red; border-radius: 4px;";
        content1.textContent = 'Computer has won the game with a score of ' + computerScore + " to " + playerScore + ". Choose rock, paper, or scissors to play again.";
        computerScore = 0;
        playerScore = 0; 
        content.textContent = playerScore + " - " + computerScore;
        setTimeout(() => {
            document.getElementById('computer-outcome').style.cssText = "background-color: #1F2937; opacity: 1; border: none; border-radius: 4px;";
            document.getElementById('human-outcome').style.cssText = "background-color: #1F2937; opacity: 1; border: none; border-radius: 4px;";
        }, 5000);
    }
}

