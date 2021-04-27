import React from 'react'

const ProductListItem = ({ product }) => {
    return (<li key={product.id}>
                <h2>Name: {product.name}</h2>
                <p>Size: {product.size}</p>
                <p>Color: </p><ul>{product.colors.map(color => <li key={color}>
                    <span>{color}</span>
                </li>)}</ul>
                <p>Price: {product.price}</p>            
</li>)
} 
            
export default ProductListItem;