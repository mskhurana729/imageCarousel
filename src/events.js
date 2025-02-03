import { Render } from "./render.js";
export const events = function (imageCarouselContainer, ImageCarousel) {
  const RenderImages = new Render(ImageCarousel);
  function nextButtonEvent() {
    const nextImageBtn = imageCarouselContainer.querySelector(".nextImageBtn");
    nextImageBtn.addEventListener("click", () => {
      console.log(ImageCarousel);
      let currentImage = ImageCarousel.getCurrentImage();
      Render.toggleVisibleClass(currentImage);
      let nextImage = ImageCarousel.getNextImage();
      let nextImageIndex = nextImage.dataset.index;
      ImageCarousel.setCurrentImage(nextImageIndex);
      console.log(ImageCarousel);

      RenderImages.displayImage();

      console.log(nextImage, nextImageIndex);
    });
  }
  return { nextButtonEvent };
};
