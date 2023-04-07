const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerGroup: 1,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
