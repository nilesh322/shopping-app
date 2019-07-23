import { createStore, combineReducers } from 'redux';
import cartReducer from '../redux/reducer/cartReducer';
import productReducer from '../redux/reducer/productFormReducer';
import getProductList from '../redux/reducer/productList';
import viewMoreReducer from '../redux/reducer/viewMoreReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    getProductList: getProductList,
    viewMoreReducer: viewMoreReducer
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;