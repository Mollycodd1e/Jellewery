'use strict';

(function () {
  var login = document.querySelector('.login-modal');

  if (login) {
    var logInButton = document.querySelector('.main-nav__user-item:nth-child(2n + 1) a');
    var closeLoginButton = login.querySelector('.login-modal__close-button-wrapper button');
    var whiteLayer = login.querySelector('.login-modal__white-layer');
    var mailInput = login.querySelector('input[name=E-mail]');
    var bodyTag = document.querySelector('body');

    logInButton.href = '#';

    login.addEventListener('submit', function () {
      localStorage.setItem('Mail', mailInput.value);
    });

    var loginClosing = function (registration, ground) {
      if (registration.classList.contains('login-modal--opened')) {
        registration.classList.remove('login-modal--opened');
        registration.classList.add('login-modal--closed');
        ground.classList.remove('scroll-hidden');
      }
    };

    whiteLayer.addEventListener('click', function () {
      loginClosing(login, bodyTag);
    });

    logInButton.addEventListener('click', function () {
      if (login.classList.contains('login-modal--closed')) {
        login.classList.remove('login-modal--closed');
        login.classList.add('login-modal--opened');
        bodyTag.classList.add('scroll-hidden');
        mailInput.focus();
      }
    });

    closeLoginButton.addEventListener('click', function () {
      loginClosing(login, bodyTag);
    });

    document.addEventListener('keydown', function (evt) {
      if ((evt.key === 'Escape')) {
        loginClosing(login, bodyTag);
      }
    });

    document.addEventListener('keydown', function (evttab) {
      if ((evttab.key === 'Tab') && (login.classList.contains('login-modal--opened')) && (document.activeElement === closeLoginButton)) {
        mailInput.focus();
        evttab.preventDefault();
      }
    });

    document.addEventListener('keydown', function (evtshift) {
      if ((evtshift.shiftKey && evtshift.key === 'Tab') && (login.classList.contains('login-modal--opened')) && (document.activeElement === mailInput)) {
        closeLoginButton.focus();
        evtshift.preventDefault();
      }
    });
  }
})();
