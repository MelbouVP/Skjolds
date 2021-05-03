import React from 'react';
import { Link } from 'react-router-dom';

import './profile-page.styles.scss';

const ProfilePage = () => {


    return (
        <section className="profile-page">
            <div className="profile-page__container">
                <div className="profile-page__header">
                    <h1>Profile</h1>
                </div>
                <div className='product-panel'>
                    <button>
                        <Link to='/product/create'>Create new product</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProfilePage;

