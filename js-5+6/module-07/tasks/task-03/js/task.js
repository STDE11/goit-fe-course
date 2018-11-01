'use strict';


//Task - 03
/*
  Дан ul с классом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

const list = document.querySelector('.list');
// const item = document.createElement('li');

// const addedItems = elements.map(element => item.textContent = 'element'
//                                 list.append(item));
// console.log(addedItems);
// console.log(list);

const markup = elements.reduce((string, item) => string + `<li>${item}</li>`, "");
list.innerHTML = markup;