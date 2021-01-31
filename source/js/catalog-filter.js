'use strict';

(function () {

  var filterSection = document.querySelector('.catalog-filter');

  if (filterSection) {
    var filterButton = filterSection.querySelector('.catalog-filter__filter-button');

    filterButton.addEventListener('click', function () {

      if (filterSection.classList.contains('catalog-filter--closed')) {
        filterSection.classList.remove('catalog-filter--closed');
        filterSection.classList.add('catalog-filter--opened');
      } else {
        filterSection.classList.remove('catalog-filter--opened');
        filterSection.classList.add('catalog-filter--closed');
      }
    });
  }
})();
