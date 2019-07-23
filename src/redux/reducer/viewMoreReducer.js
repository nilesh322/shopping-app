import * as types from '../types';

const MORE_DATA = []
const  viewMoreReducer = (state = MORE_DATA, action) => {
    switch (action.type) {
        case types.GET_MORE_DATA:
            state = action.payload.data;
            return state;
        default:
            return state;
    }
}

export default viewMoreReducer;