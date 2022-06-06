'use strict';
/*
console.log(document.querySelector('.guessing').textContent);

document.querySelector('.guessing').textContent = 'Correct Number🙈';

document.querySelector('.qmark').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.inp').value = 23;
console.log(document.querySelector('.inp').value);

*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.inp').value);
  console.log(input);

  // when there is no input
  if (!input) {
    document.querySelector('.guessing').textContent = 'No Number🙈';
    // guess is below 0
  } else if (input < 0 || input > 20) {
    document.querySelector('.guessing').textContent =
      'Type the number between 1 and 20';
    score--;
    document.querySelector('.score').textContent = score;
    // player wins
  } else if (secretNumber === input) {
    document.querySelector('.guessing').textContent = 'Correct Number!🙌';
    document.querySelector('.qmark').textContent = secretNumber;
    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //body color green
    document.querySelector('body').style.backgroundColor = 'rgb(142, 226, 59)';
    //btn again color pink
    document.querySelector('.btn').style.backgroundColor = 'rgb(130,100,100)';
    //button check color pink
    document.querySelector('.check').style.backgroundColor = 'rgb(130,100,100)';
    //input border color pink
    document.querySelector('.container-left .inp').style.border =
      '4px solid rgb(130,100,100)';
    //input color pink
    document.querySelector('.container-left .inp').style.backgroundColor =
      'rgb(130,100,100)';
    //questionmark color pink
    document.querySelector('.qmark').style.backgroundColor = 'rgb(130,100,100)';
    //border radius color pink
    document.querySelector('header').style.borderBottom =
      '7px solid rgb(130,100,100)';
    //text color red
    document.querySelector('.guess').style.color = 'red';
    document.querySelector('.p1').style.color = 'red';
    document.querySelector('.guessing').style.color = 'red';
    document.querySelector('.container-left .inp').style.color = '#333';
    document.querySelector('.p-score').style.color = 'red';
    document.querySelector('.p-highscore').style.color = 'red';
    //questionmark width
    document.querySelector('.qmark').style.width = '19rem';

    // guess is too high
  } else if (input > secretNumber) {
    document.querySelector('.guessing').textContent = '📈 Too high';
    score--;
    document.querySelector('.score').textContent = score;
    // guess is too low
  } else if (input < secretNumber) {
    document.querySelector('.guessing').textContent = '📉 Too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
  //end of game
  if (score <= 0) {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guessing').textContent = 'You Lost😜, Play Again?';
  }
});

//Play again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.guessing').textContent = 'Start guessing...';
  document.querySelector('.qmark').textContent = '?';
  document.querySelector('.inp').value = '';

  //
  document.querySelector('body').style.backgroundColor = '#333';
  //btn reset
  document.querySelector('.btn').style.backgroundColor = 'rgb(199, 199, 199)';
  //button reset
  document.querySelector('.check').style.backgroundColor = 'rgb(199, 199, 199)';
  //input border reset
  document.querySelector('.container-left .inp').style.border =
    '4px solid rgb(199, 199, 199)';
  //input reset
  document.querySelector('.container-left .inp').style.backgroundColor = '#333';
  //questionmark reset
  document.querySelector('.qmark').style.backgroundColor = 'rgb(199, 199, 199)';
  //border radius reset
  document.querySelector('header').style.borderBottom =
    '7px solid rgb(199, 199, 199)';
  //text color reset
  document.querySelector('.guess').style.color = '#fff';
  document.querySelector('.p1').style.color = '#fff';
  document.querySelector('.guessing').style.color = '#fff';
  document.querySelector('.container-left .inp').style.color = '#fff';
  document.querySelector('.p-score').style.color = '#fff';
  document.querySelector('.p-highscore').style.color = '#fff';
  //questionmark reset
  document.querySelector('.qmark').style.width = '12rem';
});
