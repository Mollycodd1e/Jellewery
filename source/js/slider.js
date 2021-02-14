'use strict';

(function () {
  var slider = document.querySelector('.main-new');

  if (slider) {
    var previousSlide = slider.querySelector('.main-new__back-button-wrapper button');
    var nextSlide = slider.querySelector('.main-new__forward-button-wrapper button');
    var sliderList = slider.querySelector('.main-new__product-list');

    previousSlide.addEventListener('click', function () {
      var widthNow = sliderList.offsetWidth;
      sliderList.style.transform = 'translateX(-' + widthNow + 'px)';
    });

    nextSlide.addEventListener('click', function () {
      var widthNow = sliderList.offsetWidth;
      sliderList.style.transform = 'translateX(' + widthNow + 'px)';
    });
  }
})();
