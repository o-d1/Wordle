const enterButton = document.getElementById('enter');
enterButton.addEventListener("click", enterFunction)

let correctLetters = ["D", "U" , "M", "B"];

function enterFunction () {
    let userInput = [
        letterOne = document.getElementById('letter1').value.toUpperCase(),
        letterTwo = document.getElementById('letter2').value.toUpperCase(),
        letterThree = document.getElementById('letter3').value.toUpperCase(),
        letterFour = document.getElementById('letter4').value.toUpperCase()
    ]
    if (userInput.join("") === correctLetters.join("")) {
        console.log("You are correct");
    } else {
//        let inputElements = document.querySelectorAll('.input-row input')
        userInput.forEach(function(letter, index) { 
            if (correctLetters.includes(letter)) {
                console.log(letter + " is correct");
//                inputElements.style.backgroundColor = "green";
            }  else if(letter > 1) {
                console.log(letter + " are correct")
            }
        });
    }
}
