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
