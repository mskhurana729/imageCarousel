//what we want from this class is
// the instance should have all the images element stored in it and also
//that it should have a function setCurrentImage which will update the currentImage
//and a function getCurrentImage Which returns current image

export class ImageCarousel {
  constructor(images = []) {
    this.images = images;
    this.currentImage = images[0];
    this.previousImage = images[images.length - 1];
    this.nextImage = images[1];
  }
  getCurrentImage() {
    return this.currentImage;
  }
  setCurrentImage(index) {
    this.currentImage = this.images[index];
    this.setNextImage(index);
    this.setPreviousImage(index);
  }
  setPreviousImage(index) {
    if (index - 1 < 0) {
      this.previousImage = this.images[this.images.length - 1];
    } else {
      this.previousImage = this.images[index - 1];
    }
  }
  getPreviousImage() {
    return this.previousImage;
  }
  setNextImage(index) {
    let nextImageIndex = +index + 1;
    if (nextImageIndex >= this.images.length) {
      console.log(nextImageIndex);
      this.nextImage = this.images[0];
    } else {
      this.nextImage = this.images[nextImageIndex];
    }
  }
  getNextImage() {
    return this.nextImage;
  }
}
