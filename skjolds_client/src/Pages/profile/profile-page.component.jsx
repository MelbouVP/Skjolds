import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectIsPrivileged } from '../../Redux/user/user.select.js';

import './profile-page.styles.scss';
import { createStructuredSelector } from 'reselect';

const ProfilePage = ({ isPrivileged}) => {

    const { t } = useTranslation();

    return (
        <section className="profile-page">
            <div className="profile-page__container">
                <div className="profile-page__header">
                    <h1>
                        {t('Profile.title')}
                    </h1>
                </div>
                {
                    isPrivileged ?
                        <div className='product-panel'>
                            <button>
                                <Link to='/resources/'>Records</Link>
                            </button>
                        </div>
                    :
                        null
                }
            </div>
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    isPrivileged: selectIsPrivileged
})

export default connect(mapStateToProps)(ProfilePage);

