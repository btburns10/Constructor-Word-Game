const Letter = require("./Letter");

function Word(word) {

    this.letterObjArray = [];
    
    for(let letter of word) {
        var letterObj = new Letter(letter);
        this.letterObjArray.push(letterObj);
    };

    this.numOfWrongGuesses = 0,
    
    this.createString = function() {
        var spaces = ""
        for(let letter of this.letterObjArray) {
            spaces += letter.displayChar() + "";
        }
        return spaces;
    },
    this.checkGuess = function(char) {
        if(word.indexOf(char) === -1) {
            console.log("Wrong!");
            this.numOfWrongGuesses++;
        }
        for(let letter of this.letterObjArray) {
            letter.checkIfGuessed(char);
        }
        function hasWon(letter) {
            return letter.hasGuessed;
        }
        if(this.letterObjArray.every(hasWon)) {
            this.gameOver = true;
        }
    }

}



module.exports = Word;