import "./style.css";
import { ImageCarousel } from "./imageCarousel";
import { events } from "./events";
// import image1 from "./images/1.jpg";
// import image2 from "./images/2.jpg";
// import image3 from "./images/3.jpg";

const natureImageCarousel = (function () {
  let container = document.querySelector(".imageCarouselContainer");
  let pictureFrame = document.querySelector(".pictureFrame");
  let natureImages = pictureFrame.querySelectorAll("img");
  let natureImagesCarouselClass = new ImageCarousel(natureImages);
  let natureImageCarouselEvents = events(container, natureImagesCarouselClass);
  natureImageCarouselEvents.nextButtonEvent();
})();
