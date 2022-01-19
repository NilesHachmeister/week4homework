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


https://stackoverflow.com/questions/26273043/cannot-read-property-push-of-null


https://stackoverflow.com/questions/11499268/sort-two-arrays-the-same-way






let header = document.querySelector("header")
let main = document.querySelector("main")


let timer;
let highscore;
let question;
let directions;

let answer;

let outcome;
let finalScore;
let finalScoreInput;

let timerInterval;


let lastQuestionReached = false;
let highScoreReached = false;
let questionList = "";
let clickContenue;
let startButton;
let backButton;
let clearButton;

let highscoreViewed = false;
let initials = [];
let score = [];
let highscoreBoard = [];

let correctness = false;


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
    timerInterval = setInterval(function () {
        timeLeft--;

        timer.textContent = "Time: " + timeLeft;


        if (timeLeft < 1) {
            clearInterval(timerInterval);
            highScoreInput()
        }

    }, 1000);
}




function init() {

    initials = JSON.parse(localStorage.getItem("initials"));
    score = JSON.parse(localStorage.getItem("score"));


    if (highscoreViewed) {
        backButton.remove();
        clearButton.remove();

    }

    if (highScoreReached) {
        highscore.remove();
        timer.remove();
        question.remove();
        outcome.remove();
        highscoreList.remove();
    }

    timeLeft = 60;

    highscore = document.createElement("span")
    highscore.textContent = "View Highscores"
    header.appendChild(highscore)
    highscore.setAttribute("id", "highscore")



    timer = document.createElement("span")
    timer.textContent = "Time: " + timeLeft;
    header.appendChild(timer)
    timer.setAttribute("id", "timer")

    question = document.createElement("h1")
    question.textContent = opener[0]
    main.appendChild(question)
    question.setAttribute("id", "question")



    directions = document.createElement("span")
    directions.textContent = opener[1]
    main.appendChild(directions)
    directions.setAttribute("id", "directions")


    answer = document.createElement("div")
    main.appendChild(answer)
    answer.setAttribute("id", "answer")


    startButton = document.createElement("button")
    startButton.textContent = "Start Quiz "
    answer.appendChild(startButton)
    highscore.addEventListener("click", highscorePage)
    startButton.addEventListener("click", function () {
        directions.textContent = ""
        startButton.remove();
        directions.remove();
        quiz()
    });


}





function quiz() {
    highscoreViewed = false;
    getTime()
    question1()



}

function correctAnswer() {
    callOutcome();
    outcome.textContent = "Correct!"

}

function wrongAnswer() {
    timeLeft -= 10;
    callOutcome();
    outcome.textContent = "Wrong!"


}



function question1() {
    question.textContent = q1[0];
    questionList = document.createElement("ol")
    li1 = document.createElement("div");
    li2 = document.createElement("div");
    li3 = document.createElement("div");
    li4 = document.createElement("div");

    li1.setAttribute("class", "answer-option")
    li2.setAttribute("class", "answer-option")
    li3.setAttribute("class", "answer-option")
    li4.setAttribute("class", "answer-option")


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
            highScoreInput()

        } else {
            wrongAnswer()
            highScoreInput()

        }
        questionList.removeEventListener("click", clickContenue)

    });

    lastQuestionReached = true;


}

function callOutcome() {


if (lastQuestionReached){

}

    outcome = document.createElement("div")
    main.appendChild(outcome)
    outcome.setAttribute("id", "outcome")




    setTimeout(() => { outcome.remove() }, 1000);





}

function highscorePage() {

    initials = JSON.parse(localStorage.getItem("initials"));
    score = JSON.parse(localStorage.getItem("score"));


    if (highScoreReached) {
        initialButton.removeEventListener("click", clickContenue)
        timer.remove();
        finalScore.remove();
        finalScoreInput.remove();
        initialButton.remove();
        question.remove();
    } else {
        directions.remove();
        question.remove();
    }


    renderHighscores()


    highscoreViewed = true;


    backButton = document.createElement("button")
    backButton.textContent = "Go Back"
    main.appendChild(backButton)

    clearButton = document.createElement("button")
    clearButton.textContent = "Clear History"
    main.appendChild(clearButton)

    highscore.remove()
    startButton.remove();



    backButton.addEventListener("click", init)




}



