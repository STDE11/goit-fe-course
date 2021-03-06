'use strict';


//Task - 10

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/



document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.js-menu');
  const links = menu.querySelectorAll('.menu-link');
  
  menu.addEventListener('click', handMenuItemClick);
  
  function handMenuItemClick({target}) {
    const nodeName = target.nodeName;
    event.preventDefault();
    
    if(nodeName !== 'A') return;
    setActiveLink(links, target)
    
    }

  function setActiveLink(links, target) {
    links.forEach(link => {
      if(link !== target) {
        link.classList.remove('menu-link-active');
      } else {
        link.classList.add('menu-link-active');
      }
    })
  }

});
    