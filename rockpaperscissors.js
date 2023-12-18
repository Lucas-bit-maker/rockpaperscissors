const choices = document.querySelectorAll('.choice');
const outcomeDiv = document.querySelector('.outcome');
const resultParagraph = document.getElementById('result');
const scoreParagraph = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerChoice, computerChoice) {
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'rock')
    ) {
        return 'lose';
    } else {
        return 'tie';
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        displayResult(result);
        updateScore(result);
        displayScore();

        if (playerScore === 5 || computerScore === 5) {
            endGame();
        }
    });
});

function displayResult(result) {
    resultParagraph.textContent = result;
}

function updateScore(result) {
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }
}

function displayScore() {
    scoreParagraph.textContent = `Score - You: ${playerScore}, Computer: ${computerScore}`;
}

function endGame() {
    if (playerScore > computerScore) {
        resultParagraph.textContent = 'Congratulations! You win the game!';
    } else if (playerScore < computerScore) {
        resultParagraph.textContent = 'Sorry, you lose the game. Better luck next time!';
    } else {
        resultParagraph.textContent = "It's a tie game!";
    }

    // Disable buttons after the game ends
    choices.forEach((choice) => {
        choice.removeEventListener('click');
    });
}
