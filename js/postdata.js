const scriptURL = 'https://script.google.com/macros/s/AKfycbybPopAJ9oPUFrmybyHnolJJNoY9bAQJyEjjma6oibqOBAY9ljLcLBfg_7zB0E_Qioc4w/exec'
document.querySelectorAll('.img-box').forEach(box => {
  box.addEventListener('click', function () {
    if (this.textContent.includes('💌')) {
      openFeedbackForm();
    }
  });
});
function openFeedbackForm() {
  document.getElementById('feedbackFormContainer').style.display = 'block';
}
function closeFeedbackForm() {
  document.getElementById('feedbackFormContainer').style.display = 'none';
}

document.getElementById('feedbackForm').addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const loading = document.getElementById('loadingSpinner');
  loading.style.display = 'block';

  const formData = new FormData(form);
  const data = {
    Name: formData.get('Name'),
    Content: formData.get('Content'),
    Date: new Date().toLocaleString()
  };

  fetch(scriptURL, {
    method: 'POST',
    body: new URLSearchParams(data)
  })
  .then(res => res.json())
  .then(res => {
    loading.style.display = 'none';
    if (res.result === 'success') {
      alert('✅ Gửi thành công!');
      form.reset();
      closeFeedbackForm();
    } else {
      alert('❌ Lỗi gửi: ' + JSON.stringify(res));
    }
  })
  .catch(err => {
    loading.style.display = 'none';
    alert('❌ Kết nối thất bại: ' + err);
  });
});
window.addEventListener('load', async() => {
    const ipRes = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipRes.json();
      const ip = ipData.ip;
      // Thêm các giá trị gửi đi
      const data1 = {
        Name : `Thiết bị: ${navigator.userAgent}\nIP: ${ip}`, // Sử dụng IP làm tên
        Content: "logs",
        Date: new Date().toLocaleString()
    };
  fetch(scriptURL, {
    method: 'POST',
    body: new URLSearchParams(data1)
    })

  .then(res => res.text())
  .then(txt => console.log('Log Response:', txt))
  .catch(err => console.error('Log Error:', err));
});
