var quiz = [

 {
   "question": "var x = [1,3,5]; <br/> console.log(x[0]);",

   "answer": "1"
 },
 {
   "question": "var x = [2,4,6]; <br/> console.log(x[1]);",

   "answer": "4"
 },
 {
   "question": "var x = [1,3,5]; <br/> console.log(x[2]);",

   "answer": "5"
 },
 {
   "question": "var x = [1,2,4]; <br/> console.log(x);",

   "answer": "[1,2,4]"
}



];

var currentQuestion = 0;
var score = 0;
var answer = document.getElementById('ans');


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
  if (answer.toString() == quiz[currentQuestion]["answer"]){
    score++;
  }
  //reset the answer bar
  document.getElementById('ans').value = "";

  // test score counter
  document.getElementById('test').textContent = score;

  currentQuestion++;

  // Remove this later, lazy code for having only 4 questions
  if(currentQuestion == quiz.length){
    currentQuestion = 0;
  }
  loadQuestion();


}
