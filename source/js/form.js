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
