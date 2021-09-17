"use strict";
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
    c.classList.remove("operations__content--active")
  );

  // console.log(clicked.dataset.tab);
  clicked.classList.add("operations__button--active");
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
