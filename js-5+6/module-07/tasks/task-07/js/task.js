'use strict';


//Task - 07

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
function createBoxes(num) {
  // const body = document.body;
  //console.log('body:', body);

  const root = document.getElementById('root');
  //console.log('root:', root);

  const box = document.createElement('div');
  box.setAttribute('class', 'box')
  //console.log('box:', box);

  // const getRandomRgb = function() {
  //   const r = Math.round(Math.random()*256);
  //   const g = Math.round(Math.random()*256);
  //   const b = Math.round(Math.random()*256);
  //   return rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  // }

  function getRandomRgb() {
    
    const r = Math.round(Math.random() * 256);
    const g = Math.round(Math.random() * 256);
    const b = Math.round(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';

  }

  for (let i = 0; i < num; i += 1) {
    const div = document.createElement('div');

    div.textContent = 'div';
    div.style.background = getRandomRgb();
    div.style.width = (30 + 10 * i) + 'px';
    div.style.height = (30 + 10 * i) + 'px';
    //console.log('div:', div);
    box.appendChild(div);
  }

  root.appendChild(box);
  return root;
};

console.log(createBoxes(6));