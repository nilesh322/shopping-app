import { createStore, combineReducers } from "redux";
import cartReducer from "../redux/reducer/cartReducer";
import productReducer from "../redux/reducer/productFormReducer";
import getProductData from "../redux/reducer/productList";
import getCategoryListData from "../redux/reducer/getProductCategoryReducer";
import viewMoreReducer from "../redux/reducer/viewMoreReducer";
import userData from "../redux/reducer/loginReducer";
import getBrandListData from "../redux/reducer/getBrandReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  getProductData: getProductData,
  getCategoryListData: getCategoryListData,
  viewMoreReducer: viewMoreReducer,
  userData: userData,
  getBrandListData: getBrandListData
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
