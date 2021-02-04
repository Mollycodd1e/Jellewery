'use strict';

(function () {
  var modal = document.querySelector('.modal');

  if (modal) {
    var closeButton = modal.querySelector('.modal__title-wrapper button');
    var addToCartButton = document.querySelector('.product-card__description-wrapper a');
    var blackLayer = modal.querySelector('.black-background');

    addToCartButton.href = '#';

    var modalOpening = function (window) {
      if (window.classList.contains('modal--opened')) {
        window.classList.remove('modal--opened');
        window.classList.add('modal--closed');
      }
    };

    blackLayer.addEventListener('click', function () {
      modalOpening(modal);
    });

    closeButton.addEventListener('click', function () {
      modalOpening(modal);
    });

    addToCartButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--closed')) {
        modal.classList.remove('modal--closed');
        modal.classList.add('modal--opened');
      }
    });

    document.addEventListener('keydown', function (evt) {
      if ((evt.key === 'Escape')) {
        modalOpening(modal);
      }
    });
  }
})();

'use strict';

(function () {
  var mainFaq = document.querySelector('.main-faq');

  if (mainFaq) {
    var allFaq = mainFaq.querySelectorAll('.main-faq__faq-wrapper');

    for (var j = 0; j < allFaq.length; j++) {
      allFaq[j].classList.remove('main-faq__faq-wrapper--nojs');
    }

    var faqClosing = function (faqSection) {
      faqSection.classList.remove('main-faq__faq-wrapper--open');
      faqSection.classList.add('main-faq__faq-wrapper--close');
    };

    var openToggle = function (question) {
      question.addEventListener('click', function () {
        var openTab = mainFaq.querySelector('.main-faq__faq-wrapper--open');

        if (question.classList.contains('main-faq__faq-wrapper--close')) {
          question.classList.remove('main-faq__faq-wrapper--close');
          question.classList.add('main-faq__faq-wrapper--open');
        } else {
          faqClosing(question);
        }

        if (openTab) {
          faqClosing(openTab);
        }
      });
    };

    for (var i = 0; i < allFaq.length; i++) {
      openToggle(allFaq[i]);
    }
  }
})();

'use strict';

(function () {
  var catalog = document.querySelector('.catalog-filter');

  if (catalog) {
    var closeButton = catalog.querySelector('.catalog-filter__form-button');
    var filterButton = catalog.querySelector('.catalog-filter__filter-button');

    catalog.classList.remove('catalog-filter--nojs');

    closeButton.addEventListener('click', function () {
      if (catalog.classList.contains('catalog-filter--opened')) {
        catalog.classList.remove('catalog-filter--opened');
        catalog.classList.add('catalog-filter--closed');
      }
    });

    filterButton.addEventListener('click', function () {
      if (catalog.classList.contains('catalog-filter--closed')) {
        catalog.classList.remove('catalog-filter--closed');
        catalog.classList.add('catalog-filter--opened');
      } else {
        catalog.classList.remove('catalog-filter--opened');
        catalog.classList.add('catalog-filter--closed');
      }
    });
  }
})();

'use strict';

(function () {
  var filter = document.querySelector('.catalog-filter');

  if (filter) {
    var form = filter.querySelector('form');
    var filterOptions = form.querySelectorAll('.catalog-filter__wrapper');

    for (var j = 0; j < filterOptions.length; j++) {
      filterOptions[j].classList.remove('catalog-filter__wrapper--nojs');
    }

    var filterToggle = function (filterSection) {

      filterSection.addEventListener('click', function () {
        if (filterSection.classList.contains('catalog-filter__wrapper--closed')) {
          filterSection.classList.remove('catalog-filter__wrapper--closed');
          filterSection.classList.add('catalog-filter__wrapper--opened');
        } else {
          filterSection.classList.remove('catalog-filter__wrapper--opened');
          filterSection.classList.add('catalog-filter__wrapper--closed');
        }
      });
    };

    for (var i = 0; i < filterOptions.length; i++) {
      filterToggle(filterOptions[i]);
    }
  }
})();

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

'use strict';

(function () {
  var navMain = document.querySelector('.main-nav');

  if (navMain) {
    var navToggle = document.querySelector('.main-nav__toggle');
    var header = document.querySelector('.main-header');

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
      } else {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
        header.classList.remove('main-header--opened');
      }
    });
  }
})();
