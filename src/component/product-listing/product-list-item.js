import React from 'react';
import { Row, Col, Grid, Container } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import AddButton from './add-button';
import RemoveButton from './remove-button';

export default class ProductListItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { modal: false};
    
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }

    render() {
        console.log("product props", this.props);
        return (
            <div className='product-list-item'>
            <Container>
               <Row className="show-grid">
                   <Col xs="6" md="3">
                   <h3>{this.props.product.name}</h3>
                      
                   <div>{this.props.product.price}</div>
                   {/* <button color="success" onClick={this.toggle}>Description</button> */}
                   </Col>
               </Row>
           </Container>
            <div>
                <AddButton
                    cartItem={this.props.cartItem}
                    product={this.props.product}
                    addToCart={this.props.addToCart}
                />
            </div>
            <div className='remove-btn'>
                {
                    this.props.cartItem ?
                     
                    <RemoveButton 
                        cartItem={this.props.cartItem}
                        product={this.props.product}
                        removeFromCart={this.props.removeFromCart}
                    /> : null
                }
            </div>

          {this.state.modal ? <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader>Product Description</ModalHeader>
                <ModalBody>
                <p><b>Product Name : </b>{this.props.product.name}</p>
                 <p><b>Price : </b>{this.props.product.price}</p>
                </ModalBody>
                <ModalFooter>
                    
                    <Button color="primary" onClick={this.toggle}>Submit</Button>
                </ModalFooter>
            </Modal> : ''}
        </div > 
        )
    }
        
}