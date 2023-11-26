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

let playerWin = false;
let computerWin = false;

function playRound(playerSelection, computerSelection) {
  let playerChoice =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  let computerChoice = computerSelection;
  switch (true) {
    case (playerChoice === "Rock" && computerChoice === "Rock") ||
      (playerChoice === "Paper" && computerChoice === "Paper") ||
      (playerChoice === "Scissors" && computerChoice === "Scissors"):
      playerWin = true;
      computerWin = true;
      return console.log("It's a tie!");
    case (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper"):
      playerWin = true;
      computerWin = false;
      return console.log(
        `You Win this round! ${playerChoice} beats ${computerChoice}`
      );
    case (playerChoice === "Rock" && computerChoice === "Paper") ||
      (playerChoice === "Paper" && computerChoice === "Scissors") ||
      (playerChoice === "Scissors" && computerChoice === "Rock"):
      playerWin = false;
      computerWin = true;
      return console.log(
        `You Lose this round! ${playerChoice} loses to ${computerChoice}`
      );
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playRound(prompt(), getComputerChoice());

    if (playerWin && !computerWin) {
      playerScore += 1;
    }
    if (!playerWin && computerWin) {
      computerScore += 1;
    }
    if (playerWin && computerWin) {
      playerScore += 1;
      computerScore += 1;
    }
    if (playerScore >= 3) {
      playerWin = false;
      computerWin = false;
      console.log(
        `Congratulations! You Win ${playerScore} to ${computerScore} !`
      );
      break;
    }
    if (computerScore >= 3) {
      playerWin = false;
      computerWin = false;
      console.log(`Yikes! You Lose ${computerScore} to ${playerScore} !`);
      break;
    }
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
}

game();

game();
