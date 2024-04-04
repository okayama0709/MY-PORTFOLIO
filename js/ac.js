const accessible = document.querySelector(".accessible");
const accessibleMenu = document.querySelector(".accessible__menu");
const backbtn = document.querySelector(".accessible__back");

accessible.addEventListener("click", () => {
  accessible.classList.toggle("active");
  accessibleMenu.classList.toggle("active");
});
backbtn.addEventListener("click", () => {
  accessible.classList.toggle("active");
  accessibleMenu.classList.toggle("active");
});
// チェックボックス
document.addEventListener("DOMContentLoaded", () => {
  const switch1 = document.getElementById("switch1");
  const grid = document.querySelector(".grid");
  const img = document.querySelectorAll(".grid__imgbox");
  const titles = document.querySelectorAll(".grid__title");

  switch1.addEventListener("change", () => {
    if (switch1.checked) {
      // チェックボックスがチェックされたとき
      grid.style.gridTemplateColumns = "repeat(2, 1fr)";
      img.forEach((imgs) => {
        imgs.style.height = "80px";
      });
      titles.forEach((title) => {
        title.style.fontSize = "22px";
      });
    } else {
      // チェックボックスがチェックされていないとき
      grid.style.gridTemplateColumns = "repeat(3, 1fr)";
      img.forEach((imgs) => {
        imgs.style.height = "";
      });
      titles.forEach((title) => {
        title.style.fontSize = "";
      });
    }
  });
});

// // span にブラック付与
// span に黒色を追加し、最後に全て削除
const classToggle = function (clickCount, spans) {
  // clickCountに応じてspanに"black"クラスを追加
  spans.forEach((span, index) => {
    if (index < clickCount) {
      span.classList.add("black");
    } else {
      span.classList.remove("black");
    }
  });
};

// クリックごとの挙動を設定
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".grid__card").forEach((card) => {
    let clickCount = 0; // カードごとのクリック回数をカウント

    card.addEventListener("click", function () {
      const spansContainer = this.querySelector(".grid__spans");
      if (!spansContainer) return;

      const spans = spansContainer.querySelectorAll("span");
      clickCount++;

      if (clickCount <= spans.length) {
        spansContainer.style.opacity = 1; // 黒色を追加し始める
        classToggle(clickCount, spans);
      } else {
        spansContainer.style.opacity = 0; // 黒色を全て削除
        classToggle(0, spans); // 全ての"black"クラスを削除
        clickCount = 0; // クリックカウントをリセット
      }
    });
  });
});

// 文字サイズ
function adjustTextSize(triggerElementId, cssVariableName, sizesArray) {
  let clickCount = 0; // クリック回数を追跡する変数
  const triggerElement = document.getElementById(triggerElementId);

  triggerElement.addEventListener("click", () => {
    const size = sizesArray[clickCount % sizesArray.length];
    document.documentElement.style.setProperty(cssVariableName, `${size}px`);
    clickCount++;
  });
}

