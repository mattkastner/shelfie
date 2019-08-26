import React from 'react'
import {Link} from 'react-router-dom'

import '../../main.css'
import './Header.css'
import Search from './Search/Search';

export default function Header(props) {
    return (
        <header className="header-container">
            <div className="left-side-navigation">
                <img className="shelfie-icon" src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/shelfie_icon.png" alt="shelfie"/>
                <h1 className="shelfie-title">SHELFIE</h1>
                <nav className='nav'>
                    <Link to='/' onClick={props.getProducts} className='link-button' id='main-link-button'>Dashboard</Link>
                    <Link to='/form/add' className='link-button' id="main-link-button">Add Inventory</Link> 
                </nav>
            </div>
            <Search searchProducts={props.searchProducts}/>
        </header>
    )
}
