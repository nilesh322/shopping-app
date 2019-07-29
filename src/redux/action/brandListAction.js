import * as types from "../types";

export function getAllBrandList(data) {
  console.log("brand list action==================", data);
  return {
    type: types.GET_ALL_BRAND_LIST,
    payload: data
  };
}
