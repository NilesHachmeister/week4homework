# week4homework


# 04 Web APIs: Code Quiz

## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.




https://www.youtube.com/watch?v=noqrCJELqFE





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