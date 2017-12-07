// Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
function Letter(value) {
    this.value = value;
    this.show = false;
    if (this.value === ' ') {
        this.show = true;
    };
};
Letter.prototype.makeBlank = function () {
    if (this.show) {
        return this.value;
    } else {
        return '_';
    }
};
Letter.prototype.doesExist = function (letter) {
    if (this.value.toLowerCase() === letter.toLowerCase()) {
        this.show = true;
        return true
    } else {
        return false;
    }
};

module.exports = Letter;