'use strict';


//Task - 07

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/



const inputs = document.querySelector('.inputs');

inputs.addEventListener('blur', lossOfFocus, true);

function lossOfFocus() {
  const target = event.target;
  const targetLength = +target.dataset.length;
      //console.log('targetLength:', targetLength);
  console.log('typeofTargetLength:', typeof targetLength);
      //const targetValue = target.value;
  const targetValueLength = target.value.length;
      //console.log('targetValue:', targetValue);
      //console.log('targetValueLength:', targetValueLength);
  
  if (targetValueLength === targetLength) {
    target.style.outline = '2px solid green'; 
  } else {
    target.style.outline = '2px solid red';
  };

     

  return;
  
  

};