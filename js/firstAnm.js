document.addEventListener("DOMContentLoaded", () => {
   const textContainer = document.getElementById("textAnimation");
   const parentContainer = document.querySelector(".firstAnimation");

   // アニメーションが既に表示されたかどうかを確認
   if (sessionStorage.getItem("animationDisplayed")) {
      parentContainer.style.display = "none";
   } else {
      const text = textContainer.textContent;
      textContainer.textContent = "";
      let animationCompleted = 0;

      text.split("").forEach((char, index) => {
         const span = document.createElement("span");
         span.textContent = char;
         textContainer.appendChild(span);

         setTimeout(() => {
            span.classList.add("visible");
         }, 100 * index);

         span.addEventListener("animationend", () => {
            animationCompleted++;
            if (animationCompleted === text.length) {
               // 全ての文字のアニメーションが完了したら、親要素に move-up アニメーションを適用
               parentContainer.classList.add("move-up");
            }
         });
      });

      parentContainer.addEventListener("animationend", (event) => {
         // move-up アニメーションが終了したことを確認
         if (event.animationName === "moveUp") {
            parentContainer.style.display = "none";
            // アニメーションが表示されたことをsessionStorageに記録
            sessionStorage.setItem("animationDisplayed", "true");
         }
      });
   }
});

// document.addEventListener("DOMContentLoaded", () => {
//    const textContainer = document.getElementById("textAnimation");
//    const text = textContainer.textContent;
//    const parentContainer = document.querySelector(".firstAnimation");
//    textContainer.textContent = "";

//    let animationCompleted = 0;

//    text.split("").forEach((char, index) => {
//       const span = document.createElement("span");
//       span.textContent = char;
//       textContainer.appendChild(span);

//       setTimeout(() => {
//          span.classList.add("visible");
//       }, 100 * index);

//       span.addEventListener("animationend", () => {
//          animationCompleted++;
//          if (animationCompleted === text.length) {
//             // 全ての文字のアニメーションが完了したら、親要素に move-up アニメーションを適用
//             parentContainer.classList.add("move-up");
//          }
//       });
//    });

//    parentContainer.addEventListener("animationend", (event) => {
//       // move-up アニメーションが終了したことを確認
//       if (event.animationName === "moveUp") {
//          parentContainer.style.display = "none";
//       }
//    });
// });
