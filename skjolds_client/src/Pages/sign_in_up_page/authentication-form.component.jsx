import React, { useEffect, useState } from 'react';

import apiClient from '../../apiClient';
import Cookies from 'universal-cookie';

import Login from './login.component';
import Register from './register.component';

import './authentication-form.scss'


const AuthenticationForm = ({ history }) => {


    // if route /login is true, Login components is displayed
    // if route /register is true,  showLogin is false, Register components is displayed
    const [showLogin, setShowLogin] = useState(true);


    useEffect( () => {
        if(history.location.pathname === '/login') {
            setShowLogin(true);
        } else if(history.location.pathname === '/register') {
            setShowLogin(false);
        }
        
    },[history.location.pathname])

    const handleLogin = (e) => {
        e.preventDefault();

        console.log('clicked')
    }
    
    const handleRegister = (e, signUpData) => {
        e.preventDefault();

        let { username, email, password, confirmPassword } = signUpData;

        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
                apiClient.post('/api/register', {
                    username,
                    email,
                    password,
                    password_confirmation: confirmPassword
                })
            })
            .then(response => {
                console.log(response.data)
            });
    }


    return (
        <div className="authentication">
            <div className="authentication__container">

                <div className="form__container">

                    <div className="form__top-container">

                        <div className="form__header">
                            <h2 className="form__header--title-text">
                                {
                                    showLogin ? 'Welcome back' : 'Create account'
                                }
                            </h2>

                            <h5 className="form__header--body-text">
                                {
                                    showLogin ? 'Please log-in!' : 'Welcome to the shop!'
                                }
                            </h5>
                        </div>

                        <div className="form__backdrop">
                        
                        </div>

                    </div>

                    <div className="form__inner-container">
                        {
                            showLogin ? 
                                <Login handleLogin={handleLogin} /> 
                            : 
                                <Register handleRegister ={handleRegister} />
                        }
                    </div>

                </div>


            </div>
        </div>
    )
}

export default AuthenticationForm;