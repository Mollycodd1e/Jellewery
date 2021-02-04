'use strict';

(function () {
  var modal = document.querySelector('.modal');

  if (modal) {
    var closeButton = modal.querySelector('.modal__title-wrapper button');
    var addToCartButton = document.querySelector('.product-card__description-wrapper a');
    var blackLayer = modal.querySelector('.black-background');
    var bodyPage = document.querySelector('body');

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
      }
    });

    document.addEventListener('keydown', function (evt) {
      if ((evt.key === 'Escape')) {
        modalClosing(modal, bodyPage);
      }
    });
  }
})();
