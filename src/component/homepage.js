import React from 'react';
import ProductListing from './product-listing';
import data from '../data/product1.json';

export default function Homepage(props) {
    console.log("homepage product", data);
    return <div>
        <div>
            {Object.keys(data).map(function(keyName, keyIndex) {
                return <div> <h3 style={{marginLeft: "170px"}}>{keyName}</h3>
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