function renderHighscores() {



    highscoreList = document.createElement("ol")
    highscoreList.textContent = "Highscores"
    main.appendChild(highscoreList)
    highscoreList.setAttribute("id", "high-score-list")


    for (var i = 0; i < highscoreBoard.length; i++) {

        let li = document.createElement("li");
        li.textContent = highscoreBoard[i];
        li.setAttribute("data-index", i);


        highscoreList.appendChild(li);





    }

}


function highScoreInput() {
    clearInterval(timerInterval);
    timer.textContent = "Time: " + timeLeft;




    highScoreReached = true;
    question.textContent = "All done!";


    finalScore = document.createElement("div")
    main.appendChild(finalScore)
    finalScore.setAttribute("id", "final-score")

    finalScoreInput = document.createElement("div")
    main.appendChild(finalScoreInput)
    finalScoreInput.setAttribute("id", "final-score-input")

    finalScore.textContent = "Your final score is " + timeLeft + " ";
    finalScoreInput.textContent = "Enter initials: "
    initialInput = document.createElement("input")
    finalScoreInput.appendChild(initialInput)

    initialButton = document.createElement("button")
    finalScoreInput.appendChild(initialButton)




    initialButton.textContent = "Submit"

    answer.remove()


    initialButton.addEventListener("click", clickContenue = function () {
        let newInitials = initialInput.value.trim()
        if (newInitials.length > 1 && newInitials.length < 4) {




            initials = initials || [];

            initials.push(newInitials)

            score = score || [];
            score.push(timeLeft)


            console.log(initials);


            for (var j = 0; j < score.length; j++)
                highscoreBoard.push({ "initials": initials[j], "score": score[j] });


            highscoreBoard.sort(function (a, b) {
                return ((a.score < b.score) ? -1 : ((a.score == b.score) ? 0 : 1));
            });

            console.log(initials);

            for (var k = 0; k < score.length; k++) {
                initials[k] = highscoreBoard[k].initials;
                score[k] = highscoreBoard[k].score;
            }


            console.log(initials);


            for (let index = 0; index < score.length; index++) {
                highscoreBoard[index] = score[index] + " " + initials[index];


            }


            highscoreBoard.reverse()






            localStorage.setItem("initials", JSON.stringify(initials));
            localStorage.setItem("score", JSON.stringify(score));







            console.log(initials);
            console.log(localStorage);


            highscorePage()
        } else {
            outcome.textContent = "Invalid initials, please enter 2 or 3 letters"
            outcome.setAttribute("style", "color:red")

        }
    });




}


init()


// timer kicks out of everything


//clear history restarts that page



//fix outcomes









------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------















let header = document.querySelector("header")
let main = document.querySelector("main")


let timer;
let highscore;
let question;
let directions;

let answer;

let outcome;
let finalScore;
let finalScoreInput;

let timerInterval;


let lastQuestionReached = false;
let highScoreReached = false;
let questionList = "";
let clickContenue;
let startButton;
let backButton;
let clearButton;

let highscoreViewed = false;
let initials = [];
let score = [];
let highscoreBoard = [];

let correctness = false;

let liOnPage = false;

let outcomeShoweing = false;


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
    timerInterval = setInterval(function () {
        timeLeft--;

        timer.textContent = "Time: " + timeLeft;


        if (timeLeft < 1) {
            clearInterval(timerInterval);
            highScoreInput()
        }

    }, 1000);
}




function init() {
    lastQuestionReached = false;



    initials = JSON.parse(localStorage.getItem("initials"));
    score = JSON.parse(localStorage.getItem("score"));


    if (highscoreViewed) {
        backButton.remove();
        clearButton.remove();
        highscoreList.remove();
    }

    if (highScoreReached) {
        highscore.remove();
        timer.remove();
        question.remove();
        outcome.remove();
        highscoreList.remove();
    }

    timeLeft = 60;

    highscore = document.createElement("span")
    highscore.textContent = "View Highscores"
    header.appendChild(highscore)
    highscore.setAttribute("id", "highscore")



    timer = document.createElement("span")
    timer.textContent = "Time: " + timeLeft;
    header.appendChild(timer)
    timer.setAttribute("id", "timer")

    question = document.createElement("h1")
    question.textContent = opener[0]
    main.appendChild(question)
    question.setAttribute("id", "question")



    directions = document.createElement("span")
    directions.textContent = opener[1]
    main.appendChild(directions)
    directions.setAttribute("id", "directions")


    answer = document.createElement("div")
    main.appendChild(answer)
    answer.setAttribute("id", "answer")


    startButton = document.createElement("button")
    startButton.textContent = "Start Quiz "
    answer.appendChild(startButton)
    highscore.addEventListener("click", highscorePage)
    startButton.addEventListener("click", function () {

        startButton.remove();
        directions.remove();
        quiz()
    });


}





