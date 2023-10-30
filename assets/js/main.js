/* const swiper = new Swiper('.swiper', {
  // Optional parameters
  // autoHeight: true,
  slidesPerView: 5,
  slideToClickedSlide: true,
  direction: 'horizontal',
  // loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

}); */

var swiper = new Swiper(".mySwiper", {
  direction: 'horizontal',
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  direction: 'horizontal',
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});