'use strict';

(function () {
  var login = document.querySelector('.login-modal');

  if (login) {
    var logInButton = document.querySelector('.main-nav__user-item:nth-child(2n + 1) a');
    var closeLoginButton = login.querySelector('.login-modal__close-button-wrapper button');
    var whiteLayer = login.querySelector('.login-modal__white-layer');
    var mailInput = login.querySelector('input[name=E-mail]');

    login.addEventListener('submit', function () {
      localStorage.setItem('Mail', mailInput.value);
    });

    whiteLayer.addEventListener('click', function () {
      if (login.classList.contains('login-modal--opened')) {
        login.classList.remove('login-modal--opened');
        login.classList.add('login-modal--closed');
      }
    });

    logInButton.addEventListener('click', function () {
      if (login.classList.contains('login-modal--closed')) {
        login.classList.remove('login-modal--closed');
        login.classList.add('login-modal--opened');
        mailInput.focus();
      }
    });

    closeLoginButton.addEventListener('click', function () {
      if (login.classList.contains('login-modal--opened')) {
        login.classList.remove('login-modal--opened');
        login.classList.add('login-modal--closed');
      }
    });

    document.addEventListener('keydown', function (evt) {
      if ((evt.key === 'Escape') && (login.classList.contains('login-modal--opened'))) {
        login.classList.remove('login-modal--opened');
        login.classList.add('login-modal--closed');
      }
    });
  }
})();
