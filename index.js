const readlineSync = require('readline-sync');

console.log('Welcome to the Total Entertainment Bollywood Quiz! \n');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + ' ! \n');

console.log('Please refer to the instructions below:');
console.log('1.' + 'For every correct answer you get 3 points');
console.log('2.' + 'For the wrong answer you do not lose any');
console.log('3.' + 'You only need to enter the option number and not the whole answer.');
console.log('4.' + 'After 5 questions you move to next level, if you get at least 3 correct answers in the current level!');
console.log('5.' + 'As a response to a question, use only numbers that corresponds to particular question \n');
console.log('I HOPE YOU WILL HAVE FUN PLAYING THIS GAME!!! \n');
console.log("------------------------------------------------------------");

var playTime = [

  {
    option : ['Zindagi Na Milegi Dobara', '3 Idiots', 'Jab We Met', 'Mein Prem Ki Diwani Hu'],
    answer: 'Zindagi Na Milegi Dobara',
    question: 'Question 1-> Yeh the mentally the sick ho chuka hai'
  },
  {
    option: ['Zindagi Na Milegi Dobara', '3 Idiots', 'Jab We Met', 'Mein Prem Ki Diwani Hu'],
    answer: 'Jab We Met',
    question: 'Question 2-> Mein Apni Favorite Hu'
  },
  {
    option: ['Zindagi Na Milegi Dobara', '3 Idiots', 'Dil To Pagal Hai', ' Dabangg'],
    answer: 'Dil To Pagal Hai',
    question: 'Question 3-> Rahul, naam to suna hoga'
  },
  {
    option: ['Zindagi Na Milegi Dobara', '3 Idiots', 'Jab We Met', 'Phir Hera Pheri'],
    answer: 'Phir Hera Pheri',
    question: 'Question 4-> Yeh Baurao ka Style Hai'
  },
  {
    option: ['Zindagi Na Milegi Dobara', 'Mr India', 'Jab We Met', ' Dabangg'],
    answer: 'Mr India',
    question: 'Question 5-> Mogambo Khush Hua'
  },
  {
    option: ['Zindagi Na Milegi Dobara', 'Mr India', 'Jab We Met', 'Dilwale Dulhania Le Jayenge'],
    answer: 'Dilwale Dulhania Le Jayenge',
    question: 'Question 6-> Jaa Simran, jaa. Jeele apni zindagi'
  },
  {
    option: ['Kuch Kuch Hota Hai', 'Mr India', 'Jab We Met', ' Dabangg'],
    answer: 'Kuch Kuch Hota Hai',
    question: 'Question 7-> Tussi ja rahe ho? Tussi na jao'
  },
  {
    option: ['Zindagi Na Milegi Dobara', 'Mr India', 'Sholay', ' Dabangg'],
    answer: 'Sholay',
    question: 'Question 8-> Kitne aadmi the?'
  },
  {
    option: ['Zindagi Na Milegi Dobara', 'Mr India', 'Jab We Met', 'Om Shanti Om'],
    answer: 'Om Shanti Om',
    question: 'Question 9-> Ek chutki sindoor ki keemat tum kya jaano Ramesh Babu'
  },
  {
    option: ['Zindagi Na Milegi Dobara', 'Rangeela', 'Jab We Met', 'Dabangg'],
    answer: 'Rangeela',
    question: 'Question 10-> Uska toh na bad luck hi kharab hai'
  },
  {
    option: ['Zindagi Na Milegi Dobara', 'Mr India', 'Jab We Met', 'Dabangg'],
    answer: 'Dabangg',
    question: 'Question 11-> Thapad se darr nahi lagta sahab pyar se lagta hai'
  },
  {
    option: ['Chennai Express', 'Mr India', 'Jab We Met', ' Dabangg'],
    answer: 'Chennai Express',
    question: 'Question 12-> Don’t underestimate the power of a common man'
  },
  {
    option: ['Zindagi Na Milegi Dobara', 'Mr India', 'Yeh Jawani Hai Deewani', ' Dabangg'],
    answer: 'Yeh Jawani Hai Deewani',
    question: 'Question 13-> Life mein jitna bhi try karo, kuch na kuch toh chootega hi. Isliye yahin, isi pal ka mazza lete hain'
  },
  {
    option: ['Zindagi Na Milegi Dobara', 'Golmaal 3', 'Jab We Met', ' Dabangg'],
    answer: 'Golmaal 3',
    question: 'Question 2-> Abe Jaldi Bol Kal Subah Panvel Nikalna Hai'
  },
  {
    option: ['Zindagi Na Milegi Dobara', 'Golmaal 3', 'Jab We Met', 'Welcome'],
    answer: 'Welcome',
    question: 'Question 15-> Control Uday Control'
  },
];

var score = 0;

function quiz(optionsArr, question, answer){
  var index = readlineSync.keyInSelect(optionsArr, question);
  if(optionsArr[index]===answer){
    console.log('Right');
    score=score+3;
    console.log('Your score is : ' + score);
  } else {
    console.log('Wrong!');
    console.log("The correct answer is " + answer);
    score=score-1;
    console.log('Your score is : ' + score);
  }
  console.log("------------------------------------------------------------");
  readlineSync.question("Press Enter Key To Go To Next Question") , {
    hideEchoBack: true,
    mask: ""
  };
}

if(score<0){
  score = 0;
}

for(var i=0;i < playTime.length-10; i++){

  quiz(playTime[i].option,playTime[i].question, playTime[i].answer);
}


if(score > 8)
{
  console.log("Congrats! You moved to another level ");
  for(var i=playTime.length-10;i < playTime.length-5; i++) {
  quiz(playTime[i].option,playTime[i].question, playTime[i].answer);
  }
}
else{
  console.log("You must get 3 questions right to move to another level");
  console.log("Your final score is: " +score);
}

if(score > 16)
{
  console.log("Congrats! You moved to another level ");
  for(var i=playTime.length-5;i < playTime.length; i++) {
  quiz(playTime[i].option,playTime[i].question, playTime[i].answer);
  }
}

var highscores = [
  {
    name: "Ross",
    score1: 6
  },
  {
    name: "Joey",
    score1: 5
  },
  {
    name: "Chandler",
    score1: 4
  },
  {
    name: "Phoebe",
    score1: 3
  },
  {
    name: "Rachel",
    score1: 2
  },
  {
    name: "Monica",
    score1: 1
  },
]

console.log("Highscores");

var max = highscores[0].score1;
for(var i = 0;i<highscores.length;i++)
{
  if(highscores[i].score1>max){
    max = highscores[i].score1;
  }
}

if(score>max)
{
  highscores[0].score1=score;
  highscores[0].name=userName;
  console.log("Congrats!! You have beaten the highscore");
}
else {
  console.log("Better Luck Next Time!");
}

console.table(highscores);

if(readlineSync.keyInYN("Please rate the game by answering in Y(yes) or N(no)")){
  console.log("Thank You so much ! It means a lot");
}
else{
  ("Thank you! I will continue improving on this!");
}

console.log(' \n I would really apppreciate if you could share this game with your friends. Everyone should have fun <3');