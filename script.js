// let userChoice = document.getElementById('userInput').value;


// const validOptions = ["rock", "paper", "scissors"]

function generateopponentChoice(validOptions) {
  return opponentChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
}

function userIsRock(opponentChoice) {
  if (opponentChoice === "scissors") {
    return document.getElementById("result").innerHTML = "You win!"
  }
  if (opponentChoice === "paper") {
    return document.getElementById("result").innerHTML = "You lose!"
  } 
}

function userIsPaper(opponentChoice) {
  if (opponentChoice === "rock") {
    return document.getElementById("result").innerHTML = "You win!"
  } else {
    return document.getElementById("result").innerHTML = "You lose!"
  }
}

function userIsScissors(opponentChoice) {
  if (opponentChoice === "paper") {
    return document.getElementById("result").innerHTML = "You win!"
  } else {
    return document.getElementById("result").innerHTML = "You lose!"
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
  let userChoice = document.getElementById('userInput').value;
  console.log("User chose: ", userChoice);
  
  // get opponent choice
  const validOptions = ["rock", "paper", "scissors"]
  let opponentChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
  console.log("opponent chose: ",opponentChoice);

  // calculate winner
  // let calculatedResult = null;

  // return winner
  // calculateResult(userChoice, opponentChoice)
  // if (calculateResult === true) {
  //   document.getElementById("result").innerHTML = "Yes"
  // } else {
  //   document.getElementById("result").innerHTML = "No"
  // }
  calculateResult(userChoice, opponentChoice)
}

