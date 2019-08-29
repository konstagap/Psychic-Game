// computer choises of letter
var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s",
    "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
// var computerChoices = ["a","b" ];
//variables for storing results
var win = 0;
var losses = 0;
var tries = 9;
var current = [];
// restart function;
var restart = function () {
    tries = 9;
    current = [];
};
// creat var that conects to ids so we can change stats later;
var lossesText = document.getElementById('losses');
var guessesLeftText = document.getElementById('guessesLeft');
var currentGuessText = document.getElementById('currentGuess');
var winsText = document.getElementById('wins');
var userGuesstext = document.getElementById('userGuess');


// function called upon event key up,
document.onkeyup = function (event) {
    var userGuess = event.key;

    // random loop for computer guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //if ur guess and comp gues matches u winn
    // ur guess added to "your choice"
    if (userGuess == computerGuess) {
        win++;
        current.push(userGuess);
        //if u didnt guess u have less tries
        // ur guess added to "your choice"
    } else {
        tries--;
        current.push(userGuess);
    }
    //when u ran out of tries we adding one to losses
    // and game restarts with restart function
    if (tries == 0) {
        losses++;
        restart();
    }
   
   
    // changing elements in html
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + tries;
    currentGuessText.textContent = "Your guesses so far: " + current;
    winsText.textContent = "Wins: " + win;
    userGuesstext.textContent = "Your choice: " + userGuess;
}


// You have 9 tries
// 1. user press letter on keyboard.
//     -add to userGuess
// 2. computer generates random letter.
// 3. compare letters:
//     -if letter match 
//         add to Wins.
//         add to curennt guesses so far

//     -if letter dont match
//         -add letter to "currentGuess"
//             -count down guesses left

// If none of guesses left
// reset results to start;        
// -add 1 to losses;
