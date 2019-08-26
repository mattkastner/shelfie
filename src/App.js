import React, { Component } from 'react'
import axios from 'axios'

import 'reset-css'
import './App.css'

import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }

  //lifecycle methods
  componentDidMount(){

    this.getProducts()
  }

  getProducts = () => {
    axios.get('/api/product').then((res) => {
      this.setState({
        inventory: res.data
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  addProduct = (obj) => {
    axios.post('/api/product', obj).then(res => {
      this.setState({
        inventory: res.data,
      })
    }).catch((error) => {
      console.log(error);
    });
  };

  deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`).then(res => {
        this.setState({
          inventory: res.data
        })
      }).catch((error) => {
        console.log(error);
      });
  }

  updateProduct = (id, obj) => {
    axios.put(`/api/product/${id}`, obj).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  searchProducts = (query) => {
    axios.get(`/api/product/search/${query}`).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="app-container">
        <Header searchProducts={this.searchProducts} getProducts={this.getProducts} />
        <div className="display-container">
          <Switch>
            <Route exact path="/" render={
              () => <Dashboard inventory={this.state.inventory} deleteProduct={this.deleteProduct}/>
            }/>
            <Route exact path="/search" render={
              () => <Dashboard inventory={this.state.inventory} deleteProduct={this.deleteProduct} getProducts={this.getProducts}/>
            }/>
            <Route path="/form" render={
              () => <Form addProduct={this.addProduct} updateProduct={this.updateProduct}/>
            }/>
          </Switch>
        </div>
      </div>
    )
  }
}