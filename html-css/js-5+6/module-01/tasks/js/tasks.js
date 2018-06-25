'use strict';
//Task - 01

/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/
const name = 'Mango';
let guest = name;
console.log(guest); // 	Mango


//Task - 02

/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

const day = 02;
const month = 10;
const year = 2017;

const date = day + "\\" + month + "\\" + year;

console.log(date); // 02\10\2017


//Task - 03

/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

const name = prompt('Please enter youre name:');
alert(name);


//Task - 04

/*
  Есть две переменные name и date, roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

const name = 'Mango';
const date = '14/08/2031';
const roomType = 'люкс';

const message = `${name} прибывает на отдых ${date} в ${roomType}.`;

console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.


//Task - 05

/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth = Number.parseInt(padding) + Number.parseInt(border) + Number.parseInt(contentWidth) + "px";

console.log(totalWidth); // '125px'


//Task - 06

/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/

let dataYear = prompt('Какой сейчас год?:');
let massege;
if (dataYear === '2018') { massege = 'Все верно!' }
else { massege = 'Но ведь на вдоре 2018!' };
alert(massege);


//Task - 07

/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/

let num = prompt('Введите произвольное целое число:');
let pnum = Number(num);

console.log(num);
console.log(pnum);
let message;
if (num === null) {
    message = 'Приходите еще!';
} else if (Number.isNaN(pnum)) {
    message = 'Необходимо было ввести целое число!';
} else if (Number.isInteger(pnum)) {
    message = 'Спасибо!';
} else {
    message = 'Необходимо было ввести целое число!';
}
console.log(message);



//Task - 08

/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

const num = Number.parseInt(Math.random() * 100);

let type = Number.isInteger(num / 2) ? "even" : "odd";

console.log(`${num} is ${type}`);



//Task - 09

/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

let hours = 7;
let minutes = 3;
let seconds = 42;

hours = hours.toFixed()

hours = hours.length === 1 ? 0 + hours : hours;

//console.log('hrs: ', hours);

minutes = minutes.toFixed()

minutes = minutes.length === 1 ? 0 + minutes : minutes;

//console.log('mnts: ', minutes);

seconds = seconds.toFixed()

seconds = seconds.length === 1 ? 0 + seconds : seconds;

//console.log('scnds: ', seconds);

const time = `${hours}:${minutes}:${seconds}`;

console.log('Time is: ', time);




//Task - 10

/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

let num = prompt('Выбеите отель, введите число от 1-5:');
if (num === null) {
    alert('Очень жаль, приходите еще!');
} else if (Number.isNaN(num)) {
    alert('Неверный ввод, возможные варианты 1-5!')
} else if (1 <= num <= 5) {
    switch (num) {
        case '1':
            alert('Каталог хостелов');
            break;
        case '2':
            alert('Каталог бюджетных отелей');
            break;
        case '3':
            alert('Каталог отелей ***');
            break;
        case '4':
            alert('Каталог отелей ****');
            break;
        case '5':
            alert('Каталог лучших отелей');
            break;
        default:
            alert('Неверный ввод, возможные варианты 1-5!!!');
    }

}
