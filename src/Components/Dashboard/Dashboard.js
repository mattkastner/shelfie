import React from 'react'

import './Dashboard.css'

import Product from './Product/Product'

export default function Dashboard(props) {
    const products = props.inventory.map((product, index) => {
        return <Product key={index} product={product} deleteProduct={props.deleteProduct} updateProduct={props.updateProduct}/>
    })
    return (
        <div className="products-container">
            {products}
        </div>
    )
}
