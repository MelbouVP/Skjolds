import React from 'react';
import { Link } from 'react-router-dom';

import './error-page.styles.scss'

const ErrorPage = () => {
  return (
    <div className="error-boundary">
        <div className='wrapper'>
            <div className="content">
                <h1>Psst, there's nothing here.</h1>
                <p>Let's get back home. </p>
                <div className="buttons">
                    <Link to='/'> Home </Link>
                </div>
        
            </div>
        </div>
    </div>
)
}


export default ErrorPage;