const swiper1 = new Swiper('.toursSwiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  speed: 2000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  direction: 'horizontal',
  breakpoints: {
    360: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
