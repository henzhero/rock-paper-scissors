function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// function getHumanChoice() {
//     return prompt("Rock, Paper, or Scissors:").toLowerCase();
// }

const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function playRound (computerChoice, humanChoice) {

    if (humanChoice == computerChoice) {
        return;
    }

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

let buttons = document.querySelectorAll(".btn");
let container = document.querySelector("#result");

let humanSelection = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        humanSelection = e.target.textContent.toLowerCase();
        let computerSelection = CHOICES[getComputerChoice()];

        playRound(computerSelection, humanSelection);

        container.innerHTML = humanSelection + " vs " + computerSelection
        + "<br>Score"
        + "<br>You: " + humanScore
        + "<br>Computer: " + computerScore;

    })
});

// function playGame() {

//     for (let i = 0; i < 5; i++) {    
//         let computerChoice = CHOICES[getComputerChoice()];
//         let humanChoice = getHumanChoice();
//         playRound(computerChoice, humanChoice);
//     }

//     if (humanScore > computerScore) {
//         console.log("You win!");
//     } else {
//         console.log("You lose!");
//     }

// //     console.log(`Score\nYou: ${humanScore}\nComputer:${computerScore}`);
// // }

// playGame();
