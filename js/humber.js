// menuのハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu");
  const menu = document.querySelector(".f-Menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("menu__active");
    menuButton.classList.toggle("menu__active");
  });
});
