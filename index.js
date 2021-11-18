let navToggle = document.querySelector(".nav__toggle");
let navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", function () {
  if (navMenu.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  } else {
    navMenu.classList.add("active");
    navToggle.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});