let menuItems = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu');
    li = document.createElement('li');
    title = document.getElementById('title');
    adv = document.querySelector('.adv');
    prompt1 = document.querySelector('.prompt');

menu.insertBefore(menuItems[2], menuItems[1]);
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
document.body.style.background = 'url(img/apple_true.jpg)';
menu.appendChild(li);
title.textContent = 'Мы продаём только подлинную технику Apple';
adv.style.display = 'none';
let apple = prompt("Как вы относитесь к технике Apple?", '');
prompt1.style.fontSize = "3rem";
prompt1.textContent = apple;

