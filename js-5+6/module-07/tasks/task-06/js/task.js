'use strict';


//Task - 06

/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
//const html =document.querySelectorAll();


function createPostCard(titlText, cntntText) {
  // const html =document.querySelector('html');
  // html.setAttribute("box-sizing", "border-box")

  const body = document.body;
  //body.setAttribute("font-family", 'Roboto')

  //    console.log(body); 

  const card = document.createElement('div');
  card.classList.add('post');
  //card.setAttribute("box-sizing", "border-box")
  //console.log(card);

  const image = document.createElement('img');
  image.classList.add('post__image');
  image.setAttribute('src', 'http://via.placeholder.com/400x150');
  image.setAttribute('alt', 'post image');
  //image.setAttribute("box-sizing", "border-box")
  //console.log(image);
  const title = document.createElement('h2');
  title.classList.add('post__title');
  title.textContent = titlText;
  // title.textContent = 'Lorem ipsum dolor';
  //heading.setAttribute("box-sizing", "border-box")
  //console.log(title);
  const text = document.createElement('p');
  text.classList.add('post__text');
  text.textContent = cntntText;
  // text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
  //text.setAttribute("box-sizing", "border-box")
  //console.log(text);
  const button = document.createElement('a');
  button.classList.add('button');
  button.href = '#';
  //button.textContent = btnText;
  button.textContent = "Read more";
  // console.log(button);


  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(text);
  card.appendChild(button);
  body.appendChild(card);

  //console.log(body.parentNode);
  //console.log(body);
  //return card;
  return body;
  //console.log(card);
};


const titlText = 'Lorem ipsum dolor';
const cntntText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
const cardNew = createPostCard(titlText, cntntText);
//console.log(cardNew);

