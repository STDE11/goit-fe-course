//Модуль 8 - Домашнее задание
'use strict';

const gallery = document.querySelector('.js-image-gallery');
const fullview = document.querySelector('.fullview');
const preview = document.querySelector('.preview');

let item;
let image;
let insertFullview;

preview.addEventListener('click', handGalleryItemClick);

const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

const insertPreview = setGalleryItems(galleryItems); 

function setGalleryItems(elems) {
    elems.forEach(elem => {

        item = document.createElement("li");
        image = document.createElement('img');
        image.setAttribute('src', elem.preview);
        image.setAttribute('data-fullview', elem.fullview);
        image.setAttribute('alt', elem.alt);
        item.append(image);
        preview.append(item);
    });

    insertFullview = document.createElement('img');
    insertFullview.setAttribute('src', galleryItems[0].fullview);
    insertFullview.setAttribute('alt', galleryItems[0].alt);
    fullview.append(insertFullview);
}

function handGalleryItemClick({target}) {
    const nodeName = target.nodeName;
    event.preventDefault();
    if (nodeName !== 'IMG') return;
    insertFullviewImage(preview, target)
    console.log(target);
    console.log(target.nodeName);
}


function insertFullviewImage(preview, target) {
    const previewItems = preview.querySelectorAll('img'); 
    console.log(previewItems);
    previewItems.forEach(previewItem => {
        if(previewItem !== target) {
            return;
        } else {
            insertFullview.setAttribute('src', target.dataset.fullview);
            insertFullview.setAttribute('alt', target.alt); 
            fullview.append(insertFullview);
        }    
    })
}



