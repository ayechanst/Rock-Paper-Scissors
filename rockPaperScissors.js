function getComputerChoice() {
    let num = Math.floor(Math.random * 2)
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

function getUserChoice()










let computerChoice = getComputerChoice();

