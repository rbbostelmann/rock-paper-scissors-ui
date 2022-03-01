// 1- When click *button*
// 2 - Play game
// 3 - Gives result // Updates score
// 4 - Saves result // score
// 5 - Up to 5 times // button *try again*      OK -ish
// 6 - Gives winner // Reset score              OK -ish

//Necessary global variables
const maxGame = 5;


//Necessary html global variables



// Objects with outcomes and messages to be displayed
const outcomes = {
    rock: { weakTo: "Paper", strongAgainst: "Scissors" },
    paper: { weakTo: "Scissors", strongAgainst: "Rock" },
    scissors: { weakTo: "Rock", strongAgainst: "Paper" },
    Messages: { win: "You win!", loss: "You lose!", tie: "It's a tie!" }
};

//Array with possible choices for the computer
const choices = ["Rock", "Paper", "Scissors"];

//Computer randomizer
let computerSelection = choices[Math.floor(Math.random() * choices.length)];

//*MAKE THE COUNTERS AND APPLY THE SELECTORS */
//Runs the game
function playGame() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (outcomes[button.className].weakTo === computerSelection) {
                console.log(outcomes.Messages.loss)
            } else if (outcomes[button.className].strongAgainst === computerSelection) {
                console.log(outcomes.Messages.win)
            } else {
                console.log(outcomes.Messages.tie)
            }
        })
    })
}

playGame();

//*MAKE IF STATEMENT AND CHANGE THE RESETSCORE FUNCTION - BOTH WORKING */
function addButton() {
    const container = document.getElementById("container")
    const retryBtn = document.createElement("button")

    //Add class and ID
    retryBtn.id = "retry-btn";
    retryBtn.className = "retry";

    //Append text node
    retryBtn.appendChild(document.createTextNode("Try again"));

    //Append button to container
    container.appendChild(retryBtn)

    const retry = document.getElementsByClassName("retry")[0];

    //Listening for the reset click
    retry.addEventListener("click", resetScore)

    //*MAKE IT REMOVE STUFF - WORKING */
    //Resets the score and variables
    function resetScore(e) {
        if (e.target.classList.contains('retry')) {
            console.log(1)
        }
    }
}