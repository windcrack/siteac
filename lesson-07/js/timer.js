  'use strict';
  function timerOnline() {
    
    let time = new Date(),
        // p = document.querySelector('.timer'),
        h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds();
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    document.getElementById('timer').innerHTML = h + ":" + m + ":" + s;
    setTimeout('timerOnline()', 1000);
  };
