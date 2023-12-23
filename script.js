const hidden = document.getElementById("hidden");
hidden.style.display = "none";

const rock = document.querySelector('#rock');
rock.onclick = () => getUserChoice("rock");

const paper = document.querySelector('#paper');
paper.onclick = () => getUserChoice("paper");

const scissors = document.querySelector('#scissors');
scissors.onclick = () => getUserChoice("scissors");

function getUserChoice(id) {
  let userChoice = id;
  calculateWinner(userChoice);
}

function generateopponentChoice(validOptions) {
  return opponentChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
}

function renderResult(msg) {
  console.log("msg = ", msg);
  let span = document.getElementById("result"); 
  span.innerText = msg;
  hidden.style.display = "";
}

function userIsRock(opponentChoice) {
  console.log("user chose rock");
  if (opponentChoice === "scissors") {
    renderResult("You win!");
  }
  if (opponentChoice === "paper") {
    renderResult("You lose!");
  } 
}

function userIsPaper(opponentChoice) {
  if (opponentChoice === "rock") {
    renderResult("You win!");
  } else {
    renderResult("You lose!");
  }
}

function userIsScissors(opponentChoice) {
  if (opponentChoice === "paper") {
    renderResult("You win!");
  } else {
    renderResult("You lose!");
  }
}

function calculateResult(userChoice, opponentChoice) {
  if (userChoice === opponentChoice) {
    return document.querySelector("#result").innerHTML = "It's a draw!"
  }
  if (userChoice === "rock") {
    userIsRock(opponentChoice)
  }
  if (userChoice === "paper") {
    userIsPaper(opponentChoice)
  }
  if (userChoice === "scissors") {
    userIsScissors(opponentChoice)
  }
}

function calculateWinner(userChoice) {
  // get opponent choice
  const validOptions = ["rock", "paper", "scissors"]
  let opponentChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
  let opponentChoiceValue = opponentChoice[0].toUpperCase() + opponentChoice.slice(1);
  document.getElementById("opponent-selected").innerHTML = opponentChoiceValue;

  //calculate winner
  calculateResult(userChoice, opponentChoice)
}
