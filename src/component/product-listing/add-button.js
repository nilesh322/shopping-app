import React from 'react';
import {Button} from 'react-bootstrap';

export default function AddButton(props) {
    console.log("button props", props.product);

    // props.product.category =  props.category

    return( 
    <div>       
        <Button onClick= {() => props.addToCart(props.product)}>Add To Cart 
        </Button> 
    </div> 
    )
}