let dinner = Math.floor((Math.random() * 100) + 1);

let countdown = 10;

let log = []

document.getElementById("rGuess").innerHTML = countdown;

function userGuessed(){
	var guess = document.getElementById("guessField").value;
	document.getElementById("guessField").value = ""
	log.push(guess);
if (guess < dinner){
	var message = "... that's too low"
} else if (guess > dinner) {
	var message = "... that's too high"
} else {
	var message = "... that's the right number!!!"
	// endgame();
}	
	document.getElementById("message1").innerHTML = `You guessed `;
	document.querySelector("#guess").innerHTML = `${guess}`;
		document.getElementById("message2").innerHTML = ` ${message}`
	countdown -= 1;
	document.getElementById("rGuess").innerHTML = countdown;
	document.getElementById("log").innerHTML = `Previous Guesses: ${log}`
}

function endgame(){
	//Change display to throw focus on the ${message}
	//Throw confetti?
	//Display popup "Congratulations!!!" w/ option to restart

}