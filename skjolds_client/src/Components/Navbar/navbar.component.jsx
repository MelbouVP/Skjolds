import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'react-i18next';

import { logOutStart } from '../../Redux/user/user.actions';
import { selectIsAuthenticated } from '../../Redux/user/user.select';
import { selectCartItemCount } from '../../Redux/cart/cart.select'

import userIcon from "../../Assets/images/Icon-user-alt.png"
import cartIcon from "../../Assets/images/Icon-shopping-bag.png"

import './navbar.styles.scss';

import apiClient from '../../apiClient';


const Navbar = ({ isAuthenticated, logOutStart, cartItemCount }) => {

    const { t, i18n } = useTranslation();
    
    const [ showLanguages, setShowLanguages ] = useState(false);
    
    const getProducts = () => {
        apiClient.get('/api/product/54')
            .then(response => {
                console.log(response)
            })
    }


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);

        localStorage.removeItem('i18nextLng', lng)
        localStorage.setItem('i18nextLng', lng)

    }

    return (
        <nav className="navigation">
            <div className="navigation__navbar">

                <div className="navbar__link--container">

                    <Link to='/' className="navbar__link">
                        <li className="navbar__link--content">
                            {t('Navbar.home')}
                        </li>
                    </Link>

                </div>
                <div className="navbar__link--container">
                    <Link to="/shop" className="navbar__link">
                        <li className="navbar__link--content">
                            {t('Navbar.shop')}
                        </li>
                    </Link>
                </div>
                {/* <div className="navbar__link--container">
                    <Link to='/' className="navbar__link">
                        <li className="navbar__link--content">
                            {t('Navbar.contact')}
                        </li>
                    </Link>
                </div> */}
                {/* <div onClick={getProducts} > {t('Navbar.products')}</div> */}
                {/* {
                    isAuthenticated ? <div onClick={getProducts}>Get products</div> : null
                } */}
                <div className="navbar__link--container" onClick={() => setShowLanguages(!showLanguages)}>
                    <div className="link__language">
                        {t('Navbar.language')}
                    </div>
                    {
                        showLanguages ?
                            <div className="navbar__language-container">
                                <div className="navbar__language">
                                    <button onClick={() => changeLanguage('en')}>
                                        <span>EN </span>
                                        {
                                            t('Navbar.en')
                                        }
                                    </button>
                                    <button onClick={() => changeLanguage('lv')}>
                                        <span>LV </span> 
                                        {
                                            t('Navbar.lv')
                                        }
                                    </button>
                                </div>
                            </div>
                        :
                            null
                    }
                </div>
            </div>
            <div className="navigation__navbar">
                    {
                        isAuthenticated ? 
                            <div className="navbar__link--container">
                                <Link to='/' className="navbar__link" onClick={logOutStart} >
                                    <img src={userIcon} alt="Logout button" />
                                    <li className="navbar__link--content">
                                        {t('Navbar.logout')}
                                    </li>
                                </Link>
                                <Link to='/profile' className="navbar__link" >
                                    <li className="navbar__link--content">
                                        {t('Navbar.profile')}
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
                                        {t('Navbar.login')}
                                    </li>
                                </Link>
                                <Link to='/register' className="navbar__link">
                                    <img src={userIcon} alt="Logout button" />
                                    <li className="navbar__link--content">
                                        {t('Navbar.register')}
                                    </li>
                                </Link>
                            </div>
                    }
                <div className="navbar__link--container">
                    <Link to="/cart" className="navbar__link">
                        <div className="navbar__cart-button">
                            <img src={cartIcon} alt="Shopping cart button" />
                            <div className="navbar__cart-button--items-counter">
                                <p>
                                    {
                                        cartItemCount
                                    }
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selectIsAuthenticated,
    cartItemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
    logOutStart: () => dispatch(logOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);