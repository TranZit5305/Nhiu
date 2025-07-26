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
function loinoidau(){
  alert("Cảm ơn bạn Chút đã vào đây,cảm ơn bạn rất nhiều ,mong bạn sẽ xem hết video nhé :>");
}
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
  typeLetter();
  initSnow();
  animateSnow();
});
