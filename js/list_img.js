const imageList = [
    "../img/list_img/img1.png",
    "../img/list_img/img4.png",
    "../img/list_img/img5.png",
    "../img/list_img/img6.jpg",
    "../img/list_img/img7.jpg",
    "../img/list_img/img8.jpg",
    "../img/list_img/img9.jpg",
    "../img/list_img/img10.jpg",
    "../img/list_img/img11.jpg",
    "../img/list_img/img12.jpg",
    "../img/list_img/img13.jpg",
    "../img/list_img/img14.jpg",
    "../img/list_img/img0.png",
    "../img/list_img/img.png",
    "../img/list_img/img3.png",
    "../img/list_img/img16.jpg",
    "../img/list_img/img19.jpg",
    "../img/list_img/img2.png",
    "../img/list_img/img21.jpg",
    "../img/list_img/img28.jpg",
    "../img/list_img/img22.jpg",
    "../img/list_img/img23.jpg",
    "../img/list_img/img24.jpg",
    "../img/list_img/img17.png",
    "../img/list_img/img25.jpg",
    "../img/list_img/img31.jpg",
    "../img/list_img/img20.jpg",
    "../img/list_img/img26.jpg",
    "../img/list_img/img42.jpg",
    "../img/list_img/img27.jpg",
    "../img/list_img/img29.jpg",
    "../img/list_img/img30.jpg",
    "../img/list_img/img32.jpg",
    "../img/list_img/img15.jpg",
    "../img/list_img/img33.jpg",
    "../img/list_img/img3.png",
    "../img/list_img/img34.jpg",
    "../img/list_img/img35.jpg",
    "../img/list_img/img36.jpg",
    "../img/list_img/img37.jpg",
    "../img/list_img/img38.png",
    "../img/list_img/img39.jpg",
    "../img/list_img/img18.png",
    "../img/list_img/img40.jpg",
    "../img/list_img/img41.jpg",
    "../img/list_img/img43.png",
    "../img/list_img/img44.png",
];
// Hàm kiểm tra thiết bị có phải là mobile không
  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  // quan li hien anh phai trai
const img_left = document.getElementById("img_left");
const img_right = document.getElementById("img_right");
let img_left_index = 1;
img_left.addEventListener("click", () => {
    img_left.src = `../img/imgleft/img${img_left_index}.png`;
    img_left_index = (img_left_index + 1) % 2;
});
let img_right_index = 0;
img_right.addEventListener("click", () => {
    img_right.src = `../img/imgright/img${img_right_index}.png`;
    img_right_index = (img_right_index + 1) % 2;
});

const totalImages = imageList.length;
const closeBtnImg = document.getElementById("closeBtnImg");
function showStackedImages() {   
    const container = document.getElementById("imageStack");
    container.innerHTML = ""; // Xóa nội dung cũ
    container.style.display = "block";  
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    const imageSize = containerWidth * 0.25; // 25% khung, để có khoảng trống
    
    for (let i = 0; i < totalImages; i++) {
        const img = document.createElement("img");
        img.src = imageList[i];
        img.className = "floating-img"; // ✅ dùng class để apply CSS media queries
        img.style.zIndex = i+10;
        const maxX = containerWidth - imageSize;
        const maxY = containerHeight - imageSize;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.style.width = `${imageSize}px`;
        img.style.height = `${imageSize}px`;

        container.appendChild(img);

        setTimeout(() => {
            img.style.opacity = "1";
        }, i * 800); // nhanh hơn một chút
    }

    setTimeout(() => {
        closeBtnImg.style.display = "block";
    }, totalImages * 800);
}
closeBtnImg.onclick = () => {
  imageStack.style.display = "none";
  closeBtnImg.style.display = "none";
  Start();
};  
  