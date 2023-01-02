// var startGame = document.getElementById("fetch-button");
// var correctIncorrect = document.getElementsByClassName("correct/incorrect")

// startGame.addEventListener('click', function() {
//     // Sets interval in variable
//     var secondsLeft = 15
//     var timerInterval = setInterval(function() {

//       secondsLeft--;
//       timeEl.textContent = secondsLeft + " seconds left until loss of turn.";

//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);}

//     }, 1000);
//   })


//   function incorrect() {
//     correctIncorrect.textContent = "Wrong!";
//     secondsLeft-10
// } 

var HScore = document.querySelector('#HScore')

HScore.addEventListener('click', function () {
    if (HScoreName.style.display = "none") {
        HScoreName.style.display = "block"
    }
    else if (HScoreName.style.display = "block") {
        HScoreName.style.display = "none"
    }
})

function timer() {
    //fetch wins/losses
    startGame.disabled = true

    // Sets interval in variable
    var secondsLeft = 15  // Change back to 15 before presentation
    timerInterval = setInterval(function () {
        secondsLeft--
        timeEl.textContent = "Score:" + secondsLeft

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval)
            sweepSprite()
            if (turnsLeft > 0) {
                timer()
            }
            else {
                return
            }
        }

    }, 1000)
}

function setScore() {
    win.textContent = winTracker
    localStorage.setItem("winTrack", winTracker)
}