
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
let questionList = "";
let clickContenue;
let startButton;
let backButton;
let clearButton;
let initials = [];
let score = [];
let highscoreBoard = [];
let highscoreDisplay = [];
let newInitials = "";
let newScore = "";
let count = 0;
let correctness = false;
let liOnPage = false;
let outcomeShoweing = false;
let lastQuestionReached = false;
let highScoreReached = false;
let highscoreViewed = false;
let initialLengthCorrect = false;
let invalidTruth = false;

// these are my arrays. I put all of the questions and answers in arrays to make them easier to load.
const opener = ["Coding Quize Challenge", "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"]
const q1 = ["Commonly used data types DO NOT include:", "1. strings", "2. booleans", "3. alerts", "4. numbers"]
const q2 = ["The condition in an if / else statement is enclosed within ____.", "1. quotes", "2. curley brackets", "3. parentheses", "4. square brackets"]
const q3 = ["Array in JavaScript can be used to store____.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]
const q4 = ["String values must be enclosed within ___ when being assigned to variables", "1. commmas", "2. curley brackets", "3. quotes", "4. parentheses"]
const q5 = ["A very useful tool used during development and debugging for printing content to the debugger is:", "1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"]

// This is a string with all of the letters in the alphabet used to check if the user used alphabetic characters and not numeric.
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
    // this is setting lastQuestionReached to false and getting the information in local storage. 
    lastQuestionReached = false;
    initials = JSON.parse(localStorage.getItem("initials"));
    score = JSON.parse(localStorage.getItem("score"));

    // below is checkingwhere the user has reached in the page, and then removing aspects accordingly
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

    // this is resetting the time left variable to 60, that way no matter what it was at previously the user gets a fresh start
    timeLeft = 60;


    // the chunk below is creating all of the elements that the user wants to see when the page loads. After they are created their text is set, they are appendend to the page, and then they are given an ID for css manipulation
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
    directions.setAttribute("id", "directions")

    startButton = document.createElement("button")
    startButton.textContent = "Start Quiz "
    openPage.appendChild(startButton)
    startButton.setAttribute("id", "start-button")


    // this is creating event listeners for a button to take the user to the highscore page
    highscore.addEventListener("click", highscorePage)

    // tthis is creating an event listener for when the user clicks the start button. When clicked aspects of the page will be removed and the quiz will start
    startButton.addEventListener("click", function () {
        openPage.remove()
        startButton.remove();
        directions.remove();
        quiz()
    });
}

// this function starts the quiz. It sets highscoreViewed to false, that way the user can click to the highscore page at any point duing the quiz. It also starts the clock and takes the user to question 1
function quiz() {
    highscoreViewed = false;
    getTime()
    question1()


}

// this function is used throught the quiz to promt the user based on if their last answer wal correct or not.
function checkAnswer() {

    // this sets the time left to 0 if it falls bellow it on the last question
    if (lastQuestionReached) {
        if (timeLeft < 0) {
            timeLeft = 0;
        }

        // if the user was on the last question they will then be prompet do input their initials by calling the highScoreInput function
        highScoreInput()
        // below the highScoreInpuet the page will create and append an outcome element with the callOutcome fuction
        callOutcome()

        // this sets the text of the outcome to be correct or wrong based on how the user answered the question
        if (correctness) {
            outcome.textContent = "Correct!"
        } else {

            // if the user in incorrect this takes 10 seconds off the time
            timeLeft -= 10;
            outcome.textContent = "Wrong!"
        }

        // if the user has not reached the last question the callOutcome function will create and append an outcome element and set the text based on how the user answered the question
    } else {
        callOutcome()
        outcomeShoweing = true;
        if (correctness) {
            outcome.textContent = "Correct!"
        } else {

            // if the user in incorrect this takes 10 seconds off the time
            timeLeft -= 10;
            outcome.textContent = "Wrong!"
        }
    }
}

// this function creates and appends an outcome element for the user to see if their answer was correct or not. It also starts a timeout before removing the outcome after 1 second
function callOutcome() {
    outcome = document.createElement("div")
    main.appendChild(outcome)
    outcome.setAttribute("id", "outcome")

    timeOut = setTimeout(() => {
        outcome.remove()
        outcomeShoweing = false;
    }, 1000);
}

