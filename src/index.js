import "./css/index.css";

const articleText = `Lorem ipsum, dolor sit amet consectetur 
adipisicing elit. Adipisci maiores nihil voluptatem autem? 
Sit quia ad voluptatibus error impedit vitae iure mollitia,
laborum cum dicta a quasi. Deserunt, at explicabo.
 Lorem ipsum, dolor sit amet consectetur 
adipisicing elit. Adipisci maiores nihil voluptatem autem? 
Sit quia ad voluptatibus error impedit vitae iure mollitia,
laborum cum dicta a quasi. Deserunt, at explicabo.`;

const articleTitleArr = [
  "Title One",
  "Title Two",
  "Title Three",
  "Title Four",
  "Title Five",
  "Title Six",
  "Title Seven",
  "Title Eight",
  "Title Ten",
];

function createArticleMurkupNoTitle(count) {
  let markup = "";
  let i = 0;
  do {
    markup += `<article class="text"><p>${articleText}</p></article>`;
    i += 1;
  } while (i < count);

  return markup;
}

function createArticleMurkupWithTitle(count, titleTag = "h2", start = 0) {
  let markup = "";
  let i = 0;
  do {
    const title = `<${titleTag}>${articleTitleArr[start]}</${titleTag}>`;
    markup += `<article class="text">${title}<p>${articleText}</p></article>`;
    i += 1;
    // eslint-disable-next-line no-param-reassign
    start += 1;
  } while (i < count);

  return markup;
}

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
