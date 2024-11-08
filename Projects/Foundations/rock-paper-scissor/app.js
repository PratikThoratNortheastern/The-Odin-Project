console.log("##########");
console.log("WELCOME TO ROCK PAPER SCISSORS!");
console.log("##########");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  console.log("Computer: " + choices[randomIndex]);
  return choices[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Enter any one of the following: rock, paper or scissors?"
  );
  console.log("Human Choice: " + humanChoice.toLowerCase());
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          console.log("Tie! Go again!");
          return;
        case "paper":
          console.log("Computer wins! Paper beats Rock!");
          computerScore++;
          return;
        case "scissors":
          console.log("You win!");
          humanScore++;
          return;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You win!");
          humanScore++;
          return;
        case "paper":
          console.log("It's a tie");
          return;
        case "scissors":
          console.log("Computer wins! Scissors beats paper!");
          computerScore++;
          return;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          console.log("Computer wins! Rock beats scissors!");
          computerScore++;
          return;
        case "paper":
          console.log("You win!");
          humanScore++;
          return;
        case "scissors":
          console.log("It's a tie!");
          return;
      }
      break;
    default:
      console.log("Invalid choice. Please restart the browser.");
  }
}

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    playRound();
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
  }

  if (humanScore === 5) {
    alert("Congratulations! You won the game!");
  } else {
    alert("Sorry, the computer won the game.");
  }
}

playGame();
