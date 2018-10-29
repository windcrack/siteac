"use strict";

function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      counter = document.querySelector('.counter'),
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('input', function () {
    personSum = +this.value;

    if (restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      total = (daysSum + personSum) * 4000;
      totalValue.innerHTML = total;

      if (restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
        total = 0;
        totalValue.innerHTML = total;
      }
    }
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value;

    if (persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      total = (daysSum + personSum) * 4000;
      totalValue.innerHTML = total;

      if (restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
        total = 0;
        totalValue.innerHTML = total;
      }
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

export default calc;