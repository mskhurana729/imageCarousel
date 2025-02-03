import "./style.css";
import { ImageCarousel } from "./imageCarousel";
import { events } from "./events";

(function () {
  let container = document.querySelector(".imageCarouselContainer");
  let pictureFrame = document.querySelector(".pictureFrame");
  let natureImages = pictureFrame.querySelectorAll("img");
  let natureImagesCarouselClass = new ImageCarousel(natureImages);
  let natureImageCarouselEvents = events(container, natureImagesCarouselClass);
  natureImageCarouselEvents.nextImageButtonEvent();
  natureImageCarouselEvents.previousImageButtonEvent();
})();
