'use strict';

(function () {
  var mainFaq = document.querySelector('.main-faq');

  if (mainFaq) {
    var allFaq = mainFaq.querySelectorAll('.main-faq__faq-wrapper');

    var openToggle = function (question) {
      question.addEventListener('click', function () {
        var openTab = mainFaq.querySelector('.main-faq__faq-wrapper--open');

        if (question.classList.contains('main-faq__faq-wrapper--close')) {
          question.classList.remove('main-faq__faq-wrapper--close');
          question.classList.add('main-faq__faq-wrapper--open');
        } else {
          question.classList.remove('main-faq__faq-wrapper--open');
          question.classList.add('main-faq__faq-wrapper--close');
        }

        openTab.classList.remove('main-faq__faq-wrapper--open');
        openTab.classList.add('main-faq__faq-wrapper--close');
      });
    };

    for (var i = 0; i < allFaq.length; i++) {
      openToggle(allFaq[i]);
    }
  }
})();
