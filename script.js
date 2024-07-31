/*function getComputerChoice() {
    return either rock paper scissors
}*/
function getComputerChoice() {
    //math.random returns 0-1, i need three choices.. only three. 
    //is it < .33, it > .33, or it >.66
    let choice = Math.random()
    if(choice < .33)
        return 'rock';
    else if(choice > .33 && choice < .66)
        return 'paper';
    else return 'scissors';
}

//test function with console.log
//console.log(getComputerChoice());

/* function getHumanChoice() {
    return valid choice on user input using prompt;
}*/
function getHumanChoice() {
    let userInput = Number(prompt('Choose rock paper or scissors.\nType 1 for Rock\nType 2 for Paper\nType 3 for Scissors'));
    while (userInput < 1 || userInput > 3 || isNaN(userInput)) {
        prompt('Invalid choice, try again.');
        userInput = Number(prompt('Choose rock paper or scissors.\nType 1 for Rock\nType 2 for Paper\nType 3 for Scissors'));
    }
    return userInput;
}

//test function with console.log
//console.log(getHumanChoice());

/* declare global score variables - humanScore & computerScore - 
both equal to 0*/
var humanScore = 0;
var computerScore = 0;

/*play game by rounds, create 
function playRound(humanChoice, computerChoice) {
string value declaring round results
either you win or you lose
then ___ beats ____
increment global score
}*/
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

/*game will have five founds, create
function playGame() {
    let player = getHumanChoice();
    let computer =getComputerChoice();

    let roundCount = 0;
    while (roundCount < 6){
         playRound(player, computer);
    }
}*/
function playGame() {

    let roundCount = 1;
    while (roundCount < 6){
        let player = getHumanChoice();
        let computer = getComputerChoice();

        prompt(playRound(player, computer));
        prompt(`Your score is ${humanScore} and the computer\'s is ${computerScore}.`)
        roundCount++;
    }
}

playGame();