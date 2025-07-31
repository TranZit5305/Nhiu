  const text = "Chào bạn, chúc bạn sẽ xem video vui vẻ nhóoo!";
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
    audio.play();
    document.getElementById('customAlert').style.display = 'none';
    showStackedImages();

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
  
  //let timeout;
  // function resetTimer() {
  //   clearTimeout(timeout);
  //   timeout = setTimeout(() => {
  //     sessionStorage.setItem("isLoggedIn", "false");
  //     window.location.href = "index.html";
  //   }, 2 * 60 * 1000); // 2 phút không hoạt động
  // }
  // ["click", "mousemove", "keydown"].forEach(evt =>
  //   document.addEventListener(evt, resetTimer)
  // );
  // Xử lý video
  video.addEventListener("play", () => {
  if (!audio.paused) {
    audio.pause(); // Tắt nhạc khi video phát
  }
});
 btnMusic.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    btnMusic.textContent = "Nhạc nền 🎵";
  } else {
    audio.muted = true;
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
  OnloadbtnMusic = () => {
    if(audio.muted){
      btnMusic.textContent = "Nhạc nền 🔇";
    } else  {
      btnMusic.textContent = "Nhạc nền 🎵";
    }
  }
  function Start(){// Hiện trang
  
    pageContent.style.display = "flex";
    typeLetter();
    initSnow();
    animateSnow();
    // resetTimer();
    OnloadbtnMusic();
  }
  // Ngăn chuột phải
  document.addEventListener("contextmenu", e => e.preventDefault());
  document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
      alert("Bạn chưa nhập mật khẩu vui lòng nhập mật khẩu....")
      window.location.href = "../html/login.html"; // Đổi đúng tên file login của bạn
      return;
    }
    document.body.style.display = "block";
    pageContent.style.display = "none";
    loinoidau();
    
    OnloadbtnMusic();
    window.onload = () => {
      setTimeout(showCustomAlert, 200);
    };
    // return lai trang khi tab trang khac
   if (isMobileDevice()){
    document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        sessionStorage.setItem("isLoggedIn", "false");
        window.location.href = "../html/login.html"; // hoặc location.reload();
      }
    });
   }
});
