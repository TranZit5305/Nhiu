document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("isLoggedIn") !== "true") {
    alert("Bạn chưa nhập mật khẩu, vui lòng nhập mật khẩu để tiếp tục...");
    // ✅ Chỉ sau khi người dùng bấm OK, lệnh dưới mới chạy:
    window.location.href = "../html/login.html";
    return;
  }
  document.body.style.display = "block"
  const text = "Chào bạn, đây là hiệu ứng hiện từng chữ!";
  const container = document.querySelector(".text-container");
  const video = document.getElementById("myVideo");
  const replayBtn = document.getElementById("replayBtn");
  const pageContent = document.querySelector(".page-content");
  const bgMusic = document.getElementById("bg-music");

  let index = 0;
  // Gõ từng chữ
  function typeLetter() {
    if (index < text.length) {
      container.textContent += text.charAt(index++);
      setTimeout(typeLetter, 80);
    }
  }

  // Hiệu ứng tuyết
  const canvas = document.getElementById("snow");
  const ctx = canvas.getContext("2d");
  let w, h, flakes = [];

  function initSnow() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    flakes = Array.from({length: 100}, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 4 + 1,
      d: Math.random() + 1
    }));
  }

  function drawSnow() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "white";
    ctx.beginPath();
    flakes.forEach(f => {
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    });
    ctx.fill();
    moveSnow();
  }

  function moveSnow() {
    flakes.forEach(f => {
      f.y += Math.pow(f.d, 2);
      if (f.y > h) f.y = 0;
    });
  }

  function animateSnow() {
    drawSnow();
    requestAnimationFrame(animateSnow);
  }

  window.addEventListener("resize", initSnow);

  // Xử lý video
  video.addEventListener("play", () => bgMusic.pause());
  video.addEventListener("ended", () => {
    alert("Cảm ơn bạn đã xem hết video!");
    replayBtn.hidden = false;
    bgMusic.play();
  });

  replayBtn.addEventListener("click", () => {
    video.currentTime = 0;
    video.play();
    replayBtn.hidden = true;
  });

  // Ngăn chuột phải
  document.addEventListener("contextmenu", e => e.preventDefault());

  // Hiện trang
  pageContent.hidden = false;
  typeLetter();
  initSnow();
  animateSnow();
});
