'use strict';

(function () {
  var catalog = document.querySelector('.catalog-filter');

  if (catalog) {
    var closeButton = catalog.querySelector('.catalog-filter__form-button');
    var filterButton = catalog.querySelector('.catalog-filter__filter-button');

    catalog.classList.remove('catalog-filter--nojs');

    closeButton.addEventListener('click', function () {
      if (catalog.classList.contains('catalog-filter--opened')) {
        catalog.classList.remove('catalog-filter--opened');
        catalog.classList.add('catalog-filter--closed');
      }
    });

    filterButton.addEventListener('click', function () {
      if (catalog.classList.contains('catalog-filter--closed')) {
        catalog.classList.remove('catalog-filter--closed');
        catalog.classList.add('catalog-filter--opened');
      } else {
        catalog.classList.remove('catalog-filter--opened');
        catalog.classList.add('catalog-filter--closed');
      }
    });
  }
})();
