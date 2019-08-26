import React from 'react'

import {Link} from 'react-router-dom'

import '../../../main.css'
import './Product.css'

export default function Product(props) {
    let path = `/form/edit/${props.product.product_id}`
    return (
        <div className="product-container" id="main-product-container">
            <div className="img-container">
                <img id='main-image' src={props.product.image_url} alt="default"/>
            </div>
            <div className="desc-container">
                <div className="text-container">
                    <h4>{props.product.name}</h4>
                    <h4>${props.product.price}</h4>
                </div>
                <div className="product-button-container">
                    <button id='main-btn' onClick={() => props.deleteProduct(props.product.product_id)}>Delete</button>
                    <Link className="edit" id='main-edit' to={path}>Edit</Link>
                </div>
            </div>
        </div>
    )
}
