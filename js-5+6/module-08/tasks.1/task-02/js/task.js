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
        //console.log('arrGetInputs', arrGetInputs);
  //const sumInputs = arrGetInputs.reduce((acc, arrGetInput) => acc + Number(arrGetInput.placeholder||arrGetInput.value), 0);
  //const sumInputs = arrGetInputs.reduce((acc, arrGetInput) => acc + Number(arrGetInput.placeholder), 0);
  const sumInputs = arrGetInputs.reduce((acc, arrGetInput) => acc + Number(arrGetInput.value 
                                                                            ? arrGetInput.value 
                                                                            : arrGetInput.placeholder), 0);
        //console.log(sumInputs);
  return result.textContent = sumInputs;
  //return sumInputs;
}; 
button.addEventListener("click", addGetInputs);
//getInputs.addEventListener("click", addGetInputs);
//const getInputs = document.querySelector('input').placeholder;
//const getInputs = Array.from(document.querySelectorAll('input'));
//console.log('getInputs', getInputs); 
//const inputTextContent = getInputs.textContent;

//console.log('inputTextContent', inputTextContent);
//const inpustValue = getInputs.map(input => Number(input.textContent) //!== NaN 
//                                            ? let valueInput = Number(input.textContent) 
//                                            : valueInput = 0);
//);
//console.log(inpustValue); 

//Number(input.textContent) !== NaN ? const valueInputt = Number(input.textContent) : valueInput = 0;
