'use strict';

//HW




const ADMIN_LOGIN = 'admin';//
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';//

let login = prompt(' Введите логин:');
let password;
let message;


if (login === null) {
    message = ' Отменено пользователем!';
} else if (login !== ADMIN_LOGIN) {
    message = ' Доступ запрещен!';
} else if ((password = prompt(' Введите пароль:')) === null) {
    message = ' Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
    message = ' Добро пожаловать!';
} else {
    message = ' Доступ запрещен!';
}
alert(message);