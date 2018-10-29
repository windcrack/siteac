"use strict";

function tabs() {
  let info = document.querySelector('.info-header'),
      tab = document.querySelectorAll('.info-header-tab'),
      tabContent = document.querySelectorAll('.info-tabcontent'); // Скрываем контетнт которые не должен отображатся

  let hideTabContent = a => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1); // Задем появление контента если он скрыт

  let showTabContent = b => {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }; // Устанавливаем событие при клике на определеную кнопку появлется соответсвующий контент


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
}

export default tabs;