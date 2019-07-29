import * as types from "../types";

const PRODUCT_LIST = [];
const ProductList = (state = PRODUCT_LIST, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_LIST:
      state = action.payload.data;
      return state;
    case types.GET_ALL_PRODUCT_LIST:
      state = action.payload.data;
    default:
      return state;
  }
};

export default ProductList;
