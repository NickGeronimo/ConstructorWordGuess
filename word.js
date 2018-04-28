
// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
// require letter objects
var Guess = require('./letter.js');

function Word(wrd) {
  this.word = wrd;
  this.letters = [];
  this.wordFound = false;

  this.getLets = function() {
    for(var i = 0; i<this.word.length; i++){
      var newLetter = new Guess(this.word[i]);
      this.letters.push(newLetter);
    }
  };

  };

  this.checkGuess = function(guessedLetter) {

    this.letters.forEach(function(lttr){
      if(lttr.letter === guessedLetter){
        lttr.appear = true;
      }
    })
    return whatToReturn;
  };


module.exports = Word;