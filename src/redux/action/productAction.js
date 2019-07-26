
import * as types from '../types';

export function productData(data) {
    return {
        type: types.PRODUCT_DATA,
        payload: data,
    };
}

export function getproductList(data) {
     return {
         type: types.GET_PRODUCT_LIST,
         payload: data,
     };
 }

 export function getCategoryList(data) {
     return {
         type: types.GET_CATEGORY_LIST,
         payload: data 
     }
 }