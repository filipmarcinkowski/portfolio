'use strict';

const title = document.querySelector('.section-title');
const textBox = document.querySelectorAll('.project__text-box');

const changeMargin = function () {
  const titleWidth = title.getBoundingClientRect().width + 'px';
  textBox.forEach(function (box) {
    box.style.marginLeft = titleWidth;
  });
};

changeMargin();
