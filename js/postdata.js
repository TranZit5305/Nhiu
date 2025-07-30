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

// Ghi log khi vào trang
window.addEventListener('load', () => {
  logUserInfo();
});

async function logUserInfo() {
  try {
    const ipRes = await fetch('https://ipinfo.io/json');
    const ipData = await ipRes.json();

    const ip = ipData.ip;
    const location = `${ipData.city}, ${ipData.region}, ${ipData.country}`;
    const org = ipData.org; // Nhà mạng
    const loc = ipData.loc; // Tọa độ (lat,long)

    let count = Number(localStorage.getItem('visit')) || 0;
    count++;
    localStorage.setItem('visit', count);

    const dataLog = {
      Name: `📍 ${location} | 🌐 ${ip} | ${org}\n🖥️ ${navigator.userAgent}`,
      Content: `Đã vào trang (${count} lần)\nTọa độ: ${loc}`,
      Date: new Date().toLocaleString()
    };

    const res = await fetch(scriptURL, {
      method: 'POST',
      body: new URLSearchParams(dataLog)
    });

    const text = await res.text();
    console.log('Log Response:', text);

  } catch (err) {
    console.error('Log Error:', err);
  }
}