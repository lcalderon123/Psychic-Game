
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var	wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	guessesSoFar.push(userGuess);

	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


	if (userGuess === computerGuess) {

		wins++;
		alert("You're Psychic!");
		guessesLeft = 9;
		guessesSoFar.length = 0;
	

	} 

	else if (guessesLeft === 0) {

		losses++;
		alert("You're not Psychic!")
		guessesLeft = 9;
		guessesSoFar.length = 0;
	}

	else if (userGuess !== computerGuess) {

		guessesLeft--;
	}


	var html = 
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>" + 
		"<p>Guesses Left: " + guessesLeft + "</p>" + 
		"<p>Your Guesses so far: " + guessesSoFar + "</p>";

	document.getElementById('score').innerHTML = html;

	
	
}








