$(document).ready(function () {
  let body = document.querySelector('body');
  // let href = $('a').attr;
  $(body).click(e => {
    let target = e.target;
    if (target.classList.contains('main_btna') || (target.classList.contains('main_btn'))) {
      $('div.overlay').show('slow');
      $('div.modal').slideDown('slow');
    }
  });
  
  $("[href='#sheldure']").click(function () {
    $('div.overlay').show('slow');
    $('div.modal').slideDown('slow');
  });
  $('.close').click(() => {
    $('div.overlay').hide(100);
    $('div.modal').slideUp('slow');
  });
});