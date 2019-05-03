/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * method to separate each characters from the phrase into an array
   * create li element for each letter in the array and append to phrase ul
   */
  addPhraseToDisplay() {
    // separates each character in prhase into an array
    const letters = this.phrase.split("");

    // loop through letters and add class name
    letters.forEach(function(letter) {
      const li = document.createElement("li");
      li.textContent = letter;

      // use regex to check if array item is a letter or a space; add class name accordingly
      if (/[a-z]/.test(letter)) {
        li.className = `hide letter ${letter}`;
      } else if (/\s/.test(letter)) {
        li.className = "space";
      }

      document.querySelector("#phrase ul").appendChild(li);
    });
  }

  /**
   * Method to check if onscreen key clicked matches phrase
   * @param {string} key - letter from the onscreen keyboard
   * @return {boolean} boolean value indicating whether the onscreen key clicked matches the phrase
   */
  checkLetter(key) {
    return this.phrase.includes(key);
  }

  /**
   * loop through all li elements and change class if letter matches key pressed
   * @param {string} key - key pressed on onscreen keyboard
   */
  showMatchedLetter(key) {
    document.querySelectorAll("li").forEach(function(letter) {
      if (letter.textContent === key) {
        letter.className = `show letter ${key}`;
      }
    });
  }
}
