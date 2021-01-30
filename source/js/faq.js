'use strict';

(function () {
  var mainFaq = document.querySelector('.main-faq');

  if (mainFaq) {
    var mainWrapper = document.querySelector('.main-faq__wrapper');
    var materialFaq = mainFaq.querySelector('.main-faq__material-wrapper');
    var deliveryFaq = mainFaq.querySelector('.main-faq__delivery-wrapper');
    var paymentFaq = mainFaq.querySelector('.main-faq__payment-wrapper');
    var returnFaq = mainFaq.querySelector('.main-faq__return-wrapper');
    var allFaq = mainWrapper.querySelectorAll('div');
    var allButtons = allFaq.querySelectorAll('button');
    console.log(allFaq);

    var openToggle = function () {
      for (var i = 0; i < allFaq.length; i ++) {
        allButtons[i].addEventListener('click', function () {
          if (allFaq[i].classList.contains('main-faq__' + wrapper + '--close')) {
            allFaq[i].classList.remove('main-footer__' + wrapper + '--close');
            allFaq[i].classList.add('main-footer__' + wrapper + '--open');
          }
        });
      }
    }

    openToggle();
  }
})();
