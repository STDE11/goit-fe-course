'use strict';


//Task - 06

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/

const list = document.querySelector('.list');

list.addEventListener('click', handleClick);

function handleClick() {
  const target = event.target;
  //console.log("event target: ", target);

  const parentClick = target.parentNode;
  //console.log(parentClick);

  //если цель не кнопка - выходим из функции.
  
  if (target.nodeName === "BUTTON") 
    //console.log('nodeName:', target.nodeName);
  parentClick.remove();
  return;

  //const parentClick = target.parentNode;
  //console.log(parentClick);
}     