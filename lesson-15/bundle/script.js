window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  let calc = require('../src/js/parts/calc.js'),
      form = require('../src/js/parts/form.js'),
      slider = require('../src/js/parts/slider.js'),
      tabs = require('../src/js/parts/tabs.js'),
      timer = require('../src/js/parts/timer.js'),
      modal = require('../src/js/parts/modal.js');
  calc();
  form();
  slider();
  tabs();
  timer();
  modal();
});