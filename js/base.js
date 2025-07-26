const text_run= "Chào bạn, đây là hiệu ứng hiện từng chữ!";
const text_endvideo = "Cảm ơn bạn thời gian qua rất nhiều";
const container = document.getElementsByClassName("text-container")[0];
let index = 0;
let count_reset = 0,count_max = 2;
function checkxemvotudau(){
    alert("helo")
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "../html/login.html"; // quay lại nếu chưa đăng nhập
    }
}
function mo_dau(){
    alert("Cảm ơn bạn Chút đã xem cái trang này của tuii")
    alert("Mong bạn sẽ xem hết")
}
const video = document.getElementById("myVideo");
  video.addEventListener("ended", function () {
    alert("Cảm ơn bạn đã xem hết video!");
  });
function typeLetter() {
    if (index < text_run.length) {
        container.textContent += text_run[index];
        index++;
        setTimeout(typeLetter, 140); // tốc độ gõ: 100ms
    }
    else if (index == text_run.length ){
        count_reset += 1;
        setTimeout(() => {
            container.textContent = "";
            index = 0;
            typeLetter(); // bắt đầu lại
        }, 2000);
    }
}
window.onload = function(){
    checkxemvotudau();
    mo_dau();
    typeLetter();
}
