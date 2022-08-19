console.log("Hello World")

//make a function that makes you choose Rock Paper or Scissors.
let choice;
function yourChoice () {
    choice = prompt("Rock, Paper, or Scissors?")
    return(choice.toLowerCase())
}
//make a function that randomly chooses Rock Paper or Scissors.
let random;
function getComputerChoice () {
    n = Math.floor(Math.random() * 3) //Chooses a random number 0 - 3
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
//make a function that finds the winner of you vs random, and return the winner
//if player chose rock, win if computer plays scissors, lose if computer plays paper, tie if computer plays rock
function winner () {
    let player = yourChoice()
    let computer = getComputerChoice()
    let winner;
    if (player === "rock") {
        if (computer === "rock") { winner = "tie"}
        if (computer === "paper") { winner = "computer"}
        if (computer === "scissors") { winner = "player" }
    } else if (player === "paper") {
        if (computer === "rock") { winner = "player" }
        if (computer === "paper") { winner = "tie" }
        if (computer === "scissors") { winner = "computer" } 
    } else if (player === "scissors") {
        if (computer === "rock") { winner = "computer" }
        if (computer === "paper") { winner = "player" }
        if (computer === "scissors") { winner = "tie" }
    }
    return [winner, player, computer]
}
//make a function that shows the winner in console.log
function play() {
    let game = winner()
    if (game[0] === "player") {
        console.log( `${game[1]} beats ${game[2]}, Player won!` )
    }
    else if (game[0] === "computer") {
        console.log( `${game[2]} beats ${game[1]}, Computer won!` )
    }
    else if (game[0] === "tie") {
        console.log( `${game[1]} ties ${game[2]}` )
    }
}