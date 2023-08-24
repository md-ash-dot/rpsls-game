/**
 * Declare constants for DOM elements
 * and possible choices
 */
const choices = [
    {
        id: "rock",
        winsOver: ["scissors", "lizard"],
    },
    {
        id: "paper",
        winsOver: ["rock", "spock"],
    },
    {
        id: "scissors",
        winsOver: ["paper", "lizard"],
    },
    {
        id: "lizard",
        winsOver: ["paper", "spock"],
    },
    {
        id: "spock",
        winsOver: ["rock", "scissors"],
    },
];
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

    playerImage.src = `assets/images/${choices[playerChoice].id}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice].id}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);
}

/**
 * Checks to see who the winner is
 */
function checkWinner(playerChoice, computerChoice) {
    const playerChoiceId = playerChoice.id;
    const computerChoiceId = computerChoice.id;

    if (playerChoiceId === computerChoiceId) {
        // It is a draw
        // Do nothing
    } else if (playerChoice.winsOver.includes(computerChoiceId)) {
        //Player wins
        incrementPlayerScore();
    } else {
        // Computer wins
        incrementComputerScore();
    }
}

/** 
 *Increment Player score and Computer score.
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