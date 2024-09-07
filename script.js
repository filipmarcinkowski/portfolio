'use strict';

const title = document.querySelector('.section-title');
const textBox = document.querySelectorAll('.project__text-box');
const projectImage = document.querySelector('.project__image');
const myImage = document.querySelector('.image');

const changeMargin = function () {
  const titleWidth = title.getBoundingClientRect().width;
  const imageWidth = projectImage.getBoundingClientRect().width;
  const myImageWidth = myImage.getBoundingClientRect().width;

  textBox.forEach(function (box) {
    box.style.marginLeft = titleWidth + 'px';
  });

  const myImageMarginRight = imageWidth - myImageWidth;
  myImage.style.marginRight = myImageMarginRight + 'px';
};

changeMargin();
