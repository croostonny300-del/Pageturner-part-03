

// Select hamburger and nav
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.site-nav');

// Toggle navigation on click
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open'); // add/remove class
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
});
