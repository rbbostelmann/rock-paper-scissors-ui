# rock-paper-scissors

Project made as part of The Odin Project curriculum.

Main difficulties

Writing the code to play a single match and logging it to the console/alert/etc was easy, I mostly struggled with making the playGame() function work properly.

At first, it was only taking into account the first match adn repeating the player/computer picks for the other matches. I figured I had to implement some sort of gameOver() function to reset the pick value, but no amtter what I tried I just couldn find a decent way to do that.In hindsight I could probably have written the gameOver() function as:

function gameOver() {
computerSelection = choices[Math.floor(Math.random() * choices.length)];
let userInput = prompt("Pick rock, paper or scissors: ");
let playerSelection = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
}

And then I could call it in the playGame() function. I'ĺl now go and test it to see if it works (SPOILER: it does!).

I renamed it to choiceReset() though, it seems more intuitive than "gameOver()".

Optimization

Another problem I had was trying to use arrow functions to get used to it, but it created more issues than it solved, so I decided to stick with the regular syntax. I might revisit this and refactor everything once I understand arrow functions better.

I'm sure there are hundreds of other little things I could have done to make this more straightforward, but I'm happy with the result for now.

---

The "game" takes place mostly in the console, but there's some kind of interface with the alert boxes.

---

I do gladly accept criticism though. I want to become a better programmer and eventually work in the field, so feel free to point out what I could have done better and I will.

---

Working on the UI now.
# rock-paper-scissors-ui
# rock-paper-scissors-ui
