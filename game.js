// variables for rpsChoices 
const rpsChoices = document.querySelectorAll(".rpsChoices")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

// variables for score
const playerScore = document.querySelector("#playerScore")
let playerScoreValue = 0
const computerScore = document.querySelector("#computerScore")
let computerScoreValue = 0

// winner result variable
let winnerResult = document.querySelector("#winnerResult")

// play again variable
const playAgain = document.querySelector("#playAgain")
playAgain.addEventListener("click", function() {newGame()})

// history variables
const historyContainer = document.querySelector("#historyContainer")
let historyList = []
let historyCount = 0
for (let i = 0; i <= 15; i++) {
    historyList[i] = document.createElement("div")
    historyContainer.appendChild(historyList[i])
}

// event listeners for rpsChoices
rock.addEventListener("click", function() {playRound("rock")})
paper.addEventListener("click", function() {playRound("paper")})
scissors.addEventListener("click", function() {playRound("scissors")})

function getComputerChoice() {

    let random;
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

function playRound(playerChoice) {
    
    let computerChoice = getComputerChoice()
    findWinner(playerChoice, computerChoice)

    playerScore.textContent = playerScoreValue
    computerScore.textContent = computerScoreValue

    if (playerScoreValue >= 5) {
        winnerResult.textContent = "Player wins game"
        playAgain.style.display = "block"
        for (choice of rpsChoices) {
            choice.style.display = "none"
        }
    } else if (computerScoreValue >= 5) {
        winnerResult.textContent = "Computer wins game"
        playAgain.style.display = "block"
        for (choice of rpsChoices) {
            choice.style.display = "none"
        }
    }
}

function findWinner(player, computer) {

    let winner;

    if (player === "rock") {
        if (computer === "rock") {winner = "tie"; historyList[historyCount].textContent = "rock ties rock"}
        if (computer === "paper") {winner = "computer"; historyList[historyCount].textContent = "paper beats rock"}
        if (computer === "scissors") {winner = "player"; historyList[historyCount].textContent = "rock beats scissors"}
    } else if (player === "paper") {
        if (computer === "rock") {winner = "player"; historyList[historyCount].textContent = "rock beats paper"}
        if (computer === "paper") {winner = "tie"; historyList[historyCount].textContent = "paper ties paper"}
        if (computer === "scissors") {winner = "computer"; historyList[historyCount].textContent = "scissors beats paper"}
    } else if (player === "scissors") {
        if (computer === "rock") {winner = "computer"; historyList[historyCount].textContent = "rock beats scissors"}
        if (computer === "paper") {winner = "player"; historyList[historyCount].textContent = "scissors beats paper"}
        if (computer === "scissors") {winner = "tie"; historyList[historyCount].textContent = "rock beats rock"}
    }

    if (winner === "player") {
        playerScoreValue++
        winnerResult.textContent = "Player wins round"
    } else if (winner === "computer") {
        computerScoreValue++
        winnerResult.textContent = "Computer wins round"
    } else if (winner === "tie") {
        winnerResult.textContent = "Tie round"
    }

    historyCount++
    return winner
}

function newGame() {
    for (choice of rpsChoices) {
        choice.style.display = "flex"
    }

    for (log of historyList) {
        log = ""
    }

    winnerResult.textContent = "Rock, Paper, Scissors?"

    playerScoreValue = 0
    playerScore.textContent = playerScoreValue

    computerScoreValue = 0
    computerScore.textContent = computerScoreValue

    playAgain.style.display = "none"

    for (let i = 0; i <= 15; i++) {
        historyContainer.removeChild(historyList[i])
        delete (historyList[i])
        
    }

    for (let i = 0; i <= 15; i++) {
        historyList[i] = document.createElement("div")
        historyContainer.appendChild(historyList[i])
    }

    historyCount = 0
}
