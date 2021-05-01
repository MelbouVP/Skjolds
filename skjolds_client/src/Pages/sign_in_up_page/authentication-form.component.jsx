import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { registerStart, emailLogInStart } from '../../Redux/user/user.actions';


import Login from './login.component';
import Register from './register.component';

import './authentication-form.scss'


const AuthenticationForm = ({ history, registerStart, emailLogInStart }) => {


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

    const handleLogin = (e, loginData) => {
        e.preventDefault();

        emailLogInStart(loginData)
    }
    
    const handleRegister = (e, signUpData) => {
        e.preventDefault();

        registerStart(signUpData);
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
                                <Register handleRegister={handleRegister} />
                        }
                    </div>

                </div>


            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    registerStart: (registerData) => dispatch(registerStart(registerData)),
    emailLogInStart: (loginData) => dispatch(emailLogInStart(loginData))
})

export default connect(null, mapDispatchToProps)(AuthenticationForm);