var start = document.getElementById("startBtn")
var answer1 = document.createElement("button")
var answer2 = document.createElement("button")
var answer3 = document.createElement("button")
var timerEl = document.getElementById("timeLeft")
var timeLeft = 60
var score = 0
let answerTrue = document.getElementById("answer")
const A1 = ['HyperText Markup Language', 'Human Type Machine Learning', 'HyperText Manual Lexicon']
const A2 = ['Styles the color of text and background', 'Displays data in a chosen format', 'Both of these answers are correct']
const A3 = ['<image>', '<a ref="">', 'a href="">']

document.getElementById("firstThing").style.display = "none"
document.getElementById('highScore').style.display = 'none'
document.getElementById('HighScoreList').style.display = 'none'

//first question//
function Q1() {

  document.getElementById("startScreen").textContent = 'What is HTML an acronym for?'

  answer1.textContent = A1[0]
  answer2.textContent = A1[1]
  answer3.textContent = A1[2]

  document.body.appendChild(answer1)
  document.body.appendChild(answer2)
  document.body.appendChild(answer3)

  answer1.setAttribute("id", "ansBtn")
  answer2.setAttribute("id", "ansBtn")
  answer3.setAttribute("id", "ansBtn")

  answer1.addEventListener('click', function () {
    answerTrue.textContent = "Correct!"
    score = score + 10
    Q2()
  })

  answer2.addEventListener('click', function () {
    answerTrue.textContent = "Incorrect!"
    timeLeft = timeLeft - 5
    Q2()
  })

  answer3.addEventListener('click', function () {
    answerTrue.textContent = "Incorrect!"
    timeLeft = timeLeft - 5
    Q2()
  })

}

function Q2() {



  document.getElementById("startScreen").textContent = 'What does CSS do to an HTML page?'

  answer1.textContent = A2[0]
  answer2.textContent = A2[1]
  answer3.textContent = A2[2]

  answer1.addEventListener('click', function () {
    answerTrue.textContent = "Incorrect!"
    timeLeft = timeLeft - 5
    Q3()
  })

  answer2.addEventListener('click', function () {
    answerTrue.textContent = "Incorrect!"
    timeLeft = timeLeft - 5
    Q3()
  })

  answer3.addEventListener('click', function () {
    answerTrue.textContent = "Correct!"
    Q3()
    score = score + 10
  })
}


function Q3() {

  document.getElementById("startScreen").textContent = 'Which element tag represents an image through a hyperlink?'

  answer1.textContent = A3[0]
  answer2.textContent = A3[1]
  answer3.textContent = A3[2]

  answer1.addEventListener('click', function () {
    answerTrue.textContent = "Incorrect!"
    timeLeft - 5
    highScore()
  })

  answer2.addEventListener('click', function () {
    answerTrue.textContent = "Incorrect!"
    timeLeft - 5
    highScore()
  })

  answer3.addEventListener('click', function () {
    answerTrue.textContent = "Correct!"
    highScore()
    score = score + 10
  })

}

function highScore() {

  document.getElementById("startScreen").textContent = 'Enter Initials Into Scoreboard Here'

  answer1.style.display = 'none'
  answer2.style.display = 'none'
  answer3.style.display = 'none'

  document.getElementById('h3').style.display = 'none'
  timerEl.style.display = 'none'

  document.getElementById("initialEntry").style.display = "block"

  score = score + timeLeft
  document.getElementById('score').textContent = 'Your Score: ' + score

  var initialEnter = document.createElement('button')
  initialEnter.textContent = 'Enter'
  document.body.appendChild(initialEnter)

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

start.addEventListener('click', function startQuiz() {
  countdown()
  document.getElementById("startBtn").style.display = "none"
  question1()
})

function countdown() {
  setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining'
      timeLeft--
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining'
      timeLeft--
    } else if (timeLeft === 0) {
      return

    }
  }, 1000)
};