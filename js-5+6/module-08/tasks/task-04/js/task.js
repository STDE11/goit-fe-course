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




form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  
  //console.log('value:', inptChecked.value);
  const inptChecked = form.querySelector(":checked");
  let textResult =  inptChecked.value;

  let p = document.querySelector('.result');
  let result = p.textContent;

    //console.log('result:', result);
  
  return p.textContent = `${result} ${textResult}`;
  
  
}; 





