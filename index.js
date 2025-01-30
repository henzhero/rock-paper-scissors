function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors:");
}

console.log(getComputerChoice());
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

/* create a function that plays a round (two para, human and comp choice)
    turn human choice into case sensitive (lowercase)
      compare human choice and comp choice */

/* create a function that plays five rounds
    add scores to the variables whoever wins or loses
    after 5 rounds, declare winner */


