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
function scoreEdit() {
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
}
let playerWin = false;
let computerWin = false;
let playerScore = 0;
let computerScore = 0;
let gameEnd = false;

function playRound(playerSelection, computerSelection) {
  let resultContainer = document.createElement("p");
  let gameFinish = false;
  switch (true) {
    case (playerSelection === "Rock" && computerSelection === "Rock") ||
      (playerSelection === "Paper" && computerSelection === "Paper") ||
      (playerSelection === "Scissors" && computerSelection === "Scissors"):
      playerWin = true;
      computerWin = true;
      scoreEdit();
      if (playerScore >= 3) {
        playerWin = false;
        computerWin = false;
        resultContainer.textContent = `Congratulations! You Win ${playerScore} to ${computerScore} !`;
        gameFinish = true;
      }
      if (computerScore >= 3) {
        playerWin = false;
        computerWin = false;
        resultContainer.textContent = `Yikes! You Lose ${computerScore} to ${playerScore} !`;
        gameFinish = true;
      }
      if (gameFinish) {
        break;
      }
      resultContainer.textContent = `It's a tie! - Current score: Player(${playerScore} : Computer(${computerScore}))`;
      break;
    case (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper"):
      playerWin = true;
      computerWin = false;
      scoreEdit();
      if (playerScore >= 3) {
        playerWin = false;
        computerWin = false;
        resultContainer.textContent = `Congratulations! You Win ${playerScore} to ${computerScore} !`;
        gameFinish = true;
      }
      if (computerScore >= 3) {
        playerWin = false;
        computerWin = false;
        resultContainer.textContent = `Yikes! You Lose ${computerScore} to ${playerScore} !`;
        gameFinish = true;
      }
      if (gameFinish) {
        break;
      }
      resultContainer.textContent = `You Win this round! ${playerSelection} beats ${computerSelection} - Current score: Player(${playerScore} : Computer(${computerScore}))`;
      break;
    case (playerSelection === "Rock" && computerSelection === "Paper") ||
      (playerSelection === "Paper" && computerSelection === "Scissors") ||
      (playerSelection === "Scissors" && computerSelection === "Rock"):
      playerWin = false;
      computerWin = true;
      scoreEdit();
      if (playerScore >= 3) {
        playerWin = false;
        computerWin = false;
        resultContainer.textContent = `Congratulations! You Win ${playerScore} to ${computerScore} !`;
        gameFinish = true;
      }
      if (computerScore >= 3) {
        playerWin = false;
        computerWin = false;
        resultContainer.textContent = `Yikes! You Lose ${computerScore} to ${playerScore} !`;
        gameFinish = true;
      }
      if (gameFinish) {
        break;
      }
      resultContainer.textContent = `You Lose this round! ${playerSelection} loses to ${computerSelection} - Current score: Player(${playerScore} : Computer(${computerScore}))`;
      break;
  }
  document.querySelector(".results").appendChild(resultContainer);
  if (gameFinish) {
    gameEnd = true;
  }
  console.log(gameEnd);
}

/* let btn1 = document.createElement("button");
  btn1.id = "rock";
document.body.appendChild(btn1); */
/* 

});

console.log(getComputerChoice()); */
document.addEventListener("DOMContentLoaded", function () {
  const btnRock = document.querySelector(".rock");
  const btnPaper = document.querySelector(".paper");
  const btnScissors = document.querySelector(".scissors");
  const btnReset = document.querySelector(".reset");
  const divResults = document.querySelector(".results");
  if (!gameEnd) {
    btnRock.addEventListener("click", function (e) {
      playRound(e.target.value, getComputerChoice());
    });
    btnPaper.addEventListener("click", function (e) {
      playRound(e.target.value, getComputerChoice());
    });
    btnScissors.addEventListener("click", function (e) {
      playRound(e.target.value, getComputerChoice());
    });
  } else if (gameEnd) {
    btnRock.removeEventListener("click", function (e) {
      playRound(e.target.value, getComputerChoice());
    });
    btnPaper.removeEventListener("click", function (e) {
      playRound(e.target.value, getComputerChoice());
    });
    btnScissors.removeEventListener("click", function (e) {
      playRound(e.target.value, getComputerChoice());
    });
  }
  btnReset.addEventListener("click", function () {
    playerScore = 0;
    computerScore = 0;
    divResults.innerHTML = "";
    divResults.textContent = "Results:";
    gameEnd = false;
    /* while (divResults.firstChild) {
        divResults.removeChild(divResults.lastChild);
      } */
  });
});
