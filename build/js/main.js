'use strict';

(function () {

  var filterSection = document.querySelector('.catalog-filter');

  if (filterSection) {
    var filterButton = filterSection.querySelector('.catalog-filter__filter-button');

    filterButton.addEventListener('click', function () {

      if (filterSection.classList.contains('catalog-filter--closed')) {
        filterSection.classList.remove('catalog-filter--closed');
        filterSection.classList.add('catalog-filter--opened');
      } else {
        filterSection.classList.remove('catalog-filter--opened');
        filterSection.classList.add('catalog-filter--closed');
      }
    });
  }
})();

'use strict';

(function () {
  var mainFaq = document.querySelector('.main-faq');

  if (mainFaq) {
    var allFaq = mainFaq.querySelectorAll('.main-faq__faq-wrapper');

    var openToggle = function (question) {
      question.addEventListener('click', function () {
        var openTab = mainFaq.querySelector('.main-faq__faq-wrapper--open');

        if (question.classList.contains('main-faq__faq-wrapper--close')) {
          question.classList.remove('main-faq__faq-wrapper--close');
          question.classList.add('main-faq__faq-wrapper--open');
        } else {
          question.classList.remove('main-faq__faq-wrapper--open');
          question.classList.add('main-faq__faq-wrapper--close');
        }

        if (openTab) {
          openTab.classList.remove('main-faq__faq-wrapper--open');
          openTab.classList.add('main-faq__faq-wrapper--close');
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

    closeButton.addEventListener('click', function () {
      if (catalog.classList.contains('catalog-filter--opened')) {
        catalog.classList.remove('catalog-filter--opened');
        catalog.classList.add('catalog-filter--closed');
      }
    });
  }
})();

'use strict';

(function () {
  var newSection = document.querySelector('.main-new');

  if (newSection) {
    var back= newSection.querySelector('.main-new__back-button-wrapper');
    var productList = newSection.querySelector('.main-new__product-list');

    var slideBack = function (button) {
      button.addEventListener('click', function () {
        var widthNow = document.querySelector('.main-new__product-list').offsetWidth;
        productList.style.transform = 'translate(-' + widthNow + 'px, 0)';
        productList.style.transition = '1s';
      });
    }

    for (var i = 1; i < 9999999999; i++) {
      slideBack(back);
    }
  }
})();

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
