let humanScore = 0;
let computerScore = 0;
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function getHumanChoice() {
    return window.prompt("ROCK.. PAPER.. SCISSORS.. SHOOT!");
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log(`${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
};

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Human Wins!");
    } else if (computerScore > humanScore) {
        console.log("Computer Wins!");
    } else {
        console.log("The game is a tie.");
    }
};

console.log(playGame());