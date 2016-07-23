
var arr = [];
var len = 10;

// generate random # from 1 to 16
for (var i = 0; i < len; i++){
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




var quiz = [
  {
    "question": "var x = [" + a + "," + b + "," + c + "];" + "<br/> console.log(x);",

    "answer": "[" + [a,b,c] + "]"
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

  "answer": "[" + [b,b,c] + "]"
}



];

var currentQuestion = 0;
var score = 0;
var answer = document.getElementById('ans');

//Press Enter key to submit answer
$('#ans').keypress(function(e) {
if (e.which == 13) {
nextQuestion();
}
});


//insert Tona's code here
function tutorial(){

  //Remove this later
  // alert("Start Game?");

  //load Questions
  loadQuestion();
}


function loadQuestion(){

document.getElementById('question').innerHTML = quiz[currentQuestion]["question"];

}


function nextQuestion(){
   answer = document.getElementById('ans').value;

  //Check if input is the answer, if so +1 to score.
  if (answer.toString().trim() == quiz[currentQuestion]["answer"].toString()){
    score++;
  }
  //reset the answer bar
  document.getElementById('ans').value = "";

  //reset the notepad
  document.getElementById('pad').value = "";
  
  // test score counter
  document.getElementById('test').textContent = score;

  currentQuestion++;

  // Remove this later, lazy code for having only 4 questions
  if(currentQuestion == quiz.length){
    currentQuestion = 0;
  }
  loadQuestion();


}
