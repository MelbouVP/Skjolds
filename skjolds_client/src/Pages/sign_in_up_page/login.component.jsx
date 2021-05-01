import React, { useState }from 'react';

import { Link } from 'react-router-dom';

import './common.styles.scss';


const Login = ({ handleLogin }) => {

    const [ loginData, setLoginData ] = useState({ 
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setLoginData({ ...loginData,[name]: value})
    }

    return (
        <div className="common__container">

            <form className="common__form-container">
                <input 
                    type="email" 
                    name="email"
                    className="common__form-input"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="password"
                    className="common__form-input"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <Link to="/" className="common__link">
                    Forgot your password?
                </Link>
                
                <button 
                    type="submit" 
                    className="common__submit-btn" 
                    onClick={ (e) => handleLogin(e, loginData) } 
                    >
                        Login
                </button>
                
                <Link to="/register" className="common__link">
                    Don't have an account?
                    <span className="common__link--blue">
                        Register!
                    </span>
                </Link>
            </form>
        </div>
    )

}

export default Login;