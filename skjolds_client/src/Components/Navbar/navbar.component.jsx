import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { logOutStart } from '../../Redux/user/user.actions';
import { selectIsAuthenticated } from '../../Redux/user/user.select';

import userIcon from "../../Assets/images/Icon-user-alt.png"
import cartIcon from "../../Assets/images/Icon-shopping-bag.png"

import './navbar.styles.scss';

import apiClient from '../../apiClient';

const getProducts = () => {

    apiClient.get('/api/product/54')
        .then(response => {
            console.log(response)
        })
}


const Navbar = ({ isAuthenticated, logOutStart }) => {

    return (
        <nav className="navigation">
            <div className="navigation__navbar">

                <div className="navbar__link--container">

                    <Link to='/' className="navbar__link">
                        <li className="navbar__link--content">
                            Home
                        </li>
                    </Link>

                </div>
                <div className="navbar__link--container">
                    <Link to="/shop" className="navbar__link">
                        <li className="navbar__link--content">
                            Shop
                        </li>
                    </Link>
                </div>
                <div className="navbar__link--container">
                    <Link to='/' className="navbar__link">
                        <li className="navbar__link--content">
                            Contact
                        </li>
                    </Link>
                </div>
                <div onClick={getProducts} > Get products</div>
                {/* {
                    isAuthenticated ? <div onClick={getProducts}>Get products</div> : null
                } */}
            </div>
            <div className="navigation__navbar">
                    {
                        isAuthenticated ? 
                            <div className="navbar__link--container">
                                <Link to='/' className="navbar__link" onClick={logOutStart} >
                                    <img src={userIcon} alt="Logout button" />
                                    <li className="navbar__link--content">
                                        Logout
                                    </li>
                                </Link>
                                <Link to='/profile' className="navbar__link" >
                                    <li className="navbar__link--content">
                                        Profile
                                    </li>
                                </Link>
                            </div>
                        :
                            <div className="navbar__link--container">
                                <Link to='/login' className="navbar__link">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-key" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="8" cy="15" r="4" />
                                        <line x1="10.85" y1="12.15" x2="19" y2="4" />
                                        <line x1="18" y1="5" x2="20" y2="7" />
                                        <line x1="15" y1="8" x2="17" y2="10" />
                                    </svg>
                                    <li className="navbar__link--content">
                                        Login
                                    </li>
                                </Link>
                                <Link to='/register' className="navbar__link">
                                    <img src={userIcon} alt="Logout button" />
                                    <li className="navbar__link--content">
                                        Register
                                    </li>
                                </Link>
                            </div>
                    }
                <div className="navbar__link--container">
                    <Link to="/checkout" className="navbar__link">
                        <div className="navbar__cart-button">
                            <img src={cartIcon} alt="Shopping cart button" />
                            <div className="navbar__cart-button--items-counter">
                                <p>4</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selectIsAuthenticated
})

const mapDispatchToProps = dispatch => ({
    logOutStart: () => dispatch(logOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);