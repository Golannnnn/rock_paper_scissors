
/*
    
with every click
    create a paragraph that says: 
        You: ${playerSelection} 
        - Computer: ${computerSelection}
            at the end of the round remove the text

under that create another paragraph w/ the text:
    Your score: ${playerScore} and computer score: ${compScore}
        that updates after every round

*/

const roundText = document.querySelector('#roundText');
const selection = document.querySelector('#selection');
const result = document.querySelector('#result');
const score = document.querySelector('#score');


document.getElementById("rock").addEventListener("click", function () {
    let playerSelection = 'Rock';
    const computerSelection = computerPlay();
    selection.textContent = `You: ${playerSelection} - Computer: ${computerSelection}`;
    playRound(playerSelection, computerSelection);
});

document.getElementById("paper").addEventListener("click", function () {
    let playerSelection = 'Paper';
    const computerSelection = computerPlay();
    selection.textContent = `You: ${playerSelection} - Computer: ${computerSelection}`;
    playRound(playerSelection, computerSelection);
});

document.getElementById("scissors").addEventListener("click", function () {
    let playerSelection = 'Scissors';
    const computerSelection = computerPlay();
    selection.textContent = `You: ${playerSelection} - Computer: ${computerSelection}`;
    playRound(playerSelection, computerSelection);
});

//random computer output
function computerPlay() {
    let selection = ['Rock', 'Paper', 'Scissors']
    return selection[Math.floor(Math.random() * selection.length)]
}

let playerScore = 0;
let compScore = 0;

//round function
function playRound(playerSelection, computerSelection) {


    if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore = ++playerScore;
        result.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
        result.textContent = `It is a tie`;
    } else {
        compScore = ++compScore;
        result.textContent = `You lose. ${computerSelection} beats ${playerSelection}`;
    }

    score.textContent = `You: ${playerScore} - Computer: ${compScore}`;
}
