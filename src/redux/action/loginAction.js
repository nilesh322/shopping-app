import * as types from '../types';


export const setUser = (data) => {
    console.log("login action", data);
    return {
        type: types.USERDATA,
        data
    };
}