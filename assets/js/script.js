/**
 * Declare constants for DOM elements
 * and possible choices
 */
const choices = ["rock", "paper", "scissors", "lizard", "spock"]
const playerImage


// Wait for the DOM to finish loading before running the game 
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-choice") === "0") {
                alert("you clicked rock");
                
            } else {
                let choice = this.getAttribute("data-choice");
                alert(`You clicked ${choice}`);
            }
        })
    }

})

function runGame() {
    let choice1 = Math.floor(Math.random() * 5);
}

function getComputerChoice() {
    return Math.floor((Math.random() * 5) + 1);
}

function checkChoice() {

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


