'use strict';


//Task - 02

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/


// let time = 1523621052858;
// const time = new Date(1523621052858);

// console.log(time);
// //console.log(time.getTime());

// console.log("getMinutes(): " + time.getMinutes());

// console.log("getSeconds(): " + time.getSeconds());

// console.log("getMilliseconds(): " + parseInt(time.getMilliseconds()/100, 10));

//const time = 1523621052858;

function getFormattedTime(time) {
  const data = new Date(time);

  const min = data.getMinutes() + '';
  const minutes = min < 10 ? 0 + min : min;
  
  const sec = data.getSeconds()+'';
  const seconds = sec < 10 ? 0 + sec : sec;

  const ms = Number.parseInt(data.getMilliseconds() / 100);
  
  return `${minutes}:${seconds}.${ms}`
}






console.log(
  getFormattedTime(1523621052858)
); // 04:12.8

console.log(
  getFormattedTime(1523621161159)
); // 06:01.1

console.log(
  getFormattedTime(1523621244239)
); // 07:24.2

console.log(
  getFormattedTime(new Date().getTime())
); // 07:24.2