function quiz() {
    highscoreViewed = false;
    getTime()
    question1()



}

function checkAnswer() {

    if (lastQuestionReached) {
        highScoreInput()
    }


    callOutcome()

    outcomeShoweing = true;

    if (correctness) {

        outcome.textContent = "Correct!"
    } else {
        timeLeft -= 10;

        outcome.textContent = "Wrong!"
    }







}







function question1() {

    highScoreReached = false;
    highscoreViewed = false;



    question.textContent = q1[0];
    questionList = document.createElement("ol")
    li1 = document.createElement("div");
    li2 = document.createElement("div");
    li3 = document.createElement("div");
    li4 = document.createElement("div");

    li1.setAttribute("class", "answer-option")
    li2.setAttribute("class", "answer-option")
    li3.setAttribute("class", "answer-option")
    li4.setAttribute("class", "answer-option")


    li1.textContent = q1[1]
    li2.textContent = q1[2]
    li3.textContent = q1[3]
    li4.textContent = q1[4]

    answer.appendChild(questionList);
    questionList.appendChild(li1);
    questionList.appendChild(li2);
    questionList.appendChild(li3);
    questionList.appendChild(li4);


    liOnPage = true;



    questionList.addEventListener("click", clickContenue = function (event) {
        var element = event.target
        if (element.textContent === q1[3]) {
            correctness = true;
            checkAnswer()
        } else {
            correctness = false;
            checkAnswer()
        }
        questionList.removeEventListener("click", clickContenue)
        question2()

    });


}




function question2() {


    highScoreReached = false;
    highscoreViewed = false;

    question.textContent = q2[0];
    li1.textContent = q2[1]
    li2.textContent = q2[2]
    li3.textContent = q2[3]
    li4.textContent = q2[4]




    questionList.addEventListener("click", clickContenue = function (event) {
        if (outcomeShoweing) {
            outcome.remove()
        }

        var element = event.target
        if (element.textContent === q2[3]) {
            correctness = true;
            checkAnswer()
        } else {
            correctness = false;
            checkAnswer()
        }
        questionList.removeEventListener("click", clickContenue)
        question3()

    });



}


function question3() {


    highScoreReached = false;
    highscoreViewed = false;


    question.textContent = q3[0];
    li1.textContent = q3[1]
    li2.textContent = q3[2]
    li3.textContent = q3[3]
    li4.textContent = q3[4]




    questionList.addEventListener("click", clickContenue = function (event) {

        if (outcomeShoweing) {
            outcome.remove()
        }

        var element = event.target
        if (element.textContent === q3[4]) {
            correctness = true;
            checkAnswer()
        } else {
            correctness = false;
            checkAnswer()
        }
        questionList.removeEventListener("click", clickContenue)
        question4()
    });


}

function question4() {

    highScoreReached = false;
    highscoreViewed = false;


    question.textContent = q4[0];
    li1.textContent = q4[1]
    li2.textContent = q4[2]
    li3.textContent = q4[3]
    li4.textContent = q4[4]




    questionList.addEventListener("click", clickContenue = function (event) {

        if (outcomeShoweing) {
            outcome.remove()
        }

        var element = event.target
        if (element.textContent === q4[3]) {
            correctness = true;
            checkAnswer()
        } else {
            correctness = false;
            checkAnswer()
        }
        questionList.removeEventListener("click", clickContenue)
        question5()
    });

}





