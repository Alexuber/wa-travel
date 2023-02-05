const headerSectionEl = document.querySelector('[data-header]');
const aboutSectionEl = document.querySelector('.about');

window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const headerOffsetTrigger = headerSectionEl.offsetHeight;
  const aboutOffsetTrigger = aboutSectionEl.offsetTop;

  const pageOffset = window.pageYOffset;

  if (pageOffset + headerOffsetTrigger > aboutOffsetTrigger) {
    headerSectionEl.classList.add('header-scroll-dark');
  } else {
    headerSectionEl.classList.remove('header-scroll-dark');
  }
}
