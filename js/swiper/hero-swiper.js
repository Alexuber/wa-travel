const heroSwiper = new Swiper('.hero-slider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4200,
  },
  navigation: {
    nextEl: '.pagination-item--next',
    prevEl: '.pagination-item--prev',
  },
});

heroSwiper.on('slideChange', function () {
  const activeIndex = heroSwiper.realIndex;
  document.querySelectorAll('.pagination-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelectorAll('.pagination-item')[activeIndex].classList.add('active');
});
