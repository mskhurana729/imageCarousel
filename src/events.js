import { Render } from "./render.js";
export const events = function (imageCarouselContainer, ImageCarousel) {
  const RenderImages = new Render(ImageCarousel); //Create a render instance for specific images

  function nextImageButtonEvent() {
    //this will show next image and hide current image and set new current,previous and next image
    const nextImageBtn = imageCarouselContainer.querySelector(".nextImageBtn");
    nextImageBtn.addEventListener("click", () => {
      let currentImage = ImageCarousel.getCurrentImage();
      Render.toggleVisibleClass(currentImage);

      let nextImage = ImageCarousel.getNextImage();
      let nextImageIndex = nextImage.dataset.index;
      ImageCarousel.setCurrentImage(nextImageIndex);

      RenderImages.displayImage();
    });
  }
  function previousImageButtonEvent() {
    //this will show next image and hide current image and set new current,previous and next image
    const previousImageBtn =
      imageCarouselContainer.querySelector(".previousImageBtn");
    previousImageBtn.addEventListener("click", () => {
      let currentImage = ImageCarousel.getCurrentImage();
      Render.toggleVisibleClass(currentImage);

      let previousImage = ImageCarousel.getPreviousImage();
      let previousImageIndex = previousImage.dataset.index;
      ImageCarousel.setCurrentImage(previousImageIndex);

      RenderImages.displayImage();
    });
  }
  return { nextImageButtonEvent, previousImageButtonEvent };
};
