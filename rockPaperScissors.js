"use strict";

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');



//const ps = require("prompt-sync");
//const prompt = ps()

function getComputerChoice() {                      //returns a string (rock, paper, or scissors)
    let num = Math.floor(Math.random() * 3)
    if (num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else if (num === 2) {
        return 'scissors';
    } else {
        return 'ERROR: computer choice';
    }
};


// function getHumanChoice() {
//     console.log('the human choice was: ' + humanChoice);
//     return humanChoice;
// }

//console.log(getComputerChoice());

function playRound(getComputerChoice, getHumanChoice) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if (computerChoice === humanChoice) {
        return 'tie';
    }
    if (computerChoice === 'rock') {  
        return humanChoice === 'paper' 
        ? 'human win'
        : 'computer win'
    }
    if (computerChoice === 'paper') {
        return humanChoice === 'scissors' 
        ? 'human win'
        : 'computer win'
    }
    if (computerChoice === 'scissors') {
        return humanChoice === 'rock' 
        ? 'human win'
        : 'computer win'
    }
}

//console.log(playRound(getComputerChoice, 'rock'));

function game() {
    let computerWin = 0;
    let humanWin = 0;
    while ((computerWin <= 3) || (humanWin <= 3)) {

        let roundResults = playRound(getComputerChoice, getHumanChoice);

        if (roundResults === 'tie') {
            console.log('tie');
            continue;
        }
        else if (roundResults === 'computer win') {
            console.log('computer wins this round');
            if (computerWin >= 2) {
                return 'COMPUTER WIN'
            }
            computerWin ++;
        } 
        else if (roundResults === 'human win') {
            console.log('human wins this round');
            if (humanWin >= 2) {
                return 'HUMAN WIN';
            }
            humanWin++;
        }
        else {
            return 'ERROR: game '
        }
            
    }
}

console.log(game());

