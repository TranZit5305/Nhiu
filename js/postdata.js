const scriptURL = 'https://script.google.com/macros/s/AKfycbybPopAJ9oPUFrmybyHnolJJNoY9bAQJyEjjma6oibqOBAY9ljLcLBfg_7zB0E_Qioc4w/exec';

// Mở feedback khi click vào ảnh chứa 💌
document.querySelectorAll('.img-box').forEach(box => {
  box.addEventListener('click', function () {
    if (this.textContent.includes('💌')) {
      openFeedbackForm();
    }
  });
});

function openFeedbackForm() {
  const container = document.getElementById('feedbackFormContainer');
  container.style.display = 'block';

  setTimeout(() => {
    container.querySelector('input[name="Name"]').focus();
  }, 100);
}

function closeFeedbackForm() {
  document.getElementById('feedbackFormContainer').style.display = 'none';
  document.body.classList.remove('blur');
}

// Gửi feedback
document.getElementById('feedbackForm').addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const loading = document.getElementById('loadingSpinner');
  loading.style.display = 'block';

  // Chống spam: cách nhau 30s
  const lastSent = localStorage.getItem('lastSent');
  const now = Date.now();
  if (lastSent && now - lastSent < 30000) {
    alert('⏳ Bạn vừa gửi xong, hãy chờ một chút nhé!');
    // loading.style.display = 'none';
    return;
  }
  localStorage.setItem('lastSent', now);

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

// Ghi thời gian ở lại và thông tin người dùng khi rời trang
let enterTime = Date.now();
window.addEventListener('beforeunload', async () => {
  const leaveTime = Date.now();
  const durationSec = Math.floor((leaveTime - enterTime) / 1000);

  try {
    const ipRes = await fetch('https://ipinfo.io/json');
    const ipData = await ipRes.json();

    const ip = ipData.ip;
    const location = `${ipData.city}, ${ipData.region}, ${ipData.country}`;
    const org = ipData.org;
    const loc = ipData.loc;

    const userLog = {
      Name: `⏱️ Rời trang - ${location} | 🌐 ${ip} | ${org} | ${detectDevice()}`,
      Content: `⏳ Thời gian ở lại: ${durationSec} giây\nTọa độ: ${loc}`,
      Date: new Date().toLocaleString()
    };

    navigator.sendBeacon(scriptURL, new URLSearchParams(userLog));
  } catch (err) {
    console.error('Ghi log rời trang thất bại:', err);
  }
});

// Ghi thông tin người dùng khi vào trang
async function logUserInfo() {
  try {
    const ipRes = await fetch('https://ipinfo.io/json');
    const ipData = await ipRes.json();

    const ip = ipData.ip;
    const location = `${ipData.city}, ${ipData.region}, ${ipData.country}`;
    const org = ipData.org;
    const loc = ipData.loc;

    let count = Number(localStorage.getItem('visit')) || 0;
    count++;
    localStorage.setItem('visit', count);

    const dataLog = {
      Name: `📍 Vào trang - ${location} | 🌐 ${ip} | ${org} | ${detectDevice()}\n🖥️ ${navigator.userAgent}`,
      Content: `Đã vào trang (${count} lần)\nTọa độ: ${loc}`,
      Date: '`' +new Date().toLocaleString()
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

// Phát hiện thiết bị
function detectDevice() {
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return "📱 Mobile";
  if (/Tablet|iPad/i.test(ua)) return "📲 Tablet";
  return "💻 Desktop";
}
