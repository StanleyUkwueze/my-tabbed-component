const btnContainer = document.querySelector(".operations_container");
const operationBtn = document.querySelectorAll(".operations__button");

const contentOperation = document.querySelectorAll(".operations__Content");

// operationBtn.forEach((e) =>
//   e.addEventListener("click", () => {
//     console.log("tabbed");
//   })
// );

btnContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__button"); //clicked is where the event originated
  // console.log(clicked);
  if (!clicked) return;
  operationBtn.forEach((t) => t.classList.remove("operations__button--active"));
  contentOperation.forEach((c) =>
    c.classList.remove("operations__Content--active")
  );

  // console.log(clicked.dataset.tab);
  clicked.classList.add("operations__button--active");
  document
    .querySelector(`.operations__Content__${clicked.dataset.tab}`)
    .classList.add("operations__Content--active");
});

//code for hamburger menu...
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".right_nav_items");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active"); //The toggle() method of the DOMTokenList  interface removes a given token from the list and returns false. If token doesn't exist it's added and the function returns true.
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

const clc = document.querySelector(".cl1");
console.log(clc.classList);
