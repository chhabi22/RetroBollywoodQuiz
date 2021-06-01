var readLineSync = require("readline-sync");
const chalk = require('chalk');
const log = console.log;

var userName = readLineSync.question("Hi, What's your name? ");
var score = 0;

//LOGS BEFORE THE QUIZ QUESTIONS
log(chalk.green.bold("---------------------------------------"));
log('Welcome ' + chalk.yellowBright.bold(userName) + ' to ' + chalk.bgBlueBright.bold("RETRO BOLLYWOOD"));
log(chalk.green.bold("---------------------------------------"));


// RULES
log(chalk.bgCyan.bold("NOTE:"))
log(chalk.yellowBright("1. write answer in lower case."));
log(chalk.yellowBright("1. write only a, b or c."))
log(chalk.yellowBright("1. At the end, take a screenshot of your final score if it is higher than the highest score and send me."));
log("---------------------------------------")
log(chalk.bgBlack.inverse(" >>>> HERE IS THE QUIZ FOR YOU <<<<"))
log("---------------------------------------")

//HIGH SCORE DATA
var highscore = [{
  name: "chhabi",
  hscore: 3
}];
// Function for ques and ans
function play(question,answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer == answer){
    log(chalk.bgGreen.bold("Correct!!"));
    score = score + 1;
  }
  else{
    log(chalk.bgRed.bold("wrong"));
  }
  console.log("Your Score: " + score);
  console.log("-----------------------------")
}

// Array of question and answers
var questions = [
   {
     question: ` Which actor played the character 'Babu Moshai' in Movie Anand?
      a: Amitab Bachchan 
      b: Dilip Kumar
      c: Vinod Khanna 
       `,
     answer: "a"
   }, {
     question: ` Who played 'Anarkali' in Mughal-e-Azam? 
      a: Madhubala 
      b: Suraiya
      c: Asha Pareekh 
       `,
     answer: "a"
   },
   {
     question: ` Which actor played lead roles in Ram and Shyam? 
      a: Dilip Kumar 
      b: Vinod Khanna
      c: Pradeep Kumar 
      `,
     answer: "a"
   },
   {
     question: `Which movie had the song: Mera naam Chin Chin Chu....? 
     a:Pukaar
     b:Howrah Bridge
     c:Kranti 
      `,
     answer: "b"
   },
   {
     question: `What was the name of Waheeda Rehman's character in Guide?
     a:Lucy
     b:Baby
     c:Rosy 
      `,
     answer: "c"
   }
   ];

// Loop to play questions
   for(var i = 0; i < questions.length; i++){
     var CurrentQuestion = questions[i];
     play(CurrentQuestion.question, CurrentQuestion.answer);
     var finalScore = score
   }

   log(chalk.bgBlack("YOUR FINAL SCORE: ") + finalScore);
   log("Is your score higher than others? ");

   var currenths = highscore[0];
   if(finalScore > currenths.hscore){

   log(chalk.yellowBright.bold("yesss"));
  
   } else {
     log(chalk.yellowBright.bold("NOPE"));
   }