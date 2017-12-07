//The completed game should be able to receive user input using the inquirer or prompt npm packages.

//You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.
const inquirer = require("inquirer")
const Word = require('./word.js');
var wordCon = new Word();
var wordbank = ['masquerade', 'music of the night', 'point of no return', 'wishing you were somehow here again', 'the mirror', 'all i ask of you', 'think of me'];
var mathFloor = Math.floor(Math.random() * wordbank.length);
var wordPicked = wordbank[mathFloor];
wordCon.genUndercores(wordPicked);

console.log('Welcome to node hangman! All words are song titles from the musical The Phantom of the Opera! To begin guess a letter!')

function askForLetter() {
    inquirer.prompt([{
        type: "input",
        name: "userguess",
        message: "Please type in a letter to guess."

    }]).then(answers => {
        console.log(answers.userguess)
        var guess = answers.userguess
        wordCon.userGuess(guess)
        // console.log(wordCon)
        if (wordCon.underscores.join("") != wordPicked) {
            askForLetter()
        }
    });
}
askForLetter()