import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li>
          <a href="${largeImageURL}" style="text-decoration: none;">
            <div class="image-info">
              <img src="${webformatURL}" alt="${tags}" width="360" height="200">
              <div class="image-info-content">
                <p><strong>Likes</strong><br> ${likes}</p>
                <p><strong>Views</strong><br> ${views}</p>
                <p><strong>Comments</strong><br> ${comments}</p>
                <p><strong>Downloads</strong><br> ${downloads}</p>
              </div>
            </div>
          </a>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}




