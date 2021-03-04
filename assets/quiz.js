//Timer Function
function countDown() {
  var minute = 1;
  var sec = 59;
  setInterval(function() {
    document.getElementById("timer").innerHTML = minute + " : " + sec;
    sec--;
    if (sec < 10) {
      document.getElementById("timer").innerHTML = minute + " : " + "0" + sec;
    }
    if (sec == 00) {
      minute --;
      sec = 59;
      if (minute == 0) {
        minute = 0;
      }
    }
  }, 1000);
};

//some handlers to help us know what question we answered last and which one is coming up next
let quizToggle = false;
let q1Toggle = false;
let q2Toggle = false;
let finalQuestionToggle = false;
//handler to establish if we've selected an answer
let answered = false;
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
basicHTML: "<span id='quiz'><div id='qTitle'></div></span>",
buttons:["<button class='button is-primary quizButton' id='b1'>A</button>","<button class='button is-primary quizButton' id='b2'>B</button>","<button class='button is-primary quizButton' id='b3'>C</button>","<button class='button is-primary quizButton' id='b4'>D</button>"],
answerDivs:["<p id='answerA'></p>","<p id='answerB'></p>","<p id='answerC'></p>","<p id='answerD'></p>"]
};
const correctAnswers = ['<p id="answerA">how many stripes they have</p>', '<p id="answerB">pollen</p>','<p id="answerD">all of the above</p>'];
//removess time to the timer when you correctly answer a question
function addTime () {

};
//adds time to the timer when you incorrectly answer a question
function removeTime () {

};
//if an answer button is pressed, sets answered to true, also checks if answer was correct or not
function answerCheck () {
  answered = true;
  let $this = $(this).html();
  const aCheck = document.querySelector("#answerA");
  const bCheck = document.querySelector("#answerB");
  const cCheck = document.querySelector("#answerC");
  const dCheck = document.querySelector("#answerD");
  if (q1Toggle === true && $this === "A") {
    console.log("you did it!");
  } else if (q2Toggle === true && $this === "B") {
    console.log("you did it!");
  } else if (finalQuestionToggle === true && $this === "D") {
    console.log("you did it!");
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
   const button2 = document.querySelector("#b2");
   button2.addEventListener("click", answerCheck);
   const button3 = document.querySelector("#b3");
   button3.addEventListener("click", answerCheck);
   const button4 = document.querySelector("#b4");
   button4.addEventListener("click", answerCheck);
};

//contains almost everything important, executes when the DOM finishes loading
window.onload = function Quiz () {
  //eventlistener to start the quiz timer
  start.addEventListener("click", function startTimer() {
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
  });
   //variable to grab the HTML element for the submit button
   const submit = document.getElementById("nextButton");
  
  //moves to the next question
  submit.addEventListener("click", function nextQuestion(){
  //makes it so we can't move to the next question if a question hasn't been answered
  if (answered === true) {
  //first thing is setting the value of quizToggle to whatever it currently isn't, and setting q1Toggle to false to show we're done with question 1
    quizToggle = !quizToggle;
    q1Toggle = false;
  //next we set answered to false because it's a new question and you haven't answered yet
    answered = false;
    console.log(answered);
  //then we remove the quiz element entirely and build it differently depending on the value of quizToggle
    $("#quiz").remove()
  //populates quiz with question 2 if toggle is true, or question3 if it's false
    if (quizToggle === true && q1Toggle === false) {
      q2Toggle = !q2Toggle;
      console.log(q2Toggle);
      finalQuestionToggle = true;
      console.log(finalQuestionToggle);
      $("#quizContent").append(qHTML.basicHTML);
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
      $("#quizContent").append(qHTML.basicHTML);
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
};

  
  

