'use strict';


//Task - 05

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Используйте делегирование.
*/





const images = document.querySelector('.images');

images.addEventListener('click', handleImagesClick);

function handleImagesClick() {
  const target = event.target;
  //console.log("src: ", target.src);
  alert(`src: ${target.src}`);

}