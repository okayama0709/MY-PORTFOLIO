document.addEventListener("DOMContentLoaded", function () {
   const menuButton = document.querySelector(".menu");
   const menu = document.querySelector(".f-Menu");
   const body = document.body;

   menuButton.addEventListener("click", function () {
      menu.classList.toggle("menu__active");
      menuButton.classList.toggle("menu__active");

      // ハンバーガーメニューが開いているときにスクロールを無効にする
      if (menu.classList.contains("menu__active")) {
         body.style.overflow = "hidden";
      } else {
         body.style.overflow = "";
      }
   });
});
