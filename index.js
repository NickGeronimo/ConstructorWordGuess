// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require('inquirer');
var Word = require('./word.js');
var letter = require ('./letter.js');
var guesses = 10
var wins = 0
var losses = 0
var currentWord = "";
var currentWordArray = [""]
var wrongLettersArray = [""]

//inquirer ask to start game

//rules for game

//on letter enter, check if guess letter matches a letter in answer word
//if letter matches, reveal letter, append letter to letters guessed.
//if letter doesn't match, say no letter matched and remove guess.

inquirer.prompt([

    {
      type: "list",
      name: "Type",
      message: "Would You Like To Play A Game?",
      choices: ["Yes", "No", "AWW HELL NAH"]
    },
   
   
   ]).then(function(check){
   if(check.Type === 'Yes'){
   console.log('Oh Goody, This Is Hangman')
   console.log("Guess The Word Before You Run Out Of Chances")
   hangman();
   }
   else{
    console.log("GET OUT")
   }
   })

   function hangman() {
       console.log("test")
   }