import React from 'react';

import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import userIcon from "../../Assets/images/Icon-user-alt.png"
import cartIcon from "../../Assets/images/Icon-shopping-bag.png"

import './navbar.styles.scss';


import apiClient from '../../apiClient';

const getProducts = () => {

    // apiClient.get('/api/products', {
    //     headers : {
    //         Authorization: `Bearer ${response.data.token}`
    //     }
    // })
    // let token = localStorage.getItem('auth_token')
    const cookies = new Cookies();
    let token = cookies.get('auth_token');
    console.log(token);

    apiClient.get('/api/products'
    )
        .then(response => {
            console.log(response)
        })
}


const Navbar = () => {

    return (
        <nav className="navigation">
            <div className="navigation__navbar">
                <Link to='/' className="navbar__link">
                    <li className="navbar__link--content">
                        Home
                    </li>
                </Link>
                <Link to="/shop" className="navbar__link">
                    <li className="navbar__link--content">
                        Shop
                    </li>
                </Link>
                <Link to='/' className="navbar__link">
                    <li className="navbar__link--content">
                        Contact
                    </li>
                </Link>

                <div onClick={getProducts}>Get products</div>
            </div>
            <div className="navigation__navbar">
                <Link to='/login' className="navbar__link">
                    <img src={userIcon} alt="Login button" />
                    <li className="navbar__link--content">
                        Login
                    </li>
                </Link>
                <a href="/checkout" className="navbar__link">
                    <div className="navbar__cart-button">
                        <img src={cartIcon} alt="Shopping cart button" />
                        <div className="navbar__cart-button--items-counter">
                            <p>4</p>
                        </div>
                    </div>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;