'use strict';


//Task - 03

/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.
*/

const btnSub = document.querySelector(".js-sub");
const btnAdd = document.querySelector(".js-add");
const value = document.querySelector('.js-value');

    

function addSpan() {
  const addValue = Number(value.textContent) + 1;
  value.textContent = addValue;
  return value;
  
}; 

btnAdd.addEventListener("click", addSpan);



function subSpan() {
  const subValue = Number(value.textContent) - 1;
  value.textContent = subValue >= 0 ? subValue : 0;
  return value;
};

btnSub.addEventListener("click", subSpan);
