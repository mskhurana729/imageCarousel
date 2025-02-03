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

  displayNavigationDots() {
    this.ImageCarousel.images.forEach((image) => {
      let index = image.dataset.index;
      Render.createNavigationDot(index);
    });
  }
  changeStyleOfCurrentImageNavigationDot() {
    let navigationDots = document.querySelectorAll(".circle");

    navigationDots.forEach((navDot) => {
      navDot.classList.remove("currentImageNavDot");
    });
    let currentImageIndex = this.ImageCarousel.getCurrentImage().dataset.index;

    navigationDots[currentImageIndex].classList.add("currentImageNavDot");
  }
  hideCurrentImage() {
    let currentImage = this.ImageCarousel.getCurrentImage();
    Render.toggleVisibleClass(currentImage);
  }
}
