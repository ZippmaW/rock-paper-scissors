"use strict";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  let playerChoice =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  let computerChoice = computerSelection;
  switch (true) {
    case (playerChoice === "Rock" && computerChoice === "Rock") ||
      (playerChoice === "Paper" && computerChoice === "Paper") ||
      (playerChoice === "Scissors" && computerChoice === "Scissors"):
      return "It's a tie!";
      break;
    case (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper"):
      return `You Win! ${playerChoice} beats ${computerChoice}`;
      break;
    case (playerChoice === "Rock" && computerChoice === "Paper") ||
      (playerChoice === "Paper" && computerChoice === "Scissors") ||
      (playerChoice === "Scissors" && computerChoice === "Rock"):
      return `You Lose! ${playerChoice} beats ${computerChoice}`;
      break;
  }
}
console.log(playRound("rOcK", getComputerChoice()));
