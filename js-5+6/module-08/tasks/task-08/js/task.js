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


function focusInput() { 
  console.log("Input is in focus!");
} 

function inputCurentValue() {
  //event.preventDefault();
 const inputCurentText = input.value; 
 //inputCurentText = input.value; 
    console.log('inputCurentText:', inputCurentText); 
 //const pTitle = p.textContent;
  //pTitle + inputcurentValue;
  p.textContent = pTitle + inputCurentText;

      //console.log(pTitle);
  return;    
}

input.addEventListener('focus', focusInput, true);
input.addEventListener('keyup', inputCurentValue, true);