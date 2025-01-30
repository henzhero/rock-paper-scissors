function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors:").toLowerCase();
}

const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function playRound (computerChoice, humanChoice) {

    if (humanChoice == CHOICES[0] && computerChoice == CHOICES[2]) {
        humanScore++;
    } else if (humanChoice == CHOICES[1] && computerChoice == CHOICES[0]) {
        humanScore++;
    } else if (humanChoice == CHOICES[2] && computerChoice == CHOICES[1]) {
        humanScore++;
    } else {
        computerScore++;
    }
}


