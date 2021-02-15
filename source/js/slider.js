'use strict';

(function () {
  var slider = document.querySelector('.main-new');

  if (slider) {
    var position = 0;
    var slidesToShow = 4;
    var slidesToScroll = 2;
    var previousButton = slider.querySelector('.main-new__back-button-wrapper button');
    var nextButton = slider.querySelector('.main-new__forward-button-wrapper button');
    var sliderList = slider.querySelector('.main-new__product-list');
    var sliderContainer = slider.querySelector('.main-new__product-list-wrapper');
    var sliderItems = slider.querySelectorAll('.main-new__product-item');
    var itemWidth = sliderContainer.clientWidth / slidesToShow;
    var widthNow = sliderList.offsetWidth;
    var movePosition = slidesToScroll * itemWidth;

    if (window.innerWidth < 1024) {
      slidesToShow = 2;
    } else {
      slidesToShow = 4;
    }

    //sliderItems.forEach(function(item) {
    //  item.style.minWidth = ' ' + itemWidth  + 'px';
    //});

    previousButton.addEventListener('click', function () {
      position += widthNow;
      sliderList.style.transform = 'translateX(-' + position + 'px)';
    });

    nextButton.addEventListener('click', function () {
      position -= widthNow;
      sliderList.style.transform = 'translateX(-' + position + 'px)';
    });
  }
})();
