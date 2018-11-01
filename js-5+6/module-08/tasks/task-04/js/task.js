'use strict';


//Task - 04

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/

const form = document.querySelector(".question-form");
//const inptChecked = form.querySelector(":checked");
const inptChecked = form.querySelector("input");
console.log('value:', inptChecked.value);
const result = document.querySelector(".result");
//const value = document.querySelector('.js-value');

    

function formSubmit(event) {
  event.preventDefault();
  const textResult = result + '' + inptChecked.value;
  //const addValue = Number(value.textContent) + 1;
  return result.textContent = textResult;
  //return value;
  
}; 

form.addEventListener("click", formSubmit);



