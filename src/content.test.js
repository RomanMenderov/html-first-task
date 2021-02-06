import {
  createArticleMurkupNoTitle,
  createArticleMurkupWithTitle,
  articleTitleArr,
} from "./content";

describe("checking content creation", () => {
  const textValue = Math.random().toString();
  const returnedObject = { ok: true, city: textValue };

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(returnedObject));
  });

  test("it should create article no title", () => {
    const article = createArticleMurkupNoTitle(1);
    //  const articleStartMarkup = ;
    expect(article).toEqual(expect.stringContaining(`<article class="text">`));
    expect((article.match(/<article class="text">/g) || []).length).toEqual(1);
  });

  test("it should create article with title", () => {
    const articles = createArticleMurkupWithTitle(2, "h2", 1);
    //  const articleStartMarkup = ;
    expect(articles).toEqual(expect.stringContaining(`<article class="text">`));
    expect(articles).toEqual(
      expect.stringContaining(`<h2>${articleTitleArr[1]}</h2>`)
    );
    expect((articles.match(/<article class="text">/g) || []).length).toEqual(2);
  });
});
