let btnHamburger = document.querySelector(".header__hamburger");
let overlayEl = document.querySelector(".header__overlay");
let linksEl = document.querySelector(".header__links");
let logoEl = document.querySelector(".header__logo");
let body = document.querySelector("body");

btnHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  overlayEl.classList.toggle("active");
  btnHamburger.classList.toggle("active");
  logoEl.classList.toggle("active");
  linksEl.classList.toggle("active");
  body.classList.toggle("locked");
}
