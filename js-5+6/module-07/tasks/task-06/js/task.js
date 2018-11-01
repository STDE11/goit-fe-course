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
  const body = document.body;
  const card = document.createElement('div');
  card.classList.add('post');
  const image = document.createElement('img');
  image.classList.add('post__image');
  image.setAttribute('src', 'http://via.placeholder.com/400x180');
  image.setAttribute('alt', 'post image');
  const title = document.createElement('h2');
  title.classList.add('post__title');
  title.textContent = titlText;
  const text = document.createElement('p');
  text.classList.add('post__text');
  text.textContent = cntntText;
  const button = document.createElement('a');
  button.classList.add('button');
  button.href = '#';
  button.textContent = "Read more";



  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(text);
  card.appendChild(button);
  body.appendChild(card);

  return body;
  
};
const titlText = 'shgjs sdufi kiuhwsfu';
const cntntText = 'kjdjhqawbdovqhbefvohqbrv qehbdoqh kheabdvocqu ahebdvouhqb hsabedvouqye haebdvcoquehr shadfovh oq3uryf-384yb boqwhq3u oqevoqbpoyu.';
const cardNew = createPostCard(titlText, cntntText);
console.log(cardNew);

