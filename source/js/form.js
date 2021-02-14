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

      var filterToggleButton = filterSection.querySelector('legend');
      var filterSliderToggle = filterSection.querySelector('p');
      var filterButton = filterSection.querySelector('button');
      var filterSliderButton = filterSection.querySelector('button');

      if (filterToggleButton) {
        filterToggleButton.addEventListener('click', function () {
          if (filterSection.classList.contains('catalog-filter__wrapper--closed')) {
            filterSection.classList.remove('catalog-filter__wrapper--closed');
            filterSection.classList.add('catalog-filter__wrapper--opened');
          } else {
            filterSection.classList.remove('catalog-filter__wrapper--opened');
            filterSection.classList.add('catalog-filter__wrapper--closed');
          }
        });

        filterButton.addEventListener('click', function () {
          if (filterSection.classList.contains('catalog-filter__wrapper--closed')) {
            filterSection.classList.remove('catalog-filter__wrapper--closed');
            filterSection.classList.add('catalog-filter__wrapper--opened');
          } else {
            filterSection.classList.remove('catalog-filter__wrapper--opened');
            filterSection.classList.add('catalog-filter__wrapper--closed');
          }
        });
      } else {
        filterSliderToggle.addEventListener('click', function () {
          if (filterSection.classList.contains('catalog-filter__wrapper--closed')) {
            filterSection.classList.remove('catalog-filter__wrapper--closed');
            filterSection.classList.add('catalog-filter__wrapper--opened');
          } else {
            filterSection.classList.remove('catalog-filter__wrapper--opened');
            filterSection.classList.add('catalog-filter__wrapper--closed');
          }
        });

        filterSliderButton.addEventListener('click', function () {
          if (filterSection.classList.contains('catalog-filter__wrapper--closed')) {
            filterSection.classList.remove('catalog-filter__wrapper--closed');
            filterSection.classList.add('catalog-filter__wrapper--opened');
          } else {
            filterSection.classList.remove('catalog-filter__wrapper--opened');
            filterSection.classList.add('catalog-filter__wrapper--closed');
          }
        });
      }
    };

    for (var i = 0; i < filterOptions.length; i++) {
      filterToggle(filterOptions[i]);
    }
  }
})();
