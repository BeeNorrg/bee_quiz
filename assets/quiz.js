//Timer Function
function countDown() {
  var minute = 4;
  var sec = 59;
  setInterval(function() {
    document.getElementById("timer").innerHTML = minute + " : " + sec;
    sec--;
    if (sec == 00) {
      minute --;
      sec = 59;
      if (minute == 0) {
        minute = 5;
      }
    }
  }, 1000);
};

//replaces "Start Quiz!" button with timer
$("#start").click(function replacer () {
  $("button.getsReplaced").replaceWith( "<p> you have<span id='timer'> 5:00 </span>remaining! </p>");
});
//starts the quiz timer
$("#start").click(countDown());
