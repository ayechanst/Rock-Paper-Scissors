"use strict";

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

// function playSound() {
//     const audio = new Audio('sounds/gun.mp3');           //in progress to add sound
//     audio.play(); 
// }


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

rockButton.addEventListener("click", () => {
    playGame('rock');
})

paperButton.addEventListener("click", () => {
    playGame('paper');
})

scissorsButton.addEventListener("click", () => {
    playGame('scissors');
})

// thousandRoundButton.addEventListener("click", () => {            //in progress to 1,000 rounds
//     playThousand('rock')
// })
    
let computerWin = 0;
let humanWin = 0;

function playGame(humanChoice) {

    function playRound(humanChoice) {
        let computerChoice = getComputerChoice();
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

    let result = playRound();

    if (result === 'tie') {
        resultDisplay.innerHTML = 'tie game';
        scoreDisplay.innerHTML = 'H: ' + humanWin + ' ' + 'C: ' + computerWin;
    } else if (result === 'human win') {
        humanWin++;
        resultDisplay.innerHTML = 'human won the round';
        scoreDisplay.innerHTML = 'H: ' + humanWin + ' ' + 'C: ' + computerWin;
        if (humanWin >= 3) {
            resultDisplay.innerHTML = 'HUMAN WON GAME';
        } else if (computerWin >= 3) {
            resultDisplay.innerHTML = 'COMPUTER WON GAME';
        }
    } else if (result === 'computer win') {
        computerWin++;
        resultDisplay.innerHTML = 'computer won the round';
        scoreDisplay.innerHTML = 'H: ' + humanWin + ' ' + 'C: ' + computerWin;
        if (humanWin >= 3) {
            resultDisplay.innerHTML = 'HUMAN WON GAME';
        } else if (computerWin >= 3) {
            resultDisplay.innerHTML = 'COMPUTER WON GAME';
        }
    } else {
        return 'ERROR: play round';
    }
};

// function playThousand(rock) {
//     for (i = 0; i <= 1000; i++) {
//         playRound(rock);
//         if (result === 'tie') {
//             resultDisplay.innerHTML = 'tie game';
//             scoreDisplay.innerHTML = 'H: ' + humanWin + ' ' + 'C: ' + computerWin;        //in progress to add sound
//         } else if (result === 'human win') {     
//             humanWin++;
//             resultDisplay.innerHTML = 'human won the round';
//             scoreDisplay.innerHTML = 'H: ' + humanWin + ' ' + 'C: ' + computerWin;
//         } else if (result === 'computer win') {
//             computerWin++;
//             resultDisplay.innerHTML = 'computer won the round';
//             scoreDisplay.innerHTML = 'H: ' + humanWin + ' ' + 'C: ' + computerWin;
//         }
//     }   
// }
