import tabs from './parts/tabs';
import timer from './parts/timer';
import modal from './parts/modal';
import form from './parts/form';
import slider from './parts/slider';
import calc from './parts/calc';
window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  calc();
  form();
  slider();
  tabs();
  timer();
  modal();
});