var typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Game Developer",
    "UI/UX Designer",
    "Graphic Designer",
  ],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
  loop: true,
});
let menuIcon = document.querySelector('#menuIcon');
let navlinks = document.querySelector('.navlinks')

let sections = document.querySelectorAll("section");
let navbar = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

let header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 100);