// this function is the first question of the quiz
function question1() {

    // this sets variables to true or false based on where the user is in the quiz
    highScoreReached = false;
    highscoreViewed = false;
    liOnPage = true;

    // below creates the question appends it to the page and gives it text content.
    question = document.createElement("h1")
    main.appendChild(question)
    question.textContent = q1[0];

    // this creates andi appends a div for all of the answers to go into
    answer = document.createElement("div")
    main.appendChild(answer)

    // this creates and appends an unordered list for the answers to go into
    questionList = document.createElement("ul")
    answer.appendChild(questionList);
    questionList.setAttribute("id", "answer-list")

    // this creates each list item and gives them margins to break them up. it also appends the unordered list


    holder1 = document.createElement("li");
    holder2 = document.createElement("li");
    holder3 = document.createElement("li");
    holder4 = document.createElement("li");
    holder1.setAttribute("style", "margin-top: 10px")
    holder2.setAttribute("style", "margin-top: 10px")
    holder3.setAttribute("style", "margin-top: 10px")
    holder4.setAttribute("style", "margin-top: 10px")
    questionList.appendChild(holder1);
    questionList.appendChild(holder2);
    questionList.appendChild(holder3);
    questionList.appendChild(holder4);

    // this creates a spans and appends them to each list item. Inside the span it sets the text to each answer and gives them a class. The span inside the list items allows for different stying
    li1 = document.createElement("span");
    li2 = document.createElement("span");
    li3 = document.createElement("span");
    li4 = document.createElement("span");
    li1.setAttribute("class", "answer-option")
    li2.setAttribute("class", "answer-option")
    li3.setAttribute("class", "answer-option")
    li4.setAttribute("class", "answer-option")
    li1.textContent = q1[1]
    li2.textContent = q1[2]
    li3.textContent = q1[3]
    li4.textContent = q1[4]
    holder1.appendChild(li1);
    holder2.appendChild(li2);
    holder3.appendChild(li3);
    holder4.appendChild(li4);

    // this creates an event listener to see what element is clicked
    questionList.addEventListener("click", clickContenue = function (event) {

        // this creates a variable, and checks if it matches with the correct answer or not. if it does it sets correctness to true and calls the checkAnswer function. If not it sets correctness to false and still calls the check answer function
        var element = event.target
        if (element.textContent === q1[3]) {
            correctness = true;
            checkAnswer()
        } else {
            correctness = false;
            checkAnswer()
        }

        // this removes the event listener so they dont snow ball, and then sends the user to the next question
        questionList.removeEventListener("click", clickContenue)
        question2()
    });
}


function question2() {

    // this changes the text of the questions and aswers to be applicable for this question
    question.textContent = q2[0];
    li1.textContent = q2[1]
    li2.textContent = q2[2]
    li3.textContent = q2[3]
    li4.textContent = q2[4]

    // this creates an event listener to see what element is clicked
    questionList.addEventListener("click", clickContenue = function (event) {

        //  this checks to see if the previous oucome is still showing. If it is the outcome is removed and the timout is reset
        if (outcomeShoweing) {
            outcome.remove()
            window.clearTimeout(timeOut)
        }

        // this creates a variable, and checks if it matches with the correct answer or not. if it does it sets correctness to true and calls the checkAnswer function. If not it sets correctness to false and still calls the check answer function
        var element = event.target
        if (element.textContent === q2[3]) {
            correctness = true;
            checkAnswer()
        } else {
            correctness = false;
            checkAnswer()
        }

        // this removes the event listener so they dont snow ball, and then sends the user to the next question
        questionList.removeEventListener("click", clickContenue)
        question3()

    });



}


