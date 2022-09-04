import { galleryItems } from './gallery-items.js';
// Change code below this line

const divRef = document.querySelector('.gallery');

const galleryMarkUp = createGalleryMarkUp(galleryItems);

function createGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
         />
   </a>
 </div>`;
    })
    .join('');
}

divRef.insertAdjacentHTML('beforeend', galleryMarkUp);
// console.log(createGalleryMarkUp(galleryItems));
divRef.addEventListener('click', onItemClick);

function onItemClick(evt) {
  // заборона відкривання у новому вікні картинки по посиланню
  evt.preventDefault();
  // якщо не картинка - виходимо
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  // якщо картинка - реагуємо на клік, застосування бібліотеки basicLightbox
  //   console.log(evt.target.nodeName);
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1400" height="900">
`);

  instance.show();
  // закриття по кнопці Escape
  divRef.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
  //   console.log(evt.target.nodeName);
}
