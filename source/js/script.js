'use strict';
const header = document.querySelector('.header');
const toggle = header.querySelector('.toggle');
const menu = header.querySelector('.menu');

toggle.classList.remove('toggle--cross');
toggle.classList.add('toggle--line');

menu.classList.remove('menu--show');
menu.classList.add('menu--hide');

const onToggleClick = function() {

  toggle.classList.toggle('toggle--cross');
  toggle.classList.toggle('toggle--line');

  menu.classList.toggle('menu--show');
  menu.classList.toggle('menu--hide');

};

toggle.addEventListener('click', onToggleClick);
