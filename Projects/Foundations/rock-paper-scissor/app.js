console.log("##########");
console.log("WELCOME TO ROCK PAPER SCISSORS!");
console.log("##########");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  console.log("Computer: " + choices[randomIndex]);
  return choices[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Enter any one of the following: Rock, Paper or Scissors?"
  );
  console.log("Human Choice: " + humanChoice);
  return humanChoice;
}
