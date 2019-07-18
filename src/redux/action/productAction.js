
import * as types from '../types';

export function productData(data) {
   console.log("product action", data);
    return {
        type: types.PRODUCT_DATA,
        payload: data,
    };
}