'use strict';


//Task - 01
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
//const body = document.body;

//const list = body.firstElementChild;
const list = document.querySelector('.categories');
//console.log('list:', list);


const items = list.children;
const arrItems = Array.from(items);

function content(elem) {
  const firstChild = elem.firstChild;

  const firstElementChild = elem.firstElementChild;

  const firstElementChildChildrenLength = firstElementChild.children.length;

  console.log('Категория:', firstChild, 'Количество вложенных li:', firstElementChildChildrenLength);
};
const message = arrItems.map(arrItem => content(arrItem));


