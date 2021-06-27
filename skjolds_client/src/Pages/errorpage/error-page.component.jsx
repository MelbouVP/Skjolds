import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './error-page.styles.scss'

const ErrorPage = () => {

    const { t } = useTranslation();

    return (
        <div className="error-boundary">
            <div className='wrapper'>
                <div className="content">
                    <h1>
                        {t('Errorpage.title')}
                    </h1>
                    <p>
                        {t('Errorpage.text')}
                    </p>
                    <div className="buttons">
                        <Link to='/'>
                            {t('Errorpage.link')}
                        </Link>
                    </div>
            
                </div>
            </div>
        </div>
    )
}


export default ErrorPage;