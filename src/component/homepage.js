import React from 'react';
import ProductListing from './product-listing';
import data from '../data/product.json';

export default function Homepage(props) {
    console.log("homepage product", data);
    return <div>
        <h2>Products</h2>
        <ProductListing  products ={data.products} />
    </div>
}  

// export default class Homepage extends React.Component { 
//     constructor(props) {
//         super(props);
//         this.state = { modal: false,name: '',team :'' ,country: ''};
    
//         this.toggle = this.toggle.bind(this);
//     }
//     render() {
//         return (
//             <div>
//                 <h2> Homepage</h2>
//                 <ProductListing  products ={data.products} />
//             </div>
//         )
//     }
// }
