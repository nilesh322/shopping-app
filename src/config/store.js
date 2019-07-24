import { createStore, combineReducers } from 'redux';
import cartReducer from '../redux/reducer/cartReducer';
import productReducer from '../redux/reducer/productFormReducer';
import getProductData from '../redux/reducer/productList';
import viewMoreReducer from '../redux/reducer/viewMoreReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    getProductData: getProductData,
    viewMoreReducer: viewMoreReducer
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;