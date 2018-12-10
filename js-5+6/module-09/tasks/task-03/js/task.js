'use strict';


//Task - 03

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

let time;
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

function startTimer() {
  timer.startTime = Date.now();
      //console.log('startTime', timer.startTime);
  timer.id = setInterval(() => {
    const currentTime = Date.now();
    //timer.deltaTime = currentTime - timer.startTime;
    timer.deltaTime = currentTime - timer.startTime;
   return time = new Date(timer.deltaTime);

    

    console.log('time ', time);}, 1000);
      //console.log('id', timer.id);
  //timer.deltaTime = timer.id - timer.startTime;
  //console.log('deltaTime:', timer.deltaTime);

}

function stopTimer() {
  clearInterval(timer.id);
}


function getFormattedTime(time) {
  const data = new Date(time);

  const min = data.getMinutes() + '';
  const minutes = min < 10 ? 0 + min : min;

  const sec = data.getSeconds() + '';
  const seconds = sec < 10 ? 0 + sec : sec;

  const ms = Number.parseInt(data.getMilliseconds() / 100);

  return `${minutes}:${seconds}.${ms}`
}



/*
* Вспомогательные функции
*/

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(elem, time) {
  // Используйте функцию getFormattedTime из задания #1
  // elem.textContent = getFormattedTime(time);
}

/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if (target.classList.contains('active')) {
    return;
  }

  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');

  target.classList.add('active');
}
