// //Both letter.js and word.js should be constructor files:
// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.





var letter = require('./letter.js');

module.exports = function Word() {
    // do stuff in here for `Letter`
}


function CheckLetters(){
	this.selectedWord = ;
	this.isLetterInWord = false; //check if letter exists in code at all
	this.blanksAndSuccesses = [];
	this.lettersinWord = [];
	this.numBlanks = 0;
	this.letterMatch = function(){
		for(var i=0; i<numBlanks; i++){
		if (selectedWord[i] == letter){
			isLetterInWord = true;
			}
		}
	}



	//for loop to check if the letter matches


	//check where in the word, letter exists & create blanks&success
	if(isLetterInWord){ //to check if letter is in the word so u can then figure out whether or not to reduce a letter in counter
		for(var i=0; i<numBlanks; i++){ //
			if(selectedWord[i] == letter){
				blanksAndSuccesses[i] = letter;
			}
		}
	}
	//letter wasnt found
	else {
		wrongLetters.push(letter);
		guessesLeft--;

	}

	//testing/debug
	console.log(blanksAndSuccesses);
}



	this.wordOptions = ["humerus", "ulna", "femur", "carpals", "tarsals", "navicular"]
	this.selectedWord = function(){
		wordOptions[Math.floor(Math.random()*wordOptions.length)]
	};