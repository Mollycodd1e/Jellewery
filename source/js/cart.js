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