function question5() {


    highScoreReached = false;
    highscoreViewed = false;
    lastQuestionReached = true;


    question.textContent = q5[0];
    li1.textContent = q5[1]
    li2.textContent = q5[2]
    li3.textContent = q5[3]
    li4.textContent = q5[4]



    questionList.addEventListener("click", clickContenue = function (event) {

        if (outcomeShoweing) {
            outcome.remove()
        }

        var element = event.target
        if (element.textContent === q5[4]) {
            correctness = true;
            checkAnswer()
        } else {
            correctness = false;
            checkAnswer()
        }
        questionList.removeEventListener("click", clickContenue)

    });




}

function callOutcome() {



    outcome = document.createElement("div")
    main.appendChild(outcome)
    outcome.setAttribute("id", "outcome")

    setTimeout(() => {
        outcome.remove()
        outcomeShoweing = false;
    }, 1000);

}

function highscorePage() {



    if (highScoreReached) {
        initialButton.removeEventListener("click", clickContenue)
        timer.remove();
        finalScore.remove();
        finalScoreInput.remove();
        initialButton.remove();
        question.remove();
    } else {

        question.remove();
        timer.remove()

    }


    directions.remove();

    if (liOnPage) {
        li1.remove()
        li2.remove()
        li3.remove()
        li4.remove()

    }

    renderHighscores()


    highscoreViewed = true;



    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("score", JSON.stringify(score));


    backButton = document.createElement("button")
    backButton.textContent = "Go Back"
    main.appendChild(backButton)

    clearButton = document.createElement("button")
    clearButton.textContent = "Clear History"
    main.appendChild(clearButton)

    highscore.remove()
    startButton.remove();



    backButton.addEventListener("click", init)




}



function renderHighscores() {



    initials = JSON.parse(localStorage.getItem("initials"));
    score = JSON.parse(localStorage.getItem("score"));

    highscoreList = document.createElement("ol")
    highscoreList.textContent = "Highscores"
    main.appendChild(highscoreList)
    highscoreList.setAttribute("id", "high-score-list")


    for (var i = 0; i < highscoreBoard.length; i++) {

        let li = document.createElement("li");
        li.textContent = highscoreBoard[i];
        li.setAttribute("data-index", i);


        highscoreList.appendChild(li);





    }

}


function highScoreInput() {
    clearInterval(timerInterval);
    timer.textContent = "Time: " + timeLeft;

    liOnPage = false;



    highScoreReached = true;
    question.textContent = "All done!";


    finalScore = document.createElement("div")
    main.appendChild(finalScore)
    finalScore.setAttribute("id", "final-score")

    finalScoreInput = document.createElement("div")
    main.appendChild(finalScoreInput)
    finalScoreInput.setAttribute("id", "final-score-input")

    finalScore.textContent = "Your final score is " + timeLeft + " ";
    finalScoreInput.textContent = "Enter initials: "
    initialInput = document.createElement("input")
    finalScoreInput.appendChild(initialInput)

    initialButton = document.createElement("button")
    finalScoreInput.appendChild(initialButton)




    initialButton.textContent = "Submit"

    answer.remove()




    initialButton.addEventListener("click", clickContenue = function () {
        let newInitials = initialInput.value.trim()
        if (newInitials.length > 1 && newInitials.length < 4) {

            initials = JSON.parse(localStorage.getItem("initials"));
            score = JSON.parse(localStorage.getItem("score"));


            initials = initials || [];

            initials.push(newInitials)

            score = score || [];
            score.push(timeLeft)


            console.log(initials);


            for (var j = 0; j < score.length; j++)
                highscoreBoard.push({ "initials": initials[j], "score": score[j] });


            highscoreBoard.sort(function (a, b) {
                return ((a.score < b.score) ? -1 : ((a.score == b.score) ? 0 : 1));
            });

            console.log(initials);

            for (var k = 0; k < score.length; k++) {
                initials[k] = highscoreBoard[k].initials;
                score[k] = highscoreBoard[k].score;
            }

           

            console.log(initials);


            for (let index = 0; index < score.length; index++) {
                highscoreBoard[index] = score[index] + " " + initials[index];


            }


            highscoreBoard.reverse()



            localStorage.setItem("initials", JSON.stringify(initials));
            localStorage.setItem("score", JSON.stringify(score));





            highscorePage()
        } else {
            outcome.textContent = "Invalid initials, please enter 2 or 3 letters"
            outcome.setAttribute("style", "color:red")

        }
    });




}


init()


// timer kicks out of everything


//clear history restarts that page



//fix outcomes
