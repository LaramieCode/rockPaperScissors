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
//make a function that shows the winner in console.log