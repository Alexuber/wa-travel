const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

dropdownTriggers.forEach((trigger, index) => {
  const dropdownArrow = trigger.querySelector('.dropdown-arrow');
  trigger.addEventListener('click', event => {
    const dropdownMenu = document.querySelector(`.dropdown-menu-${index + 1}`);
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (menu !== dropdownMenu) {
        menu.classList.remove('visible');
      }
    });
    dropdownMenu.classList.toggle('visible');
    dropdownArrow.classList.toggle('rotated');
    event.stopPropagation();
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.classList.remove('visible');
  });
  document.querySelectorAll('.dropdown-arrow').forEach(arrow => {
    arrow.classList.remove('rotated');
  });
});
