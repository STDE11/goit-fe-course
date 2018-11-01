'use strict';


//Task - 01
/*
  Напишите скрипт который реализует следующий функционал.
  
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const button = document.querySelector(".button");

function counterButtonClick() {
  const count = Number(button.textContent);
  const countAdd = count + 1;
  return button.textContent = countAdd;
  
};

button.addEventListener("click", counterButtonClick);