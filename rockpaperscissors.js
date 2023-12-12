function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerChoice, computerChoice) {
    if (
        (playerChoice === 'rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'paper' && computerChoice === 'Rock') ||
        (playerChoice === 'scissors' && computerChoice === 'Paper')
    ) {
        return 'win';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'Paper') ||
        (playerChoice === 'paper' && computerChoice === 'Scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'Rock')
    ) {
        return 'lose';
    } else {
        return 'tie';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerChoice = prompt('Enter your choice: rock, paper, or scissors').toLowerCase();
        const computerChoice = getComputerChoice();

        console.log(`Round ${round}:`);
        console.log(`You chose ${playerChoice}`);
        console.log(`Computer chose ${computerChoice}`);

        const result = playRound(playerChoice, computerChoice);

        if (result === 'win') {
            playerScore++;
            console.log('You win this round!');
        } else if (result === 'lose') {
            computerScore++;
            console.log('You lose this round!');
        } else {
            console.log("It's a tie!");
        }

        console.log(`Score - You: ${playerScore}, Computer: ${computerScore}`);
        console.log('--------------------------');
    }

    // Determine the overall winner
    if (playerScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
        console.log('Sorry, you lose the game. Better luck next time!');
    } else {
        console.log("It's a tie game!");
    }
}

// Call the game function outside the loop
game();
