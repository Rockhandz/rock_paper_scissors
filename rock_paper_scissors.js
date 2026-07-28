
//Create function to get user choice
const options = ["rock", "paper", "scissors"]

function getHumanChoice() {

    let human_choice = prompt("Make your choice: Rock, Paper or Scissors?")
    human_choice = human_choice.toLowerCase();
    return human_choice;

}

// Create function to get computer choice

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
// Score variables

let humanScore = 0
let computerScore = 0


// Playing the game


function playRound(humanChoice, computerChoice) {

    computer = computerChoice
    human_choice = humanChoice

    console.log("You Picked - " + humanChoice);
    console.log("Computer Picked - " + computerChoice);

    if (humanChoice === computerChoice) console.log("Its a Tie");
    else if
        ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
    else console.log("You Lose! " + computerChoice + " beats " + humanChoice);

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)



/*function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {

        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        computer = computerChoice
        lowercase = humanChoice

        console.log("You Picked - " + humanChoice);
        console.log("Computer Picked - " + computerChoice);

        if (humanChoice === computerChoice) console.log("Its a Tie");
        else if (humanChoice === "rock" && computerChoice === "scissors") console.log("You Win! Rock beats Scissors");
        else if (humanChoice === "paper" && computerChoice === "rock") console.log("You Win! Paper beats Rock");
        else if (humanChoice === "scissors" && computerChoice === "paper") console.log("You Win! Scissors beats Paper");
        else console.log("You Lose!");

    }


}

playGame(humanSelection, computerSelection)
*/
