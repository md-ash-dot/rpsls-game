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
    button.addEventListener("click", function() {
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

    updateScores(result);
}


function checkWinner() {

}

function findCorrectChoice() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}

function displayPlayerChoice() {

}

function displayComputerChoice() {

}