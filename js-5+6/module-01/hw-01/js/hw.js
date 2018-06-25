'use strict';

//HW


const ADMIN_LOGIN = 'admin';//
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';//

let login = prompt('1 Введите логин:');
let password;
let message;

/*if (login === null) {
    message = '2 Отменено пользователем!';
} else if (login !== ADMIN_LOGIN) {
    message = '3 Доступ запрещен!';
} else {
    password = prompt('4 Введите пароль:');
}

if (password === null) {
    message = '5 Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
    message = '6 Добро пожаловать!';
} else {
    message = '7 Доступ запрещен!';
}
alert(message);*/

if (login === null) {
    message = '2 Отменено пользователем!';
} else if (login !== ADMIN_LOGIN) {
   // password = prompt('4 Введите пароль:')
    message = '3 Доступ запрещен!';
} else if ((password = prompt('4 Введите пароль:')) === null) {
    message = '5 Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
    message = '6 Добро пожаловать!';
} else {
    message = '7 Доступ запрещен!';
}
alert(message);