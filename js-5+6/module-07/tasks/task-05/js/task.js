'use strict';


//Task - 05

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/


// const list = document.querySelector('.size-filter');
//     console.log('list:', list);



function getInputsData(inputs) {
	const result = inputs.map(input => input.value);
	return result;
};


const inputs = Array.from(document.querySelectorAll(':checked'));
console.log(getInputsData(inputs));
