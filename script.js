let btnHamburger = document.querySelector(".header__hamburger");
let overlayEl = document.querySelector(".header__overlay");
let linksEl = document.querySelector(".header__links");
let logoEl = document.querySelector(".header__logo");
let body = document.querySelector("body");
let tabsContainer = document.querySelector(".features__tabs");
let tabLabels = document.querySelectorAll(".tab-label");
let featuresContents = document.querySelectorAll(".features__content");
let inputEmail = document.querySelector("#input-email");
let btnSubmit = document.querySelector("#button-submit");
let formEmail = document.querySelector("#form-email");
let iconError = document.querySelector(".icon-error");

btnHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  overlayEl.classList.toggle("active");
  btnHamburger.classList.toggle("active");
  logoEl.classList.toggle("active");
  linksEl.classList.toggle("active");
  body.classList.toggle("locked");
}

[...tabLabels].forEach((label) => {
  label.addEventListener("click", (e) => {
    if (e.target.previousElementSibling.dataset.index === "0") {
      featuresContents[0].style.display = "flex";
      featuresContents[1].style.display = "none";
      featuresContents[2].style.display = "none";
    }
    if (e.target.previousElementSibling.dataset.index === "1") {
      featuresContents[1].style.display = "flex";
      featuresContents[0].style.display = "none";
      featuresContents[2].style.display = "none";
    }
    if (e.target.previousElementSibling.dataset.index === "2") {
      featuresContents[2].style.display = "flex";
      featuresContents[0].style.display = "none";
      featuresContents[1].style.display = "none";
    }
  });
});
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

formEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail(e.target[0].value)) {
    alert("Email is invalid!!");
    inputEmail.classList.add("invalid");
    iconError.classList.add("active");
  } else {
    alert("Success! Your email is being submitted.");
    iconError.classList.remove("active");
  }
});

// tabsContainer.addEventListener("click", (e) =>
//   console.log(e.target.lastElementChild)
// );
