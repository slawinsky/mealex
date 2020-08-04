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
