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

const swiper = new Swiper(".mySwiper", {
  direction: 'horizontal',
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  direction: 'horizontal',
  spaceBetween: 10,
  /*navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },*/
  thumbs: {
    swiper: swiper,
  },
});