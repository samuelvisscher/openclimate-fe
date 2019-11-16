export const EXPLORE_REVIEW = "EXPLORE_REVIEW";
export const EXPLORE_REVIEW_SUCCESS = "EXPLORE_REVIEW_SUCCESS";
export const EXPLORE_REVIEW_FAILURE = "EXPLORE_REVIEW_FAILURE";
export const EXPLORE_REVIEW_DATA = "EXPLORE_REVIEW_FETCH_DATA";
export const EXPLORE_REVIEW_DATA_SUCCESS = "EXPLORE_REVIEW_DATA_SUCCESS";
export const EXPLORE_REVIEW_DATA_FAILURE = "EXPLORE_REVIEW_DATA_FAILURE";

export const fetchExploreReview = payload => ({
  type: EXPLORE_REVIEW,
  payload
});

export const fetchExploreReviewSuccess = (data) => ({
  type: EXPLORE_REVIEW_SUCCESS,
  data
});

export const fetchExploreReviewFailure = message => ({
  type: EXPLORE_REVIEW_FAILURE,
  payload: message
});

export const fetchExploreReviewData = (path, id) => ({
  type: EXPLORE_REVIEW_DATA,
  path, id
});
