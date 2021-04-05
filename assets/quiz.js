// minute and seconds will be how we track score
let minute = 1;
let sec = 59;
//init value of gradeCalc
let gradeCalc = 0;
//some handlers to help us know what question we answered last and which one is coming up next
let quizToggle = false;
let q1Toggle = false;
let q2Toggle = false;
let finalQuestionToggle = false;
//handler to establish if we've selected an answer
let answered = false;
//handlers to check for correct answers
let correctQs = [false, false, false];
let q1Correct = correctQs[0];
let q2Correct = correctQs[1];
let q3Correct = correctQs[2];
//handlers to check for wrong answers
let IncorrectQs = [false, false, false];
let q1Incorrect = IncorrectQs[0];
let q2Incorrect = IncorrectQs[1];
let q3Incorrect = IncorrectQs[2];
//checks if the quiz is over
let finalAnswer = false;
//user score
let Score = localStorage.getItem("score");
let Initials = localStorage.getItem("initials");


//quiz questions
const question1 = {
  q:"How do you tell different species of honey bees apart?", a:["how many stripes they have", "the sound they make", "the size of their stinger", 
  "what flowers they make honey out of",]};
  const question2 = {
  q:"What do honey bees eat?", a:["honey, duh!", "pollen", "smaller insects", "flowers"]};
  const question3 = {
  q:"why are honey bees going extinct in north america?", a:["industrial pesticides", "climate change", "invasive wasp species", "all of the above"]};
   //variable to grab the start button
  const start = document.getElementById("start");
  //object to contain the quiz's html
  const qHTML = {
  basicHTML: ["<span id='quiz'><div id='qTitle'></div></span>","<span id='endScreen'><div id='endTitle'>Congratulations!</div><div id='results'></div></span>"],
  buttons:["<button class='button is-primary quizButton' id='b1'>A</button>","<button class='button is-primary quizButton' id='b2'>B</button>","<button class='button is-primary quizButton' id='b3'>C</button>","<button class='button is-primary quizButton' id='b4'>D</button>"],
  answerDivs:["<p id='answerA'></p>","<p id='answerB'></p>","<p id='answerC'></p>","<p id='answerD'></p>"]
  };
  const correctAnswers = ['<p id="answerA">how many stripes they have</p>', '<p id="answerB">pollen</p>','<p id="answerD">all of the above</p>'];
  
//checks what your score is in seconds and stores it
function gradeCheck () {
  gradeCalc = minute*60 + sec;
  console.log("gradeCalc:", gradeCalc);
  localStorage.setItem("totalScore", gradeCalc)
};

function endQuiz () {
  $("#quiz").replaceWith(qHTML.basicHTML[1]);
}

//Timer Function
function countDown() {
  let timer = setInterval(function() {
      document.getElementById("timer").innerHTML = " " + minute + " : " + sec + " ";
        sec--;
      if (sec < 10) {
        document.getElementById("timer").innerHTML = " " + minute + " : " + "0" + sec + " ";
      }
      //if seconds reach 00, decerement minute by 1 and reset seconds to 59
      if (sec == 00) {
        minute --;
        sec = 59;
        //if minutes reach 0, don't decrement minute
        if (minute == 0) {
          minute = 0;
        };
      };
      //if seconds are greater than 60, increment minute and shave 60 off seconds
      if (sec >= 60) {
        minute ++;
        let secOverSixty = sec - 60;
        sec = 0 + secOverSixty;
      };
      //if seconds are less than 0, decrement minute and fix those negative seconds up
      if (sec < 00 && minute != 0) {
        sec += 60;
        minute --;
      }
      //adds time if question 1 or 2 is answered correctly and returns their values to false, and removes time if a question is answered incorrectly
      if (q1Correct === true || q2Correct === true) {
        sec += 20;
        q1Correct = false;
        q2Correct = false;
        console.log("q1TimeCheck:", q1Correct);
        console.log("q2TimeCheck:", q2Correct);
      } else if (q1Incorrect === true || q2Incorrect === true) {
        sec -= 20;
        q1Incorrect = false;
        q2Incorrect = false;
        console.log("q1TimeCheck:", q1Incorrect);
        console.log("q2TimeCheck:", q2Incorrect);
      }
      //adds time if question 3 is answered correctly, and saves the remaining time as a test score
      if (q3Correct === true) {
        sec += 20;
        gradeCheck();
        finalAnswer = true;
      } else if (q3Incorrect === true) {
        sec -= 20;
        gradeCheck();
        finalAnswer = true;
      };
    }, 1000);
    
  };

//if an answer button is pressed, sets answered to true, also checks if answer was correct or not
function answerCheck () {
  answered = true;
  let $this = $(this).html();
  const aCheck = document.querySelector("#answerA");
  const bCheck = document.querySelector("#answerB");
  const cCheck = document.querySelector("#answerC");
  const dCheck = document.querySelector("#answerD");
  //checks to see if what you picked for question 1 is true or false
  if (q1Toggle === true && $this === "A") {
    q1Correct = !q1Correct;
    console.log("CORRECT");
    console.log("q1Correct:", q1Correct);
  } else if (q1Toggle === true && $this != "A") {
    q1Incorrect = !q1Incorrect;
    console.log("q1Incorrect:",q1Incorrect);
    console.log("WRONG");
  };
  //checks to see if what you picked for question 1 is true or false
  if (q2Toggle === true && $this === "B") {
    q2Correct = !q2Correct;
    console.log("q2Correct:", q2Correct);
    console.log("CORRECT");
  } else if  (q2Toggle === true && $this != "B") {
    q2Incorrect = !q2Incorrect;
    console.log("q2Incorrect:", q2Incorrect);
    console.log("WRONG")
  };
  //checks to see if what you picked for question 1 is true or false
  if (finalQuestionToggle === true && $this === "D") {
    q3Correct = !q3Correct;
    console.log("q3Correct:", q3Correct);
    console.log("CORRECT");
  } else if (finalQuestionToggle === true && $this != "D") {
    q3Incorrect = !q3Incorrect;
    console.log("q3Incorrect:", q3Incorrect);
    console.log("WRONG")
  }
  
};

