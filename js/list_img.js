const imageList = [
    "../img/list_img/img1.png",
    "../img/list_img/img2.png",
    "../img/list_img/img3.png",
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
    "../img/list_img/img15.jpg",
    "../img/list_img/img16.jpg",
    "../img/list_img/img17.png",
    "../img/list_img/img18.png",
    "../img/list_img/img19.jpg",
    "../img/list_img/img20.jpg",
    "../img/list_img/img21.jpg",
    "../img/list_img/img22.jpg",
    "../img/list_img/img23.jpg",
    "../img/list_img/img24.jpg",
    "../img/list_img/img25.jpg",
    "../img/list_img/img26.jpg",
    "../img/list_img/img27.jpg",
    "../img/list_img/img28.jpg",
    "../img/list_img/img29.jpg",
    "../img/list_img/img30.jpg",
    "../img/list_img/img31.jpg",
];
const totalImages = imageList.length;
const closeBtnImg = document.getElementById("closeBtnImg");
function showStackedImages() {
  const container = document.getElementById("imageStack");
  container.style.display = "block";

  for (let i = 0; i < totalImages; i++) {
    const img = document.createElement("img");
    img.src = imageList[i];

    // Random vị trí trong khung 300x300
    const maxX = 300 - 80; // trừ kích thước ảnh
    const maxY = 300 - 80;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    container.appendChild(img);

    // Delay để hiện từng ảnh
    setTimeout(() => {
      img.style.opacity = "1";
    }, i * 800);
  }
  setTimeout(() => {
    closeBtnImg.style.display = "block";
  }, totalImages * 400);
}
closeBtnImg.onclick = () => {
  imageStack.style.display = "none";
  closeBtnImg.style.display = "none";
  Start();
};