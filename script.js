'use strict';

const title = document.querySelector('.section-title');
const textBox = document.querySelectorAll('.project__text-box');
const projectImage = document.querySelector('.project__image');
const myImage = document.querySelector('.image');

const changeMargin = function () {
  // projects describtion margin-left
  const titleWidth = title.getBoundingClientRect().width;
  textBox.forEach(function (box) {
    box.style.marginLeft = titleWidth + 'px';
  });
};

// changeMargin();

// let index = 0;

// const showText = function (e) {
//   text = e.textContent;

//   e.textContent += text[index];

//   e.style.opacity = 1;
//   console.log(text);

//   // if (index < text.length) {
//   //   e.textContent += text[index];
//   //   index++;
//   //   setTimeout(showText, 100);
//   // }
// };

// titleElem.forEach(showText);

const titleElem = document.querySelectorAll('.title-elem');

// document.addEventListener('DOMContentLoaded', function () {
//   titleElem.forEach(function (e) {
//     // e.style.opacity = 0;
//     const myText = e.textContent;
//     console.log(myText);
//     e.textContent = '';
//     let index = 0;

//     const showText = function () {
//       if (index < myText.length) {
//         e.textContent += myText[index];
//         index++;
//         setTimeout(showText, 50);
//       }
//     };
//     setTimeout(showText, 1000);
//   });
// });
