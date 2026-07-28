
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



function playGame() {

    // Score variables

    let humanScore = 0
    let computerScore = 0


    // Playing the game


    function playRound() {

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log("You Picked - " + humanChoice);
        console.log("Computer Picked - " + computerChoice);

        if (humanChoice === computerChoice) {
            console.log("Its a Tie");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You Win! " + humanChoice + " beats " + computerChoice)
            humanScore++;
        }
        else {
            console.log("You Lose! " + computerChoice + " beats " + humanChoice)
            computerScore++;
        }

        console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}`);
        console.log("-----------------------------------------");

    }


    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the match!");
    } else if (computerScore > humanScore) {
        console.log("Game Over! The computer won the match.");
    } else {
        console.log("The match ended in an overall tie!");
    }

}

playGame()

