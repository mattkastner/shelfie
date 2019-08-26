import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import * as Icon from 'react-feather'

export default class Search extends Component {
    constructor(){
        super()

        this.state = {
            search: ''
        }
    }

    updateSearch = (value) => {
        this.setState({
            search: value
        })
    }

    clickedSubmit = () => {
        this.props.searchProducts(this.state.search)
    }

    render() {
        
        return (
            <div className="searchbar-container">
                <input value={this.state.search} className="searchbar" onChange={(e) => this.updateSearch(e.target.value)} placeholder="Search..."/>
                <Link to='/search' className="submit-btn" onClick={this.clickedSubmit}><Icon.Search color='gray' size="20"/></Link>
            </div>
        )
    }
}
