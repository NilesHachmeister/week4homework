
// this gets the element of the header and main. that way i am able to manipulate them
let header = document.querySelector("header")
let main = document.querySelector("main")

// these are my variable declarations I opted for most variables to be global that way I can manipulate them no matter what function I was working within.
let timer;
let highscore;
let question;
let directions;
let answer;
let outcome;
let finalScore;
let finalScoreInput;
let timerInterval;
let timeOut;
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
let highscoreDisplay = [];
let invalidTruth = false;
let newInitials = "";
let newScore = "";
let count = 0;
let initialLengthCorrect = false;



// these are my arrays. I put all of the questions and answers in arrays to make them easier to load.
const opener = ["Coding Quize Challenge", "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"]
const q1 = ["Commonly used data types DO NOT include:", "1. strings", "2. booleans", "3. alerts", "4. numbers"]
const q2 = ["The condition in an if / else statement is enclosed within ____.", "1. quotes", "2. curley brackets", "3. parentheses", "4. square brackets"]
const q3 = ["Array in JavaScript can be used to store____.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]
const q4 = ["String values must be enclosed within ___ when being assigned to variables", "1. commmas", "2. curley brackets", "3. quotes", "4. parentheses"]
const q5 = ["A very useful tool used during development and debugging for printing content to the debugger is:", "1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"]

const alphabet = "abcdefghijklmnopqrstuvwxyz"


// this is my timer ive declared timeLeft which will be used throught the file. The timer manipulates the time and if the timeLeft hits 0 it will go to the highscore input.
var timeLeft = 60;
function getTime() {
    timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;
        if (timeLeft < 1) {
            timeLeft = 0;
            clearInterval(timerInterval);
            highScoreInput();
        };

    }, 1000);
}



