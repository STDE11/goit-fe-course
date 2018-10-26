'use strict';


//Task - 01
/*
  Напишите скрипт который реализует следующий функционал.
  
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const button = document.querySelector(".button");

//button.addEventListener("click", counterButtonClick);
const counterButtonClick = () => {
    //let count = 0;
    function counter() {
        let count = 5;
        function addedCount() {
            count += 1;
            return count;
            // console.log(count);      //   }
            // return button.textContent = 'count';
            // console.log(count);
        };
        //return button.textContent = 'count';
        //console.log(count);
        return button.textContent = counter;
    };
};

button.addEventListener("click", counterButtonClick);


//======================================================




//Task - 02

//======================================================




//Task - 03

//======================================================




//Task - 04

//======================================================




//Task - 05

//======================================================






