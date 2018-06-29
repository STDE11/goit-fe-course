'use strict';
//Task - 01

/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users.length); // 4

console.log(users[1]); // Poly
console.log(users[3]); // Chelsey
console.log(users[0]); // Mango
console.log(users[2]); // Ajax


//Task - 02

/* Есть массив имен пользователей */

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

/* Используя методы массива, последовательно выполнить следующие операции */

// Удалить из начала массива нулевой элемент
users.shift();
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент
users.pop();
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя
users.unshift('Salli');
console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
users.push('Derby', 'Lion');
console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]


//Task - 03

/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

let string = prompt('ввести произвольную строку');
console.log(string);

// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
let arr = string.split(' ');
console.log(arr);


// Вывести в консоли общую длину массива arr
console.log(arr.length);

// Используя цикл, вывести в консоль все индексы массива arr
for (let i in arr) {
    console.log(i);
}
// Используя цикл, вывести в консоль все элементы массива arr
for (let i of arr) {
    console.log(i);
}
// Используя цикл, bывести в консоли все пары индекс:значение массива arr
for (let i = 0; i < arr.length; i += 1) {
    console.log(`${i}:${arr[i]}`);
}




//Task - 04

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
let input = 0;
let user;
do {
    user = prompt('Введите число больше 100', '');
    input = Number(user);

    if (user === null) {
        break;
    }
    if (input === NaN) {
        break;
    }
} while (input <= 100);
  //while(input <= 100);// && (input !== Null)); 

  //while(input !== Null);
  //while(input <= 100);



//Task - 05

/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

const min = 1;
const max = 100;

for (let i = min; i <= max; i += 1) {
    if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
} 


//Task - 06

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const newArray = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > num) {
        newArray.push(numbers[i]);
    }
}

console.log(newArray);


//Task - 07

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const string = "May the force be with you";
let longestWord = ''; //Пока не указал пустую строку программа не заработала. почему?
//console.log(Number(longestWord));
let strSplit = string.split(' ');
//console.log(strSplit);
//console.log(strSplit.length);
for (let i = 0; i < strSplit.length; i += 1) {                               //console.log(strSplit[i].length);

    if (strSplit[i].length > longestWord.length) {
        longestWord = strSplit[i];
    }
}
console.log(longestWord);
 // 'force'





//Task - 08

/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  
  - Заканчивает запрашивать числа, как только посетитель введёт не число 
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

let userInput;
let userArr = [];

do {
    userInput = Number(prompt('Введите число'));
    // Не срабатывает Cncl
    if (userInput === NaN) {
        break;
    }
    if (userInput === null) {
        break;
    }

    console.log(userInput);
    userArr.push(userInput);
} while (userInput <= 100);

console.log(userArr);

let sum = 0;
for (let i = 0; i < userArr.length; i += 1) {
    sum += userArr[i];

}
console.log(sum);



//Task - 09

/*
  ***ЗАДАНИЕ ПОВЫШЕНОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

const numbers = [12, 15, 25, 37, 41];
let min = numbers[0];
let longest = numbers.length;
let max = numbers[longest - 1];
let message = 'Сожалеем, Вы не угадали!';
let userInput = Number(prompt(`Введите число от ${min} до ${max}`));

if (Number.isNaN(userInput)) {
    message = 'Вы ввели не число!';
} for (let item of numbers) {
    if (item === userInput) {
        message = 'Поздравляем, Вы угадали!';
        break;
    }
}

alert(message);
