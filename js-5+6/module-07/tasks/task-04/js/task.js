'use strict';


//Task - 04
/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/
const list = document.createElement('ul');
let user;
let item;
do {
	user = prompt('Введите данные:');
	if (user === null) {
		break;
	}
	item = document.createElement("li");
	//item.href = '#';
	item.textContent = user;
	list.appendChild(item);
} while (user !== null);

console.log(list);
