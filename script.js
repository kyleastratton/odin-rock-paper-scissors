// let userChoice = document.getElementById('userInput').value;


// const validOptions = ["rock", "paper", "scissors"]

function generateEnemyChoice(validOptions) {
  return enemyChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
}

function userIsRock(enemyChoice) {
  if (enemyChoice === "scissors") {
    return document.getElementById("result").innerHTML = "Yes"
  }
  if (enemyChoice === "paper") {
    return document.getElementById("result").innerHTML = "No"
  } 
}

function userIsPaper(enemyChoice) {
  if (enemyChoice === "rock") {
    return document.getElementById("result").innerHTML = "Yes"
  } else {
    return document.getElementById("result").innerHTML = "No"
  }
}

function userIsScissors(enemyChoice) {
  if (enemyChoice === "paper") {
    return document.getElementById("result").innerHTML = "Yes"
  } else {
    return document.getElementById("result").innerHTML = "No"
  }
}

function calculateResult(userChoice, enemyChoice) {
  if (userChoice === "rock") {
    userIsRock(enemyChoice)
  }
  if (userChoice === "paper") {
    userIsPaper(enemyChoice)
  }
  if (userChoice === "scissors") {
    userIsScissors(enemyChoice)
  }
}

function calculateWinner() {
  // get user choice
  let userChoice = document.getElementById('userInput').value;
  console.log("User chose: ", userChoice);
  
  // get enemy choice
  const validOptions = ["rock", "paper", "scissors"]
  let enemyChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
  console.log("Enemy chose: ",enemyChoice);

  // calculate winner
  // let calculatedResult = null;

  // return winner
  // calculateResult(userChoice, enemyChoice)
  // if (calculateResult === true) {
  //   document.getElementById("result").innerHTML = "Yes"
  // } else {
  //   document.getElementById("result").innerHTML = "No"
  // }
  calculateResult(userChoice, enemyChoice)
}

