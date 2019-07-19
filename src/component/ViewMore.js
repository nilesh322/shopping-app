import React,{Component} from 'react';
import ProductListing from '../component/product-listing'

class ViewMore extends Component{
    render() {
        console.log("view more", this.props)
        return (
        <ProductListing  products = {this.props.location.state.data}/>
        )
    }
}

export default ViewMore;