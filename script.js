//
var quizTimer = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var endGameBtn = document.getElementById("endGameBtn");
var startQuizBtn = document.getElementById("startQuizBtn");

//Quiz Questions
var myQuestions = [{

    question: "How to write an IF statement for executing some code if "if" is NOT equal to 8?",
    answers: {
      a: "if i=! 8 then",
      b: "if (i !=8)",
      c: "if (i <> 5)"
    },
    correctAnswer: "b"
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: {
      a: "(This is a comment)",
      b: "!--This is a comment--!",
      c: "//This is a comment"
    },
    correctAnswer: "c"
  },
  {
    question: "JavaScript is the same as Java.",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: "b"


}]

//Quiz Start function

function startGame(){

}

//Timer
timerInterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = "Time remaining: " + timeLeft;

    if(timeLeft === 0){
        clearInterval(timerInterval);
        showScore();
    }
},1000);
quizBody.style.display = "block";