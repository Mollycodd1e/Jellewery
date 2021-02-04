'use strict';

(function () {
  var mainFaq = document.querySelector('.main-faq');

  if (mainFaq) {
    var allFaq = mainFaq.querySelectorAll('.main-faq__faq-wrapper');

    for (var j = 0; j < allFaq.length; j++) {
      allFaq[j].classList.remove('main-faq__faq-wrapper--nojs');
    }

    var faqClosing = function (faqSection) {
      faqSection.classList.remove('main-faq__faq-wrapper--open');
      faqSection.classList.add('main-faq__faq-wrapper--close');
    };

    var openToggle = function (question) {
      question.addEventListener('click', function () {
        var openTab = mainFaq.querySelector('.main-faq__faq-wrapper--open');

        if (question.classList.contains('main-faq__faq-wrapper--close')) {
          question.classList.remove('main-faq__faq-wrapper--close');
          question.classList.add('main-faq__faq-wrapper--open');
        } else {
          faqClosing(question);
        }

        if (openTab) {
          faqClosing(openTab);
        }
      });
    };

    for (var i = 0; i < allFaq.length; i++) {
      openToggle(allFaq[i]);
    }
  }
})();
