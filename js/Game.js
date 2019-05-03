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

  startGame() {
    document.querySelector("#overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * 5);
    return this.phrases[randomNum];
  }

  /**
   * checks to see if the button clicked matches a letter in the phrase
   * incorrect guess diasables letter
   * correct guess checks to see if game is won/over
   */
  handleInteraction(element) {
    const checkLetter = this.activePhrase.checkLetter(element.textContent);

    if (checkLetter) {
      element.className = "chosen";
      this.activePhrase.showMatchedLetter(element.textContent);
      this.checkForWin();

      if (this.checkForWin()) {
        this.gameOver();
      }
    } else {
      element.className = "wrong";
      // 'this' is the game object
      this.removeLife();
    }
  }

  removeLife() {
    (this.missed === 5) ? this.gameOver() : this.missed++;
    document.querySelectorAll('#scoreboard li img')[this.missed-1].setAttribute('src', 'images/lostHeart.png');
  }

  checkForWin() {
    const letters = document.querySelectorAll('#phrase li');
    let numOfLettersRevealed = 0;
    
    letters.forEach(function(letter) {
      if(!letter.className.includes('hide')) {
        numOfLettersRevealed++;
      } 
    });

    if(numOfLettersRevealed === this.activePhrase.phrase.length) {
      return true;
    } else {
      return false;
    }
  }

  gameOver() {
    if (this.missed === 5) {
      document.querySelector('#game-over-message').textContent = "YOU LOSE.";
      document.querySelector('#overlay').style.display = 'flex';
      document.querySelector('#overlay').className = 'lose';
      
    } else {
      document.querySelector('#game-over-message').textContent = "YOU WIN!";
      document.querySelector('#overlay').style.display = 'flex';
      document.querySelector('#overlay').className = 'win';
    }
  }
}
