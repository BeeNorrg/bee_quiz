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



//quiz questions
const question1 = {
q:"How do you tell different species of honey bees apart?", a:["how many stripes they have", "the sound they make", "the size of their stinger", 
"what flowers they make honey out of",]};
const question2 = {
q:"What do honey bees eat?", a:["honey, duh!", "pollen", "smaller insects", "flowers"]};
const question3 = {
q:"why are honey bees going extinct in north america?", a:["industrial pesticides", "climate change", "invasive wasp species", "all of the above"]};
//variable to listen for start button being pressed
const start = document.getElementById("start");
console.log(start);
//object to initialize the quiz's html
const qHTML = {
buttons:["<button class='button is-primary quizButton'>A</button>","<button class='button is-primary quizButton'>B</button>","<button class='button is-primary quizButton'>C</button>","<button class='button is-primary quizButton'>D</button>"],
answerDivs:["<p id='answerA'></p>","<p id='answerB'></p>","<p id='answerC'></p>","<p id='answerD'></p>"]
};
let quizToggler = true;
window.onload = function Quiz () {

  //eventlistener to start the quiz timer
  start.addEventListener("click", function startTimer() {
    $("button.getsReplaced").replaceWith("<p> you have<span id='timer'> 2 : 00 </span>remaining! </p>");
    countDown();
  });


  start.addEventListener('click', function startQuiz() {
    $("#qTitle").append(question1.q);
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
    //variable to listen for the "submit answer" button being pressed
    const submit = document.getElementById("nextButton");
    console.log(submit);
    //varaible to store whether or not a question has been answered
    const answerButton = document.getElementsByClassName("quizButton")
    console.log(answerButton);
  
  if (quizToggler === true) {
    submit.addEventListener("click", function () {
      quizToggler = !quizToggler;
      console.log(quizToggler);
      $("#qTitle").replaceWith(question2.q);
      for (i=0; i <= question2.a.length; i++) {
        if (i===0) {
        $("#answerA").replaceWith(question2.a[0])
        console.log(i);
        } if (i===1) {
        $("#answerB").replaceWith(question2.a[1])
        console.log(i);
        } if (i===2) {
        $("#answerC").replaceWith(question2.a[2])
        console.log(i);
        } else if (i===3) {
        $("#answerD").replaceWith(question2.a[3])
        console.log(i);
        };
      }; 
    });
  }; 
  if (quizToggler === false) {
    submit.addEventListener("click", function () {
      quizToggler = !quizToggler;
      console.log(quizToggler);
      $("#qTitle").replaceWith(question3.q);
      for (i=0; i <= question3.a.length; i++) {
        if (i===0) {
        $("#answerA").replaceWith(question3.a[0])
        console.log(i);
        } if (i===1) {
        $("#answerB").replaceWith(question3.a[1])
        console.log(i);
        } if (i===2) {
        $("#answerC").replaceWith(question3.a[2])
        console.log(i);
        } else if (i===3) {
        $("#answerD").replaceWith(question3.a[3])
        console.log(i);
        };
      }; 
    })
  }
};

  
  

