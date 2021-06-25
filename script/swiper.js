/* Initialize Swiper */
var swiper = new Swiper('.header__sub_slider .container  .swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.header__sub_slider .container .swiper-button-next',
    prevEl: '.header__sub_slider .container .swiper-button-prev',
  },
});

var swiper = new Swiper('.feature__news .swiper-container', {
  loop: false,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.feature__news .swiper-button-next',
    prevEl: '.feature__news .swiper-button-prev',
  },
  breakpoints: {

    1300: {
      slidesPerView: 4,
      spaceBetween: 25
    },
    1040: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
  }
});