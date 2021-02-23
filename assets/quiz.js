//Timer Function
function countDown() {
  var minute = 1;
  var sec = 59;
  setInterval(function() {
    document.getElementById("timer").innerHTML = minute + " : " + sec;
    sec--;
    if (sec == 00) {
      minute --;
      sec = 59;
      if (minute == 0) {
        minute = 0;
      }
    }
  }, 1000);
};

//quiz questions array of question objects
let questions = [ 
{"q1":"How can you tell different species of honey bees apart?", 
"a1":["how many stripes they have", "the sound they make", "what flowers they make honey out of"]},
{"q2":"What do honey bees eat?",
"a2":["honey, duh!", "pollen", "smaller insects"]},
{"q3":"why are honey bees going extinct in north america?",
"a3":["agricultural pollution", "climate change", "invasive wasp species"]},
];

//replaces "Start Quiz!" button with timer
$("#start").click(function replacer () {
  $("button.getsReplaced").replaceWith( "<p> you have<span id='timer'> 5:00 </span>remaining! </p>");
});

//button also starts the quiz timer
$("#start").click(countDown());

//the first question is appended to the bodyBox when button is pressed
$("start").click(function appendQuiz() {
  $("#quiz").append("<div class='question'>" + questions.q1,"</div>")
});
