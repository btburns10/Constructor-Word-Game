function Letter(char) {
    this.char = char,
    this.hasGuessed = false,
    this.displayChar = function() {
        if(this.hasGuessed) {
            return this.char;
        }
        return " _";
    },
    this.checkIfGuessed = function(char) {
        if(char !== this.char) {
            return;
        }else {
            this.hasGuessed = true;
        }
        console.log("Correct!");
    }
};

module.exports = Letter;