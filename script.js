// 1- When click *button*
// 2 - Play game
// 3 - Gives result // Updates score
// 4 - Saves result // score
// 5 - Up to 5 times // button *try again*      OK -ish
// 6 - Gives winner // Reset score              OK -ish

//Necessary global variables
const maxGames = 5;
//HTML variables
const buttons = document.querySelectorAll("button");
//Variables for the human player
const humanScore = document.querySelector("#humanScore")
let score1 = 0;
//Variables for the pc player
const computerScore = document.querySelector("#computerScore")
let score2 = 0;
//Variables for logging ties
const tie = document.querySelector("#tie")
let tieScore = 0;
//Variable that displays the winner
let winner = document.querySelector("#result")
    //Variable that creates a paragraph with the round winner
const roundWinner = document.createElement("p")


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
function machineChoice() {
    return choices[Math.floor(Math.random() * choices.length)];

}

//Function that runs the game
function playGame() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (outcomes[button.className].weakTo === machineChoice()) {
                //Updates score for the PC player
                score2++;
                computerScore.textContent = score2;
                if (score2 >= maxGames) {
                    disableBtns()
                    roundWinner.textContent = outcomes.Messages.loss
                    winner.appendChild(roundWinner)
                    addButton();
                }
            } else if (outcomes[button.className].strongAgainst === machineChoice()) {
                //Updates the score for the human player
                score1++;
                humanScore.textContent = score1;
                if (score1 >= maxGames) {
                    disableBtns()
                    roundWinner.textContent = outcomes.Messages.win
                    winner.appendChild(roundWinner)
                    addButton()
                }
                //Checks for ties and does nothing/prints to console. Could add text though.
            } else {
                tieScore++;
                tie.textContent = tieScore;
            }
        })
    })
}

//Calling playGame as we load the page
playGame();

//Function that disables the selection buttons
function disableBtns() {
    if (score1 >= maxGames || score2 >= maxGames) {
        buttons.forEach((button) => {
            button.setAttribute("disabled", true)
        })
    }
}

//Fucntion that adds the reset button and takes care of reseting the game status
function addButton() {

    //Variables for the retry button
    const container = document.getElementById("container")
    const retryBtn = document.createElement("button")

    //Add class and ID
    retryBtn.id = "retry-btn";
    retryBtn.className = "retry";

    //Append text node
    retryBtn.appendChild(document.createTextNode("Retry"));

    //Append button to container
    container.appendChild(retryBtn)
    const retry = document.getElementsByClassName("retry")[0];

    //Listening for the reset click
    retry.addEventListener("click", resetScore)

    //Function that resets the score and variables
    function resetScore(e) {
        if (e.target.classList.contains('retry')) {

            //Removes round winner
            winner.removeChild(roundWinner)

            //Sets scores back to 0
            humanScore.textContent = 0;
            score1 = 0;
            computerScore.textContent = 0;
            score2 = 0;
            tie.textContent = 0
            tieScore = 0

            //Removes "retry button"
            container.removeChild(retryBtn)

            //Enable buttons
            buttons.forEach((button) => {
                button.removeAttribute("disabled")
            })
        }
    }
}