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
