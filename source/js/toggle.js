'use strict';

(function () {
  var navMain = document.querySelector('.main-nav');

  if (navMain) {
    var navToggle = document.querySelector('.main-nav__toggle');
    var header = document.querySelector('.main-header');

    header.classList.remove('main-header--opened');
    navMain.classList.add('main-nav--closed');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.add('main-nav--opened');
        navMain.classList.remove('main-nav--closed');
        header.classList.add('main-header--opened');
      } else {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
        header.classList.remove('main-header--opened');
      }
    });
  }
})();
