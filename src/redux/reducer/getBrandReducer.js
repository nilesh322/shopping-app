import * as types from "../types";

const BRAND_LIST = [];
const getBrandListData = (state = BRAND_LIST, action) => {
  switch (action.type) {
    case types.GET_ALL_BRAND_LIST:
      state = action.payload.data;
      return state;
    default:
      return state;
  }
};

export default getBrandListData;
