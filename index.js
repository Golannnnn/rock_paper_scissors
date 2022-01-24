// I declared all my variables in the beginning so the rest of the code looks cleaner
const buttons = document.querySelector('#buttons');
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const gameOutput = document.querySelector('#gameOutput');
const selection = document.querySelector('#selection');
const result = document.querySelector('#result');
const endResult = document.querySelector('#endResult');
const playerScoreText = document.querySelector('#playerScoreText');
const compScoreText = document.querySelector('#compScoreText');

let playerScore = 0;
let compScore = 0;

function computerPlay() {
    let selection = ['Rock', 'Paper', 'Scissors']
    return selection[Math.floor(Math.random() * selection.length)]
}

function endOfGame() {
    const resetBtn = document.createElement("BUTTON");
    const textResetBtn = document.createTextNode("Reset");
    resetBtn.style.cssText = 'font-size: 30px; padding: 10px 20px 10px 20px; font-weight: bold; margin-top: 20px';
    resetBtn.appendChild(textResetBtn);
    gameOutput.appendChild(resetBtn);
    resetBtn.addEventListener("click", function () {
        window.location.reload(true);
    });
    buttons.remove();
}

function buttonChoice(el) {    
    rockButton.disabled = true;
    setTimeout(function () {
        rockButton.disabled = false;
    }, 1100);

    paperButton.disabled = true;
    setTimeout(function () {
        paperButton.disabled = false;
    }, 1100);

    scissorsButton.disabled = true;
    setTimeout(function () {
        scissorsButton.disabled = false;
    }, 1100);

    let playerSelection = el.value
    const computerSelection = computerPlay();

    if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore = ++playerScore;
        selection.innerHTML = `You played <b><span class="textBorder">${playerSelection}</b></span> and I played <b><span class="textBorder">${computerSelection}</span></b><br>`;
        result.innerHTML = `<br><b><span class="textBorder">You won the round!</span></b>`;
    } else if (playerSelection == computerSelection) {
        selection.innerHTML = `You played <b><span class="textBorder">${playerSelection}</b></span> and I played <b><span class="textBorder">${computerSelection}</span></b><br>`;
        result.innerHTML = `<br><b><span class="textBorder">It is a tie</span></b>`;
    } else {
        compScore = ++compScore;
        selection.innerHTML = `You played <b><span class="textBorder">${playerSelection}</b></span> and I played <b><span class="textBorder">${computerSelection}</span></b><br>`;
        result.innerHTML = `<br><b><span class="textBorder">You lose the round</span></b>`;
    }

    playerScoreText.innerHTML = `You: [ ${playerScore} ]`;
    compScoreText.innerHTML = `Me: [ ${compScore} ]`;

    if (playerScore === 5 || playerScore > 5) {
        result.innerHTML = ` `;
        endResult.innerHTML = `<br><b><span class="textBorder">You won the game</span></b> `;
        endOfGame();
    } else if (compScore === 5 || compScore > 5) {
        result.innerHTML = ` `;
        endResult.innerHTML = `<br><b><span class="textBorder">You lost the game</span></b> `;
        endOfGame();
    }
}

