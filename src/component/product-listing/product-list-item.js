import React from 'react';
import { Row, Col, Grid, Container } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import AddButton from './add-button';
import RemoveButton from './remove-button';

export default class ProductListItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        console.log("product props", this.props);
        
        return (
            <div className='product-list-item'>
            <Container>
               <Row className="show-grid">
                   <Col xs="6" md="3">
                   <img
                        height={100}
                        title={this.props.product.name}
                        src={this.props.product.image}
                        // style={{marginLeft:'-25px'}}
                    />
                   <h3>{this.props.product.name}</h3>
                      
                   <div style={{display:'inline-flex'}}>
                        Price: <span style={{margin:"0px 5px"}}><i className="fa fa-inr"></i></span>{this.props.product.price + ".00"}
                    </div>
                   </Col>
               </Row>
           </Container>
           {!this.props.hideControl &&
            <div>
                {
                    !this.props.cartItem &&
                    <AddButton
                        cartItem={this.props.cartItem}
                        product={this.props.product}
                        category={this.props.category}
                        addSingleItemToCart={this.props.addSingleItemToCart}
                    /> 
                    // <RemoveButton 
                    //     cartItem={this.props.cartItem}
                    //     product={this.props.product}
                    //     removeFromCart={this.props.removeFromCart}
                    // />  
                }
                
               {  
                   this.props.cartItem &&
                    <div style={{marginTop:'15px'}}>
                        <table>
                            <tbody>
                                <tr>
                            
                                    <td><button  onClick= {() => this.props.addToCart(this.props.product)} >+</button></td>
                                    <td>{(this.props.cartItem && this.props.cartItem.quantity) || 0 }</td>
                                    <td><button onClick= {() => this.props.removeFromCart(this.props.cartItem)} >-</button></td>
                            
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>}
        </div > 
        )
    }
        
}