window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let info = document.querySelector('.info-header'),
    tab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  // Скрываем контетнт которые не должен отображатся
  let hideTabContent = a => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);
  // Задем появление контента если он скрыт
  let showTabContent = b => {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }
  // Устанавливаем событие при клике на определеную кнопку появлется соответсвующий контент
  info.addEventListener('click', e => {
    let target = e.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
  // Timer
  let deadLine = '2018-10-31';

  let getTimeRem = endtime => {
    let t = Date.parse(deadLine) - Date.parse(new Date()),
      sec = Math.floor((t / 1000) % 60),
      min = Math.floor((t / 1000 / 60) % 60),
      hou = Math.floor((t / (1000 * 60 * 60)));
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hou < 10) {
      hou = "0" + hou;
    }
    return {
      'total': t,
      'hours': hou,
      'minutes': min,
      'second': sec
    };
  }
  let setClock = (id, endtime) => {
    let time = document.getElementById(id),
      hours = time.querySelector('.hours'),
      minutes = time.querySelector('.minutes'),
      second = time.querySelector('.seconds');


    let updateClock = () => {
      let t = getTimeRem(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      second.textContent = t.second;
      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        second.textContent = "00";
      }

    }
    let timeInterval = setInterval(updateClock, 1000);
  }
  setClock('timer', deadLine);

  // Modal
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
  // form

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! скоро мы с вами свяжемся',
    fail: 'Что то пошло не так...'
  };

  let form = document.getElementsByClassName('main-form')[0],
    contatform = document.getElementById('form'),
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
          }
          request.send(data);
        })
      }
      function inputClear() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }
      formPost(formsData)
        .then(() => statusMesage.innerHTML = message.loading)
        .then(() => statusMesage.innerHTML = message.success)
        .catch(() => statusMesage.innerHTML = message.fail)
        .then(inputClear)
    }
    body.addEventListener('submit' , e => {
      e.preventDefault();
      let target = e.target;
      if (target.classList.contains('main-form') || (target.id = 'form')) {
        target.appendChild(statusMesage);
        ajaxSend(target);        
      }
    });


    // slider

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
        dots[indexSlide -1].classList.add('dot-active');
      }

      function plusSlides(n) {
        showSlides(indexSlide += n);
      }
      function currentSlide(n) {
        showSlides(indexSlide = n);
      }

      prev.addEventListener('click', () =>{
        plusSlides(-1);
      });
      next.addEventListener('click',() =>{
        plusSlides(1);
      });

      dotsWrap.addEventListener('click', e =>{
        for(let i = 0; i < dots.length +1; i++){
          if (e.target.classList.contains('dot') && e.target == dots[i-1]) {
            currentSlide(i);
          }
        }
      });
    // Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        counter = document.querySelector('.counter'),
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function () {
          personSum = +this.value;
          if (restDays.value == '') {
            totalValue.innerHTML = 0;
          } else {
            total = (daysSum + personSum) * 4000;
            totalValue.innerHTML = total;
            if (restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
              total = 0
              totalValue.innerHTML = total;
            }
          }
        });
        
        restDays.addEventListener('change', function () {
          daysSum = +this.value;
          if (persons.value == '') {
            totalValue.innerHTML = 0;
          } else {
            total = (daysSum + personSum) * 4000;
            totalValue.innerHTML = total;
            if (restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
               total = 0
               totalValue.innerHTML = total;
             }
          }
        });
      place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value ==''){
          totalValue.innerHTML = 0;
        } else {
          let a = total;
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
      })
});
