  const text = "Chào bạn, đây là hiệu ứng hiện từng chữ!";
  const container = document.querySelector(".text-container");
  const video = document.getElementById("myVideo");
  const replayBtn = document.getElementById("replayBtn");
  const pageContent = document.querySelector(".page-content");
  const youtubeIframe = document.querySelector("iframe");

  
  let index = 0;
  // JavaScript
  function showCustomAlert() {
    document.getElementById('customAlert').style.display = 'block';
  }

  function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
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
    postToYouTube("mute");
  });
  video.addEventListener("ended", () => {
    postToYouTube("unMute");
    alert("Cảm ơn bạn đã xem hết video!");
    replayBtn.hidden = false;
  });

  replayBtn.addEventListener("click", () => {
    video.currentTime = 0;
    video.play();
    replayBtn.hidden = true;
    postToYouTube("mute");
  });
  video.addEventListener("pause", () => {
  if (!video.ended) {
    postToYouTube("unMute");
  }
});
  // Ngăn chuột phải
  // document.addEventListener("contextmenu", e => e.preventDefault());
  document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
      alert("Bạn chưa nhập mật khẩu vui lòng nhập mật khẩu....")
      window.location.href = "../html/login.html"; // Đổi đúng tên file login của bạn
      return;
    }
    document.body.style.display = "block"
    pageContent.hidden = false;// Hiện trang
    
    // loinoidau();
    window.onload = () => {
      setTimeout(showCustomAlert, 1000);
    };
    typeLetter();
    initSnow();
    animateSnow();
  });
