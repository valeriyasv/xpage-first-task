let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.div');
let imageBurger = document.querySelector('.main-header__burger');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  console.log('lsjfj')
  imageBurger.classList.toggle('active');
  console.log(navToggle.classList);
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});