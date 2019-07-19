import React,{Component} from 'react';

import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';


class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
         };
    }
    render() {

    console.log("product listing props", this.props);
    return(
        <div>
            <div className='product-listing'>
            {!this.props.display?
                this.props.products.map((product, key) =>
                    <ProductListItem
                        product={product}
                        hideControl={false}
                        category= {this.props.category}
                        key={key}
                        addToCart={this.props.addToCart}
                        removeFromCart={this.props.removeFromCart}
                        cart={this.props.cart}
                        addSingleItemToCart = {this.props.addSingleItemToCart} 
                        cartItem={this.props.cart.filter(cartItem => cartItem.category == this.props.category && cartItem.id === product.id)[0]}
                    />):
                    this.props.products.map((product, key) =>{
                        if(key < this.props.display){
                            return <ProductListItem
                            hideControl={true}
                            product={product}
                            category= {this.props.category}
                            key={key}
                            addToCart={this.props.addToCart}
                            removeFromCart={this.props.removeFromCart}
                            cart={this.props.cart}
                            addSingleItemToCart = {this.props.addSingleItemToCart} 
                            cartItem={this.props.cart.filter(cartItem => cartItem.category === this.props.category && cartItem.id === product.id)[0]}
                        />
                    }
                        }
                    )}
                    
            </div>
            {this.props.display ? <Button onClick={()=>this.props.history.push('/viewmore',{data:this.props.products})}  className="viewMore">
            View More
            </Button> : null}
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