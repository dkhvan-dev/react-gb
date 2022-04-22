import {
  getArticles,
  getArticlesRequest,
  getArticlesSuccess,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
} from "../actions";

describe("getArticlesReq", () => {
  it("returns obj with predefined type", () => {
    const expected = {
      type: GET_ARTICLES_REQUEST,
    };

    const received = getArticlesRequest();

    expect(received).toEqual(expected);
  });
});

describe("getArticles", () => {
  it("dispatches getArticlesReq", () => {
    const mockDispatch = jest.fn();
    fetch.mockResponse(JSON.stringify([]));

    getArticles()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest());
  });

  it("dispatches getArticlesSuc with fetch result", async () => {
    const data = [{ name: "test" }];
    fetch.mockResponse(JSON.stringify(data));
    const mockDispatch = jest.fn();

    await getArticles()(mockDispatch);
    expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(data));
  });
});
