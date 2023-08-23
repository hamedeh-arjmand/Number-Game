"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct Number!";

// document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);
const score = Number(document.querySelector('.score'));
const secretNumber = 18;
const x = function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  }else if(guess < secretNumber){
   document.querySelector('.message').textContent = '📉Too Low';
   score = score-1 ;
   document.querySelector('.score').textContent=score;
  }else if{
   document.querySelector('.message').textContent='📈 Too High!';
  }
};

document.querySelector(".check").addEventListener("click", x);

const Y= function(){
  document.querySelector('.score').value ='20';
  document.querySelector('.highScore')='0';
  document.querySelector('.message');
  document.querySelector('.number');
  

}

const again = document.querySelector('again');
document.querySelector('.again').addEventListener('clic',Y);