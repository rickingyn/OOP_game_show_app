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

/**
 * add event listener to keypress;
 * if keyboard pressed is the same letter as the onboard keyboard and the game is started, call handleInteraction method
 */
document.addEventListener('keyup', function(event) {
  document.querySelectorAll('#qwerty button').forEach(function(button) {
    if(event.key === button.textContent && document.querySelector('#overlay').style.display === 'none') {
      game.handleInteraction(button);
    }
  });
});