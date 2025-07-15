const text = "Chào bạn, đây là hiệu ứng hiện từng chữ!";
const container = document.getElementsByClassName("text-container")[0];

let index = 0;
function mo_dau(){
    alert("hhihi")
}
function typeLetter() {
    if (index < text.length) {
        container.textContent += text[index];
        index++;
        setTimeout(typeLetter, 140); // tốc độ gõ: 100ms
    }
    else if (index == text.length){
        setTimeout(() => {
            container.textContent = "";
            index = 0;
            typeLetter(); // bắt đầu lại
        }, 2000);
    }
}
// mo_dau();
typeLetter();
