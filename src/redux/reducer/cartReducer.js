

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.category === item.category && cartItem.id === item.id)[0];

const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item);
    if(cartItem){
        var i = cart.indexOf(cartItem)
        cart[i].quantity++;
    } else {
        item.quantity = 1;
        cart.push(item)
    }
    return [...cart]
    // return cartItem === undefined ? 
    //     [...cartWithoutItem(cart, item), {...item, quantity: 1}] :
    //     [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity + 1}] 
}

const removeFromCart = (cart, item) => {
    const cartItem = itemInCart(cart, item);
    if(cartItem){
        var i = cart.indexOf(cartItem)
        if(cart[i].quantity > 1)
            cart[i].quantity--;
        else 
            cart.splice(i,1);
    }
    return [...cart]
}

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return addToCart(state, action.payload)

        case 'SINGLE_ITEM_ADD':
            return addToCart(state, action.payload)

        case 'REMOVE':
            // const firstMatchIndex = state.indexOf(action.payload);
            return removeFromCart(state, action.payload)
            // state.filter((item, index) => item !== firstMatchIndex) 

        default:
            return state;
    }

}

export default cartReducer

