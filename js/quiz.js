var currentQuestion = 0;
var score = 0;
var answer = document.getElementById("ans");
var quiz = {};
var apm = 0;
//Press Enter key to submit answer
$("#ans").keypress(function(e) {
    if (e.which == 13) {
        nextQuestion();
    }
});

$("body").keypress(function(e) {
    apm++;
});



//countdown function input only in minutesm, mininum 1 minute
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes;

    function tick() {
        var counter = document.getElementById("counter");
        var current_minutes = mins - 1;
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds <
            10 ? "0" : "") + String(seconds);
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

    // Popup modal when page is loaded
    modal.style.display = "block";


}


// first question is always the easiest
function firstQuestion() {
    quiz = [{
        "question": "var x = 1; <br/> console.log(x);",
        "answer": "1"
    }];
    document.getElementById("question").innerHTML = quiz[currentQuestion][
        "question"
    ];
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
    document.getElementById("score").textContent = score;
    currentQuestion++;
    // Remove this later, lazy code for having only 4 questions
    if (currentQuestion == quiz.length) {
        currentQuestion = 0;
    }
    randomQuestion();
    //Show the questions
    document.getElementById("question").innerHTML = quiz[currentQuestion][
        "question"
    ];
    document.getElementById("sol").innerHTML = quiz[currentQuestion][
        "answer"
    ];
}

// Give new values on each question.
function randomQuestion() {
    var arr = [];
    var small = [];
    var len = 10;
    // generate random # from 1 to 10
    for (var i = 0; i < len; i++) {
        arr.push(Math.floor((Math.random() * 9) + 1));
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
    // generate random # from 1 to 4
    for (var i = 0; i < 3; i++) {
        small.push(Math.floor((Math.random() * 3) + 1));
    }
    // need more refactoring
    var q = small[0];
    var r = small[1];
    var s = small[2];
    //shortcut for array length 4 - q( a number between 1 & 4)
    var aq = arr[4 - q];
    // Enter Questions Here
    quiz = [{
        "question": "var x = " + a + "; <br/>" + "x = x + " + b +
            "; <br/> console.log(x);",
        "answer": a + b
    }, {
        "question": "var x = [" + a + "," + b + "," + c + "];" +
            "<br/> console.log(x);",
        "answer": "[" + [a, b, c] + "]"
    }, {
        "question": "var x = [" + a + "," + b + "," + c + "];" +
            "<br/> console.log(x[0]);",
        "answer": a
    }, {
        "question": "var x = [" + a + "," + b + "," + c + "];" +
            "<br/> console.log(x[1]);",
        "answer": b
    }, {
        "question": "var x = [" + a + "," + b + "," + c + "];" +
            "<br/> console.log(x[2]);",
        "answer": c
    }, {
        "question": "var x = [" + a + "," + b + "," + c + "," + d +
            "];" + "<br/> x[0] = x[" + q +
            "]; <br/> console.log(x);",
        "answer": "[" + [arr[q], b, c, d] + "]"
    }, {
        "question": "var x = [" + a + "," + b + "," + c + "];" +
            " <br/> var y = x.length; <br/> console.log(y);",
        "answer": 3
    }, {
        "question": "var x = [" + a + "," + b + "," + c + "," + d +
            "];" + " <br/> var y = x.length - " + q +
            "; <br/> console.log(x[y]);",
        "answer": aq
    }, {
        "question": "var x = [" + a + "," + b + "," + c + "," + d +
            "];" + " <br/>  x[0] = x[x.length - " + q +
            "]; <br/> console.log(x);",
        "answer": "[" + [aq, b, c, d] + "]"
    }, {
        "question": "var x = [" + a + "," + b + "," + c + "," + d +
            "];" +
            " <br/>  x[x.length - 1] = x[x.length / 2 + x.length / 4]; <br/> console.log(x);",
        "answer": "[" + [a, b, c, c] + "]"
    }, {
        "question": "var x = [" + a + "," + b + "," + c + "," + d +
            "];" + " <br/>  var y = [" + q + "," + r + "," + s +
            "];" +
            "<br/> x[2] = y[x.length - 2] + x[" + q + "] + y[" + Math.abs(q - 1) + "]; <br/> console.log(x);",
        "answer": "[" + [a, b, (s + arr[q] + small[q - 1]), d] + "]"
    }];
}

// popup and retry button modal
function endGame() {

    retry.style.display = "block";
    $("#apm").text("Your Actions Per Minute (APM) is: " + apm);
}

// tutorial modal
var modal = document.getElementById("tutorial");

// start button
var go = document.getElementById("go-button");

// When the user clicks on <span> (x), close the modal
go.onclick = function() {
    modal.style.display = "none";
    countdown(1);
    firstQuestion();
    document.getElementById("ans").focus();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        countdown(1);
        firstQuestion();
        document.getElementById("ans").focus();
    }
};

// end game modal
var retry = document.getElementById('retry');

// Get the <span> element that closes the modal
var restart = document.getElementById("restart");

// When the user clicks on <span> (x), close the modal
restart.onclick = function() {
    retry.style.display = "none";
    location.reload();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == retry) {
        retry.style.display = "none";

    }
};

var pop = false;
$("#credit").click(function(){
    if (pop == false){
        $("#creditText").fadeIn(function(){pop = true;});
    }
    if (pop == true){
        $("#creditText").fadeOut(function(){pop=false});
    }
});
