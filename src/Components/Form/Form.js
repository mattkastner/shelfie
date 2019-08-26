import React, { Component } from 'react'

import { Switch, Route } from "react-router-dom";

import CreateProduct from './CreateProduct'
import EditProduct from './EditProduct'

import './Form.css'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            price: '',
            image_url: ''
        }
    }

    updateImg_url = (val) => {
        this.setState({
            image_url: val
        })
        // console.log(this.state.image_url)
    }

    updateName = (val) => {
        this.setState({
            name: val
        })
        // console.log(this.state.name)
        
    }

    updatePrice = (val) => {
        this.setState({
            price: +val
        })
        // console.log(this.state.price)
    }

    clearInputs = () => {
        this.setState({
            image_url: '',
            name: '',
            price: ''
        })
    }

    checkInput = () => {
        if(isNaN(this.state.price)) {
            alert("Other characters, besides numbers, are not allowed")
            this.setState({
                price: 0
            })
        } else {
            if (this.state.image_url === '') {
                this.setState({
                    image_url: "https://reviewfinder.com/content/images/no-image.png"
                })
            }
            this.props.addProduct(this.state)
            this.setState({
                image_url: '',
                name: '',
                price: ''
            })
        } 
    }

    getState = () => {
        return {
            name: this.state.name,
            price: this.state.price,
            image_url: this.state.image_url
        }
    }

    render() {
        return (
            <div className="form-container" id="main-form-container">
                <Switch>
                    <Route path="/form/add" render={
                        (props) => <CreateProduct updateName={this.updateName} updateImg_url={this.updateImg_url} updatePrice={this.updatePrice} clearInputs={this.clearInputs} checkInput={this.checkInput} getState={this.getState} formData={this.state} {...props}/>
                        }/>
                    <Route path="/form/edit/:id" render={
                        (props) => <EditProduct updateProduct={this.props.updateProduct} updateName={this.updateName} updateImg_url={this.updateImg_url} clearInputs={this.clearInputs} updatePrice={this.updatePrice} getState={this.getState} formData={this.state} {...props}/>
                        }/>
                </Switch>
            </div>
        )
    }
}
