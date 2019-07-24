import React from 'react';
import {Button} from 'react-bootstrap';

export default function AddButton(props) {

    // props.product.category =  props.category

    return( 
        <div className="text-center">       
            <Button onClick= {() => props.addToCart(props.product)}>Add To Cart 
            </Button> 
        </div> 
    )
}