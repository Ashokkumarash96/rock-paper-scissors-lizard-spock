"use strict";

const mainCardEl = document.getElementById("mainCard");

const option = ["rock", "paper", "scissor", "lizard", "spock"];

let youScore = 0;
let computerScore = 0;

// function

function computerOption() {
  return option[Math.floor(Math.random() * 5)];
}

function YouGetPoint() {
  document.getElementById("whoGettingScore").textContent = "You get 1 point";
  youScore++;
  document.getElementById("yourScore").textContent = youScore;
}

function ComputerGetPoint() {
  document.getElementById("whoGettingScore").textContent =
    "Computer get 1 point";
  computerScore++;
  document.getElementById("computerScore").textContent = computerScore;
}

function choice(userOption) {
  let UserChoice = userOption;
  let ComputerChoice = computerOption();

  if (UserChoice === ComputerChoice) {
    document.getElementById("whoGettingScore").textContent = "No one get point";
  } else if (UserChoice === "rock") {
    if (ComputerChoice === "scissor" || ComputerChoice === "lizard") {
      YouGetPoint();
    } else {
      ComputerGetPoint();
    }
  } else if (UserChoice === "paper") {
    if (ComputerChoice === "scissor" || ComputerChoice === "lizard") {
      ComputerGetPoint();
    } else {
      YouGetPoint();
    }
  } else if (UserChoice === "scissor") {
    if (ComputerChoice === "rock" || ComputerChoice === "spock") {
      ComputerGetPoint();
    } else {
      YouGetPoint();
    }
  } else if (UserChoice === "lizard") {
    if (ComputerChoice === "rock" || ComputerChoice === "scissor") {
      ComputerGetPoint();
    } else {
      YouGetPoint();
    }
  } else if (UserChoice === "spock") {
    if (ComputerChoice === "paper" || ComputerChoice === "lizard") {
      ComputerGetPoint();
    } else {
      YouGetPoint();
    }
  }
  if (youScore >= 10) {
    document.getElementById("wonPerson").textContent = "You";
    document.getElementById("option").classList.replace("option", "none");
    document
      .getElementById("whoGettingScoreContainer")
      .classList.replace("whoGettingScoreContainer", "none");
    document.getElementById("gameOverContainer").classList.remove("none");
  } else if (computerScore >= 10) {
    document.getElementById("wonPerson").textContent = "Computer";
    document.getElementById("option").classList.replace("option", "none");
    document
      .getElementById("whoGettingScoreContainer")
      .classList.replace("whoGettingScoreContainer", "none");
    document.getElementById("gameOverContainer").classList.remove("none");
  }
}

function NoMoreGameFunction() {
  document.getElementById("mainCard").classList.add("none");
  document.getElementById("ThankYouMessage").classList.remove("none");
}
