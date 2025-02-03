export const events = function (imageCarouselContainer, ImageCarousel) {
  function nextButtonEvent() {
    const nextImageBtn = imageCarouselContainer.querySelector(".nextImageBtn");
    nextImageBtn.addEventListener("click", () => {
      console.log(ImageCarousel);
      let nextImage = ImageCarousel.getNextImage();
      console.log(nextImage);
    });
  }
  return { nextButtonEvent };
};
