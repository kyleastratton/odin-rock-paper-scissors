function generateopponentChoice(validOptions) {
  return opponentChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
}

function userIsRock(opponentChoice) {
  if (opponentChoice === "scissors") {
    return document.getElementById("result").innerHTML = "You win!"
  }
  if (opponentChoice === "paper") {
    return document.getElementById("result").innerHTML = "You lose :("
  } 
}

function userIsPaper(opponentChoice) {
  if (opponentChoice === "rock") {
    return document.getElementById("result").innerHTML = "You win!"
  } else {
    return document.getElementById("result").innerHTML = "You lose :("
  }
}

function userIsScissors(opponentChoice) {
  if (opponentChoice === "paper") {
    return document.getElementById("result").innerHTML = "You win!"
  } else {
    return document.getElementById("result").innerHTML = "You lose :("
  }
}

function calculateResult(userChoice, opponentChoice) {
  if (userChoice === opponentChoice) {
    return document.getElementById("result").innerHTML = "It's a draw!"
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

function calculateWinner() {
  // get user choice
  let userChoice = document.getElementById('user-input').value;
  
  // get opponent choice
  const validOptions = ["rock", "paper", "scissors"]
  let opponentChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
  let opponentChoiceValue = opponentChoice[0].toUpperCase() + opponentChoice.slice(1);
  document.getElementById("opponent-selected").innerHTML = opponentChoiceValue;

  //calculate winner
  calculateResult(userChoice, opponentChoice)
}
