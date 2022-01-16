let timer = document.getElementById("timer")
let highscore = document.getElementById("highscore")
let question = document.getElementById("question")
let answer = document.getElementById("answer")
let directions = document.getElementById("directions")
let outcome = document.getElementById("outcome")
let questionList = ""
let clickContenue;



const opener = ["Coding Quize Challenge", "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"]
const q1 = ["Commonly used data types DO NOT include:", "1. strings", "2. booleans", "3. alerts", "4. numbers"]
const q2 = ["The condition in an if / else statement is enclosed within ____.", "1. quotes", "2. curley brackets", "3. parentheses", "4. square brackets"]
const q3 = ["Array in JavaScript can be used to store____.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]
const q4 = ["String values must be enclosed within ___ when being assigned to variables", "1. commmas", "2. curley brackets", "3. quotes", "4. parentheses"]
const q5 = ["A very useful tool used during development and debugging for printing content to the debugger is:", "1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"]




//create timer

// create an object with question and array of asnwers 

//append the page based on the question number

//append the page based on correct or false

// save the correct/wrong inputs into a counter

//have them input their initials and save the initials and score to localstorage and output when clicked on




var timeLeft = 60;

function getTime() {
    var timerInterval = setInterval(function () {
        timer.textContent = timeLeft + " seconds left";
        timeLeft--;


        if (timeLeft === 0) {
            clearInterval(timerInterval);
            callHighscore();
        }

    }, 1000);
}



function callHighscore() { }

function init() {
    question.textContent = opener[0]
    directions.textContent = opener[1]
    var startButton = document.createElement("button")
    startButton.textContent = "Start Quiz "
    answer.appendChild(startButton)

    startButton.addEventListener("click", function () {
        directions.textContent = ""
        startButton.remove();
        quiz()
    });
}


function quiz() {
    getTime()
    question1()


}

function question1() {



    question.textContent = q1[0];
    questionList = document.createElement("ol")
    li1 = document.createElement("div");
    li2 = document.createElement("div");
    li3 = document.createElement("div");
    li4 = document.createElement("div");

    li1.textContent = q1[1]
    li2.textContent = q1[2]
    li3.textContent = q1[3]
    li4.textContent = q1[4]

    answer.appendChild(questionList);
    questionList.appendChild(li1);
    questionList.appendChild(li2);
    questionList.appendChild(li3);
    questionList.appendChild(li4);





    questionList.addEventListener("click", clickContenue = function (event) {
        var element = event.target
        if (element.textContent === q1[3]) {
            correctAnswer()
        } else {
            wrongAnswer()
        }
        questionList.removeEventListener("click", clickContenue)
        question2()

    });


}

function correctAnswer() {
    outcome.textContent = "Correct!"
}
function wrongAnswer() {
    outcome.textContent = "Wrong!"
    timeLeft -= 10;
}



function question2() {
    question.textContent = q2[0];
    li1.textContent = q2[1]
    li2.textContent = q2[2]
    li3.textContent = q2[3]
    li4.textContent = q2[4]




    questionList.addEventListener("click", clickContenue = function (event) {
        var element = event.target
        if (element.textContent === q2[3]) {
            correctAnswer()
        } else {
            wrongAnswer()
        }
        questionList.removeEventListener("click", clickContenue)
        question3()

    });
}

function question3() {
    question.textContent = q3[0];
    li1.textContent = q3[1]
    li2.textContent = q3[2]
    li3.textContent = q3[3]
    li4.textContent = q3[4]




    questionList.addEventListener("click", clickContenue = function (event) {
        var element = event.target
        if (element.textContent === q3[4]) {
            correctAnswer()
        } else {
            wrongAnswer()
        }
        questionList.removeEventListener("click", clickContenue)
        question4()

    });
}

function question4() {
    question.textContent = q4[0];
    li1.textContent = q4[1]
    li2.textContent = q4[2]
    li3.textContent = q4[3]
    li4.textContent = q4[4]




    questionList.addEventListener("click", clickContenue = function (event) {
        var element = event.target
        if (element.textContent === q4[3]) {
            correctAnswer()
        } else {
            wrongAnswer()
        }
        questionList.removeEventListener("click", clickContenue)
        question5()

    });
}


function question5() {
    question.textContent = q5[0];
    li1.textContent = q5[1]
    li2.textContent = q5[2]
    li3.textContent = q5[3]
    li4.textContent = q5[4]



    questionList.addEventListener("click", clickContenue = function (event) {
        var element = event.target
        if (element.textContent === q5[4]) {
            correctAnswer()
        } else {
            wrongAnswer()
        }
        questionList.removeEventListener("click", clickContenue)
        question4()

    });
}


init()