'use strict';
//Task - 01

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
};
console.log(user);

user.mood = 'happy';
console.log(user);

user.hobby = 'javascript';
console.log(user);

delete user.premium;
console.log(user);

for (key in user) {
    console.log(`${key}: ${user.key}`)
};

const userObjKey = Object.keys(user);
console.log(userObjKey);
for (const i of userObjKey) {
    console.log(`${i}: ${user[i]}`)
};

const userObjEntr = Object.entries(user);
for (const j of userObjEntr) {
    const key = j[0];
    const value = j[1]
    console.log(`${key}: ${value}`);
}





//Task - 02

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
};

//====================
//Вариант 1
//====================

const entries = Object.entries(tasksCompleted);
//console.log(entries);
let numMax = 0;
let nameMax = '';

for (const item of entries) {

    if (numMax < item[1]) {

        nameMax = item[0];
        numMax = item[1];

    };
};
//console.log(numMax);
console.log(nameMax);




// =======================
//Вариант 2
//========================
// let numMax = 0;
// let nameMax = ''
// for (let i = 0; i < entries.length; i += 1) {

//   if (numMax < entries[i][1]) {

//     nameMax = entries[i][0];
//     numMax = entries[i][1];
//  }

// }
// console.log(numMax);
// console.log(nameMax);




//Task - 03

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

const countProps = (obj) => {
    const keys = Object.keys(obj);
    //console.log(keys);
    const length = keys.length;
    //console.log(length);
    return length;
}






// Вызовы функции для проверки
console.log(
    countProps({})
); // 0

console.log(
    countProps({ a: 1, b: 3, c: 'hello' })
); // 3






//Task - 04

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/
function isObjectEmpty(obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}
// const isObjectEmpty = (obj) => { 
// //const empty = obj.hasOwnProperty(a);
//  // cosole.log(empty);
//   return empty;
// };

// Вызовы функции для проверки
console.log(
    isObjectEmpty({})
); // true

console.log(
    isObjectEmpty({ a: 1 })
); // false

console.log(
    isObjectEmpty({ a: 1, b: 2 })
); // false





//Task - 05

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

function countTotalSalary(salaries) {
    let total = 0;
    for (let i in salaries) {
        total += salaries[i];

    }
    return total;

}

// Вызовы функции для проверки
console.log(
    countTotalSalary({})
); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80
    })
); // 330





//Task - 06

/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

function getAllPropValues(arr, prop) {
    const arrValues = [];
    for (let i in arr) {
        if (arr[i].hasOwnProperty(prop)) {
            arrValues.push(arr[i][prop]);
        }
    }
    return arrValues;
};

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful' },
    { name: 'Ajax', age: 3, mood: 'tired' }
];
//console.log(users[0].age);
// Вызовы функции для проверки
console.log(
    getAllPropValues(users, 'name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
    getAllPropValues(users, 'mood')
); // ['happy', 'blissful', 'tired']

console.log(
    getAllPropValues(users, 'active')
); // []



//Task - 07

/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  необходимо передать как аргументы 
  при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/

function User(name, isActive, age, friends) {
    this.name = name;
    this.isActive = isActive;
    this.age = age;
    this.friends = friends;
    this.getUserInfo = function () {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends.`);
    };
    return this.getUserInfo();
};

//console.log(User);

const harry = new User('Harry', true, 11, 2);
const ron = new User('Ron', true, 11, 7);
const hermiona = new User('Hermiona', true, 11, 5);
const draco = new User('Draco', true, 11, 6);









//Task - 08

/*  
  Расставьте отсутствующие this 
  в методах объекта store
*/

const store = {
    products: ['bread', 'cheese', 'milk', 'apples'],
    managers: ['poly', 'mango', 'ajax'],
    addManager(manager) {
        store.managers.push(manager);

        console.log(store.managers);
    },
    removeManager(manager) {
        const idx = store.managers.indexOf(manager);

        store.managers.splice(idx, 1);

        console.log(store.managers);
    },
    getProducts() {
        console.log(store.products);

        return store.products;
    }
}

store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

store.removeManager('mango'); // ['poly', ajax', 'chelsey']

store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']






//Task - 09

/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account({ login, password, type = "regular" }) {
    this.login = login;
    this.password = password;
    this.type = type;

    this.changePassword = function (newPassword) {
        this.password = newPassword;


        return this.password;
    };

    this.getAccountInfo = function () {
        
        const data = (`
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
        return data;
    };
}

//================================

const account = new Account({
    login: "Mango",
    password: "qwe123",
    type: "premium"
});

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

console.log(account.changePassword("asdzxc")); // 'asdzxc'

console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
