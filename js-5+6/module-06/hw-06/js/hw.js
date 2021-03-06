
'use strict';
//Модуль 6 - Домашнее задание



/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
  /**
   * @constructor
   * @param {String} size - Размер
   * @param {String} stuffing - Начинка
   */
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
    //const arrOrder = [Hamburger.SIZES[this._size], Hamburger.STUFFINGS[this._stuffing]];
  }

  /**
   * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
   * @param {String} topping - Тип добавки
   */
  addTopping(topping) {   //Записывает в свойство
    this._toppings.includes(topping)
      ? this._toppings 
      : this._toppings.push(topping);
  }

  /**
   * Убрать topping, при условии, что она ранее была добавлена
   * @param {String} topping - Тип добавки
   */
  removeTopping(topping) {   //Записывает в свойство

    //проверить была ли добавлена эта добавка и если да то удалить ее

    this._toppings = this._toppings.filter(thisTopping => thisTopping === topping)
  }

  /**
   * Получить список toppings
   * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
   */
  get toppings() {  //Возвращает значение
    return this._toppings;
  }


  /**
   * Узнать размер гамбургера
   * @returns {String} - размер гамбургера
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
   */

  get size() {  //Возвращает значение
    return this._size;
  }

  /**
   * Узнать начинку гамбургера
   * @returns {String} - начинка гамбургера
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
   */

  get stuffing() {  //Возвращает значение
    return this._stuffing;
  }

  /**
   * Узнать цену гамбургера
   * @returns {Number} - Цена в деньгах
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
   */
  get price() {  //Возвращает значение

    const arrOrders = [this._size, this._stuffing];
    let sumPrice = arrOrders.reduce((acc, order) => acc + order.price, 0);

    let sumPriceToppings = this._toppings.reduce((acc, topping) => acc + topping.price, 0);

    return sumPrice + sumPriceToppings;

  };


  /**
   * Узнать калорийность
   * @returns {Number} - Калорийность в калориях
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
   */
  get calories() {  //Возвращает значение

    const arrOrders = [this._size, this._stuffing];
    let sumCalories = arrOrders.reduce((acc, order) => acc + order.calories, 0);

    let sumCaloriesToppings = this._toppings.reduce((acc, topping) => acc + topping.calories, 0);

    return sumCalories + sumCaloriesToppings;

  }
  //}

  /*
    Размеры, виды добавок и начинок объявите как статические поля класса.
    Добавьте отсутсвующие поля по аналогии с примером.
  */
  // Hamburger.SIZE_SMALL = 'SIZE_SMALL';
  // Hamburger.SIZE_LARGE = 'SIZE_LARGE';
  
  // Hamburger.SIZES = {
  //   [Hamburger.SIZE_SMALL]: {
  //     price: 30,
  //     calories: 50,
  //   },

  //   [Hamburger.SIZE_LARGE]: {
  //     price: 50,
  //     calories: 100,
  //   },
  // };
  
  // Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
  // Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
  // Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
  
  // Hamburger.STUFFINGS = {
  //   [Hamburger.STUFFING_CHEESE]: {
  //     price: 15,
  //     calories: 20,
  //   },

  //   [Hamburger.STUFFING_SALAD]: {
  //     price: 20,
  //     calories: 5,
  //   },

  //   [Hamburger.STUFFING_MEAT]: {
  //     price: 30,
  //     calories: 15,
  //   },
  // };
  
  // Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
  // Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
  
  // Hamburger.TOPPINGS = {
  //   [Hamburger.TOPPING_SPICE]: {
  //     price: 10,
  //     calories: 0,
  //   },

  //   [Hamburger.TOPPING_SAUCE]: {
  //     price: 15,
  //     calories: 5,
  //   },
  // };
  

  static SIZE_SMALL = {
    price: 30,
    calories: 50,
  };

  static SIZE_LARGE = {
    price: 50,
    calories: 100,
  };

  static STUFFING_CHEESE = {
    price: 15,
    calories: 20,
  };
  static STUFFING_SALAD = {
    price: 20,
    calories: 5,
  };
  static STUFFING_MEAT = {
    price: 30,
    calories: 15,
  };
  static TOPPING_SPICE = {
    price: 10,
    calories: 0,
  };
  static TOPPING_SAUCE = {
    price: 15,
    calories: 5,
  };

};

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);


// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calories);

// Сколько стоит?
console.log("Price: ", hamburger.price);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.price);

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings get", hamburger.toppings.length); // 1

/*
  🔔 Обратите внимание на такие моменты:
    	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
    		другой код, а класс живет в изоляции от мира
    	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
		чтобы нельзя было создать объект, не указав их
    	✔️ необязательные (добавка) добавляем через методы
    	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
    	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
    	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
      		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
		логично в тот момент, когда это потребуется, а не заранее.
*/