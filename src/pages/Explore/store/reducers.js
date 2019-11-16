import {
  EXPLORE_REVIEW,
  EXPLORE_REVIEW_FAILURE,
  EXPLORE_REVIEW_SUCCESS,
} from "./actions";

const initialState = {
  review: {
    nation_states: [],
    multinationals: [],
    selected: {
      item: {},
      isLoading: false,
      error: null,
    },
    isLoading: false,
    error: null
  }
};

const exploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPLORE_REVIEW:
      return {
        ...state,
        review: {
          ...state.review,
          isLoading: true,
          error: null
        }
      };
    case EXPLORE_REVIEW_SUCCESS:
      let newData = { ...state.review };
      newData.actors = action.data;
      newData.nation_states = action.data.filter(x => x.type === 1);
      newData.multinationals = action.data.filter(x => x.type === 2);
      newData.isLoading = false;
      return {
        ...state,
        review: newData
      };
    case EXPLORE_REVIEW_FAILURE:
      return {
        ...state,
        review: {
          ...state.review,
          error: action.payload,
          isLoading: false
        }
      };
    default:
      return state;
  }
};

export default exploreReducer;
