var secondsLeft = 30;
var startButton = document.querySelector("#generate")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-button")
var scoreElement = document.getElementById("pointScore")
var shuffledQuestions, currentQuestionIndex
let score = 0
var total = 4


var questionaire = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["Booleans", "Alerts", "Strings", "Numbers"],
        correct: "Booleans"
    },
    {
        question: "The condition in an if/else statement is enclosed with __________.",
        answers: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        correct: "Curly Brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        correct: "All of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"
    }
]

startButton.addEventListener("click", startQuiz)


function setTime() {
    // Sets interval in variable
    var timeEl = document.querySelector("#display");
    var secondsLeft = 30;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            getScore()
        }
    }, 1000);
}


var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("question")

function startQuiz() {
    console.log("start")
    setTime()
    document.querySelector(".container").classList.add("hide")
    document.querySelector(".question-container").classList.remove("hide")
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion()
}

function showQuestion() {
    var question = questionaire[currentQuestionIndex]
    questionElement.innerText = question.question
    var btnOne = document.querySelector("#answer1")
    var btnTwo = document.querySelector("#answer2")
    var btnThree = document.querySelector("#answer3")
    var btnFour = document.querySelector("#answer4")
    btnOne.innerText = question.answers[0]
    btnTwo.innerText = question.answers[1]
    btnThree.innerText = question.answers[2]
    btnFour.innerText = question.answers[3]
}

function selectAnswer(event) {
    console.log(event.target.innerText)
    var selectedButton = event.target
    questionaire[currentQuestionIndex].correct
    console.log(questionaire[currentQuestionIndex].correct)
    if (event.target.innerText === questionaire[currentQuestionIndex].correct) {
        console.log("correct")
        score += 1
        console.log("score")
        document.querySelector(".display-result").classList.remove("hide")
        document.querySelector(".display-result-again").classList.add("hide")
    } else if (event.target.innerText !== questionaire[currentQuestionIndex.correct]) {
        console.log("wrong")
        score -= 0
        document.querySelector(".display-result").classList.add("hide")
        document.querySelector(".display-result-again").classList.remove("hide")
    } else {
        document.querySelector(".display-result").classList.add("hide")
        document.querySelector(".display-result-again").classList.remove("hide")
        document.querySelector(".display-result").classList.add("hide")
    }
    currentQuestionIndex++
    setNextQuestion()
    if (currentQuestionIndex === questionaire.length -1) {
        getScore();
        clearInterval() // check 
}}

function getScore() {
        document.querySelector(".question-container").classList.add("hide")
        document.querySelector(".finished-page").classList.remove("hide")
        document.getElementById("pointScore").innerHTML = score;
}

var saveButton = document.getElementById("sendScore");
var savedName = document.getElementById("initials");
var results = [];

function saveLastScore() {
  // Save related form data as an object
  var userScore = {
    initials: document.getElementById("initials").value, 
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("initials", JSON.stringify(userScore));
  console.log("hi")
}

function renderLastScore() {
   // Use JSON.parse() to convert text to JavaScript object
  var lastScore = JSON.parse(localStorage.getItem("pointScore"));
  // Check if data is returned, if not exit out of the function
  if (lastScore !== null) {
    console.log("hello")
     } else {
        return;
    }
}

var highscore = 0;
var highscore = localStorage.getItem("pointScore");

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("pointScore", score);      
    }
}
else{
    localStorage.setItem("pointScore", score);
}
  

document.getElementById("sendScore").addEventListener("click", renderLastScore)


saveButton.addEventListener("click", function(event) {
event.preventDefault();
saveLastScore();
renderLastScore();

});


