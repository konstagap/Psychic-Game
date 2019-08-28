
// computer choises of letter
// var computerChoices = ["q", "w", "e","r","t","y","u","i","o","p","a","s",
// "d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var computerChoices = ["a","b" ];
//variables for storing results
var win =0;
var loose =0;
var tries=9;
var current=[];
// function called upon event key up,
// random loop for computer guess.


    document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (userGuess == computerGuess) {
       win++;
       current.push(userGuess);
       
    } else {
        tries--;
        current.push(userGuess);

    }

    
    // changing elements in html
    document.getElementById('guessesLeft').innerHTML="Guesses left: "+ tries;
    document.getElementById('currentGuess').innerHTML="Your guesses so far: " + current;
    document.getElementById('wins').innerHTML="Wins: " + win;
    document.getElementById('userGuess').innerHTML="Your choice: " + userGuess;
}

// <!--
// 1. user press letter on keyboard.
//    -add to userGuess
// 2. computer generates random letter.
// 3. compare letters:
//    -if letter match 
//        add to Wins.
       
//    -if letter dont match
//        -add letter to "currentGuess"
//            -count down guesses left
//                -if none of guesses left
//                    -add 1 to losses;


//           -->

