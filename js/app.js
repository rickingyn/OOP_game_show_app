/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// create game object
const game = new Game();

// add event listener to start game button
document.querySelector("#btn__reset").addEventListener("click", function() {
  game.startGame();
});

/**
 * add event listener to onscreen keyboard
 * use event delegation
 */
document.querySelector("#qwerty").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.setAttribute("disabled", "disabled");
    game.handleInteraction(event.target);
  }
});
