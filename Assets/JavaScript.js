//defines the start button and time element and the answer notification slot.
var start = document.getElementById("startBtn")
var timer = document.getElementById("timeLeft")
let answer = document.getElementById("answer")

//creates answer buttons.
var answer1 = document.createElement("button")
var answer2 = document.createElement("button")
var answer3 = document.createElement("button")
var answer4 = document.createElement("button")

//sets starting time and starting score.
var timeLeft = 60
var score = 0

// answer arrays.
const A1 = ['alerts', 'booleans', 'strings', 'numbers']
const A2 = ['quotes', 'curly brackets', 'parentheses', 'square brackets']
const A3 = ['bumbers and strings', 'other arrays', 'booleans', 'all of the above']
const A4 = ['commas', 'curly brackets', 'parentheses', 'quotes']
const A5 = ['JavaScript', 'terminal/Bash', 'for loops', 'console.log']

//hides everything but the welcome text
document.getElementById("firstThing").style.display = 'none'
document.getElementById('highScore').style.display = 'none'
document.getElementById('highScoreList').style.display = 'none'

//starts the timer and the first question when you click the startbutton and hides the start button.
start.addEventListener('click', function () {
  countdown()
  document.getElementById("startBtn").style.display = 'none'
  document.getElementById("h1").style.display = 'none'
  document.getElementById("second").style.display = 'none'
  Q1()
})

//first question//
function Q1() {

  document.getElementById("start").textContent = 'Commonly used data types DO NOT include:'

  answer1.textContent = A1[0]
  answer2.textContent = A1[1]
  answer3.textContent = A1[2]
  answer4.textContent = A1[3]


  document.body.appendChild(answer1)
  document.body.appendChild(answer2)
  document.body.appendChild(answer3)
  document.body.appendChild(answer4)

  answer1.setAttribute("id", "ansBtn")
  answer2.setAttribute("id", "ansBtn")
  answer3.setAttribute("id", "ansBtn")
  answer4.setAttribute("id", "ansBtn")

  answer1.addEventListener('click', function () {
    answer.textContent = "Correct!"
    score = score + 10
    Q2()
  })

  answer2.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q2()
  })

  answer3.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q2()
  })

  answer4.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q2()
  })

}

function Q2() {



  document.getElementById("start").textContent = 'The condition of an if/else statement is enclosed within _____.'

  answer1.textContent = A2[0]
  answer2.textContent = A2[1]
  answer3.textContent = A2[2]
  answer4.textContent = A2[3]


  answer1.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q3()
  })

  answer2.addEventListener('click', function () {
    answer.textContent = "Correct!"
    score = score + 10
    Q3()
  })

  answer3.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q3()
  })

  answer4.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q3()
  })
}


function Q3() {

  document.getElementById("start").textContent = 'Arrays in JavaScript can be used to store _____.'

  answer1.textContent = A3[0]
  answer2.textContent = A3[1]
  answer3.textContent = A3[2]
  answer4.textContent = A3[3]


  answer1.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q4()
  })

  answer2.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q4()
  })

  answer3.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q4()
  })

  answer4.addEventListener('click', function () {
    answer.textContent = "Correct!"
    score = score + 10
    Q4()
  })
}

function Q4() {

  document.getElementById("start").textContent = 'String values must be enclosed within _____ when being assigned to variables.'

  answer1.textContent = A3[0]
  answer2.textContent = A3[1]
  answer3.textContent = A3[2]
  answer4.textContent = A3[3]


  answer1.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q5()
  })

  answer2.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q5()
  })

  answer3.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft = timeLeft - 10
    Q5()
  })

  answer4.addEventListener('click', function () {
    answer.textContent = "Correct!"
    score = score + 10
    Q5()
  })
}

function Q5() {

  document.getElementById("start").textContent = 'a very useful tool used during developement and debugging for printing content to the debugger is :'

  answer1.textContent = A3[0]
  answer2.textContent = A3[1]
  answer3.textContent = A3[2]
  answer4.textContent = A3[3]


  answer1.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft - 10
    highScore()
  })

  answer2.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    timeLeft - 10
    highScore()
  })

  answer3.addEventListener('click', function () {
    answer.textContent = "Incorrect!"
    highScore()
    score = score - 10
  })

  answer4.addEventListener('click', function () {
    answer.textContent = "Correct!"
    highScore()
    score = score + 10
  })
}

function highScore() {
  //gives the end game notifications
  document.getElementById("h1").textContent = 'GAME OVER'
  document.getElementById("start").textContent = 'Enter Initials Into Scoreboard Here'

  //hides the answer buttons
  answer1.style.display = 'none'
  answer2.style.display = 'none'
  answer3.style.display = 'none'
  answer4.style.display = 'none'

  // hides the time left counter
  document.getElementById('h3').style.display = 'none'
  timer.style.display = 'none'

  //shows the initials entry box.
  document.getElementById("firstThing").style.display = "block"


  score = score + timeLeft
  document.getElementById('score').textContent = 'Your Score: ' + score

  var initial = document.createElement('button')
  initial.textContent = 'Enter'
  document.body.appendChild(initial)

  var initials = document.getElementById('name').innerHTML
  localStorage.setItem('initialsList', initials)
  localStorage.setItem('score', score)

  let submitBttn = document.getElementById('submit')
  submitBttn.addEventListener('click', submission)
  function submission(event) {
    event.preventDefault()
    let initials = {
      initials: initialsInput.value.trim(),
      score: score,
    };
    let scoreboardList = document.getElementById('scoreboardList')
    let scoreboardListEl = scoreboardList.createElement('li')
    scoreboardListEl.innerHTML = initials

    document.appendChild(scoreboardListEl)
  };

  var scoreboardScores = JSON.parse(localStorage.getItem('initials'))
  if (scoreboardScores === null) {
    scoreboardScores = []
  }
  scoreboardScores.push(initials)
  localStorage.setItem('initials', JSON.stringify(storedScores))

};

function countdown() {
  setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + ' seconds remaining'
      timeLeft--
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + ' second remaining'
      timeLeft--
    } else if (timeLeft === 0) {
      highScore()
    }
  }, 1000)
};