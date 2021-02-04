'use strict';

(function () {
  var login = document.querySelector('.login-modal');

  if (login) {
    var logInButton = document.querySelector('.main-nav__user-item:nth-child(2n + 1) a');
    var closeLoginButton = login.querySelector('.login-modal__close-button-wrapper button');
    var whiteLayer = login.querySelector('.login-modal__white-layer');
    var mailInput = login.querySelector('input[name=E-mail]');

    logInButton.href = '#';

    login.addEventListener('submit', function () {
      localStorage.setItem('Mail', mailInput.value);
    });

    var loginClosing = function (registration) {
      if (registration.classList.contains('login-modal--opened')) {
        registration.classList.remove('login-modal--opened');
        registration.classList.add('login-modal--closed');
      }
    };

    whiteLayer.addEventListener('click', function () {
      loginClosing(login);
    });

    logInButton.addEventListener('click', function () {
      if (login.classList.contains('login-modal--closed')) {
        login.classList.remove('login-modal--closed');
        login.classList.add('login-modal--opened');
        mailInput.focus();
      }
    });

    closeLoginButton.addEventListener('click', function () {
      loginClosing(login);
    });

    document.addEventListener('keydown', function (evt) {
      if ((evt.key === 'Escape')) {
        loginClosing(login);
      }
    });
  }
})();
