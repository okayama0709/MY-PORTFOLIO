document.addEventListener("DOMContentLoaded", () => {
  // ボタンにイベントリスナーを設定
  document.querySelectorAll(".site__buttons button").forEach((button) => {
    button.addEventListener("click", function () {
      // 画像のパスを更新
      const imageName = this.textContent; // ボタンのテキストを取得
      const imagePath = `./image/WebP/${imageName}.webp`; // 新しい画像のパス
      document.querySelector(".site__scroll img").src = imagePath; // 画像のsrcを更新

      // アクティブなボタンのスタイルを更新
      document
        .querySelectorAll(".site__buttons button")
        .forEach((btn) => btn.classList.remove("site__active"));
      this.classList.add("site__active"); // クリックされたボタンにアクティブクラスを追加
    });
  });
});
