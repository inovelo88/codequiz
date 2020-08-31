// HTML elements //
const quiz = document.getElementById("startQuiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timer = document.getElementById("timer");
const score = document.getElementById("scoreContainer");

// Questions //
let questions = [
    {
        question: "What is a method?",
        choiceA: "A calculation",
        choiceB: "A function that belongs to an object",
        choiceC: "A variable type",
        correct: "B"
    },{
        question: "What are 3 variable types?",
        choiceA: "Function, Method, Loop",
        choiceB: "Array, Object, Function",
        choiceC: "String, Boolean, Number",
        correct: "C"
    },{
        question: "What is css used for?",
        choiceA: "Styling",
        choiceB: "Common Styling Sytems",
        choiceC: "Logging coding issues",
        correct: "A"
    },{
        question: "Identify the library in Math.random();",
        choiceA: "Math",
        choiceB: ".random",
        choiceC: "()",
        correct: "A"
    },{
        question: "What is JavaScript mainly used for?",
        choiceA: "To style a website",
        choiceB: "Compatibility among browsers",
        choiceC: "To create dynamic behavior on a website",
        correct: "C"
    }
    
];

// Variables //
var firstquestion;
var lastQuestion;
var count = 0;
var quizTime = 50;
var score = 0;

// Functions //
function renderQuestion(){
    question.innerHTML = question;
    choiceA.innerHTML = choiceA;
    choiceB.innerHTML = choiceB;
    choiceC.innerHTML = choiceC;
}
start.addEventListener("click",startQuiz);

// Answers //

function checkAnswer(answer){
    if( answer === questions){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
        score--;
    }
    
}

// Score //
function scoreRender(){
    const scorePerCent = Math.round(100 * score/questions.length);
}
