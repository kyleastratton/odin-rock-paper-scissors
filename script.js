const hidden = document.getElementById("hidden");
hidden.style.display = "none";

const icon = document.querySelector('.icon');
icon.onclick = () => displayUserChoice(icon.innerHTML);

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

function userIsRock(opponentChoice) {
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
  // let opponentChoiceValue = opponentChoice[0].toUpperCase() + opponentChoice.slice(1);
  // document.getElementById("opponent-selected").innerHTML = opponentChoiceValue;
  displayOpponentChoice(opponentChoice);

  // calculate winner
  calculateResult(userChoice, opponentChoice)
}

function displayUserChoice(icon) {
  document.querySelector("#displayUserChoice").innerHTML = icon;
};

function displayOpponentChoice(opponentChoice) {
  let target = document.querySelector(`#${opponentChoice}`);
  let newTarget = target.innerHTML;
  document.querySelector("#displayOpponentChoice").innerHTML = newTarget;
}

function renderResult(msg) {
  let span = document.getElementById("result"); 
  span.innerText = msg;
  hidden.style.display = "";
}