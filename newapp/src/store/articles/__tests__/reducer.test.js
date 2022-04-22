import { FETCH_STATUSES } from "../../../utils/constants";
import { getArticlesRequest } from "../actions";
import { articlesReducer } from "../reducer";

describe("articles reducer", () => {
  it("sets error to null if called with request action", () => {
    const result = articlesReducer(
      {
        data: [],
        status: FETCH_STATUSES.IDLE,
        error: "some error",
      },
      getArticlesRequest()
    );

    expect(result.error).toBeNull();
  });
});
