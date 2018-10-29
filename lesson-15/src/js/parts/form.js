// "use strict";

// function form() {
//   let message = {
//     loading: 'Загрузка...',
//     success: 'Спасибо! скоро мы с вами свяжемся',
//     fail: 'Что то пошло не так...'
//   };
//   let body = document.querySelector('body'),
//       // input = form.getElementsByTagName('input'),
//       statusMesage = document.createElement('div');
//   statusMesage.classList.add('status');

//   function ajaxSend(target) {
//     let formsData = new FormData(target);

//     function formPost(data) {
//       return new Promise((resolve, reject) => {
//         let request = new XMLHttpRequest();
//         request.open('POST', 'server.php');
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

//         request.onreadystatechange = () => {
//           if (request.readyState < 4) {
//             resolve();
//           } else if (request.readyState === 4) {
//             if (request.status == 200 && request.status < 300) {
//               resolve();
//             } else {
//               reject();
//             }
//           }
//         };

//         request.send(data);
//       });
//     }

//     function inputClear() {
//       let input = target.getElementsByTagName('input');
//       for (let i = 0; i < input.length; i++) {
//         input[i].value = '';
//       }
//     }

//     formPost(formsData).then(() => statusMesage.innerHTML = message.loading).then(() => statusMesage.innerHTML = message.success).catch(() => statusMesage.innerHTML = message.fail).then(inputClear);
//   }

//   body.addEventListener('submit', e => {
//     e.preventDefault();
//     let target = e.target;

//     if (target.classList.contains('main-form') || (target.id = 'form')) {
//       target.appendChild(statusMesage);
//       ajaxSend(target);
//     }
//   });
// }

// module.exports = form;

function form() {
  let sendRequest = function (target) {

    let message = {
        loading: "Загрузка....",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
      },
      statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    target.appendChild(statusMessage);
    let formData = new FormData(target),
      obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);

    function postData(json) {

      return new Promise(function (resolve, reject) {

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4 && request.status === 200) {
            resolve();
          } else {
            reject();
          }
        };
        request.send(json);
      });
    }

    function clearInput() {
      let input = target.getElementsByTagName('input');
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }

    postData(formData)
      .then(() => statusMessage.innerHTML = message.loading)
      .then(() => statusMessage.innerHTML = message.success)
      .catch(() => statusMessage.innerHTML = message.failure)
      .then(clearInput);
  };

  let body = document.querySelector('body');
  body.addEventListener('submit', e => {
    e.preventDefault();
    let target = e.target;

    if (target.id == 'form' || target.classList.contains('main-form')) {
      sendRequest(target);
    }
  });
}
 module.exports = form;