//populates quiz element with buttons and divs to put answer text in
function quizLoader() {
  for (i=1; i <= 4; i++) {
    $("#quiz").append("<div class='quizDiv' id='a" + i  +"'></div>");
    if (i===1) {
      $("#a1").append(qHTML.buttons[0]  + qHTML.answerDivs[0])
    } if (i===2) {
      $("#a2").append(qHTML.buttons[1] + qHTML.answerDivs[1])
    } if (i===3) {
      $("#a3").append(qHTML.buttons[2] + qHTML.answerDivs[2])
    } if (i===4) {
      $("#a4").append(qHTML.buttons[3] + qHTML.answerDivs[3])
    };
  };
   //querySelectors for the answer buttons and eventHandlers to set answered to true when you answer a question
   const button1 = document.querySelector("#b1");
   button1.addEventListener("click", answerCheck);
   button1.addEventListener("click", gradeCheck);
   const button2 = document.querySelector("#b2");
   button2.addEventListener("click", answerCheck);
   button2.addEventListener("click", gradeCheck);
   const button3 = document.querySelector("#b3");
   button3.addEventListener("click", answerCheck);
   button3.addEventListener("click", gradeCheck);
   const button4 = document.querySelector("#b4");
   button4.addEventListener("click", answerCheck);
   button4.addEventListener("click", gradeCheck);
};

//contains almost everything important, executes when the DOM finishes loading
window.onload = function Quiz () {
  //eventlistener to start the quiz timer
  start.addEventListener("click", function startTimer() {
    $("#qTitle").empty();
    $("#submitSpan").append("<button class='button is-warning' id='nextButton'>Submit Answer</button>")
    $("button.getsReplaced").replaceWith("<p> you have<span id='timer'> 2 : 00 </span>remaining! </p>");
    countDown();
  });

  start.addEventListener('click', function startQuiz() {
    $("#qTitle").append(question1.q);
    quizLoader()
    q1Toggle = true;
    // Populates the answer divs with question 1 answers
    for (i=0; i <= question1.a.length; i++) {
      if (i===0) {
        $("#answerA").append(question1.a[0])
      } if (i===1) {
        $("#answerB").append(question1.a[1])
      } if (i===2) {
        $("#answerC").append(question1.a[2])
      } else if (i===3) {
        $("#answerD").append(question1.a[3])
      };
    }; 

     //variable to grab the HTML element for the submit button
   const submit = document.getElementById("nextButton");
  
   //moves to the next question
   submit.addEventListener("click", function nextQuestion(){
     console.log("check time:", sec);
     if (finalAnswer === true) {
       endQuiz();
     }
   //makes it so we can only move to the next question if an answer has been chosen and it wasn't the final question
   else if (finalAnswer === false && answered === true) {
   //first thing is setting the value of quizToggle to whatever it currently isn't, and setting q1Toggle to false to show we're done with question 1
     quizToggle = !quizToggle;
     q1Toggle = false;
   //next we set answered to false because it's a new question and you haven't answered yet
     answered = false;
     console.log("answered:", answered);
   //then we remove the quiz element entirely and build it differently depending on the value of quizToggle
     $("#quiz").remove()
   //populates quiz with question 2 if toggle is true, or question3 if it's false
     if (quizToggle === true && q1Toggle === false) {
       q2Toggle = !q2Toggle;
       console.log("q2Toggle:", q2Toggle);
       $("#quizContent").append(qHTML.basicHTML[0]);
       $("#qTitle").append(question2.q);
       quizLoader();
       for (i=0; i <= question2.a.length; i++) {
         if (i===0) {
           $("#answerA").append(question2.a[0])
         } if (i===1) {
           $("#answerB").append(question2.a[1])
         } if (i===2) {
           $("#answerC").append(question2.a[2])
         } else if (i===3) {
           $("#answerD").append(question2.a[3])
         };
       };  
     } if (quizToggle === false && q2Toggle === true) {
       $("#quizContent").append(qHTML.basicHTML[0]);
       $("#qTitle").append(question3.q);
       quizLoader(); 
       for (i=0; i <= question3.a.length; i++) {
         if (i===0) {
           $("#answerA").append(question3.a[0])
         } if (i===1) {
           $("#answerB").append(question3.a[1])
         } if (i===2) {
           $("#answerC").append(question3.a[2])
         } else if (i===3) {
           $("#answerD").append(question3.a[3])
         };
       };  
     };
   };
   });
   //ends Quiz if question 3 is answered
   submit.addEventListener("click", function checkForEnd(){
    
   });
  });
  
  
};

  
  

