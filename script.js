let choices = ['rock', 'paper', 'scissors'];

function askForInput() {
  return prompt('Choose your weapon- Rock, Paper or Scissors').toLowerCase();
}

function getHumanChoice(userInput) {
  switch (userInput) {
    case 'rock':
      return 'rock';
    case 'paper':
      return 'paper';
    case 'scissors':
      return 'scissors';
    default:
      alert('Insert a valid text input');
      return askForInput();
  }
}

function getComputerChoice(max) {
  let n = Math.floor(Math.random() * max);
  return choices[n];
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound() {
  let humanChoice = getHumanChoice(askForInput());
  let computerChoice = getComputerChoice(3).toLowerCase();

  if (
    (humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')
  ) {
    computerScore++;
    rounds++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    console.log(
      `User score: ${humanScore}, Computer Score: ${computerScore} Current round: ${rounds}`
    );
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    rounds++;
    console.log(
      `User score: ${humanScore}, Computer Score: ${computerScore} Current round: ${rounds}`
    );
  } else {
    console.log(`That was a tie. Play again.`);
    console.log(
      `User score: ${humanScore}, Computer Score: ${computerScore} Current round: ${rounds}`
    );
  }

  if (rounds === 5) {
    announceWinner();
    setTimeout(resetGame, 5000);
  } else {
    playGame();
  }
}

function resetGame() {
  let userInput = prompt(`Do you want to play again?`).toLowerCase();
  if (userInput === 'yes') {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    playGame();
  } else {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    console.log(`Thanks for playing!`);
  }
}

function announceWinner() {
  if (humanScore > computerScore) {
    console.log(`Congratulations! You win`);
  } else {
    console.log(`Sorry... You lost.`);
  }
}

function playGame() {
  playRound();
}

playGame();
