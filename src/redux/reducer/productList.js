import * as types from '../types';

const PRODUCT_LIST = []
const  ProductList = (state = PRODUCT_LIST, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_LIST:
            state = action.payload.data;
            return state;
        default:
            return state;
    }
}

export default ProductList;