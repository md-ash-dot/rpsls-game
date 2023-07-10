/**
 * Declare constants for DOM elements
 * and possible choices
 */
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const buttons = document.getElementsByClassName('input');
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const messages = document.getElementById("messages");
const playerImage = document.getElementById("player-choice");
const computerImage = document.getElementById("computer-choice");

/**
 * Add event listener to all buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        runGame(playerChoice);
    });
}

/** 
 * The main game function. Accepts one paramaeter, which
 * is the data-choice value of the selected button. 
*/
function runGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);
}

/**
 * Checks to see who the winner is
 */
function checkWinner(playerChoice, computerChoice) {

    if (playerChoice == "scissors" && computerChoice == "paper") {
        incrementPlayerScore();
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        incrementPlayerScore();
    } else if (playerChoice == "rock" && computerChoice == "lizard") {
        incrementPlayerScore();
    } else if (playerChoice == "lizard" && computerChoice == "spock") {
        incrementPlayerScore();
    } else if (playerChoice == "spock" && computerChoice == "scissors") {
        incrementPlayerScore();
    } else if (playerChoice == "scissors" && computerChoice == "lizard") {
        incrementPlayerScore();
    } else if (playerChoice == "lizard" && computerChoice == "paper") {
        incrementPlayerScore();
    } else if (playerChoice == "paper" && computerChoice == "spock") {
        incrementPlayerScore();
    } else if (playerChoice == "spock" && computerChoice == "rock") {
        incrementPlayerScore();
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        incrementPlayerScore();
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        incrementComputerScore();
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        incrementComputerScore();
    } else if (playerChoice == "lizard" && computerChoice == "rock") {
        incrementComputerScore();
    } else if (playerChoice == "spock" && computerChoice == "lizard") {
        incrementComputerScore();
    } else if (playerChoice == "scissors" && computerChoice == "spock") {
        incrementComputerScore();
    } else if (playerChoice == "lizard" && computerChoice == "scissors") {
        incrementComputerScore();
    } else if (playerChoice == "paper" && computerChoice == "lizard") {
        incrementComputerScore();
    } else if (playerChoice == "spock" && computerChoice == "paper") {
        incrementComputerScore();
    } else if (playerChoice == "rock" && computerChoice == "spock") {
        incrementComputerScore();
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        incrementComputerScore();
    }
}

/**
 * Increment Player score and computer score
 * depending on winner of each round of game.
 */
function incrementPlayerScore() {

    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}

function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}