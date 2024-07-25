const enterButton = document.getElementById('enter');
enterButton.addEventListener("click", enterFunction)

let correct1 = "D";
let correct2 = "U";
let correct3 = "M";
let correct4 = "B";
let correctLetters = [correct1, correct2, correct3, correct4];

function enterFunction () {
    let userInput = [
        letterOne = document.getElementById('letter1').value.toUpperCase(),
        letterTwo = document.getElementById('letter2').value.toUpperCase(),
        letterThree = document.getElementById('letter3').value.toUpperCase(),
        letterFour = document.getElementById('letter4').value.toUpperCase()
    ]

    if (userInput.join("") === correctLetters.join("")) {
        console.log("You are correct")
    } else if (userInput.includes('D', 'U', 'M', 'B') === correctLetters.includes('D', 'U', 'M', 'B')) {
        console.log("some letter is correct")
    }




/*
        if (letterOne == "D") {
            correctLetter = 1
        } else if (letterTwo == "U") {
            correctLetter = 2
        }
        else if (letterThree == "M") {
            correctLetter = 3
        }
        else if (letterFour == "B") {
            correctLetter = 4
        } else if (letterOne == "D" && letterTwo == "U" && letterThree == "M" && letterFour == "B") {
        console.log("You guessed correctly")
        } 
        */       
}
