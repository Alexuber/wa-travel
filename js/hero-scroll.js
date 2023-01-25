const headerSectionEl = document.querySelector('.header');
const aboutSectionEl = document.querySelector('.about');
const priceSecEl = document.querySelector('.price');
const benefitsSectionEl = document.querySelector('.benefits');
const teamSectionEl = document.querySelector('.team');
const gallerySectionEl = document.querySelector('.gallery');

window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const headerOffsetTrigger = headerSectionEl.offsetHeight;
  const aboutOffsetTrigger = aboutSectionEl.offsetHeight;
  const priceOffsetTrigger = priceSecEl.offsetHeight;
  const benefitsOffsetTrigger = benefitsSectionEl.offsetHeight;
  const teamOffsetTrigger = teamSectionEl.offsetHeight;

  const pageOffset = window.pageYOffset;

  console.log('🆑  pageOffset', pageOffset);

  console.log('🆑  aboutSectionEl.offsetHeight', aboutSectionEl.offsetHeight);

  if (pageOffset > aboutOffsetTrigger) {
    headerSectionEl.classList.add('transparency');
  }
}
