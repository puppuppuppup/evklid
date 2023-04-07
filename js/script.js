const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');
const navLink = document.querySelectorAll('.header-nav__link');
const navRect = document.querySelector('.rectangle');
const layer = document.querySelector('.layer');

function burgerOpenClose() {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('header-nav--burger');
  document.body.classList.toggle('no-scroll');
  navRect.classList.toggle('rectangle--visible');
  layer.classList.add('layer--active');
};

function burgerClose() {
  burger.classList.remove('burger--active');
  nav.classList.remove('header-nav--burger');
  document.body.classList.remove('no-scroll');
  navRect.classList.remove('rectangle--visible');
  layer.classList.remove('layer--active');
};

function layerClick(event) {
  burgerClose();
  layer.classList.remove('layer--active');
};

layer.addEventListener('click', layerClick);

navLink.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = el.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


burger.addEventListener('click', () => {
  burgerOpenClose();

  navLink.forEach((el) => {
    el.addEventListener('click', () => {
      burgerClose();
    });
  });
});
