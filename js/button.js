document.addEventListener("DOMContentLoaded", () => {
  // 現在のページ名を取得（例: 'work1.html'）
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .split(".")
    .shift();

  // ボタンにイベントリスナーを設定
  document.querySelectorAll(".site__buttons button").forEach((button) => {
    button.addEventListener("click", function () {
      // ボタンのテキスト内容に基づく画像のファイル名を取得
      const imageName = this.textContent.trim().toLowerCase(); // 'スマートフォン' -> 'スマートフォン'
      // 画像パスを更新。currentPage変数で現在のページ名を動的に使用
      const imagePath = `./image/WebP/${currentPage}/${imageName}.webp`;
      document.querySelector(".site__scroll img").src = imagePath; // 画像のsrcを更新

      // アクティブなボタンのスタイルを更新
      document
        .querySelectorAll(".site__buttons button")
        .forEach((btn) => btn.classList.remove("site__active"));
      this.classList.add("site__active"); // クリックされたボタンにアクティブクラスを追加
    });
  });
});
