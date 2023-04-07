const searchBtn = document.querySelector('.search-form__btn');
const searchForm = document.querySelector('.search-form');
const searchClose = document.querySelector('.search-form__close-btn');

searchClose.addEventListener('click', () => {
  searchForm.classList.remove('search-form--active');
  searchBtn.classList.toggle('search-form__btn--active');
  searchBtn.addEventListener('click', openSearch);
})

function openSearch(event) {
  searchForm.classList.toggle('search-form--active');
  searchBtn.classList.toggle('search-form__btn--active');

  searchBtn.removeEventListener('click', openSearch);
}

searchBtn.addEventListener('click', openSearch);

