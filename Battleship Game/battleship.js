//Hold location of each cell
var lcation1=3;
var location2=4;
var location3=4;
//Users current guess
var current_guess;
//Number of hits
var hits=0;
//Number of guesses
var guesses=0;
//Keep track of whether ship is sunk or not and set it to false
var isSunk=false;
while(isSunk==false){
    current_guess=prompt("Ready,Aim ,Fire! (Enter a number between 0-6):")
    // We check validity by making sure the guess is   between zero and six
    if (current_guess<0 || current_guess > 6) {
        alert("Please entr a valid cell number");
    } else{
        guesses=guesses+1;
    }

    
  
}
