//var timeEl = document.querySelector(".time");
//var mainEl = document.getElementById("#display");
var secondsLeft = 75;
var startButton = document.querySelector("#generate")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-button")
var shuffledQuestions, currentQuestionIndex
var score = 0;


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
        answers: ["commas", "curley brackets", "quotes", "parenthesis"],
        correct: "quotes"
    }
]

//startButton.addEventListener("click", setTime);
startButton.addEventListener("click", startQuiz)
//button.addEventListener("click", checkAnswer)

//document.getElementById("container").addEventListener("click", hide);

function setTime() {
    // Sets interval in variable
    var timeEl = document.querySelector("#display");

    var secondsLeft = 75;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            displayMessage();
        }
    }, 1000);
}

function displayMessage() {
    timeEl.textContent = "Time is up!";
}


var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("question")

function startQuiz() {
    console.log("start")
    setTime()
    //startButton.classList.add("hide")
    document.querySelector(".container").classList.add("hide")
    document.querySelector(".question-container").classList.remove("hide")
    //shuffledQuestions = questions.sort(() => Math.random() - .5)
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
    if(event.target.innerText === questionaire[currentQuestionIndex].correct){
        console.log("correct")
        document.querySelector(".display-result").classList.remove("hide")
        document.querySelector(".display-result-again").classList.add("hide")
    } else if (event.target.innerText !== questionaire[currentQuestionIndex.correct]) {  
        console.log("wrong")
       document.querySelector(".display-result").classList.add("hide")
       document.querySelector(".display-result-again").classList.remove("hide")
    } else {
        document.querySelector(".display-result").classList.add("hide")
        document.querySelector(".display-result-again").classList.remove("hide")
        document.querySelector(".display-result").classList.add("hide")
    
    }
    currentQuestionIndex++
    setNextQuestion()
    
}


//function checkAnswer (){
  //  if(selectedButton === "booleans") {
    //        console.log("correct")
    //} else {
      //  console.log("wrong")
    //}
        

//}


