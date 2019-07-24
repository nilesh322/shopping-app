import React from 'react';
import { Row, Col, Grid, Container } from 'react-bootstrap';

import AddButton from './add-button';

export default class ProductListItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        // console.log("product list item props", this.props);
        return (
            <div className='product-list-item'>
            <Container>
               <Row className="show-grid">
                   <Col xs="6" md="12" className="text-center">
                   <img
                        height={100}
                        title={this.props.product.name}
                        src={this.props.product.images[0] || 'No-image-found.jpg'}
                       
                    />
                   <h5>{this.props.product.name}</h5>
                      
                   <div style={{display:'inline-flex'}}>
                        Price: <span style={{margin:"0px 5px"}}><i className="fa fa-inr"></i></span>{this.props.product.price + ".00"}
                      {/* &nbsp;  <del className="text-muted"> <i className="fa fa-inr"></i> 24522</del> */}
                    </div>
                   </Col>
               </Row>
           </Container>
           {!this.props.hideControl &&
            <div>
                {
                   this.props.cart.map(({_id})=>_id).indexOf(this.props.product._id) === -1  &&
                  
                    <AddButton
                        cartItem={this.props.cartItem}
                        product={this.props.product}
                        category={this.props.category}
                        addToCart={this.props.addToCart}
                    />
                }
               { 
                    this.props.cart.map(({_id})=>_id).indexOf(this.props.product._id) > -1 &&
                    <div className="add-table">
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