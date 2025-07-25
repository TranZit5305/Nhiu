function checkPassword() {
      const input = document.getElementById("passwordInput").value;
      const correctPassword = "22012005"; // ✅ Đổi mật khẩu tùy ý

      if (input === correctPassword) {
        // ✅ Mở trang mới ở tab khác
        window.open("./main.html", "_blank");
      } else {
        document.getElementById("error").textContent = "Sai mật khẩu!";
      }
}