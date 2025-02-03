export class Render {
  constructor(ImageCarousel) {
    this.ImageCarousel = ImageCarousel;
  }
  static navigationDotsContainer = document.querySelector(
    ".navigationDotsContainer",
  );
  static createNavigationDot(index) {
    let navigationDot = document.createElement("div");
    navigationDot.setAttribute("data-index", index);
    navigationDot.classList.add("circle", "navigationDot");
    this.navigationDotsContainer.appendChild(navigationDot);
  }

  displayImage() {
    let currentImage = this.ImageCarousel.getCurrentImage();
    Render.toggleVisibleClass(currentImage);
  }
  static toggleVisibleClass(elm) {
    elm.classList.toggle("visible");
  }
  //we want to create a function which will create a navigation dots for each image
  displayNavigationDots() {
    this.ImageCarousel.images.forEach((image) => {
      let index = image.dataset.index;
      Render.createNavigationDot(index);
    });
  }
  changeStyleOfCurrentImageNavigationDot() {
    let currentImageIndex = this.ImageCarousel.getCurrentImage().dataset.index;
    console.log(currentImageIndex);
    let navigationDots = document.querySelectorAll(".circle");
    console.log(navigationDots);
    navigationDots[currentImageIndex].style.backgroundColor = "Grey";
  }
}
