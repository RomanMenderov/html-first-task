export const articleText = `Lorem ipsum, dolor sit amet consectetur 
adipisicing elit. Adipisci maiores nihil voluptatem autem? 
Sit quia ad voluptatibus error impedit vitae iure mollitia,
laborum cum dicta a quasi. Deserunt, at explicabo.
 Lorem ipsum, dolor sit amet consectetur 
adipisicing elit. Adipisci maiores nihil voluptatem autem? 
Sit quia ad voluptatibus error impedit vitae iure mollitia,
laborum cum dicta a quasi. Deserunt, at explicabo.`;

export const articleTitleArr = [
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

export function createArticleMurkupNoTitle(count) {
  let markup = "";
  let i = 0;
  do {
    markup += `<article class="text"><p>${articleText}</p></article>`;
    i += 1;
  } while (i < count);

  return markup;
}

export function createArticleMurkupWithTitle(
  count,
  titleTag = "h2",
  start = 0
) {
  let markup = "";
  let i = 0;
  do {
    const title = `<${titleTag}>${articleTitleArr[start]}</${titleTag}>`;
    markup += `<article class="text">${title}<p>${articleText}</p></article>`;
    i += 1;
    start += 1;
  } while (i < count);

  return markup;
}
