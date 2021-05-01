import React from 'react';

import { Link } from 'react-router-dom';

import './common.styles.scss';


const Login = ({ handleLogin }) => {

    return (
        <div className="common__container">

            <form className="common__form-container">
                <input type="email" name="" id="" className="common__form-input" placeholder="Email"/>
                <input type="password" name="" id="" className="common__form-input" placeholder="Password"/>

                <Link to="/" className="common__link">Forgot your password?</Link>
                <button type="submit" className="common__submit-btn" onClick={ handleLogin } >Login</button>
                
                <Link to="/register" className="common__link">Don't have an account? <span className="common__link--blue">Register!</span></Link>
            </form>
        </div>
    )

}

export default Login;