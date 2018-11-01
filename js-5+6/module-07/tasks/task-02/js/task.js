'use strict';


//Task - 02
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/


const body = document.body;
console.log('body:', body);
const list = body.querySelector('.list');
console.log('list:', list);
const listFirstElementChild = list.firstElementChild;
listFirstElementChild.style.color = 'red';
console.log('listFirstElementChild:', listFirstElementChild);
const listLastElementChild = list.lastElementChild;
listLastElementChild.style.color = 'blue';
