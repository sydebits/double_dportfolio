/**************Typing Skills*******************/
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

/**************Menu Icon Navbar*******************/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/**************Scroll Section Active Link*******************/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /**************Sticky Header*******************/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /**************Menu Icon toggle off when Clicked*******************/
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/**************Scroll Reveal*******************/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
})

ScrollReveal().reveal('.hero-content, .container', {origin:'top'});
ScrollReveal().reveal('.hero-image, .skills-container, .portfolio-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.hero-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.hero-content p, .about-content', {origin:'right'});
