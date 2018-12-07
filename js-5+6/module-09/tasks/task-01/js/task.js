'use strict';


//Task - 01
/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
// const color = Math.round(Math.random() * 6);
// console.log(colors[color])
const body = document.querySelector('body');
const btnStart = document.querySelector('.js-start');
const btnStop = document.querySelector('.js-stop');
let timerId = null;
let clr = 0;


btnStart.addEventListener("click", handlClickStart);
btnStop.addEventListener("click", handlClickStop);

function handlClickStart () {
  timerId = setInterval(changeColorBcg, 1000);
}

function changeColorBcg() {
   clr = Math.round(Math.random() * 6);
  //console.log(colors[clr]);
  body.style.background = colors[clr];
}

function handlClickStop() {
  clearInterval(timerId);
}

// console.log(colors[clr]);
//body.style.background = colors[1];