/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.querySelector("#btn__reset").addEventListener("click", function() {
  game.startGame();
});

document.querySelector("#qwerty").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.setAttribute("disabled", "disabled");
    game.handleInteraction(event.target);
  }
});
