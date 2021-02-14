'use strict';

(function () {
  var modal = document.querySelector('.modal');

  if (modal) {
    var closeButton = modal.querySelector('.modal__title-wrapper button');
    var addToCartButton = document.querySelector('.product-card__description-wrapper a');
    var blackLayer = modal.querySelector('.black-background');
    var bodyPage = document.querySelector('body');
    var checkoutButton = modal.querySelector('.modal__link-wrapper a:nth-child(2n + 2)');

    addToCartButton.href = '#';

    var modalClosing = function (window, back) {
      if (window.classList.contains('modal--opened')) {
        window.classList.remove('modal--opened');
        window.classList.add('modal--closed');
        back.classList.remove('scroll-hidden');
      }
    };

    blackLayer.addEventListener('click', function () {
      modalClosing(modal, bodyPage);
    });

    closeButton.addEventListener('click', function () {
      modalClosing(modal, bodyPage);
    });

    addToCartButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--closed')) {
        modal.classList.remove('modal--closed');
        modal.classList.add('modal--opened');
        bodyPage.classList.add('scroll-hidden');
        closeButton.focus();
      }
    });

    document.addEventListener('keydown', function (evt) {
      if ((evt.key === 'Escape')) {
        modalClosing(modal, bodyPage);
      }
    });

    document.addEventListener('keydown', function (evttab) {
      if ((evttab.key === 'Tab') && (modal.classList.contains('modal--opened')) && (document.activeElement === checkoutButton)) {
        closeButton.focus();
        evttab.preventDefault();
      }
    });
  }
})();
