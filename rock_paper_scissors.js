
// Create function to get computer choice
 
function getComputerChoice() {

    let choice = Math.random()
    console.log(choice)

    if (choice <= 0.33333) console.log("Rock"); 
    else if (choice >= 0.66666) console.log("Scissors");
    else console.log("Paper");

}

getComputerChoice()


//create function to get user choice


function getHumanChoice (){

    let human_choice = prompt("Rock, Paper, Scissors ?")
    if (human_choice == "Rock") console.log("Rock");
    else if (human_choice == "Paper") console.log("Paper");
    else if (human_choice == "Scissors") console.log("Scissors");
    else console.log ("Error")
 }

getHumanChoice()


var humanScore = 0

var computerScore = 0


function playRound (humanChoice, computerChoice) {


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);