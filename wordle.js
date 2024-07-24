const enterButton = document.getElementById('enter');
enterButton.addEventListener("click", enterFunction)
/*
function generateRandomString () {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex]
}
let letter1 = generateRandomString();
let letter2 = generateRandomString();
let letter3 = generateRandomString();
let letter4 = generateRandomString();
console.log(letter1)
console.log(letter2)
console.log(letter3)
console.log(letter4)

let correctAwnser = letter1 + letter2 + letter3 + letter4;
*/

let correct1 = "D";
let correct2 = "U";
let correct3 = "M";
let correct4 = "B";

function enterFunction () {
    let letterOne = document.getElementById('letter1').value.toUpperCase();
    let letterTwo = document.getElementById('letter2').value.toUpperCase();
    let letterThree = document.getElementById('letter3').value.toUpperCase();
    let letterFour = document.getElementById('letter4').value.toUpperCase();

    if (letterOne == correct1 && letterTwo == correct2 && letterThree == correct3 && letterFour == correct4) {
        console.log("Great job you guessed correctly");
    } 
    else if (letterOne == correct1 && (letterTwo !== correct2 || letterThree !== correct3 || letterFour !== correct4)) {
        console.log("Only " + letterOne + " is correct")
    } 
    else {
        console.log("You're wrong")
    }
}