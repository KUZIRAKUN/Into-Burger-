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
// フェードインさせたい要素を全部取る
const fadeElems = document.querySelectorAll('.fadein');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {          // 画面に入ったら
      entry.target.classList.add('is-show'); // クラス付ける
      observer.unobserve(entry.target);      // 1回出たら監視終了
    }
  });
}, {
  threshold: 0.7   // 70%見えたら反応
});

// それぞれを監視開始
fadeElems.forEach(el => observer.observe(el));
