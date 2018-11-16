'use strict';


//Task - 08

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/


const input = document.querySelector('.input');
const p = document.querySelector('.input-value');
//const inputCurentText = '';
const pTitle = p.textContent;

input.addEventListener('focus', focusInput, true);
input.addEventListener('input', inputCurentValue, true);

function focusInput() { 
  console.log("Input is in focus!");
} 

function inputCurentValue() {
  
  const inputCurentText = input.value; 
 
  console.log('inputCurentText:', inputCurentText); 
 
  p.textContent = pTitle + inputCurentText;

  return;    
}

