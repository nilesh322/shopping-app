
 
import * as types from '../types';
 
 export function getViewMore(data) {
    console.log("getViewMore action==================", data);
     return {
         type: types.GET_MORE_DATA,
         payload: data,
     };
 }