import React from 'react';
import {Button} from 'react-bootstrap';

export default function RemoveButton(props) {
    console.log("remove-button", props)
    return <Button onClick={() => props.removeFromCart(props.cartItem)}>Remove
    </Button>   
}