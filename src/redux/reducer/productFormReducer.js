const productFormReducer = (state = {data : []}, action) => {
    switch(action.type) {
        case 'PRODUCT_DATA':
        console.log('datax',state.data,action.payload)
        return Object.assign({}, state, {
            data :  state.data.concat(action.payload)
        })
        default:
          return state;
    }

}
export default productFormReducer;