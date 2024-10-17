'use strict';

const footerBox = document.querySelector('.footer-container');
const allContainers = document.querySelectorAll('.container');

const showProjects = function (entries, observer) {
  // const [entry] = entries;
  // console.log(entry);
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('animated-elem');
    observer.unobserve(entry.target);
  });
};

const projectsObserver = new IntersectionObserver(showProjects, {
  root: null,
  threshold: 0.3,
});

allContainers.forEach(function (project) {
  projectsObserver.observe(project);
});

// set data on footer

const currenYear = new Date().getFullYear();

const footerDateHTML = `<p class="footer-rights">
          © ${currenYear}
          <span class="footer-rights__name">
            filip</span>marcinkowski
          </span>
        </p>`;

footerBox.insertAdjacentHTML('afterbegin', footerDateHTML);
