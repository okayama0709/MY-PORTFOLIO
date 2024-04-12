let mySwiper_main;
const myDelay = 5500;

//swiperのjs
const mySwiper_thumb = new Swiper(".mv .swiper-thumb", {
  slidesPerView: 4,
  spaceBetween: 15,
  direction: "vertical",
  roundLengths: true,
  speed: 1300,
  slideToClickedSlide: true,
  breakpoints: {
    601: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
  },
  thumbs: {
    swiper: mySwiper_main,
  },
});

mySwiper_main = new Swiper(".mv .swiper-main", {
  direction: "vertical",
  loop: true,
  speed: 1200,
  loopAdditionalSlides: 1,
  allowTouchMove: false,
  autoplay: {
    delay: myDelay,
    disableOnInteraction: false,
    waitForTransition: false,
  },

  thumbs: {
    autoScrollOffset: 0.8,
    swiper: mySwiper_thumb,
  },
});

//ダブルクリックでメインのURL
document.addEventListener("DOMContentLoaded", () => {
  // サムネイル（サブ）スライダー内の全てのスライド要素を取得
  const thumbSlides = document.querySelectorAll(".swiper-thumb .swiper-slide");

  // 各サムネイル（サブ）スライドに対してダブルクリックイベントリスナーを設定
  thumbSlides.forEach((slide, index) => {
    slide.addEventListener("dblclick", () => {
      // メインスライダーの対応するスライドのリンクURLを取得
      // 注意: ここでは、メインスライダーとサムネイルスライダーの順序が一致していると仮定
      const mainSlideLink = document
        .querySelector(`.swiper-main .swiper-slide:nth-child(${index + 1})`)
        .getAttribute("href");

      // 取得したURLに遷移
      window.location.href = mainSlideLink;
    });
  });
});
