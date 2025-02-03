//what we want from this class is
// the instance should have all the images element stored in it and also
//that it should have a function setCurrentImage which will update the currentImage
//and a function getCurrentImage Which returns current image

class ImageCarousel {
  constructor(images) {
    this.images = images;
    this.currentImage = images[0];
    this.previousImage = images[images.length - 1];
    this.nextImage = images[1];
  }
  static getCurrentImage() {
    return this.currentImage;
  }
  static setCurrentImage(index) {
    this.currentImage = this.images[index];
  }
  static setPreviousImage(index) {
    if (index - 1 < 0) {
      this.previousImage = images[images.length - 1];
    } else {
      this.previousImage = images[index - 1];
    }
  }
  static getPreviousImage() {
    return this.previousImage;
  }
  static setNextImage(index) {
    if (index + 1 >= images.length) {
      this.nextImage = this.images[0];
    } else {
      this.nextImage = this.images[index + 1];
    }
  }
  static getNextImage() {
    return this.nextImage;
  }
}
