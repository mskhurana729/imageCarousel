export class Render {
  constructor(ImageCarousel) {
    this.ImageCarousel = ImageCarousel;
  }
  static navigationDotsContainer = document.querySelector(
    ".navigationDotsContainer",
  );
  createNavigationDot(index) {
    let navigationDot = document.createElement("div");
    navigationDot.setAttribute("data-index", index);
    navigationDot.classList.add("circle", "navigationDot");
    Render.navigationDotsContainer.appendChild(navigationDot);
  }

  displayImage() {
    let currentImage = this.ImageCarousel.getCurrentImage();
    Render.toggleVisibleClass(currentImage);
    this.displayNavigationDots();
    this.changeStyleOfCurrentImageNavigationDot();
  }
  static toggleVisibleClass(elm) {
    elm.classList.toggle("visible");
  }

  displayNavigationDots() {
    Render.navigationDotsContainer.textContent = "";
    this.ImageCarousel.images.forEach((image) => {
      let index = image.dataset.index;
      this.createNavigationDot(index);
    });
    let navigationDots = document.querySelectorAll(".navigationDot");
    console.log(navigationDots);
    navigationDots.forEach((navDot) => {
      navDot.addEventListener("click", () => {
        console.log("hello");
        this.hideCurrentImage();

        let index = navDot.dataset.index;
        console.log(index);
        this.ImageCarousel.setCurrentImage(index);
        this.displayImage();
      });
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
  //show slides will show next image every 5 seconds
  slideIndex = 0;
  showSlides() {
    let images = this.ImageCarousel.images;
    images.forEach((image) => {
      image.classList.remove("visible");
    });
    this.ImageCarousel.setCurrentImage(this.slideIndex);
    this.displayImage();
    if (this.slideIndex >= images.length - 1) {
      this.slideIndex = 0;
    } else {
      ++this.slideIndex;
    }
    setTimeout(this.showSlides.bind(this), 5000);
  }
}
