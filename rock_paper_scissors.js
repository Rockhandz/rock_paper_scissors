
//Create function to get user choice


function getHumanChoice() {

    let human_choice = prompt("Make your choice: Rock, Paper or Scissors?")
    //if (human_choice == "rock") console.log(human_choice);
    //else if (human_choice == "paper") console.log(human_choice);
    //else if (human_choice == "scissors") console.log(human_choice);
    //else console.log("Error");


    let lowercase = human_choice.toLowerCase();
    console.log(lowercase)

}


// Create function to get computer choice

function getComputerChoice() {

    let choice = Math.random()
    let Computer = ""

    if (choice <= 0.33333) Computer = "rock";
    else if (choice >= 0.66666) Computer = "scissors";
    else Computer = "paper";

    console.log(Computer)

}

//Create function to get user choice


let humanScore = 0
let computerScore = 0


// Playing the game


function playRound(humanChoice, computerChoice) {

    humanChoice = humanSelection
    computerChoice = computerSelection
    console.log(humanChoice)
    console.log(computerChoice)

    if (humanChoice === computerChoice) console.log("Its a Tie");
    else if (humanChoice === "rock" && computerChoice === "scissors") console.log("You Win!");
    else if (humanChoice === "paper" && computerChoice === "rock") console.log("You Win!");
    else if (humanChoice === "scissors" && computerChoice === "paper") console.log("You Win!");
    else console.log("You Lose!");
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
