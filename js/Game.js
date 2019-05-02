/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
       this.missed = 0;
       this.phrases = [
           new Phrase('This is the first phrase'),
           new Phrase('This is the second phrase'),
           new Phrase('This is the third phrase'),
           new Phrase('This is the fourth phrase'),
           new Phrase('This is the fifth phrase')
       ];
       this.activePhrase = null;  
     }

     startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

     }
    
     getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * 5);
        return this.phrases[randomNum];
     }

     handleInteraction() {

     }

     removeLift() {

     }

     checkForWin() {

     }

     gameOver() {

     }
 }