function question3() {

    // this changes the text of the questions and aswers to be applicable for this question
    question.textContent = q3[0];
    li1.textContent = q3[1]
    li2.textContent = q3[2]
    li3.textContent = q3[3]
    li4.textContent = q3[4]



    // this creates an event listener to see what element is clicked
    questionList.addEventListener("click", clickContenue = function (event) {

        //  this checks to see if the previous oucome is still showing. If it is the outcome is removed and the timout is reset
        if (outcomeShoweing) {
            outcome.remove()
            window.clearTimeout(timeOut)
        }

        // this creates a variable, and checks if it matches with the correct answer or not. if it does it sets correctness to true and calls the checkAnswer function. If not it sets correctness to false and still calls the check answer function
        var element = event.target
        if (element.textContent === q3[4]) {
            correctness = true;
            checkAnswer()
        } else {
            correctness = false;
            checkAnswer()
        }

        // this removes the event listener so they dont snow ball, and then sends the user to the next question
        questionList.removeEventListener("click", clickContenue)
        question4()
    });


}

function question4() {

    // this changes the text of the questions and aswers to be applicable for this question
    question.textContent = q4[0];
    li1.textContent = q4[1]
    li2.textContent = q4[2]
    li3.textContent = q4[3]
    li4.textContent = q4[4]

    // this creates an event listener to see what element is clicked
    questionList.addEventListener("click", clickContenue = function (event) {

        //  this checks to see if the previous oucome is still showing. If it is the outcome is removed and the timout is reset
        if (outcomeShoweing) {
            outcome.remove()
            window.clearTimeout(timeOut)
        }

        // this creates a variable, and checks if it matches with the correct answer or not. if it does it sets correctness to true and calls the checkAnswer function. If not it sets correctness to false and still calls the check answer function
        var element = event.target
        if (element.textContent === q4[3]) {
            correctness = true;
            checkAnswer()
        } else {
            correctness = false;
            checkAnswer()
        }

        // this removes the event listener so they dont snow ball, and then sends the user to the next question
        questionList.removeEventListener("click", clickContenue)
        question5()
    });

}



function question5() {

    highScoreReached = false;
    highscoreViewed = false;
    lastQuestionReached = true;

    // this changes the text of the questions and aswers to be applicable for this question
    question.textContent = q5[0];
    li1.textContent = q5[1]
    li2.textContent = q5[2]
    li3.textContent = q5[3]
    li4.textContent = q5[4]

    // this creates an event listener to see what element is clicked
    questionList.addEventListener("click", clickContenue = function (event) {

        //  this checks to see if the previous oucome is still showing. If it is the outcome is removed and the timout is reset
        if (outcomeShoweing) {
            outcome.remove()
            window.clearTimeout(timeOut)
        }

        // this creates a variable, and checks if it matches with the correct answer or not. if it does it sets correctness to true and calls the checkAnswer function. If not it sets correctness to false and still calls the check answer function
        var element = event.target
        if (element.textContent === q5[4]) {
            correctness = true;
            checkAnswer()
        } else {
            correctness = false;
            checkAnswer()
        }

        // this removes the event listener
        questionList.removeEventListener("click", clickContenue)
    });
}


