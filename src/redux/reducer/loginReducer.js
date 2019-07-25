import * as types from '../types';

export const userData = (state = JSON.parse(localStorage.getItem(types.USERDATA)), action) => {
    switch (action.type) {
        case types.USERDATA:
            console.log("login reducer", state);
            return action.data;
        default:
            return state
    }
};