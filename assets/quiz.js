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

//quiz questions variables
const question1 = {
q:"How do you tell different species of honey bees apart?", a:["how many stripes they have", "the sound they make", "the size of their stinger", 
"what flowers they make honey out of",]};
const question2 = {
q:"What do honey bees eat?", a:["honey, duh!", "pollen", "smaller insects", "flowers"]};
const question3 = {
q:"why are honey bees going extinct in north america?", a:["industrial pesticides", "climate change", "invasive wasp species", "all of the above"]};

//variable to listen for start button being pressed
const start = document.getElementById("start");
//variable to listen for a question being answered
//const chosenAnswer = document.getElementsByClassName("answerButton");
//HTML table that the quiz will be in
const quizBlock = "<button class='button is-primary answerButton'>A</button><p id='answerA'></p><button class='button is-primary answerButton'>B</button><p id='answerB'></p><button class='button is-primary answerButton'>C</button><p id='answerC'></p><button class='button is-primary answerButton'>D</button><p id='answerD'></p>";

//eventlistener to start the quiz timer
start.addEventListener('click', function () {
  $("button.getsReplaced").replaceWith("<p> you have<span id='timer'> 2 : 00 </span>remaining! </p>");
  countDown();
});
//eventlistener to post first question
start.addEventListener('click', function() {
  $("#quiz").append("<div>" + quizBlock + "</div>");
  $("#questionText").append("<span>" + question1.q + "</span>");
  for (i=0; i <= question1.a.length; i++) {
    if (i=1) {
      $("#answerA").append(question1.a[0])
    } if (i=2) {
      $("#answerB").append(question1.a[1])
    } if (i=3) {
      $("#answerC").append(question1.a[2])
    } if (i=4) {
      $("answerD").append(question1.a[3])
    };
  };
});
//eventlistener to check if a question has been answered 
//chosenAnswer.addEventListener('click', function nextQuestion () {});
