import React from 'react';
import { connect } from 'react-redux';
import ProductListing from './product-listing';
import data from '../data/product1.json';

export default function Homepage(props) {
    console.log("homepage product", data);
    // this.props.addToData(data);

    return <div>
        <div>
            {Object.keys(data).map(function(keyName, keyIndex) {
                return <div> <h3 style={{marginLeft: "170px",marginTop: "8px"}}>{keyName}</h3>
                <ProductListing
                    category = {keyName} 
                    products = {data[keyName]} 
                    display={3} 
                    {...props}
                    keyIndex={keyIndex}
                />
                </div>
            })}
        </div>
        
    </div>
}  

// function mapStateToProps(state) {
//     return {
//         cart: state.data
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         addToData: (item) => {
//             console.log(item);
//             dispatch({ type: 'ADD_TO_DATA', payload: item })
//         }
       
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Homepage);