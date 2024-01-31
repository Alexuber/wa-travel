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
    1280: {
      spaceBetween: 32,
      slidesPerView: 4,
    },
  },
});

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
  // Получаем индекс активного слайда
  var activeIndex = heroSwiper.realIndex;

  // Удаляем класс active у всех элементов пагинации
  document.querySelectorAll('.pagination-item').forEach(item => {
    item.classList.remove('active');
  });

  // Добавляем класс active к активному элементу пагинации
  document.querySelectorAll('.pagination-item')[activeIndex].classList.add('active');
});

// Получаем все элементы img с классом dropdown-arrow
const dropdownArrows = document.querySelectorAll('.dropdown-arrow');

// Добавляем обработчик события клика на каждую стрелку
dropdownArrows.forEach((arrow, index) => {
  arrow.addEventListener('click', event => {
    // Получаем родительский элемент (div) стрелки
    const parentDiv = arrow.parentNode;

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

    // Поворачиваем стрелку на 180 градусов
    arrow.classList.toggle('rotated');

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

  // Возвращаем стрелку в исходное положение (если открыты другие списки)
  document.querySelectorAll('.dropdown-arrow').forEach(arrow => {
    arrow.classList.remove('rotated');
  });
});

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