// this function boots on initialzation. 
function init() {
    // this is setting lastQuestionReached to false 
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


    let openPage = document.createElement("div")
    main.appendChild(openPage)
    openPage.setAttribute("id", "open-page")

    question = document.createElement("h1")
    question.textContent = opener[0]
    openPage.appendChild(question)




    directions = document.createElement("span")
    directions.textContent = opener[1]
    openPage.appendChild(directions)
    directions.setAttribute("class", "directions")






    startButton = document.createElement("button")
    startButton.textContent = "Start Quiz "
    openPage.appendChild(startButton)
    startButton.setAttribute("id", "start-button")



    highscore.addEventListener("click", highscorePage)
    startButton.addEventListener("click", function () {
        openPage.remove()
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
        if (timeLeft < 0) {
            timeLeft = 0;
        }

        highScoreInput()
        callOutcome()


        if (correctness) {
            outcome.textContent = "Correct!"
        } else {
            timeLeft -= 10;
            outcome.textContent = "Wrong!"
        }

    } else {
        callOutcome()
        outcomeShoweing = true;
        if (correctness) {
            outcome.textContent = "Correct!"
        } else {
            timeLeft -= 10;
            outcome.textContent = "Wrong!"
        }
    }
}







function question1() {

    highScoreReached = false;
    highscoreViewed = false;
    liOnPage = true;

    question = document.createElement("h1")

    main.appendChild(question)


    answer = document.createElement("div")
    main.appendChild(answer)
    answer.setAttribute("id", "answer")


    question.textContent = q1[0];
    questionList = document.createElement("ul")
    questionList.setAttribute("id", "answer-list")


    holder1 = document.createElement("li");
    holder2 = document.createElement("li");
    holder3 = document.createElement("li");
    holder4 = document.createElement("li");

    holder1.setAttribute("style", "margin-top: 10px")
    holder2.setAttribute("style", "margin-top: 10px")
    holder3.setAttribute("style", "margin-top: 10px")
    holder4.setAttribute("style", "margin-top: 10px")

    li1 = document.createElement("span");
    li2 = document.createElement("span");
    li3 = document.createElement("span");
    li4 = document.createElement("span");



    holder1.appendChild(li1);
    holder2.appendChild(li2);
    holder3.appendChild(li3);
    holder4.appendChild(li4);


    li1.setAttribute("class", "answer-option")
    li2.setAttribute("class", "answer-option")
    li3.setAttribute("class", "answer-option")
    li4.setAttribute("class", "answer-option")


    li1.textContent = q1[1]
    li2.textContent = q1[2]
    li3.textContent = q1[3]
    li4.textContent = q1[4]

    answer.appendChild(questionList);
    questionList.appendChild(holder1);
    questionList.appendChild(holder2);
    questionList.appendChild(holder3);
    questionList.appendChild(holder4);





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

    question.textContent = q2[0];
    li1.textContent = q2[1]
    li2.textContent = q2[2]
    li3.textContent = q2[3]
    li4.textContent = q2[4]


    questionList.addEventListener("click", clickContenue = function (event) {

        if (outcomeShoweing) {
            outcome.remove()
            window.clearTimeout(timeOut)
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

    question.textContent = q3[0];
    li1.textContent = q3[1]
    li2.textContent = q3[2]
    li3.textContent = q3[3]
    li4.textContent = q3[4]




    questionList.addEventListener("click", clickContenue = function (event) {

        if (outcomeShoweing) {
            outcome.remove()
            window.clearTimeout(timeOut)
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

    question.textContent = q4[0];
    li1.textContent = q4[1]
    li2.textContent = q4[2]
    li3.textContent = q4[3]
    li4.textContent = q4[4]


    questionList.addEventListener("click", clickContenue = function (event) {

        if (outcomeShoweing) {
            outcome.remove()
            window.clearTimeout(timeOut)
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
            window.clearTimeout(timeOut)
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

    timeOut = setTimeout(() => {
        outcome.remove()
        outcomeShoweing = false;
    }, 1000);

}

function highscorePage() {

    if (invalidTruth) {
        invalidIn.remove();
        invalidTruth = false;
    }

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





    backButton = document.createElement("button")
    backButton.textContent = "Go Back"
    backButton.setAttribute("class", "highscore-button")
    main.appendChild(backButton)

    clearButton = document.createElement("button")
    clearButton.textContent = "Clear History"
    clearButton.setAttribute("class", "highscore-button")
    main.appendChild(clearButton)

    highscore.remove()
    startButton.remove();



    backButton.addEventListener("click", function () {
        location.reload();
    })


    clearButton.addEventListener("click", function () {

        localStorage.clear();
        initials = [];
        score = [];
        location.reload();

    })


}



function renderHighscores() {

    if (score != undefined) {
        for (var j = 0; j < score.length; j++)
            highscoreBoard.push({ "score": score[j], "initials": initials[j] });



        highscoreBoard.sort(function (a, b) {
            return ((a.score < b.score) ? -1 : ((a.score == b.score) ? 0 : 1));
        });

        for (var k = 0; k < score.length; k++) {
            score[k] = highscoreBoard[k].score;
            initials[k] = highscoreBoard[k].initials;

        }


        for (let index = 0; index < score.length; index++) {
            highscoreDisplay[index] = initials[index] + " -  " + score[index];


        }

        highscoreDisplay.reverse()

    }



    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("score", JSON.stringify(score));





    highscoreList = document.createElement("ol")
    highscoreList.textContent = "Highscores"
    main.appendChild(highscoreList)
    highscoreList.setAttribute("id", "high-score-list")


    for (var i = 0; i < highscoreDisplay.length; i++) {

        let div = document.createElement("div")
        let li = document.createElement("li");
        li.textContent = [i + 1] + ". " + highscoreDisplay[i];

        if (highscoreDisplay[i] == newInitials + " -  " + newScore) {
            div.setAttribute("class", "high-score-item");
        }




        highscoreList.appendChild(div)

        div.appendChild(li);

    }



}


function highScoreInput() {
    clearInterval(timerInterval);
    timer.textContent = "Time: " + timeLeft;

    liOnPage = false;
    answer.remove()




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
    initialInput.placeholder = "Enter Initials";

    finalScoreInput.appendChild(initialInput)

    initialButton = document.createElement("button")
    finalScoreInput.appendChild(initialButton)





    initialButton.textContent = "Submit"





    initialButton.addEventListener("click", clickContenue = function () {
        newScore = timeLeft
        newInitials = initialInput.value.trim()

        let initialsSplit = newInitials.split("");
        for (let i = 0; i < initialsSplit.length; i++) {
            const element = initialsSplit[i];
            console.log(initialsSplit)

            if (alphabet.includes(element.toLowerCase())) {
                count++
            }

        }

        console.log(count)

        if (count === initialsSplit.length) {
            initialLengthCorrect = true;
        }


        if ((newInitials.length > 1 && newInitials.length < 4) && initialLengthCorrect) {




            initials = initials || [];
            initials.push(newInitials)

            score = score || [];
            score.push(timeLeft)



            highscorePage()


        } else {

            if (invalidTruth) {

            } else {

                invalidIn = document.createElement("div")
                main.appendChild(invalidIn)
                invalidIn.textContent = "Invalid initials, please enter 2 or 3 letters"
                invalidIn.setAttribute("style", "color:red")
                invalidTruth = true;
                initialLengthCorrect = false;
                count = 0;
            }
        }
    });




}


init()


// timer kicks out of everything


//clear history restarts that page



//fix outcomes
