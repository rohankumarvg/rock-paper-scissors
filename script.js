let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(max) {
  let n = Math.floor(Math.random() * max);
  return choices[n];
}

let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById('results');

function playRound(playerSelection) {
  const computerSelection = getComputerChoice(3).toLowerCase();

  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    updateScore();
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    humanScore++;
    updateScore();
  } else {
    resultsDiv.textContent = `That was a tie. Play again.`;
    updateScore();
  }

  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

function updateScore() {
  resultsDiv.textContent += `\nUser score: ${humanScore}, Computer Score: ${computerScore}`;
}

function announceWinner() {
  if (humanScore === 5) {
    resultsDiv.textContent = 'Congratulations! You win';
  } else if (computerScore === 5) {
    resultsDiv.textContent = 'Sorry... You lost.';
  }
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
