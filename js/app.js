'use strict';

// User Name

var userName = prompt('Hello! Welcome! What is your name?');
alert('Hey there ' + userName + '! Let\'s start with a little guessing game about me \:\)');
console.log('The user\'s name is' + userName);

// Question 1

var answerOne = prompt('Do I like spicy food?').toLowerCase();

if (answerOne === 'no' || answerOne === 'n') {
  alert('That\'s true, I really can\'t do more than 1 star');
  console.log('User got the correct answer to question 1');
} else {
  alert('sadly no... I have no tolerance');
  console.log('User got the wrong answer to question 1');
}

// Question 2

var answerTwo = prompt('Did I ever travel to Argentina?').toLowerCase();

if (answerTwo === 'no' || answerTwo === 'n'){
  alert('That\'s correct, but it\'s on my list!');
  console.log('User got the correct answer to question 2');
} else {
  alert('sadly, I did not, but would love to go some day!');
  console.log('User got the wrong answer to question 2');
}

// Question 3

var answerThree  = prompt('Did I ever live in Texas?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y'){
  alert('I sure did! And now I want a breakfast burrito...');
  console.log('User got the correct answer to question 3');
} else {
  alert('I actually did, but I didn\'t get to keep the accent');
  console.log('User got the wrong answer to question 3');
}

// Question 4

var answerFour = prompt('Am I a linsenced diving instructor?').toLowerCase();
if (answerFour === 'no' || answerFour === 'n'){
  alert('That\'s right. I like scuba diving, but that\'s about it');
  console.log('User got the correct answer to question 4');
} else {
  alert('Unfortunately, I\'m not that cool');
  console.log('User got the wrong answer to question 4');
}

// Question 5

var answerFive = prompt('Do I like baking pies?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y'){
  alert('Yeah, I do. My favorite is pumkin');
  console.log('User got the correct answer to question 5');
} else {
  alert('In fact I do. You might like it too if you gave it a try');
  console.log('User got the wrong answer to question 5');
}



