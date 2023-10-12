console.log("ROCK PAPER SCISSORS SHOOT!");

// 1 -> ROCK
// 2 -> PAPER
// 3 -> SCISSORS

console.log("1: Rock");
console.log("2: Paper");
console.log("3: Scissors");

// let  user = prompt("Please enter your choice!");

function getComputerChoice(){
    let randomNum = Math.floor((Math.random() * 3) + 1);
    let compChoice = '';

    console.log(compChoice);
    if(randomNum === 1){
        compChoice = 'Rock';
        // console.log(compChoice);
    }
    else if(randomNum === 2){
        compChoice = 'Paper'
        // console.log(compChoice);
    }
    else {
        compChoice = 'Scissors'
        // console.log(compChoice);
    }
    return compChoice;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    
    if(playerSelection === computerSelection){
        return 'draw';
    }
    else if(playerSelection === 'ROCK'){
        if(computerSelection === 'PAPER'){
            return 'You Lose! Paper beats Rock';
        }
        if(computerSelection === 'SCISSORS'){
            return 'You Win! Rock beats Scissors';
        }
    }
    else if(playerSelection === 'PAPER'){
        if(computerSelection === 'ROCK'){
            return 'You Win! Paper beats Rock';
        }
        if(computerSelection === 'Scissors'){
            return 'You Lose! Scissors beat Paper';
        }
    }
    else if(playerSelection === 'SCISSORS'){
        if(computerSelection === 'ROCK'){
            return 'You Lose! Rock beats Scissors';
        }
        if(computerSelection === 'PAPER'){
            return 'You Win! Scissors beats Paper';
        }
    }
    else{
        return 'Invalid Guess!';
    }

}
function game(){
    let userScore = 0;
    let compScore = 0;

    for(let i = 0; i < 5; i++){
        const userGuess = prompt('Please enter your guess!');
        const computerSelection = getComputerChoice();

        const gameResult = playRound(userGuess, computerSelection);
        if(gameResult === 'You Win! Paper beats Rock' || 'You Win! Rock beats Scissors' || 'You Win! Scissors beats Paper') {
            userScore++;
        }
        else if(gameResult === 'You Lose! Paper beats Rock' || 'You Lose! Scissors beats Paper' || 'You Lose! Rock beats Scissors'){
            compScore++;
        }
        else{
            continue;
        }
    }

    console.log('\nGame Over!');
    if(userScore > compScore){
        console.log('THE USER WON!');
    }
    else if(userScore < compScore){
        console.log('THE COMPUTER WON!');
    }
    else{
        console.log("IT'S A DRAW!");
    }
}
// const compChoice = getComputerChoice();
// console.log(playRound(user, compChoice));
game();
