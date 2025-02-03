import "./style.css";
import { ImageCarousel } from "./imageCarousel";
import { events } from "./events";
import { Render } from "./render";

(function () {
  let container = document.querySelector(".imageCarouselContainer");
  let pictureFrame = document.querySelector(".pictureFrame");
  let natureImages = pictureFrame.querySelectorAll("img");
  let natureImagesCarouselClass = new ImageCarousel(natureImages);
  const RenderImages = new Render(natureImagesCarouselClass); //Create a render instance for specific images
  let natureImageCarouselEvents = events(
    container,
    natureImagesCarouselClass,
    RenderImages,
  );
  natureImageCarouselEvents.nextImageButtonEvent();
  natureImageCarouselEvents.previousImageButtonEvent();
  RenderImages.displayNavigationDots();
  RenderImages.changeStyleOfCurrentImageNavigationDot();
  natureImageCarouselEvents.navigationDotsEvent();
})();
