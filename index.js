const readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
var userName = readLineSync.question(chalk.cyanBright("May I have your name? "));
console.log(chalk.cyanBright('Welcome '+ userName));
console.log(chalk.cyanBright('lets see if you know Me ;)'));

var higestScore = [
  {
    name: "mom",
    score: 10
  },
  {
    name: "neha",
    score: 9
  }
]

function play(question , answer){
  var userAnswer = readLineSync.question(chalk.cyanBright(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("correct");
    score = score + 1;
  }
  else{
    console.log("wrong");
  }
  console.log("your current score is: "+ score);
  console.log("_____");
}

var questions = [
  {
    question: "Am i older than 20? ",
    answer: "yes"
  },
  {
    question: "which city do i live in? ",
    answer: "jaipur"
  },
  {
    question: "Whats my bday month ",
    answer: "september"
  },
  {
    question: "whats my fav web series? ",
    answer: "friends"
  },
  {
    question: "whats my hobby? ",
    answer: "sketching"
  },
  {
    question: "whats my fav thing to do? ",
    answer: "eating"
  },
  {
    question: "what i love more? panipuri or pizza? ",
    answer: "panipuri"
  },
  {
    question: "Am I an earlybird or a nightowl? ",
    answer: "nightowl"
  },
  {
    question: "What do I like more: Sweet or spicy ",
    answer: "spicy"
  },
  {
    question: "what is my fav color? ",
    answer: "purple"
  }

]

for(var i=0;i<questions.length; i++){
  play(questions[i].question, questions[i].answer)
}

console.log("your final score is "+ score);
console.log("checkout the high scores-");
for(var i =0;i<higestScore.length;i++){
   console.log(higestScore[i].name + ":" + higestScore[i].score);
   
}

console.log("if you have scored higher, send me a ss so that i can update the leaderboard")

