'use strict';

(function () {
  var navMain = document.querySelector('.main-nav');

  if (navMain) {
    var navToggle = document.querySelector('.main-nav__toggle');
    var header = document.querySelector('.main-header');
    var bodyPage = document.querySelector('body');

    header.classList.remove('main-header--nojs');
    header.classList.remove('main-header--opened');
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.add('main-nav--opened');
        navMain.classList.remove('main-nav--closed');
        header.classList.add('main-header--opened');
        bodyPage.classList.add('scroll-hidden');
      } else {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
        header.classList.remove('main-header--opened');
        bodyPage.classList.remove('scroll-hidden');
      }
    });

    if (navMain.offsetHeight === window.pageYOffset) {
      navMain.style.position = 'fixed';
    } else {
      navMain.style.oveflow = 'visible';
    }
  }
})();
