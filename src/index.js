import "./css/index.css";
import {
  createArticleMurkupNoTitle,
  createArticleMurkupWithTitle,
  articleTitleArr,
} from "./content";

document.querySelector(
  ".leftColumn > .textBlocks"
).innerHTML = createArticleMurkupNoTitle(2);

document.querySelector(
  ".rightColumn > .textBlocks"
).innerHTML = createArticleMurkupNoTitle(1);

document.querySelector(
  ".centerColumn > .textBlocks"
).innerHTML = createArticleMurkupWithTitle(4, "h2", 1);

document.querySelector(
  ".headerDescription"
).innerHTML = createArticleMurkupNoTitle(1);

document.querySelector(
  ".logoImg"
).innerHTML = `<img src="https://www.w3.org/html/logo/img/html5-topper.png"/
 alt="${articleTitleArr[0]}">`;

document.querySelector("footer").innerHTML = createArticleMurkupNoTitle(4);
