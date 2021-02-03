'use strict';

(function () {
  var modal = document.querySelector('.modal');

  if (modal) {
    var closeButton = modal.querySelector('.modal__title-wrapper button');
    var addToCartButton = document.querySelector('.product-card__description-wrapper');
    var blackLayer = modal.querySelector('.black-background');

    blackLayer.addEventListener('click', function () {
      if (modal.classList.contains('modal--opened')) {
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
      }
    });

    closeButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--opened')) {
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
      }
    });

    addToCartButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--closed')) {
        modal.classList.remove('modal--closed');
        modal.classList.add('modal--opened');
      }
    });

    document.addEventListener('keydown', function (evt) {
      if ((evt.key === 'Escape') && (modal.classList.contains('modal--opened'))) {
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
      }
    });
  }
})();

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
  var filter = document.querySelector('.catalog-filter');

  if (filter) {
    var form = filter.querySelector('form');
    var filterOptions = form.querySelectorAll('.catalog-filter__wrapper');

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
