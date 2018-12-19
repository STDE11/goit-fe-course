'use strict';

//HW-03


/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину, от 4 до 16-ти символов включительно
    - быть уникален, тоесть еще не используется в массиве logins
 
  🔔 Разбейте задачу на подзадачи, что удобно решить используя функции.
  
  Для начала напишите функцию checkLoginValidity(login) которая получает логин как 
  аргумент, проверяет количество символов логина и возвращает true если логин подходит 
  под условие длины от 4-х до 16-ти символов включительно, и false если не подходит. 
  Убедитесь что функция работает верно.
 
  Далее создайте функцию checkIfLoginExists(logins, login), которая получает логин и список 
  всех логинов как аргументы, проверяет наличие логина в массиве logins, возвращая false 
  если такого логина в массиве еще нет, и true если есть. Убедитесь что функция работает верно.
  Далее напишите функцию addLogin(logins, login) которая:
    - Получает новый логин и массив всех логинов как аргументы
    
    - Проверяет валидность логина используя вспомогательную функцию checkLoginValidity
      
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
      
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции checkIfLoginExists
       
    - Если checkIfLoginExists вернет false, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
       
    - Если checkIfLoginExists вернет true, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции:
      - checkIfLoginExists только проверяет есть ли такой логин и возвращает true или false. 
        Больше ничего не делает.
      
      - checkLoginValidity только проверяет  валидный ли логин и возвращает true или false. 
        Больше ничего не делает.
      
      - addLogin вызывает обе функции и по результату их работы или добавляет логин в logins или нет, 
        возвращая указанные строки. Больше ничего не делает.
*/

//const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

//const login = prompt('Введите новый login:');


// const ERR_LOGIN_SHORT_LONG = 'Ошибка! Логин должен быть от 4 до 16 символов';
// const LOGIN_IS_ADDED = 'Логин успешно добавлен!';
// const LOGIN_IS_BUSY = 'Такой логин уже используется!';


// //проверяет количество символов логина
// const checkLoginValidity = elm =>
//   (4 <= elm.length && elm.length <= 16);

// //проверяет наличие логина в массиве logins
// const checkIfLoginExists = (elms, elm) =>
//   elms.includes(elm);




// function addLogin(elms, elm) {
//   if (elm !== null) {
//   if (!checkLoginValidity(elm)) {
//     alert(ERR_LOGIN_SHORT_LONG);
    
//   } else {
//     if (!checkIfLoginExists(elms, elm) ) {
//       elms.push(elm);
//       alert(LOGIN_IS_ADDED);
           
//           } else {
//       alert(LOGIN_IS_BUSY);
//           }
//   }

// }
// }
 
// addLogin(logins, login);
// console.log(logins);

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const login = 'Mangogfh';


const ERR_LOGIN_SHORT_LONG = 'Ошибка! Логин должен быть от 4 до 16 символов';
const LOGIN_IS_ADDED = 'Логин успешно добавлен!';
const LOGIN_IS_BUSY = 'Такой логин уже используется!';


//проверяет количество символов логина
const checkLoginValidity = elm =>
  (4 <= elm.length && elm.length <= 16);

//проверяет наличие логина в массиве logins
const checkIfLoginExists = (elms, elm) =>
  elms.includes(elm);




function addLogin(elms, elm) {
  if (elm !== null) {
    if (!checkLoginValidity(elm)) {
      console.log(ERR_LOGIN_SHORT_LONG);
      
    } else {
      if (checkIfLoginExists(elms, elm)) {
        console.log(LOGIN_IS_BUSY);

      } else {
        elms.push(elm);
        console.log(LOGIN_IS_ADDED);
      }
    }

  }
}

addLogin(logins, login);
console.log(logins);


