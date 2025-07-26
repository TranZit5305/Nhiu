const text_run = "Chào bạn, đây là hiệu ứng hiện từng chữ!";
const container = document.querySelector(".text-container");
const replayBtn = document.getElementById("replayBtn");
const video = document.getElementById("myVideo");
let index = 0;

// Kiểm tra đăng nhập bằng sessionStorage
function checkLogin() {
  if (sessionStorage.getItem("isLoggedIn") !== "true") {
    alert("Bạn chưa đăng nhập. Đang chuyển hướng...");
    window.location.href = "../html/login.html";
    return false;
  }
  return true;
}

// Hiện cảnh báo mở đầu
function showIntro() {
  alert("Cảm ơn bạn Chút đã xem trang này của mình!");
  alert("Hãy xem hết video nhé 🥰");
}

// Hiệu ứng hiện từng chữ
function typeLetter() {
  if (index < text_run.length) {
    container.textContent += text_run[index];
    index++;
    setTimeout(typeLetter, 100);
  }
}

// Xử lý sự kiện khi tải xong trang
window.onload = () => {
  if (!checkLogin()) return;
  document.body.style.display = "block";

  showIntro();
  container.textContent = "";
  index = 0;
  typeLetter();

  video.addEventListener("ended", () => {
    alert("Cảm ơn bạn đã xem hết video!");
    replayBtn.style.display = "inline-block";
  });

  replayBtn.addEventListener("click", () => {
    video.currentTime = 0;
    video.play();
    replayBtn.style.display = "none";
  });
};

// Ngăn chuột phải (chống tải video)
document.addEventListener("contextmenu", e => e.preventDefault());
