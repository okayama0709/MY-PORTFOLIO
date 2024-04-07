// // mySwiper_mainにマウスオーバーとマウスアウトのイベントリスナーを追加
// mySwiper_main.el.addEventListener("mouseover", () => {
//   mySwiper_main.autoplay.stop();
// });

// mySwiper_main.el.addEventListener("mouseout", () => {
//   mySwiper_main.autoplay.start();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const classesToShow = [
//     "slide-title",
//     "slide-text",
//     "slide-date",
//     "slide-view",
//   ];

//   const showElementsTemporarily = (classes, duration) => {
//     classes.forEach((className) => {
//       const elements = document.querySelectorAll(`.${className}`);
//       elements.forEach((element, index) => {
//         element.style.opacity = "1";
//         setTimeout(
//           () => {
//             element.style.opacity = "0";
//           },
//           index == 0 ? duration : 1000
//         ); // 最初の要素は指定されたduration、それ以外は1秒後
//       });
//     });

//     // .swiper-slideに"anm-finished"クラスを追加する処理を追加
//     setTimeout(() => {
//       const swiperSlides = document.querySelectorAll(".swiper-slide");
//       swiperSlides.forEach((slide, index) => {
//         if (index == 0) {
//           slide.classList.add("anm-finished");
//         }
//       });
//     }, 4500); // 4.5秒後に実行
//   };

//   showElementsTemporarily(classesToShow, 4500); // 最初の要素を5秒間表示
// });
