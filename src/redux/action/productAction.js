
import * as types from '../types';

export function productData(data) {
   console.log("product action", data);
    return {
        type: types.PRODUCT_DATA,
        payload: data,
    };
}

export function getproductList(data) {
    console.log("getproductList action", data);
     return {
         type: types.GET_PRODUCT_LIST,
         payload: data,
     };
 }