// 文字の高さ
function adjustTextHeight(triggerElementId, cssVariableName, heightsArray) {
  let clickCount = 0; // クリック回数を追跡する変数
  const triggerElement = document.getElementById(triggerElementId);

  triggerElement.addEventListener("click", () => {
    const height = heightsArray[clickCount % heightsArray.length];
    document.documentElement.style.cssText += `${cssVariableName}: ${height}em !important;`;
    clickCount++;
  });
}
// 文字の間隔
function adjustTextSpace(triggerElementId, cssVariableName, SpaceArray) {
  let clickCount = 0;
  const triggerElement = document.getElementById(triggerElementId);

  triggerElement.addEventListener("click", () => {
    const Space = SpaceArray[clickCount % SpaceArray.length];
    document.documentElement.style.cssText += `${cssVariableName}:${Space}em !important;`;
    clickCount++;
  });
}
// コントラスト
function adjustContrast(
  triggerElementId,
  cssVariableName,
  filterArray,
  titleChange
) {
  let clickCount = 0; // クリック回数を追跡する変数
  const triggerElement = document.getElementById(triggerElementId);
  const imgElement = triggerElement.querySelector(".grid__imgbox img"); // img要素を選択

  triggerElement.addEventListener("click", function (event) {
    const title = this.querySelector(".grid__title");
    const filter = filterArray[clickCount % filterArray.length];
    document.documentElement.style.setProperty(cssVariableName, filter);
    title.textContent = titleChange[clickCount % titleChange.length];

    // imgの角度を設定
    if (clickCount === 2) {
      // 1回目のクリック: 180度回転
      imgElement.style.transform = "rotate(180deg)";
    } else {
      // 2回目以降のクリック: 角度を0度に戻す
      imgElement.style.transform = "rotate(0deg)";
    }

    clickCount++;
    // クリックカウントがフィルター配列の長さを超えるとリセット
    if (clickCount >= filterArray.length) {
      clickCount = 0; // クリックカウントをリセット
    }
  });
}
// 彩度
function adjustSaturate(
  triggerElementId,
  cssVariableName,
  saturateArray,
  titleChange
) {
  let clickCount = 0; // クリック回数を追跡する変数
  const triggerElement = document.getElementById(triggerElementId);

  triggerElement.addEventListener("click", function (event) {
    const title = this.querySelector(".grid__title");
    const saturate = saturateArray[clickCount % saturateArray.length];
    document.documentElement.style.setProperty(cssVariableName, saturate);
    title.textContent = titleChange[clickCount % titleChange.length];
    clickCount++;
  });
}
//文字位置
function adjustTextAlign(
  triggerElementId,
  cssVariableName,
  alignArray,
  titleChange,
  imgSrc
) {
  let clickCount = 0; // クリック回数を追跡する変数
  const triggerElement = document.getElementById(triggerElementId);

  triggerElement.addEventListener("click", function (event) {
    const title = this.querySelector(".grid__title");
    const imgElement = this.querySelector(".grid__imgbox img");
    const align = alignArray[clickCount % alignArray.length];
    document.documentElement.style.cssText += `${cssVariableName}: ${align} !important;`;
    title.textContent = titleChange[clickCount % titleChange.length];
    imgElement.setAttribute(
      "src",
      `./image/${imgSrc[clickCount % imgSrc.length]}`
    );
    clickCount++;
  });
}
// フォント
function adjustFont(triggerElementId, cssVariableName, fontArray, titleChange) {
  let clickCount = 0; // クリック回数を追跡する変数

  const triggerElement = document.getElementById(triggerElementId);

  triggerElement.addEventListener("click", function (event) {
    const title = this.querySelector(".grid__title");
    const font = fontArray[clickCount % fontArray.length];
    document.documentElement.style.cssText += `${cssVariableName}: ${font}`;
    title.textContent = titleChange[clickCount % titleChange.length];
    clickCount++;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // テキストサイズの調整
  adjustTextSize("textSize", "--font-size", [14, 17, 18, 19, 16]);

  // 文字の高さの調整
  adjustTextHeight("textHeight", "--font-height", [2.2, 2.4, 2.6, 2]);

  // 文字の間隔
  adjustTextSpace("textSpace", "--font-space", [0.1, 0.2, 0.3, 0.05]);
  // コントラストフィルター
  adjustContrast(
    "filter", // トリガー要素のIDを正確に指定
    "--contrast-filter",
    [
      "contrast(80%) grayscale(50%)",
      "contrast(140%)",
      "hue-rotate(180deg)",
      "",
    ],
    ["ライトコントラスト", "ハイコントラスト", "反転色", "コントラスト"]
  );
  // 彩度フィルター
  adjustSaturate(
    "saturate",
    "--saturate-filter",
    ["saturate(50%)", "saturate(3)", "grayscale(100%)", ""],
    ["低彩度", "高彩度", "モノクロ", "彩度"]
  );
  // 文字の位置
  adjustTextAlign(
    "textAlign",
    "--text-align",
    ["left", "center", "right", ""],
    ["左寄せ", "中央", "右寄せ", "文字位置"],
    ["alignLeft.png", "alignCenter.png", "alignRight.png", "alignLeft.png"]
  );
  adjustFont(
    "font",
    "--font-family",
    [
      "'Open-Dyslexic','Sans Comic Sans', sans-serif;",
      "'Noto Sans JP', 'ヒラギノ角ゴ ProN W3', sans-serif",
    ],
    ["失読症の方", "フォント"]
  );
});

// 文字の色の調整
const picker = Pickr.create({
  el: "#text-color",
  theme: "nano",
  default: "#f6f6f6",
  defaultRepresentation: "HEX",
  swatches: ["#f6f6f6"],
  comparison: false,
  components: {
    palette: true,
    preview: true,
    opacity: true,
    hue: true,
    interaction: {
      clear: true,
      cancel: true,
      save: true,
    },
  },
  i18n: {
    "btn:save": "保存",
    "btn:cancel": "閉じる",
    "btn:clear": "リセット",
  },
});
picker.on("clear", (instance) => {
  // デフォルトカラーを直接設定する
  const defaultColor = "#f6f6f6";
  document.documentElement.style.setProperty("--font-color", defaultColor);
  instance.setColor(defaultColor, true);
  instance.hide();
});
picker.on("save", (color, instance) => {
  instance.hide(); // PickrのUIを非表示にする

  // colorがnullでない場合のみ処理を行う
  if (color) {
    const colorString = color.toHEXA().toString(3); // HEXA形式で色を取得
    document.documentElement.style.setProperty("--font-color", colorString);
  } else {
    // colorがnullの場合、デフォルトカラーまたは別の処理をここに記述
    console.log("No color selected.");
  }
});

picker.on("cancel", (instance) => {
  instance.hide();
});

// 文字の背景色の調整
const textShadowPicker = Pickr.create({
  el: "#textshadow-color",
  theme: "nano",
  default: "#333",
  defaultRepresentation: "HEX",
  swatches: ["#333"],
  comparison: false,

  components: {
    palette: true,
    preview: true,
    opacity: true,

    hue: true,
    interaction: {
      clear: true,
      cancel: true,
      save: true,
    },
  },
  i18n: {
    "btn:save": "保存",
    "btn:cancel": "閉じる",
    "btn:clear": "リセット",
  },
});
textShadowPicker.on("cancel", (instance) => {
  instance.hide();
});
textShadowPicker.on("clear", (instance) => {
  // デフォルトカラーを直接設定する
  const defaultColor = "#222";
  document.documentElement.style.setProperty("--font-border", defaultColor);
  instance.setColor(defaultColor, true);
  instance.hide();
});
textShadowPicker.on("save", (color, instance) => {
  instance.hide();

  // colorがnullでない場合のみ処理を行う
  if (color) {
    const colorString = color.toHEXA().toString(3); // HEXA形式で色を取得
    document.documentElement.style.setProperty("--font-border", colorString);
  } else {
    // colorがnullの場合、デフォルトカラーまたは別の処理をここに記述
    console.log("No color selected.");
  }
});
// 背景色の調整
const BGPicker = Pickr.create({
  el: "#BG-picker",
  theme: "nano",
  default: "#14111f",
  defaultRepresentation: "HEX",
  swatches: ["#14111f"],
  comparison: false,

  components: {
    palette: true,
    preview: true,
    opacity: true,

    hue: true,
    interaction: {
      clear: true,
      cancel: true,
      save: true,
    },
  },
  i18n: {
    "btn:save": "保存",
    "btn:cancel": "閉じる",
    "btn:clear": "リセット",
  },
});
BGPicker.on("cancel", (instance) => {
  instance.hide();
});
BGPicker.on("clear", (instance) => {
  // デフォルトカラーを直接設定する

  const defaultColor = "#14111f";
  document.documentElement.style.setProperty("--bg-color", defaultColor);
  instance.setColor(defaultColor, true);
  instance.hide();
});
BGPicker.on("save", (color, instance) => {
  instance.hide(); // PickrのUIを非表示にする

  // colorがnullでない場合のみ処理を行う
  if (color) {
    const colorString = color.toHEXA().toString(3); // HEXA形式で色を取得
    document.documentElement.style.setProperty("--bg-color", colorString);
  } else {
    // colorがnullの場合、デフォルトカラーまたは別の処理をここに記述
    console.log("No color selected.");
  }
});

// リンクのHighlight
document.addEventListener("DOMContentLoaded", () => {
  const linkHighlightElement = document.getElementById("linkHighIight");
  let isHighlighted = false; // スタイルが適用されているかどうかのフラグ

  linkHighlightElement.addEventListener("click", () => {
    const links = document.querySelectorAll("a"); // `<a>`タグに囲まれた全ての要素を選択

    links.forEach((link) => {
      // `<a>`タグ自体にスタイルを適用
      if (!isHighlighted) {
        link.style.backgroundColor = "black";
        link.style.color = "yellow";
      } else {
        link.style.backgroundColor = "";
        link.style.color = ""; // CSSで定義されているデフォルトの色に戻す
      }

      // `<a>`タグ内の全ての子要素に対して処理を実行
      const children = link.querySelectorAll("*");
      children.forEach((child) => {
        if (
          child.tagName.toLowerCase() !== "img" &&
          child.tagName.toLowerCase() !== "div" &&
          child.tagName.toLowerCase() !== "article" &&
          child.tagName.toLowerCase() !== "svg"
        ) {
          if (!isHighlighted) {
            // 子要素にスタイルを適用
            child.style.backgroundColor = "black";
            child.style.color = "yellow";
          } else {
            // 子要素のスタイルを元に戻す
            child.style.backgroundColor = "transparent"; // 元の背景色に戻す
            child.style.color = ""; // CSSで定義されているデフォルトの色に戻す
          }
        }
      });
    });

    isHighlighted = !isHighlighted;
  });
});

// アニメーションストップ
// const anmStopElement = document.getElementById("anmStop");
// anmStopElement.addEventListener("click", () => {
//   isAnimationPaused = !isAnimationPaused; // アニメーションの一時停止状態を切り替え

//   if (isAnimationPaused) {
//     // アニメーションを一時停止
//     clearTimeout(timer);
//   } else {
//     // アニメーションを再開
//     switchAnimation();
//   }
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const anmStopElement = document.getElementById("anmStop");
//   let isAnimationRunning = true; // アニメーションが実行中かどうかを追跡するフラグ
//   const slideContents = document.querySelectorAll(".slide-content > *"); // `.slide-content`の子要素を全て選択

//   anmStopElement.addEventListener("click", () => {
//     if (isAnimationRunning) {
//       // アニメーションが実行中の場合、停止する
//       mySwiper_main.autoplay.stop();
//       Array.from(slideContents).forEach((child) => {
//         if (child.tagName.toLowerCase() !== "svg") {
//           // SVG要素を除外
//           child.style.opacity = 1;
//         }
//       });
//     } else {
//       // アニメーションが停止している場合、開始する
//       mySwiper_main.autoplay.start();
//       Array.from(slideContents).forEach((child) => {
//         if (child.tagName.toLowerCase() !== "svg") {
//           // SVG要素を除外
//           child.style.opacity = 0; // ここでは例として0.5に設定していますが、必要に応じて調整
//         }
//       });
//     }
//     // アニメーションの状態を反転
//     isAnimationRunning = !isAnimationRunning;
//   });
// });

// イメージの除去
document.addEventListener("DOMContentLoaded", () => {
  const allWrap = document.querySelector(".allwrap");
  const allImg = allWrap.querySelectorAll("img");
  const imgNone = document.getElementById("imgNone");
  let clickCount = 0;

  imgNone.addEventListener("click", () => {
    clickCount++; // クリック回数をインクリメント
    if (clickCount === 1) {
      allImg.forEach((img) => {
        img.style.display = "none"; // すべての画像を非表示にする
      });
    } else {
      allImg.forEach((img) => {
        img.style.display = "block"; // すべての画像を非表示にする
        clickCount = 0;
      });
    }
  });
});

// カーソルの動き
document.addEventListener("mousemove", function (e) {
  const overlay = document.getElementById("overlay");
  const radius = 200; // フォーカスエリアの半径
  const x = e.clientX;
  const y = e.clientY;
});

// document.addEventListener("click", function (e) {
//   console.log(e.clientX, e.clientY); // クリックされた位置の座標をコンソールに出力
// });

document.addEventListener("mousemove", function (e) {
  const topArea = document.getElementById("topMask");
  const bottomArea = document.getElementById("bottomMask");
  const viewportHeight = window.innerHeight;

  // マウスカーソルの位置にフォーカスエリアを合わせる
  topArea.style.height = `${e.clientY - 50}px`;
  bottomArea.style.height = `${viewportHeight - e.clientY - 50}px`;
});

// フォント
document.addEventListener("DOMContentLoaded", () => {
  const cursolElement = document.getElementById("cursol");
  const topMask = document.getElementById("topMask");
  const bottomMask = document.getElementById("bottomMask");
  let clickCount = 0;
  const style = document.createElement("style");
  document.head.appendChild(style);

  cursolElement.addEventListener("click", function (e) {
    clickCount++;

    switch (clickCount) {
      case 1:
        // 1回目のクリック: カスタムカーソルを適用
        style.sheet.insertRule(
          `html { cursor: url('./image/cursor.png'), auto !important; }`,
          style.sheet.cssRules.length // 末尾に追加
        );
        break;
      case 2:
        // 2回目のクリック: デフォルトカーソルへ戻し、マスクを表示
        style.sheet.insertRule(
          `html { cursor: default !important; }`,
          style.sheet.cssRules.length // 末尾に追加してカスタムカーソルを上書き
        );
        topMask.style.display = "block";
        bottomMask.style.display = "block";
        this.querySelector(".grid__title").textContent = "フォーカス";
        break;
      case 3:
        // 3回目のクリック: 全てを元に戻す
        topMask.style.display = "none";
        bottomMask.style.display = "none";
        // スタイルシートからカーソルに関するルールを削除
        while (style.sheet.cssRules.length > 0) {
          style.sheet.deleteRule(0);
        }
        this.querySelector(".grid__title").textContent = "カーソル";
        clickCount = 0; // カウントをリセット
        break;
    }
  });
});
