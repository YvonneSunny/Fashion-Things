
const images = [
  "https://drive.google.com/file/d/1cxBBuCyMIXjpbDWC1a5z2YTohcgGlGUr/view?usp=drive_link",
  "https://drive.google.com/file/d/1JzGCsPjofO05xdhhYv0j4fyUT_3KIMaj/view?usp=drive_link",
  "https://drive.google.com/file/d/1ebd8rGRfvgRuYuPUmja6gGyMj1ZCjkF2/view?usp=drive_link"
];
let currentIndex = 0;

function changeImage() {
  const displayedImage = document.getElementById("displayedImage");

  currentIndex = (currentIndex + 1) % images.length;
  displayedImage.src = images[currentIndex];
}

