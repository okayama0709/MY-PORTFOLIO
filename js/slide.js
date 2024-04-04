let mySwiper_main;
let isHovered = false; // ホバー状態を追跡するフラグ
const myDelay = 5500;
let timer;

// スライダー全体にホバーイベントリスナーを追加
const slider = document.querySelector(".swiper-main");
slider.addEventListener("mouseover", () => {
  isHovered = true;
});
slider.addEventListener("mouseout", () => {
  isHovered = false;
});

// スタートアニメーションとエンドアニメーションのクラス追加
let isAnimationRunning = true; // アニメーションが実行中かどうかを追跡
let isAnimationPaused = false; // アニメーションが一時停止されているかどうか

const switchAnimation = () => {
  if (isAnimationPaused) return; // アニメーションが一時停止されていれば実行しない

  clearTimeout(timer);
  let activeSlide = document.querySelectorAll(
    ".swiper-main .swiper-slide[class*=-active]"
  );
  for (let i = 0; i < activeSlide.length; i++) {
    activeSlide[i].classList.remove("anm-finished");
    activeSlide[i].classList.add("anm-started");
  }
  timer = setTimeout(() => {
    for (let i = 0; i < activeSlide.length; i++) {
      activeSlide[i].classList.remove("anm-started");
      activeSlide[i].classList.add("anm-finished");
    }
  }, myDelay - 300); // `myDelay`はあなたのアニメーション遅延時間変数
};

const finishAnimation = () => {
  if (isAnimationPaused) return; // アニメーションが一時停止されていれば実行しない

  let activeSlide = document.querySelectorAll(".mv .swiper-slide.anm-started");
  for (let i = 0; i < activeSlide.length; i++) {
    activeSlide[i].classList.remove("anm-started");
    activeSlide[i].classList.add("anm-finished");
  }
};

//swiperのjs
const mySwiper_thumb = new Swiper(".mv .swiper-thumb", {
  slidesPerView: 4,
  spaceBetween: 26,
  direction: "vertical",
  roundLengths: true,
  speed: 1300,
  // grabCursor: true,
  slideToClickedSlide: true,
  breakpoints: {
    601: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
  thumbs: {
    swiper: mySwiper_main,
  },
});

mySwiper_main = new Swiper(".mv .swiper-main", {
  direction: "vertical",
  loop: true,
  speed: 1500,
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
  // breakpoints: {
  //   601: {
  //     thumbs: {
  //       autoScrollOffset: 0.8,
  //     },
  //   },
  // },

  on: {
    slideChange: () => {
      finishAnimation();
    },
    slideChangeTransitionStart: () => {
      switchAnimation();
    },
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

// mySwiper_mainにマウスオーバーとマウスアウトのイベントリスナーを追加
mySwiper_main.el.addEventListener("mouseover", () => {
  mySwiper_main.autoplay.stop();
  clearTimeout(timer);
});

mySwiper_main.el.addEventListener("mouseout", () => {
  mySwiper_main.autoplay.start();
});
