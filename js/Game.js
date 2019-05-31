/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Guess this random phrase"),
      new Phrase("This is another phrase"),
      new Phrase("What about this"),
      new Phrase("What am i thinkin"),
      new Phrase("easy money")
    ];
    this.activePhrase = null;
  }

  /**
   * method to start game; selects random phrase object and sets it to dispay on web page
   */
  startGame() {
    document.querySelector("#overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * method to select random phrase objects
   */
  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * 5);
    return this.phrases[randomNum];
  }

  /**
   * checks to see if the button clicked matches a letter in the phrase and performs action
   */
  handleInteraction(element) {
    // checks whether the onscreen key clicked matches the phrase and returns true or false
    const matchedLetter = this.activePhrase.checkLetter(element.textContent);

    // if letter matches, add class name to button clicked, reveal letter placeholders and check to see if game is won
    // if game is won, call gameOver() method
    // if letter matches returns false, add 'wrong' classname and call removeLife method
    if (matchedLetter) {
      element.className = "chosen";
      this.activePhrase.showMatchedLetter(element.textContent);
      this.checkForWin();

      if (this.checkForWin()) {
        this.gameOver();
      }
    } else {
      element.className = "wrong";
      this.removeLife();
    }
  }

  /**
   * method to increment 'missed' property and remove heart
   */
  removeLife() {
    this.missed++;
    document.querySelectorAll("#scoreboard li img")[this.missed - 1].setAttribute("src", "images/lostHeart.png");
    if(this.missed === 5) {
      this.gameOver();
    } 
  }

  /**
   * method to check if game is won
   */
  checkForWin() {
    const letters = document.querySelectorAll("#phrase li");
    // create variable to keep track of letters revealed
    let numOfLettersRevealed = 0;

    //loop through all li elements increment counter everytime a letter is revealed
    letters.forEach(function(letter) {
      if (!letter.className.includes("hide")) {
        numOfLettersRevealed++;
      }
    });

    // check if the revealed letter counter is equal to the number of characters in the phrase
    if (numOfLettersRevealed === this.activePhrase.phrase.length) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * display overlay to end game and resets game
   */
  gameOver() {
    // display messaged based on if game is won or loss
    if (this.missed === 5) {
      document.querySelector("#game-over-message").textContent = "YOU LOSE.";
      document.querySelector("#overlay").style.display = "flex";
      document.querySelector("#overlay").className = "lose";
    } else {
      document.querySelector("#game-over-message").textContent = "YOU WIN!";
      document.querySelector("#overlay").style.display = "flex";
      document.querySelector("#overlay").className = "win";
    }

    this.resetGame();
  }

  /**
   * method to reset game;
   * delete all li elements; enable button and set class back to 'key', and reset heart images
   */
  resetGame() {
    this.missed = 0;

    const phraseUl = document.querySelector("#phrase ul");
    if (phraseUl.hasChildNodes()) {
      document.querySelectorAll("#phrase ul li").forEach(function(li) {
        phraseUl.removeChild(phraseUl.lastElementChild);
      });
    }

    document.querySelectorAll("#qwerty button").forEach(function(element) {
      element.removeAttribute("disabled");
      element.className = "key";
    });

    document.querySelectorAll("#scoreboard li img").forEach(function(element) {
      element.setAttribute("src", "images/liveHeart.png");
    });
  }
}
