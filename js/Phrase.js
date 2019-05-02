/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     /**
      * adds letter placeholders to the display when game starts
      * take phrase, and separate each letter and add to array
      * create and add each letter to li element
      */
     addPhraseToDisplay() {
         // separates each character in prhase into an array
         const letters = this.phrase.split("");
         
         /**
          * loop through letters array
          * create li element for each character 
          * add class name depending if it is a letter or space character
          * append li element to ul element in div with id "phase"
          * */
         letters.forEach(function(letter) {
            const li = document.createElement('li');
            li.textContent = letter;

            if(/[a-z]/.test(letter)) {
                li.className = `hide letter ${letter}`;
            } else if(/\s/.test(letter)) {
                li.className = 'space';
            }

            document.querySelector('#phrase ul').appendChild(li);
         });
     }
 }