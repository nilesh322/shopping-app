import React from 'react';

import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';


function ProductListing(props) {
    console.log("product listing props", props);
    return(
        <div>
        <div className='product-listing'>
        {!props.display?
            props.products.map((product, key) =>
                <ProductListItem
                    product={product}
                    hideControl={false}
                    category= {props.category}
                    key={key}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                    cart={props.cart}
                    addSingleItemToCart = {props.addSingleItemToCart} 
                    cartItem={props.cart.filter(cartItem => cartItem.category == props.category && cartItem.id === product.id)[0]}
                />):
                 props.products.map((product, key) =>{
                    if(key < props.display){
                        return <ProductListItem
                        hideControl={true}
                        product={product}
                        category= {props.category}
                        key={key}
                        addToCart={props.addToCart}
                        removeFromCart={props.removeFromCart}
                        cart={props.cart}
                        addSingleItemToCart = {props.addSingleItemToCart} 
                        cartItem={props.cart.filter(cartItem => cartItem.category === props.category && cartItem.id === product.id)[0]}
                    />}
                    }
                 )}
                
                 {/* <p onClick={()=>props.history.push('/viewmore',{data:props.products})}>View More</p> */}
        </div>
         <Button onClick={()=>props.history.push('/viewmore',{data:props.products})}  className="viewMore">
         View More
         </Button>
     </div>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            console.log(item);
            dispatch({ type: 'ADD', payload: item })
        },
        addSingleItemToCart: (item) => {
            dispatch({ type: 'SINGLE_ITEM_ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);