//Hold location of each cell
var randomLoc=Math.floor(Math.random()*5);
var lcation1=randomLoc;
var location2=lcation1+1;
var location3=location2+1;
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
        alert("Please enter a valid cell number");
    } else{
        guesses=guesses+1;
        if((current_guess==lcation1 || current_guess==location2 || current_guess==location3)){
            hits=hits+1;
            if (hits==3){
                isSunk=true;
                alert("You sank my Battleship!")
            }
        }else{
            alert("MISS")
        }
    }
    
}
var stats="You took"+ guesses+"guesses to sink battleship"+"which means your shooting accuracy was " + (3/guesses);
alert(stats);
//This is just a simple vrsion