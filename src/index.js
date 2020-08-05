import "./scss/index.scss";

let mainNavLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

mainNavLinks.forEach((link) =>
  link.addEventListener("click", () => {
    mainNavLinks.forEach((link) => link.classList.remove("active"));
    nav.classList.remove("nav--active");
    hamburger.classList.remove("hamburger--active");
    link.classList.toggle("active");
  })
);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("nav--active");
});

const progressBars = document.querySelectorAll(".knowledge__bar span");
const knowledge = document.querySelector(".knowledge");

window.addEventListener("scroll", () => {
  if (window.scrollY + innerHeight >= knowledge.offsetTop) {
    progressBars.forEach((bar) => {
      bar.style.width = `${bar.dataset.progress}%`;
    });
  }
});

const counters = document.querySelectorAll(".counter");
const speed = 3000;

const funFact = document.querySelector(".fun-fact");

window.addEventListener("scroll", () => {
  if (window.scrollY + innerHeight >= funFact.offsetTop) {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }
});
