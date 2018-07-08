'use strict';
//Task - 01

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

const checkNumberType = (num) => {
    return num % 2 === 0
        ? 'Even'
        : 'Odd';
};
// Вызовы функции для проверки
console.log(checkNumberType(2)); // 'Even'

console.log(checkNumberType(46)); // 'Even'

console.log(checkNumberType(3)); // 'Odd'

console.log(checkNumberType(17)); // 'Odd'

console.log(checkNumberType(31)); // 'Odd'

console.log(checkNumberType(22)); // 'Even'



//Task - 02

/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

const formatString = (str) => {
    return str.length <= 40
        ? str
        : `${str.slice(0, 40)} ...`;
}

// Вызовы функции для проверки
console.log(
    formatString("Curabitur ligula sapien, tincidunt non.")
); // вернется оригинальная строка 

console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
); // вернется форматированная строка

console.log(
    formatString("Curabitur ligula sapien.")
); // вернется оригинальная строка

console.log(
    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
); // вернется форматированная строка



//Task - 03

/* 

  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

//let spamWords = ['spam', 'sale'];
//console.log(spamWords);

const checkForSpam = function (str) {

    let strModf = str.toLowerCase();
    console.log(strModf);
    return (strModf.includes('spam') || strModf.includes('sale'));
};



// Вызовы функции для проверки
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true






//Task - 04

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/


const getPx = (str) => {

    return typeof str === 'string'
        ? Number.parseFloat(str)
        : null;
}


// Вызовы функции для проверки
console.log(getPx("10px") === 10); // должно быть:  true
console.log(getPx("10.5") === 10.5); // должно быть:  true
console.log(getPx("0") === 0); // должно быть:  true
console.log(getPx(-1)); // должно быть:  null
console.log(getPx(10)); // должно быть:  null




//Task - 05

/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

const findLongestWord = (str) => {
    let strSplit = str.split(" ");
    let lonWword = '';
    for (let i = 0; i < strSplit.length; i += 1) {
        if (lonWword.length < strSplit[i].length) {
            lonWword = strSplit[i];
        }
    }
    return lonWword;
}

// Вызовы функции для проверки
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
    findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
    findLongestWord("May the force be with you")
); // вернет 'force'






//Task - 06

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

const findLargestNumber = (numbers) => {
    let numbersMax = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbersMax < numbers[i])
            numbersMax = numbers[i];
    };
    return numbersMax;
}

// Вызовы функции для проверки
console.log(
    findLargestNumber([1, 2, 3])
); // вернет 3

console.log(
    findLargestNumber([27, 12, 18, 5])
); // вернет 27

console.log(
    findLargestNumber([31, 128, 14, 74])
); // вернет 128



//Task - 07

/* 

//===================================
Почему если не задать параметром rest выдает ошибку?
//===================================
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers = [2, 1, 4, 9];

const addUniqueNumbers = (...num) => {
    for (const item of num) {
        // console.log(item);
        if (!uniqueNumbers.includes(item)) {
            uniqueNumbers.push(item);
        }
    };
    return uniqueNumbers;
};


// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(
    uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
    uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
    uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]






//Task - 08

/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/

const removeFromArray = (...arr) => {
    const arrShift = arr.shift();
    for (const item of arr) {
        for (let i = 0; i < arrShift.length; i += 1) {
            if (item === arrShift[i])
                arrShift.splice(i, 1);
        };
    };
    return arrShift;
};

// Вызовы функции для проверки
console.log(
    removeFromArray([1, 2, 3, 4, 5], 2, 4)
); // [1, 3, 5]

console.log(
    removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]
