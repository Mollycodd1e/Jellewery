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
