import React, { useState }from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './common.styles.scss';


const Login = ({ handleLogin }) => {


    const { t } = useTranslation();
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
                    {t('Login.forgot-password')}
                </Link>
                
                <button 
                    type="submit" 
                    className="common__submit-btn" 
                    onClick={ (e) => handleLogin(e, loginData) } 
                    >
                        {t('Login.login')}
                </button>
                
                <Link to="/register" className="common__link">
                    {t('Login.dont-have-account')}
                    <span className="common__link--blue">
                        {t('Login.register')}
                    </span>
                </Link>
            </form>
        </div>
    )

}

export default Login;