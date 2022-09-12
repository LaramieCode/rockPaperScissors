console.log("Hello World")

// make a function that makes you choose Rock Paper or Scissors.
let choice;
function yourChoice () {
    choice = prompt("Rock, Paper, or Scissors?")
    return(choice.toLowerCase())
}
// make a function that randomly chooses Rock Paper or Scissors.
let random;
function getComputerChoice () {
    n = Math.floor(Math.random() * 3) //Chooses a random number 0 - 2
    switch (n) {
        case 0:
            random = "rock"
            break;
        case 1:
            random = "paper"
            break;
        case 2:
            random = "scissors"
            break;
    }
    return random
}
// make a function that takes in input of your choice and matches that against getComputerChoice, and outputs the winner of rps
function PlayRound(player) {
    computer = getComputerChoice()
    result = (winner(player, computer))
    
    playerScore.innerText = ps
    computerScore.innerText = cs

    if (ps === 5 || cs === 5) {
        round = 0
        cs = 0;
        ps = 0;
        if (result === "player") {gameStatus.innerText = "Game winner : Player"};
        if (result === "computer") {gameStatus.innerText = "Game winner : Computer"};
        toggleRow2("gameOver")
        
    }
    if (ps > cs) {
            currentWinner.innerText = ">"
        } else if (ps < cs) {
            currentWinner.innerText = "<"
        } else if (ps === cs) {
            currentWinner.innerText = "="
        }

}

// make a function that finds the winner
function winner(player, computer) {
    let winner = ""
    round += 1

    if (player === "rock") {
        if (computer === "rock") {winner = "tie"}
        if (computer === "paper") {winner = "computer"}
        if (computer === "scissors") {winner = "player"}
    } else if (player === "paper") {
        if (computer === "rock") {winner = "player"}
        if (computer === "paper") {winner = "tie"}
        if (computer === "scissors") {winner = "computer"}
    } else if (player === "scissors") {
        if (computer === "rock") {winner = "computer"}
        if (computer === "paper") {winner = "player"}
        if (computer === "scissors") {winner = "tie"}
    }

    if (winner === "player") {
        ps++;
        gameStatus.innerText = `Round ${round} : Player`
        return("player")
    } else if (winner === "computer") {
        cs++
        gameStatus.innerText = `Round ${round} : Computer`
        return("computer")
    } else if (winner === "tie") {
        gameStatus.innerText = `Round ${round} : Tie`
        return("tie")
    }

}


// add event listeners for the rps buttons in html
const rock = document.querySelector("#rock")
rock.addEventListener("click", function() {PlayRound("rock")});
const paper = document.querySelector("#paper")
paper.addEventListener("click", function() {PlayRound("paper")});
const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", function() {PlayRound("scissors")});
const buttons = document.querySelectorAll(".buttons");
const playAgain = document.querySelector("#playAgain")
playAgain.addEventListener("click", function() {toggleRow2("newGame")})

// make variables for the score
const playerScore = document.querySelector("#playerScore")
let ps = 0
const computerScore = document.querySelector("#computerScore")
let cs = 0
const currentWinner = document.querySelector("#gameScoreColumn2")
let gameStatus = document.querySelector("#gameStatus")
gameStatus.innerText = "Rock, Paper, Scissors?"

//round
let round = 0

function startGame() {
    currentWinner.innerText = "="
    round = 0;
    cs = 0;
    ps = 0;

    playerScore.innerText = "#"
    computerScore.innerText = "#"

    gameStatus.innerText = "Rock, Paper, Scissors?"
}

function toggleRow2(status) {
    if (status === "gameOver") {
        buttons[0].style.display="none"
        buttons[1].style.display="none"
        buttons[2].style.display="none"
        buttons[3].style.display="flex"
    } else if (status === "newGame") {
        buttons[0].style.display="inline-block"
        buttons[1].style.display="inline-block"
        buttons[2].style.display="inline-block"
        buttons[3].style.display="none"
        startGame()
    }
}