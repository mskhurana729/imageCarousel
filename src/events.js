import { Render } from "./render.js";
export const events = function (
  imageCarouselContainer,
  ImageCarousel,
  RenderImages,
) {
  function navigationDotsEvent() {
    //this will show the image linked to clicked navDot
    let navigationDots = document.querySelectorAll(".navigationDot");
    console.log(navigationDots);
    navigationDots.forEach((navDot) => {
      navDot.addEventListener("click", () => {
        console.log("hello");
        RenderImages.hideCurrentImage();

        let index = navDot.dataset.index;
        console.log(index);
        ImageCarousel.setCurrentImage(index);
        RenderImages.displayImage();
      });
    });
  }

  function nextImageButtonEvent() {
    //this will show next image and hide current image and set new current,previous and next image
    const nextImageBtn = imageCarouselContainer.querySelector(".nextImageBtn");
    nextImageBtn.addEventListener("click", () => {
      RenderImages.hideCurrentImage();
      let nextImage = ImageCarousel.getNextImage();
      let nextImageIndex = nextImage.dataset.index;
      ImageCarousel.setCurrentImage(nextImageIndex);

      RenderImages.displayImage();
      RenderImages.changeStyleOfCurrentImageNavigationDot();
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
      RenderImages.changeStyleOfCurrentImageNavigationDot();
    });
  }
  return {
    nextImageButtonEvent,
    previousImageButtonEvent,
    navigationDotsEvent,
  };
};
