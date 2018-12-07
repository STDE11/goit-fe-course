'use strict';


//Task - 01

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

function Account(login, email, friendsCount) {
    this.login = login;
    this.email = email;
    this.friendsCount = friendsCount;
};

Account.prototype.getAccountInfo = function () {
    console.log(`login: ${this.login}, email: ${this.email}, friendsCount: ${this.friendsCount}`);
};
//  // console.log(Account.prototype);
//const mango = new Account('Mango', dsgfh, 2);
const mango = new Account('Mango', 'dfd@jhgdfd.sdf', 5);
const poly = new Account('Poly', 'dfs@bfj.ujg', 5);
const chelsy = new Account('Chelsy', 'sds@hsadhg.asd', 5);

console.log(mango);
mango.getAccountInfo();

console.log(poly);
poly.getAccountInfo();

console.log(chelsy);
chelsy.getAccountInfo();


//======================================================


//Task - 02

/*
  Напишите функцию-конструктор StringBuilder.
  
  На вход она получает один параметр string - строку.
  
  Добавьте следующие методы в prototype функции-конструктора.
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/


// function StringBuilder(string) {
//   this.string = string;
// }




function StringBuilder(string = "") {
    //function StringBuilder(string) {
    this.value = string;
};

StringBuilder.prototype.getValue = function () {
    console.log(this.value);
};

StringBuilder.prototype.append = function (str) {
    //this.value = str.concat(this.value);
    this.value = this.value.concat(str);
};

StringBuilder.prototype.prepend = function (str) {
    this.value = str.concat(this.value);
    // console.log(this.value);
};

StringBuilder.prototype.pad = function (str) {
    this.value = str.concat(this.value).concat(str);
    //console.log(this.value);
};

StringBuilder.prototype.showValue = function () {
    //this.value = str.concat(this.value).concat(str);
    console.log(this.value);
};

const myString = new StringBuilder('.');
//StringBuilder.getValue();
myString.getValue();

myString.append('^');
myString.showValue(); // '.^'

myString.prepend('^');
myString.showValue(); // '^.^'

myString.pad('=');
myString.showValue(); // '=^.^='


//======================================================





//Task - 03

/*
  Создайте класс Car с указанными полями и методами.
*/

class Car {
    constructor(maxSpeed) {
        /*
          Добавьте свойства:
            - speed - для отслеживания текущей скорости, изначально 0.
           
            - maxSpeed - для хранения максимальной скорости 
            
            - running - для отслеживания заведен ли автомобиль, 
              возможные значения true или false. Изначально false.
              
            - distance - содержит общий киллометраж, изначально с 0
        */
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.running = false;
        this.distance = 0;
    }

    turnOn() {
        // Добавьте код для того чтобы завести автомобиль
        // Просто записывает в свойство running значание true
        this.running = true;
    };

    turnOff() {
        // Добавьте код для того чтобы заглушить автомобиль
        // Просто записывает в свойство running значание false
        this.running = false;
    };

    accelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed
        if (spd < this.maxSpeed)
            this.speed = spd;
        //this.speed = spd < maxSpeed ? spd : continue;
    };

    decelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed и не меньше нуля
        if (0 <= spd < this.maxSpeed)
            this.speed = spd;
        //this.speed = (0 <= spd < maxSpeed) ? spd : continue;
    }

    drive(hours) {
        // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
        // но только в том случае если машина заведена!
        if (this.running)
            this.distance = hours * this.speed;
        //this.distance = running ? hours * this.speed : continue;
    }
};




//======================================================




//Task - 04



/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/

class Car {
    constructor(maxSpeed) {
        /*
          Добавьте свойства:
            - speed - для отслеживания текущей скорости, изначально 0.
           
            - maxSpeed - для хранения максимальной скорости 
            
            - running - для отслеживания заведен ли автомобиль, 
              возможные значения true или false. Изначально false.
              
            - distance - содержит общий киллометраж, изначально с 0
        */
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.running = false;
        this.distance = 0;
    }

    turnOn() {
        // Добавьте код для того чтобы завести автомобиль
        // Просто записывает в свойство running значание true
        this.running = true;
    };

    turnOff() {
        // Добавьте код для того чтобы заглушить автомобиль
        // Просто записывает в свойство running значание false
        this.running = false;
    };

    accelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed
        if (spd < this.maxSpeed)
            this.speed = spd;
        //this.speed = spd < maxSpeed ? spd : continue;
    };

    decelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed и не меньше нуля
        if (0 <= spd < this.maxSpeed)
            this.speed = spd;
        //this.speed = (0 <= spd < maxSpeed) ? spd : continue;
    }

    drive(hours) {
        // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
        // но только в том случае если машина заведена!
        this.running
            ? this.distance = hours * this.maxSpeed : 0;
        // if (this.running)
        //     this.distance = hours * this.maxSpeed;
        //return this.distance;
        //this.distance = running ? hours * this.speed : continue;
    }

    static getSpecs(car) {
        //console.log("maxSpeed:" this.maxSpeed, "running:" this.running, "distance:" this.distance);
        console.log("maxSpeed: ", car.maxSpeed, "running:", car.running, "distance:", car.distance);
    }
};

const someCar = new Car(100);
someCar.turnOn();
someCar.drive(2);
Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200

//======================================================







//Task - 05

/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

// class Car {
//   constructor(maxSpeed, value) {
//     // ... код
//     this._value = value;
//   }
//   get value () {
//     return this._value;
//   }

//   set value (value) {
//     this._value = value;
//   }
//   // ... код
// }

class Car {
    constructor(maxSpeed, value) {
        //constructor( maxSpeed) {
        /*
          Добавьте свойства:
            - speed - для отслеживания текущей скорости, изначально 0.
           
            - maxSpeed - для хранения максимальной скорости 
            
            - running - для отслеживания заведен ли автомобиль, 
              возможные значения true или false. Изначально false.
              
            - distance - содержит общий киллометраж, изначально с 0
        */
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.running = false;
        this.distance = 0;
        this._value = value;
    }

    get value() {
        console.log(this._value);
    }

    set value(value) {
        this._value = value;
    }

    turnOn() {
        // Добавьте код для того чтобы завести автомобиль
        // Просто записывает в свойство running значание true
        return this.running = true;
    };

    turnOff() {
        // Добавьте код для того чтобы заглушить автомобиль
        // Просто записывает в свойство running значание false
        return this.running = false;
    };

    accelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed
        if (spd < this.maxSpeed)
            return this.speed = spd;
        //this.speed = spd < maxSpeed ? spd : continue;
    };

    decelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed и не меньше нуля
        if (0 <= spd <= this.maxSpeed)
            return this.speed = spd;
        //this.speed = (0 <= spd < maxSpeed) ? spd : continue;
    }

    drive(hours) {
        // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
        // но только в том случае если машина заведена!
        if (this.running) {
            return this.distance = hours * this.speed;

        }
    }
}


const myCar = new Car(50, 2000);

myCar.value; // 2000
myCar.value = 4000;
myCar.value; // 4000

//======================================================






