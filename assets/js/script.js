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
const restartButton = document.getElementById("restart-button");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const messages = document.getElementById("messages");
const playerImage = document.getElementById("player-choice");
const computerImage = document.getElementById("computer-choice");
const winningScore = 5;

/**
 * Adds event listener 
 * to all game choice buttons.
 */
function handleClick(event) {
    let playerChoice = event.currentTarget.getAttribute("data-choice");
    handlePlayerChoice(playerChoice);
}

for (let button of buttons) {
    button.addEventListener("click", handleClick);
}

 // Adds event listener to the restart button.
restartButton.addEventListener("click", restartGame);

/**
 * Handles the player choice and run the game
 */
function handlePlayerChoice(playerChoice) {
    runGame(playerChoice);
}

/** 
 * The main game function. Accepts one paramaeter, which
 * is the data-choice value of the selected button. 
*/
function runGame(playerChoice) {
    
    //Assigns the player image.
    playerImage.src = `assets/images/${choices[playerChoice].id}.jpg`;
    playerImage.alt = choices[playerChoice];

    //Assigns a random number for computer choice.
    let computerChoice = Math.floor(Math.random() * 5);

    //Assigns the computer image.
    computerImage.src = `assets/images/${choices[computerChoice].id}.jpg`;
    computerImage.alt = choices[computerChoice];

    checkWinner(choices[playerChoice], choices[computerChoice]);
}

/**
 * Checks to see who the winner is
 * and calls to increment score.
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
 *Increments Player score.
 *Checks if score has reached winning score.
 */
function incrementPlayerScore() {
    
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;

    // End game when winning score is reached.
    if (oldScore === winningScore) {
        endGame("player");
    }
}

/** 
 *Increments Computer score.
 * Checks if score has reached winning score.
 */
function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;

    // Ends game when winning score is reached.
    if (oldScore === winningScore) {
        endGame("computer");
    }
}

/**
 * Ends the game.
 * Displays winner.
 * Removes the player choice buttons.
 */
function endGame(winner) {
    // Displays winner message
    if (winner === "player") {
        messages.textContent = "Player wins the game";
    }
    else {
        messages.textContent = "Computer wins the game";
    }

    // Removes the game choice buttons when game ends.
    for (let button of buttons) {
        button.style.display = "none";
    }
}

/**
 * Restarts the game.
 * 
 */
function restartGame() {
    // Resets the scores
    playerScore.innerText = "0";
    computerScore.innerText = "0";

    // Resets player and computer images
    playerImage.src = "assets/images/rpsls.jpeg";
    computerImage.src = "assets/images/rpsls.jpeg";

    // Removes winner message
    messages.textContent = "";

    // Adds the game choice buttons again.
    for (let button of buttons) {
        button.style.display = "inline-flex";
    }
}