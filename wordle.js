const enterButton = document.getElementById('enter');
enterButton.addEventListener("click", enterFunction)
 
let letterOne = document.getElementById('letter1').value.toUpperCase();
let letterTwo = document.getElementById('letter2').value.toUpperCase();
let letterThree = document.getElementById('letter3').value.toUpperCase();
let letterFour = document.getElementById('letter4').value.toUpperCase();

let correctAwnser = "DUMB";

function enterFunction () {
    if (letterOne == "D" || letterTwo == "U" || letterThree == "M" || letterFour == "B") {
        console.log("You have 1 correct letter")
    }

    if (letterOne == "D" && letterTwo == "U" && letterThree == "M" && letterFour == "B") {
        console.log("Great job you guessed correctly");
    }
}