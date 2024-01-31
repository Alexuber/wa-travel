const swiper1 = new Swiper('.toursSwiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  speed: 2000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
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
    1280: {
      spaceBetween: 32,
      slidesPerView: 4,
    },
    // 1440: {
    //   spaceBetween: 32,
    //   slidesPerView: 7,
    // },
    // 1920: {
    //   spaceBetween: 32,
    //   slidesPerView: 7,
    // },
  },
});

// Получаем все элементы img с классом dropdown-arrow
const dropdownTrigger = document.querySelectorAll('.dropdown-trigger');

// Добавляем обработчик события клика на каждое изображение
dropdownTrigger.forEach((arrow, index) => {
  arrow.addEventListener('click', event => {
    // Получаем соответствующий выпадающий список по индексу
    const dropdownMenu = document.querySelector(`.dropdown-menu-${index + 1}`);

    // Скрыть все другие выпадающие списки, кроме текущего
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (menu !== dropdownMenu) {
        menu.classList.remove('visible');
      }
    });

    // Переключаем видимость текущего выпадающего списка
    dropdownMenu.classList.toggle('visible');

    // Остановить всплытие события, чтобы оно не срабатывало на document
    event.stopPropagation();
  });
});

// Добавляем обработчик события клика на document
document.addEventListener('click', () => {
  // Скрываем все выпадающие списки
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.classList.remove('visible');
  });
});
