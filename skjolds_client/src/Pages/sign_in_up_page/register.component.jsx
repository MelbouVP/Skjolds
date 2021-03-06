import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


import './common.styles.scss';


const Register = ({ handleRegister }) => {

    const { t } = useTranslation();
    const [ signUpData, setSignUpData ] = useState({ 
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handeValidation = (e) => {
        let { password, confirmPassword } = signUpData;

        if (password !== confirmPassword){
            alert('passwords dont match')
            setSignUpData({})
        }

        handleRegister(e, signUpData)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setSignUpData({ ...signUpData,[name]: value})
    }

    return (
        <div className="common__container">

            <form className="common__form-container">
                <input 
                    type="text" 
                    name="username" 
                    className="common__form-input" 
                    placeholder="Username"
                    min='4'
                    onChange={handleChange}
                />
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
                    min='6'
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="confirmPassword"
                    className="common__form-input" 
                    placeholder="Confirm password"
                    onChange={handleChange}
                />

                <Link to="/" className="common__link">
                    {t('Register.forgot-password')}
                </Link>
                
                <button 
                    type="submit" 
                    className="common__submit-btn" 
                    onClick={ handeValidation }  
                    >
                        {t('Register.register')}
                </button>
                
                <Link to="/login" className="common__link">
                    {t('Register.have-account')}
                    <span className="common__link--blue">
                        {t('Register.login')}
                    </span>
                </Link>
            </form>
        </div>
    )

}

export default Register;