var readlineSync = require('readline-sync');

// welcome msg 
function welcome() {
  var userName = readlineSync.question('May I have your name? ');
  console.log("Hi " + userName.toUpperCase() + " Welcome to this game let's see how much you know about Shivam");
}
welcome();

// questions and answer array 

var questions = [
  {
    question: 'Where do i work at ?',
    answer: 'Nickelfox',
  },
  {
    question: 'Where do i Stay ?',
    answer: 'Noida',
  },
  {
    question: 'Where do i like to play ?',
    answer: 'Cricket',
  },
  {
    question: 'My Birthday Date (Date only no month or year) ?',
    answer: '8',
  },
  {
    question: 'Do i like marvel movies ?',
    answer: 'Yes',
  },
]

// score variable for getting score of user
var score = 0;

// taking user-answer as input and checking right or wrong also incr and decr scores
function answerInput(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('Yes, You are right 😉')
    score++;
  }
  else {
    console.log('No, You were wrong 🤦‍♂');
    console.log('The answer was ' + answer + ' 😞')
    score--;
  }
  console.log('Your current score is : ' + score);
}

// play fun for looping questions 
function play() {
  for (var i = 0; i < questions.length; i++) {
    console.log('----------------------------------------------------------------')
    answerInput(questions[i].question, questions[i].answer);
  }
}
play();

// high score aarray
var highScores = [
  {
    name: "Shivam",
    score: 5,
  },

  {
    name: "Tanay Sir",
    score: 4,
  },
]
console.log('Highest Score of this game 🎮 is: ' + highScores[0].score + " ,Scored by : " + highScores[0].name + ' 😎')