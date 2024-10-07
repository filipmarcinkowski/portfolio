'use strict';

/*
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

const titleElem = document.querySelectorAll('.title-elem');

*/

const allProjects = document.querySelectorAll('.project-container');

const showProjects = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('animated-project');
  observer.unobserve(entry.target);
};

const projectsObserver = new IntersectionObserver(showProjects, {
  root: null,
  threshold: 0.3,
});

allProjects.forEach(function (project) {
  projectsObserver.observe(project);
});
