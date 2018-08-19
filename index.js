const inquirer = require("inquirer");
const Word = require("./Word");

var wordBank = ["javascript", "angular", "python", "react"];
var count = 0;
var index = 0;
var wordToGuess;
//--------------------------------game functions------------------------------>>

function initGame() {
    index = Math.round(Math.random() * (wordBank.length - 1));
    wordToGuess = new Word(wordBank[index]);
    console.log("\n" + wordToGuess.createString()); 
    playGame();
}


function playGame() {
    if(wordToGuess.gameOver) {
        console.log("Congrats! You won the round!");
        return;
    }

    if(wordToGuess.numOfWrongGuesses > 1) {
        console.log("Sorry, You lose! You are out of guesses");
        return;
    }

    if(count === 0) {
        inquirer
            .prompt([
                {
                    name: "letter",
                    message: "Guess a letter!"
                }
            ])
            .then(function(input) {
                wordToGuess.checkGuess(input.letter.toLowerCase());
                console.log(wordToGuess.createString());
                count++;
                playGame();
            })

    }else if(count > 0) {
        inquirer
            .prompt([
                {
                    name: "letter",
                    message: "Guess again!"
                }
            ])
            .then(function(input) {
                wordToGuess.checkGuess(input.letter.toLowerCase());
                console.log(wordToGuess.createString());
                count++;
                playGame();
            })

    }
    else {
        console.log("Sorry, you're out of letters!");
    }
}

initGame();