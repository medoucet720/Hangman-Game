var flavors = ['vanilla', 'chocolate', 'pistachio', 'strawberry', 'coffee']

var compWord = '';
var letterInCompWord = [];
var numBlanks = 0;
var blanksAndRightGuesses = [];
var wrongGuesses = [];


var winsCounter = 0;
var numbGuesses = 15;


function startGame () {

	wrongGuesses = [];
	console.log("this is wrong guesses in startGame", wrongGuesses);
	numbGuesses = 15;
	blanksAndRightGuesses = [];


//Computer will choose word from flavor category

compWord = flavors[Math.floor(Math.random() * flavors.length)];

//selected word will break into indiviual letters

lettersInCompWord = compWord.split('');

//individual letters will change to underscores
numBlanks = lettersInCompWord.length;

console.log(compWord);

console.log(numBlanks);


for(var i = 0; i < numBlanks; i++){
	blanksAndRightGuesses.push('_');
}

console.log(blanksAndRightGuesses);
document.getElementById('current-Word').innerHTML = blanksAndRightGuesses.join(' ');
document.getElementById('guesses-Left').innerHTML = numbGuesses;
}

//user guess will enter into word if correct, drop down to already guess if incorrect
//number of guesses will decrease
function letterSearch(letter){
	var letterinWord = false;

	for(var i = 0; i< numBlanks; i++){
		if(compWord[i] === letter){
			letterinWord = true;
		}
	}

	if(letterinWord){
		for(i = 0; i < numBlanks; i++){
			if(compWord[i] === letter){
				blanksAndRightGuesses[i] = letter;
			}
		}
	}else{
		numbGuesses --;
		wrongGuesses.push(letter)
	}
}

//user will get alerted if guess correctly or will end game in guesses left runs out
function roundComplete(){
	document.getElementById('current-Word').innerHTML = blanksAndRightGuesses.join(' ');
	document.getElementById('guesses-Left').innerHTML = numbGuesses;
	document.getElementById('wrong-Guesses').innerHTML = wrongGuesses.join('');

	if(lettersInCompWord.join(' ') === blanksAndRightGuesses.join(' ')){
		winsCounter++;
		alert("You win!!");
		document.getElementById('wins').innerHTML = winsCounter
		startGame();
	}else if (numbGuesses === 0){
		document.getElementById('wrong-Guesses').innerHTML= '';
		alert('you dont have any more guesses');
		startGame();
	}

}
//user will select letter, event will occur once user lifts finger off of key
startGame();
document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log('this is the letter we typed', letterGuessed)
	letterSearch(letterGuessed)
	roundComplete();
}

