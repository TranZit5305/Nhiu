const input = document.getElementById("passwordInput");
const error = document.getElementById("error");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
    else{
        error.textContent = "";
    }
});
function checkPassword() {
    const correctPassword = "22012005"; // thay mật khẩu ở đây
    const enteredPassword = input.value;

    if (enteredPassword === correctPassword) {
        sessionStorage.setItem("isLoggedIn", "true");
        alert("Đăng nhập vào web")
        window.location.href = "./main.html"; // hoặc trang bạn muốn chuyển đến
    } else {
        error.textContent = "Sai mật khẩu. Vui lòng thử lại.";
    }
}