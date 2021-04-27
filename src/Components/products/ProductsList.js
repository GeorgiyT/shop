import React from 'react'
import ProductListItem from './productsListItem/ProductsListItem';

const productsList = ({products}) => {
    return (
        <ul className="productsList">
            {products.map((product) => (<ProductListItem product={product} key={product.id} />))}
            </ul>
    );
}

export default productsList;