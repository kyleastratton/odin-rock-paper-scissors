let selectElement = document.getElementById('userInput').value;


const validOptions = ["rock", "paper", "scissors"]

function generateEnemyChoice(validOptions) {
  let choice = validOptions[Math.floor(Math.random() * validOptions.length)];
  console.log(choice)
}

