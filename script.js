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

const body = document.querySelector('body');
const div = document.createElement('div');

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let player = humanChoice;
    let computer = computerChoice;
    div.textContent = '';

    if (computer === 'rock') computer = 1;
    else if (computer === 'paper') computer = 2;
    else computer = 3;

    if (player === computer) div.textContent = 'It\'s a draw! Same options chosen.';
    else if (player === 1 && computer === 2) {
        computerScore++;
        div.textContent = 'You lose!, Paper beats Rock.'
        + 'Your score is: ' + humanScore + '. Computer score is: ' + computerScore;
    } else if (player === 1 && computer === 3) {
        humanScore++;
        div.textContent = 'You win! Rock beats Scissors.';
        + 'Your score is: ' + humanScore + '. Computer score is: ' + computerScore;
    } else if (player === 2 && computer === 1) {
        humanScore++;
        div.textContent = 'You win! Paper beats Rock.'
        + 'Your score is: ' + humanScore + '. Computer score is: ' + computerScore;
    } else if (player === 2 && computer === 3) {
        computerScore++;
        div.textContent = 'You lose! Scissors beats Paper.'
        + '\nYour score is: ' + humanScore + '. Computer score is: ' + computerScore;
        
    } else if (player === 3 && computer === 1) {
        computerScore++;
        div.textContent = 'You lose! Rock beats Scissors.'
        + '\nYour score is: ' + humanScore + '. Computer score is: ' + computerScore;
        
    } else {
        humanScore++;
        div.textContent = 'You win! Scissors beats Paper.'
        + '\nYour score is: ' + humanScore + '. Computer score is: ' + computerScore;
        
    }

    return;
}

function createButtons(choice) {
    const button = document.createElement('button');
    button.textContent = choice;
    if(choice === 'Rock') choice = 1;
    if(choice === 'Paper') choice = 2;
    if(choice === 'Scissors') choice = 3;
    button.addEventListener('click', () => {
    playRound(choice, getComputerChoice())
    });
    body.append(button);
}

createButtons('Rock');
createButtons('Paper');
createButtons('Scissors');

body.append(div);

