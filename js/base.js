const text_run= "Chào bạn, đây là hiệu ứng hiện từng chữ!";
const text_endvideo = "Cảm ơn bạn thời gian qua rất nhiều";
const container = document.getElementsByClassName("text-container")[0];
let index = 0;
let count_reset = 0,count_max = 2;
function mo_dau(){
    alert("Cảm ơn bạn Chút đã xem cái trang này của tuii")
    alert("Mong ban se xem het")
}
const video = document.getElementById("myVideo");
  video.addEventListener("ended", function () {
    alert("Video đã xem xong!");
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

// mo_dau();
typeLetter();
