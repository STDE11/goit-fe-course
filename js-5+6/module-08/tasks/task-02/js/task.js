'use strict';


//Task - 02

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

const button = document.querySelector("button");
const result = document.querySelector('.result')



function addGetInputs() {
  const getInputs = document.querySelectorAll('input');
  const arrGetInputs = Array.from(getInputs);
  const sumInputs = arrGetInputs.reduce((acc, arrGetInput) => acc + Number(arrGetInput.value 
                                                                            ? arrGetInput.value 
                                                                            : arrGetInput.placeholder), 0);
  return result.textContent = sumInputs;
  
}; 
button.addEventListener("keydown", addGetInputs);
