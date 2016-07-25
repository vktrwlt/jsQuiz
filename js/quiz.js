
var currentQuestion = 0;
var score = 0;
var answer = document.getElementById("ans");
var quiz = {};

//Press Enter key to submit answer
$("#ans").keypress(function(e) {
    if (e.which == 13) {
        nextQuestion();
    }
});

//countdown function input only in minutesm, mininum 1 minute
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes;

    function tick() {
        var counter = document.getElementById("counter");
        var current_minutes = mins - 1;
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);

        //Open score & retry popup when counter is 0.
        if (counter.innerHTML == "0:00") {
            endGame();
        }

        if (seconds > 0) {
            setTimeout(tick, 1000);

        } else {

            if (mins > 1) {

                countdown(mins - 1);

            }
        }

    }
    tick();
}



//insert Tona's code here
function tutorial() {

    //Remove this later
    alert("Start Game?");

    //countdown begins when alert or modal is done.
    countdown(1);
    //load Questions
    firstQuestion();
}


// first question is always the easiest
function firstQuestion() {
   quiz = [{
          "question": "var x = 1; <br/> console.log(x);",

          "answer": "1"
      }];
    document.getElementById("question").innerHTML = quiz[currentQuestion]["question"];

}

/*check if input from answer bar is correct, if so +1 score, reset inputs
   and get a new question */

function nextQuestion() {

    answer = document.getElementById("ans").value;

    //Check if input is the answer, if so +1 to score.
    if (answer.toString().trim() == quiz[currentQuestion]["answer"].toString()) {
        score++;
    }
    //reset the answer bar
    document.getElementById("ans").value = "";

    //reset the notepad
    document.getElementById("pad").value = "";

    // test score counter
    document.getElementById("test").textContent = score;

    currentQuestion++;

    // Remove this later, lazy code for having only 4 questions
    if (currentQuestion == quiz.length) {
        currentQuestion = 0;
    }
    randomQuestion();
    document.getElementById("question").innerHTML = quiz[currentQuestion]["question"];
    document.getElementById("sol").innerHTML = quiz[currentQuestion]["answer"];
}

// Give new values on each question.
function randomQuestion(){
  var arr = [];
  var len = 10;

  // generate random # from 1 to 16
  for (var i = 0; i < len; i++) {
      arr.push(Math.floor((Math.random() * 15) + 1));
  }

  //need to refactor this code
  var a = arr[0];
  var b = arr[1];
  var c = arr[2];
  var d = arr[3];
  var e = arr[4];
  var f = arr[5];
  var g = arr[6];
  var h = arr[7];



  // Enter Questions Here
   quiz = [
      {
          "question": "var x = [" + a + "," + b + "," + c + "];" + "<br/> console.log(x);",

          "answer": "[" + [a, b, c] + "]"
      },
      {
          "question": "var x = [" + a + "," + b + "," + c + "];" + "<br/> console.log(x[0]);",

          "answer": a
      },
      {
          "question": "var x = [" + a + "," + b + "," + c + "];" + "<br/> console.log(x[1]);",

          "answer": b
      },
      {
          "question": "var x = [" + a + "," + b + "," + c + "];" + "<br/> console.log(x[2]);",

          "answer": c
      },
      {
          "question": "var x = [" + a + "," + b + "," + c + "];" + "<br/> x[0] = x[1]; <br/> console.log(x);",

          "answer": "[" + [b, b, c] + "]"
      }



  ];
}



// insert code for popup and retry button
function endGame() {

    alert("GG! You scored:  " + score);
    var retry = confirm("Retry");
    if (retry) {
        location.reload();
    }

}
