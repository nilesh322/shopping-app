import * as types from "../types";

const CATEGORY_LIST = [];
const getCategoryListData = (state = CATEGORY_LIST, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_LIST:
      state = action.payload.data;
      return state;
    default:
      return state;
  }
};

export default getCategoryListData;
