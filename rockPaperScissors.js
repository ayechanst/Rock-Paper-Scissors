function getComputerChoice() {
    let num = Math.floor(Math.random() * 2)
    if (num === 0) {
        return 'rock'
    } else if (num === 1) {
        return 'paper'
    } else if (num === 2) {
        return 'scissors'
    } else {
        return 'a super massive error has taken place';
    }
};

let computerChoice = getComputerChoice();
//let humanChoice = prompt('human choose rock paper or scissors: ')

function playGame(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return 'tie'
    }
    if (computerChoice === 'rock') {
        if (humanChoice === 'paper') {
            return 'human def wins'
        } else {
            return 'computer wins absolutely'
        }
    } else if (computerChoice === 'paper') {
        if (humanChoice === 'scissors') {
            return 'human wins fosho'
        } else {
            return 'computer annhilates'
        }
    } else if (computerChoice === 'scissors') {
        if (humanChoice === 'rock') {
            return 'human emerges victorious'
        } else {
            return 'computer stores victory to memory'
        }
    }
}