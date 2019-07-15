import React from 'react';
import { Button } from 'reactstrap';
import ProductListing from './product-listing';
import data from '../data/product.json';

export default function Homepage(props) {
    console.log("homepage product", data);
    return <div>
        {/* <div><Button className="pull-right">View All</Button></div>  */}
        <ProductListing  products = {data.products} />
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
