"use strict";

function modal() {
  let body = document.querySelector('body'),
      more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay');
  body.addEventListener('click', e => {
    let target = e.target;

    if (target.classList.contains('more')) {
      overlay.style.display = 'block';
      more.classList.add('more-splash');
      body.style.overflow = 'hidden';
    }

    if (target.classList.contains('popup-close')) {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      body.style.overflow = '';
    }

    if (target.classList.contains('description-btn')) {
      overlay.style.display = 'block';
      more.classList.add('more-splash');
      body.style.overflow = 'hidden';
    }
  });
}

module.exports = modal;