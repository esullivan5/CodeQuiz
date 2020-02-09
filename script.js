// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What does HTML stand for?",
        choiceA :"Hypertext Markup Language",
        choiceB : "Home Text Mom Langage",
        choiceC : "Hyper Time Moon Language",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        choiceA : "Chrome Style Sheets",
        choiceB : "Cascading Style Sheets",
        choiceC : "Cam Style Sheets",
        correct : "B"
    },{
        question : "Arrays in JavaScript can be used to store ____.",
        choiceA : "numbers and strings",
        choiceB : "all of the above",
        choiceC : "booleans",
        correct : "B"
     },{
        question : "String values must be enclosed within ____ when being assigned to variables",
        choiceA : "commas",
        choiceB : "curly brackets",
        choiceC : "quotes",
        correct : "C"
     }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = q.question;
    choiceA.innerHTML = "A." + q.choiceA;
    choiceB.innerHTML = "B." + q.choiceB;
    choiceC.innerHTML = "C." + q.choiceC;

}

start.addEventListener("click", startQuiz, countdown);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

// check the answer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        //answerIsCorrect();
    
    }else{
        // answer is wrong
        // change progress color to red
        //answerIsWrong();
    }

    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();

    }else{
        // end the quiz and show the score
        scoreRender();
    }
}

function clearContent(){
        progress.innerHTML = ""; 
    }


// answer is correct
//function answerIsCorrect(){
   //progress.innerHTML +=  "Correct!";
//}

// answer is Wrong
//function answerIsWrong(){
    //progress.innerHTML +- "Wrong!";
//}

// display score
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    scoreDiv.innerHTML += "Your Score Is:" + "<p>"+ scorePerCent +"%</p>";
}

//timer 
var mins = 1; 
var secs = mins * 60; 
  
function countdown() { 
    setTimeout('Decrement()', 60); 
    } 
  
//decrese in time 
function Decrement() { 
    if (document.getElementById) { 
        minutes = document.getElementById("minutes"); 
        seconds = document.getElementById("seconds");  
    if (seconds < 59) { 
        seconds.value = secs; 
    } 
  
    //Display both minutes and seconds 
    else { 
        minutes.value = getminutes(); 
        seconds.value = getseconds(); 
    } 

    //alert if out of time 
    if (mins < 0) { 
        alert('Out of Time!!'); 
        minutes.value = 0; 
        seconds.value = 0; 
    } 

    //if seconds > 0 then seconds is decremented 
    else { 
        secs--; 
        setTimeout('Decrement()', 1000); 
            } 
        } 
    } 
  
    function getminutes() { 
    mins = Math.floor(secs / 60); 
    return mins; 
    } 
  
    function getseconds() {
    return secs - Math.round(mins * 60); 
    }
