"use strict";

function timer() {
  let deadLine = '2018-10-31';

  let getTimeRem = endtime => {
    let t = Date.parse(deadLine) - Date.parse(new Date()),
        sec = Math.floor(t / 1000 % 60),
        min = Math.floor(t / 1000 / 60 % 60),
        hou = Math.floor(t / (1000 * 60 * 60));

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
  };

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
    };

    let timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', deadLine);
}

module.exports = timer;