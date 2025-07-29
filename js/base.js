  const text = "Chào bạn, đây là hiệu ứng hiện từng chữ!";
  const container = document.querySelector(".text-container");
  const video = document.getElementById("myVideo");
  const replayBtn = document.getElementById("replayBtn");
  const pageContent = document.querySelector(".page-content");
  const audio = document.getElementById("bgMusic");
  const btnMusic = document.getElementById("BtnMusic");

  let musicWasPlaying = false;
  let index = 0;
  let count_end = 1,count_value =0;
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
  video.addEventListener("play", () => {
  if (!audio.paused) {
    audio.pause(); // Tắt nhạc khi video phát
  }
});
  btnMusic.addEventListener("click", () => {
  if (audio.volume === 0) {
    audio.volume = 1; // Đặt âm lượng nhạc nền
    btnMusic.textContent = "Nhạc nền 🎵";
  } else {
    audio.volume = 0;
    btnMusic.textContent = "Nhạc nền 🔇";
  }
});
  video.addEventListener("pause", () => {
    if (!video.ended) {
      audio.play(); // Phát lại nhạc khi dừng video giữa chừng
    }
  });

  video.addEventListener("ended", () => {
      audio.play(); // Phát lại nhạc khi xem xong
    if(count_value < count_end){
      alert("Cảm ơn bạn đã xem hết video!");
      count_value++;
    }
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
    
    audio.play();
    pageContent.style.display = "flex";
    typeLetter();
    initSnow();
    animateSnow();
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
