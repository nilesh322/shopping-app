import React from 'react';

import ProductListItem from './product-list-item';

export default function ProductListing(props) {
    console.log("product listing props", props);
    return <div className='product-listing'>
        {
            props.products.map((product, key) =>
                <ProductListItem
                    product={product}
                    key={key}
                />)
        }
    </div>
}

