import React, { Component } from 'react'

export default class CreateProduct extends Component {
    render() {
        const {updateImg_url, updateName, updatePrice, clearInputs, checkInput} = this.props
        const {image_url, name, price} = this.props.getState()
        let img = "https://reviewfinder.com/content/images/no-image.png"
        if(this.props.getState().image_url) img = this.props.getState().image_url
        return (
            <div className="create-product">
                <div className="image-container">
                    <img id="main-image" src={img} alt={name}/>
                </div>
                <div className="creation-container">
                    <label>Image Url:</label>
                    <input value={image_url} onChange={(e) => updateImg_url(e.target.value)}></input>
                    <label>Product Name:</label>
                    <input value={name} onChange={(e) => updateName(e.target.value)}></input>
                    <label>Price:</label>
                    <input value={price} onChange={(e) => updatePrice(e.target.value)}></input>
                    <div className="form-button-container">
                        <button id="main-btn" onClick={clearInputs}>Cancel</button>
                        <button id="main-btn" onClick={checkInput}> Add to Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}
