var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("#main");
var secondsLeft = 75;
var startButton = document.querySelector("#generate")

startButton.addEventListener("click", setTime);

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            displayMessage ();
        }

    }, 1000);
}

function displayMessage (){
    timeEl.textContent = "Time is up!";
}






