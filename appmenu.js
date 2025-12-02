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
