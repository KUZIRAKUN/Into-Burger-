const hamburger = document.querySelector('.headernavmenu');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.nav-close');

hamburger.addEventListener('click', () => {
  nav.classList.add('active');
  document.body.style.overflow = "hidden";  // ★スクロール禁止
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
  document.body.style.overflow = ""; // ★解除
});


// ポップアップ関連
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup-close");

document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault(); // ページ遷移しない

    // 入力チェック（必要ならここに追加）
    // 例）空欄だったら return でストップ

    popup.style.display = "flex"; // ←ポップ表示
});

// 閉じるボタン
popupClose.addEventListener("click", () => {
    popup.style.display = "none";
});

// 背景クリックでも閉じる
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
