  const text = "Chào bạn, đây là hiệu ứng hiện từng chữ!";
  const container = document.querySelector(".text-container");
  const video = document.getElementById("myVideo");
  const replayBtn = document.getElementById("replayBtn");
  const pageContent = document.querySelector(".page-content");
  const audio = document.getElementById("bgMusic");
  const btnMusic = document.getElementById("BtnMusic");

  let musicWasPlaying = false;
  let index = 0;
  // JavaScript
  function showCustomAlert() {
    document.getElementById('customAlert').style.display = 'block';
  }

  function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
    Start();
  }
  // Gõ từng chữ
  function typeLetter() {
    if (index < text.length) {
      container.textContent += text.charAt(index++);
      setTimeout(typeLetter, 80);
    }
  }
  function loinoidau(){
    alert("Cảm ơn bạn Chút đã vào đây,cảm ơn bạn rất nhiều ,mong bạn sẽ xem hết video nhé :>");
  }
  // Xử lý video
  function postToYouTube(command) {
    if (!youtubeIframe) return;
    youtubeIframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: command,
      args: []
    }), "*");
  }
  video.addEventListener("play", () => {
  if (!audio.paused) {
    musicWasPlaying = true;
    audio.pause(); // Tắt nhạc khi video phát
  } else {
    musicWasPlaying = false;
  }
});
  btnMusic.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    btnMusic.classList.remove("off");
    btnMusic.textContent = "Nhạc nền 🎵";
  } else {
    bgMusic.pause();
    btnMusic.classList.add("off");
    btnMusic.textContent = "Nhạc nền 🔇";
  }
});
  video.addEventListener("pause", () => {
    if (!video.ended && musicWasPlaying) {
      audio.play(); // Phát lại nhạc khi dừng video giữa chừng
    }
  });

  video.addEventListener("ended", () => {
    if (musicWasPlaying) {
      audio.play(); // Phát lại nhạc khi xem xong
    }
    alert("Cảm ơn bạn đã xem hết video!");
    replayBtn.hidden = false;
  });

  replayBtn.addEventListener("click", () => {
    video.currentTime = 0;
    video.play();
    replayBtn.hidden = true;

    // Tắt nhạc nếu đang bật
    if (!audio.paused) {
      audio.pause();
    }
  });
  function Start(){// Hiện trang
    
    pageContent.style.display = "flex";
    typeLetter();
    initSnow();
    animateSnow();
    audio.play();
  }
  // Ngăn chuột phải
  // document.addEventListener("contextmenu", e => e.preventDefault());
  document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
      alert("Bạn chưa nhập mật khẩu vui lòng nhập mật khẩu....")
      window.location.href = "../html/login.html"; // Đổi đúng tên file login của bạn
      return;
    }
    document.body.style.display = "block";
    pageContent.style.display = "none";
    // loinoidau();
    window.onload = () => {
      setTimeout(showCustomAlert, 1000);
    };
    
  });
