function checkPassword() {
      const input = document.getElementById("passwordInput").value;
      const correctPassword = "12345"; // ✅ Đổi mật khẩu tùy ý

      if (input === correctPassword) {
        // ✅ Mở trang mới ở tab khác
        window.open("https://tranzit5305.github.io/Nhiu/", "_blank");
      } else {
        document.getElementById("error").textContent = "Sai mật khẩu!";
      }
}