"use strict";

// Get the main card element from the HTML document
const mainCardEl = document.getElementById("mainCard");

// Define an array of possible options for the game
const option = ["rock", "paper", "scissor", "lizard", "spock"];

// Initialize the scores for both players
let youScore = 0;
let computerScore = 0;

// function

// Generate a random option for the computer
function computerOption() {
  return option[Math.floor(Math.random() * 5)];
}

// Update the score and display when the user wins a round
function YouGetPoint() {
  document.getElementById("whoGettingScore").textContent = "You get 1 point";
  youScore++;
  document.getElementById("yourScore").textContent = youScore;
}

// Update the score and display when the computer wins a round
function ComputerGetPoint() {
  document.getElementById("whoGettingScore").textContent =
    "Computer get 1 point";
  computerScore++;
  document.getElementById("computerScore").textContent = computerScore;
}

// Compare the user's choice and the computer's choice and determine the winner
function choice(userOption) {
  let UserChoice = userOption;
  let ComputerChoice = computerOption();

  // If both choices are the same, it's a tie
  if (UserChoice === ComputerChoice) {
    document.getElementById("whoGettingScore").textContent = "No one get point";
  } else if (UserChoice === "rock") {
    // Rock beats scissor and lizard
    if (ComputerChoice === "scissor" || ComputerChoice === "lizard") {
      YouGetPoint();
    } else {
      // Rock loses to paper and spock
      ComputerGetPoint();
    }
  } else if (UserChoice === "paper") {
    // Paper beats rock and spock
    if (ComputerChoice === "rock" || ComputerChoice === "spock") {
      YouGetPoint();
    } else {
      // Paper loses to scissor and lizard
      ComputerGetPoint();
    }
  } else if (UserChoice === "scissor") {
    // Scissor beats paper and lizard
    if (ComputerChoice === "paper" || ComputerChoice === "lizard") {
      YouGetPoint();
    } else {
      // Scissor loses to rock and spock
      ComputerGetPoint();
    }
  } else if (UserChoice === "lizard") {
    // Lizard beats paper and spock
    if (ComputerChoice === "paper" || ComputerChoice === "spock") {
      YouGetPoint();
    } else {
      // Lizard loses to rock and scissor
      ComputerGetPoint();
    }
  } else if (UserChoice === "spock") {
    // Spock beats rock and scissor
    if (ComputerChoice === "rock" || ComputerChoice === "scissor") {
      YouGetPoint();
    } else {
      // Spock loses to paper and lizard
      ComputerGetPoint();
    }
  }
  // Check if either player has reached 10 points and stop the game
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

// Hide the main card and show a thank you message when the user clicks on no more game button
function NoMoreGameFunction() {
  document.getElementById("mainCard").classList.add("none");
  document.getElementById("ThankYouMessage").classList.remove("none");
}
