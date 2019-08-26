import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import axios from 'axios'

export default class EditProduct extends Component {
    constructor(){
        super()

        this.state = {
            product: {}
        }
    }
    componentDidMount(){
        this.getProduct()
        console.log("mounted edit page")
        console.dir(this.state.product.name)
    }

    //when data is grabbed from the database and the state changes then console.log (not nessesary, but did it for the points)
    componentDidUpdate(){
        alert("Once changes are submitted, inputs are final")
    }

    getProduct = () => {
        axios.get(`/api/product/${this.props.match.params.id}`).then((res) => {
            this.setState({
            product: res.data[0]
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    checkValues = () => {
        if(this.props.getState().image_url === ''){
            this.props.updateImg_url = this.state.product.image_url
        }
        if(this.props.getState().name === ''){
            this.props.updateImg_url = this.state.product.image_url
        }
        if(this.props.getState().price === ''){
            this.props.updateImg_url = this.state.product.image_url
        }
    }

    render() {
        let img = this.state.product.image_url
        if(this.props.getState().image_url) img = this.props.getState().image_url
        let image_url = this.state.product.image_url
        let name = this.state.product.name
        let price = this.state.product.price
        return (
            <div className="create-product">
                <div className="image-container">
                    <img id="main-image" src={img} alt="default"/>
                </div>
                <div className="creation-container">
                    <label>Image Url:</label>
                    <input placeholder={image_url} type="text" onChange={(e) => this.props.updateImg_url(e.target.value)}></input>
                    <label>Product Name:</label>
                    <input placeholder={name} type="text" onChange={(e) => this.props.updateName(e.target.value)}></input>
                    <label>Price:</label>
                    <input placeholder={price} type="text" onChange={(e) => this.props.updatePrice(e.target.value)}></input>
                    <div className="form-button-container">
                        <button id="main-btn" onClick={this.props.clearInputs}>Cancel</button>
                        <Link to='/' className="save-changes" id="main-save-changes" onClick={() => this.props.updateProduct(this.props.match.params.id, this.props.getState())}>Save Changes</Link>
                    </div>
                </div>
            </div>
        )
    }
}
