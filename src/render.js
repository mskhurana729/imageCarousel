export class Render {
  constructor(ImageCarousel) {
    this.ImageCarousel = ImageCarousel;
  }
  displayImage() {
    let currentImage = this.ImageCarousel.getCurrentImage();
    Render.toggleVisibleClass(currentImage);
  }
  static toggleVisibleClass(img) {
    img.classList.toggle("visible");
  }
}