// this function is called to allow the user to input their initials and score to the highscore board.
function highScoreInput() {

    // this stops the timer and sets it to the current time
    clearInterval(timerInterval);
    timer.textContent = "Time: " + timeLeft;

    // this sets liOnPage to false sense they have been removed and removes the answer div
    liOnPage = false;
    answer.remove()

    // this sets highScoreReached to true so that the function knows what is on the page, and displayes "All Done" to the user
    highScoreReached = true;
    question.textContent = "All done!";

    // this creates the elements to display when the user has finished the quiz. It gives them Id's for css purposes and sets their text content.
    finalScore = document.createElement("div")
    main.appendChild(finalScore)
    finalScore.setAttribute("id", "final-score")
    finalScoreInput = document.createElement("div")
    main.appendChild(finalScoreInput)
    finalScore.textContent = "Your final score is " + timeLeft + " ";
    finalScoreInput.textContent = "Enter initials: "
    initialInput = document.createElement("input")
    initialInput.placeholder = "Enter Initials";
    finalScoreInput.appendChild(initialInput)
    initialButton = document.createElement("button")
    finalScoreInput.appendChild(initialButton)
    initialButton.textContent = "Submit"

    // this creates an event listener for the submit button
    initialButton.addEventListener("click", clickContenue = function () {
        // when the button is clicked it sets two variables. One in the initials that are put in, and the second is newScore to the timeLeft
        newScore = timeLeft
        newInitials = initialInput.value.trim()

        // this checks to make sure that the user input is alphabetic characters by comparing each letter in the user's input to alphabetic list, if the character is included it increases the count by one. If the count matches the length of the user's initials then we know that all of the characters are alphabetic.
        let initialsSplit = newInitials.split("");
        for (let i = 0; i < initialsSplit.length; i++) {
            const element = initialsSplit[i];
            console.log(initialsSplit)
            if (alphabet.includes(element.toLowerCase())) {
                count++
            }
        }
        if (count === initialsSplit.length) {
            initialLengthCorrect = true;
        }

        // this checks to make sure that the length is 2 or 3 characters. if that is true and all of the input is  letters then the users input can be taken and pushed into an array
        if ((newInitials.length > 1 && newInitials.length < 4) && initialLengthCorrect) {
            initials = initials || [];
            initials.push(newInitials)
            score = score || [];
            score.push(timeLeft)

            // this will navigate the user the page that displays the highscores
            highscorePage()

            // if the users info is not valid an error will display
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

// this function renders the highscores to be displayed on the page
function renderHighscores() {
    if (score != undefined) {

        // this takes all of the scores and initials and pushes them into an array together, that way they can be sorted together
        for (var i = 0; i < score.length; i++)
            highscoreBoard.push({ "score": score[i], "initials": initials[i] });

        // this sorts the entries based on how high the score is
        highscoreBoard.sort(function (a, b) {
            return ((a.score < b.score) ? -1 : ((a.score == b.score) ? 0 : 1));
        });

        // this then splits the array back into two seperate arrays
        for (var i = 0; i < score.length; i++) {
            score[i] = highscoreBoard[i].score;
            initials[i] = highscoreBoard[i].initials;
        }

        // this then uses those two arrays that have been reorganized to create another array with the score and initials dislayed the correct way
        for (let i = 0; i < score.length; i++) {
            highscoreDisplay[i] = initials[i] + " -  " + score[i];
        }

        // this reverses the order of the new array so that the biggest score is on top
        highscoreDisplay.reverse()
    }

    // this saves the scores and initials in local storage 
    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("score", JSON.stringify(score));

    // this creates, sets the content, and appends an ordered list to the main section of the html
    highscoreList = document.createElement("ol")
    highscoreList.textContent = "Highscores"
    main.appendChild(highscoreList)
    highscoreList.setAttribute("id", "high-score-list")

    // this creates each high sore submited as a list item and adds it to the list
    for (var i = 0; i < highscoreDisplay.length; i++) {
        let div = document.createElement("div")
        let li = document.createElement("li");
        li.textContent = [i + 1] + ". " + highscoreDisplay[i];

        // this checks to see if each item matches the newest high score. If it does match it gives it a class to be styled differently
        if (highscoreDisplay[i] == newInitials + " -  " + newScore) {
            div.setAttribute("class", "high-score-item");
        }

        // this then appends the highscore list and list items to the page
        highscoreList.appendChild(div)
        div.appendChild(li);
    }
}


function highscorePage() {
    highscoreViewed = true;

    // this checks to see where on the page the user has been to determine what needs to be removed in order to show the high score page correctly
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
    highscore.remove()
    startButton.remove();

    // this calls to render the highscores sa that the user can seet hem
    renderHighscores()

    // this creates the button to eather go back or clear the highscores
    backButton = document.createElement("button")
    backButton.textContent = "Go Back"
    backButton.setAttribute("class", "highscore-button")
    main.appendChild(backButton)

    clearButton = document.createElement("button")
    clearButton.textContent = "Clear History"
    clearButton.setAttribute("class", "highscore-button")
    main.appendChild(clearButton)

    // if the back button is clicked the page reloads which calls the init functon and brings the user to the main page
    backButton.addEventListener("click", function () {
        location.reload();
    })

    // if the clear history button is clicked the history is removed and the page is reloaded to the main page.
    clearButton.addEventListener("click", function () {
        localStorage.clear();
        initials = [];
        score = [];
        location.reload();
    })
}

// this calls the init function on start up.
init()


