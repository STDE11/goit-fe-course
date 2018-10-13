//Модуль 7 - Домашнее задание
'use strict';

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/



//--------------------------------------------

function createPostCard(posts) {
  const body = document.body;
  //console.log(body); 

  const container = document.createElement('div');
  container.classList.add('container');

  posts.forEach(function (post) {
    const card = document.createElement('div');
    card.classList.add('post');

    const image = document.createElement('img');
    image.classList.add('post__image');
    image.setAttribute('src', post.img);
    image.setAttribute('alt', 'post image');
    //console.log(image);

    const title = document.createElement('h2');
    title.classList.add('post__title');
    title.textContent = post.title;
    //console.log(title);

    const text = document.createElement('p');
    text.classList.add('post__text');
    text.textContent = post.text;
    //console.log(text);

    const button = document.createElement('a');
    button.classList.add('button');
    button.href = post.link;
    button.textContent = "Read more";
    // console.log(button);

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(button);
    container.appendChild(card);
    return container;
  });
  body.appendChild(container);
  return body;
}



//====================================

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];
const cardNew = createPostCard(posts);
console.log(cardNew);
