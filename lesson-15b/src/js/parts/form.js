
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
 export default form;