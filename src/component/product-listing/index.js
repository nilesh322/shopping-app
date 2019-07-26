import React,{Component} from 'react';

import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
         };
    }

    render() {
        // console.log("product listing props", this.props);
        return(
            <div className="custom-css">
                <div className='product-listing'>
                {!this.props.display && this.props.products ?
                    this.props.products.map((product, key) =>
                        <ProductListItem
                            product={product.product}
                            hideControl={false}
                            category= {this.props.category}
                            key={key}
                            addToCart={this.props.addToCart}
                            removeFromCart={this.props.removeFromCart}
                            cart={this.props.cart} 
                            cartItem={this.props.cart.filter(cartItem => cartItem._id === product.product._id)[0]}
                        />):

                        this.props.products.map((product, key) => {
                            if(key < this.props.display) {
                                return <ProductListItem
                                hideControl={true}
                                product={product.product}
                                category= {this.props.category}
                                key={key}
                                addToCart={this.props.addToCart}
                                removeFromCart={this.props.removeFromCart}
                                cart={this.props.cart}
                              
                                cartItem={this.props.cart.filter(cartItem => cartItem._id === product.product._id)[0]}
                            />
                        }
                            }
                        )}
                        
                </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            console.log("add to cart action", item)
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);