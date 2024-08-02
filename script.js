function getComputerChoice() {
    let choice = Math.random()
    if(choice < .33)
        return 'rock';
    else if(choice > .33 && choice < .66)
        return 'paper';
    else return 'scissors';
}

function getHumanChoice() {
    let userInput = Number(prompt('Choose rock paper or scissors.\nType 1 for Rock\nType 2 for Paper\nType 3 for Scissors'));
    while (userInput < 1 || userInput > 3 || isNaN(userInput)) {
        prompt('Invalid choice, try again.');
        userInput = Number(prompt('Choose rock paper or scissors.\nType 1 for Rock\nType 2 for Paper\nType 3 for Scissors'));
    }
    return userInput;
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let player = humanChoice;
    let computer = computerChoice;
    let results = '';

    if (computer === 'rock') computer = 1;
    else if (computer === 'paper') computer = 2;
    else computer = 3;

    if (player === computer) results = 'It\'s a draw! Same options chosen.';
    else if (player === 1 && computer === 2) {
        results = 'You lose!, Paper beats Rock.';
        computerScore++;
    } else if (player === 1 && computer === 3) {
        results = 'You win! Rock beats Scissors.';
        humanScore++;
    } else if (player === 2 && computer === 1) {
        results = 'You win! Paper beats Rock.'
        humanScore++;
    } else if (player === 2 && computer === 3) {
        results = 'You lose! Scissors beats Paper.'
        computerScore++;
    } else if (player === 3 && computer === 1) {
        results = 'You lose! Rock beats Scissors.'
        computerScore++;
    } else {
        results = 'You win! Scissors beats Paper.'
        humanScore++;
    }

    return results;
}

const body = document.querySelector('body');
function createButtons(choice) {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => {
    playRound(choice, getComputerChoice())
    });
    body.append(button);
}

createButtons('Rock');
createButtons('Paper');
createButtons('Scissors');