import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryPic = galleryItems
  .map(
    galleryItem => `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
  />
</a>
</div>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryPic);
const handleClick = e => {
  e.preventDefault();
  const bigImage = e.target.dataset.source;
  basicLightbox.create(`<img src="${bigImage}">`).show();
};
console.log(galleryItems);
gallery.addEventListener('click', handleClick);
