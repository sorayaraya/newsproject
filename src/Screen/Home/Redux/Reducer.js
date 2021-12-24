const initialState = {
  NewsDetail: {},
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_DETAIL":
      return { ...state, NewsDetail: action.result };

    default:
      return state;
  }
};
