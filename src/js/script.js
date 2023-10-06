let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".burger-menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

let popupBg = document.querySelector(".popup__bg");
let popup = document.querySelector(".popup");
let openPopupButtons = document.querySelectorAll(".open-popup");
let popupPlaceholder = document.querySelector(".popup-placeholder");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});

popupPlaceholder.addEventListener("click", () => {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});
document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
});
