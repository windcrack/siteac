"use strict";

function form() {
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! скоро мы с вами свяжемся',
    fail: 'Что то пошло не так...'
  };
  let form = document.getElementsByClassName('main-form')[0],
      body = document.querySelector('body'),
      input = form.getElementsByTagName('input'),
      statusMesage = document.createElement('div');
  statusMesage.classList.add('status');

  function ajaxSend(target) {
    let formsData = new FormData(target);

    function formPost(data) {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        request.onreadystatechange = () => {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 300) {
              resolve();
            } else {
              reject();
            }
          }
        };

        request.send(data);
      });
    }

    function inputClear() {
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }

    formPost(formsData).then(() => statusMesage.innerHTML = message.loading).then(() => statusMesage.innerHTML = message.success).catch(() => statusMesage.innerHTML = message.fail).then(inputClear);
  }

  body.addEventListener('submit', e => {
    e.preventDefault();
    let target = e.target;

    if (target.classList.contains('main-form') || (target.id = 'form')) {
      target.appendChild(statusMesage);
      ajaxSend(target);
    }
  });
}

module.exports = form;