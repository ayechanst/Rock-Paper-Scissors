'use strict';

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const humanDisplay = document.querySelector('.human-score');
const computerDisplay = document.querySelector('.computer-score');
const thousandRoundButton = document.getElementById('thousand-button');
let humanChoice = '';

rockButton.addEventListener('click', () => {
  humanChoice = 'rock';
});

paperButton.addEventListener('click', () => {
  humanChoice = 'paper';
});

scissorsButton.addEventListener('click', () => {
  humanChoice = 'scissors';
});

function playSound() {
  const audio = new Audio('sounds/gun.mp3'); //in progress to add sound
  audio.play();
}

function getComputerChoice() {
  //returns a string (rock, paper, or scissors)
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper';
  } else if (num === 2) {
    return 'scissors';
  } else {
    return 'ERROR: computer choice';
  }
}

let computerWin = 0;
let humanWin = 0;
let ties = 0;

function playRound() {
  let humanChoice = getComputerChoice();
  let computerChoice = getComputerChoice();
  if (computerChoice === humanChoice) {
    ties += 1;
  } else if (computerChoice === 'rock') {
    if (humanChoice === 'paper') {
      humanWin = humanWin += 1;
    } else {
      computerWin = computerWin += 1;
    }
  } else if (computerChoice === 'paper') {
    if (humanChoice === 'scissors') {
      humanWin = humanWin += 1;
    } else {
      computerWin = computerWin += 1;
    }
  } else if (computerChoice === 'scissors') {
    if (humanChoice === 'rock') {
      humanWin = humanWin += 1;
    } else {
      computerWin = computerWin += 1;
    }
  }
}

function playGame() {
  for (let i = 0; i < 1000; i++) {
    setTimeout(() => {
      playRound();
      playSound();
      console.log('round: ' + i);
      console.log(ties);
      console.log(humanWin);
      console.log(computerWin);
      humanDisplay.innerHTML = humanWin;
      computerDisplay.innerHTML = computerWin;
    }, 1000);
  }
}

thousandRoundButton.addEventListener('click', () => {
  playGame();
});
