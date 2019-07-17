import React from 'react';
import {Button} from 'react-bootstrap';

export default function AddButton(props) {
    props.product.category =  props.category
    return  <Button   onClick= {() => props.addSingleItemToCart(props.product)}>Add To Cart 
    {/* ({ (props.cartItem && props.cartItem.quantity) || 0 }) */}
    </Button>   
}