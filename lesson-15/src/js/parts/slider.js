"use strict";

require("core-js/modules/web.dom.iterable");

function slider() {
  let indexSlide = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides();

  function showSlides(n) {
    if (n > slides.length) {
      indexSlide = 1;
    }

    if (n < 1) {
      indexSlide = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');
    dots.forEach(item => item.classList.remove('dot-active'));
    slides[indexSlide - 1].style.display = 'block';
    dots[indexSlide - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(indexSlide += n);
  }

  function currentSlide(n) {
    showSlides(indexSlide = n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });
  next.addEventListener('click', () => {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', e => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;