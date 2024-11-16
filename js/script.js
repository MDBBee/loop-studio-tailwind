const btn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#menu');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
}
