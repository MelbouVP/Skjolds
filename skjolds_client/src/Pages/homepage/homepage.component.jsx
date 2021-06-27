import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import heroImg from "../../Assets/images/hero-img.png";
import halfEclipse from "../../Assets/images/half-elipse.png";
import maleCategoryImg from "../../Assets/images/male-category-img.png";
import femaleCategoryImg from "../../Assets/images/female-category-img.png";
import shippingIcon from "../../Assets/images/Icon-shipping.png";
import refreshIcon from "../../Assets/images/Icon-refresh.png"
import customerSupportIcon from "../../Assets/images/Icon-question-answer.png";

import './homepage.styles.scss';

const HomePage = () => {

    const { t } = useTranslation();

    return (
        <div className="index-page">

            <section className="welcome-section">

                <div className="welcome-section__container">
                    <div className="welcome-section__content">
                        <div className="content__text">
                            <div className="content__text--sup-title">
                                <p>
                                    {t('Homepage.welcome-section.sup-title')}
                                </p>
                            </div>
                            <div className="content__text--title">
                                {t('Homepage.welcome-section.title')}
                            </div>
                            <div className="content__text--sub-title">
                                {t('Homepage.welcome-section.sub-title')}
                            </div>
                        </div>

                        <div className="content__action-btn">

                            <Link className="content__action-btn--link" to="/shop">
                                {t('Homepage.welcome-section.link')}
                            </Link>
                        </div>
                    </div>

                    <div className="welcome-section__banner-img">
                        <img src={heroImg} alt="Banner" />
                    </div>

                    <div className="welcome-section__half-elipse">
                        <img src={halfEclipse} alt="Half eclipse" />
                    </div>

                    <div className="welcome-section__half-elipse">
                        <img src={halfEclipse} alt="Half eclipse" />
                    </div>
                </div>
                
            </section>

            <section className="category-section">
                <div className="category__container-wrapper">

                    <div className="category__container">
                        
                        <div className="category__container--title">
                            <h1>
                                {t('Homepage.category-section.title')}
                            </h1>
                        </div>

                        <div className="category__container--content">
                            <div className="gender-card__container">
                                <div className="gender-card__description">
                                    <div className="description__sup-title">
                                        {t('Homepage.category-section.men.description_sup-title')}
                                    </div>
                                    <div className="description__title">
                                        {t('Homepage.category-section.men.description_title')}
                                    </div>
                                    <div className="description__text">
                                        <p>
                                            {t('Homepage.category-section.men.text-1')}
                                        </p>
                                        <p>
                                            {t('Homepage.category-section.men.text-2')}
                                        </p>
                                    </div>
                                    <div className="description__action-btn">
                                        <Link to="/shop?category=men" className="description__action-btn--link" >
                                            {t('Homepage.category-section.men.description-link')}
                                        </Link>
                                    </div>
                                </div>
                                <div className="gender-card__gender-img">
                                    <img src={maleCategoryImg} alt="man" />
                                    
                                </div>
                            </div>

                            <div className="gender-card__container">
                                <div className="gender-card__description">
                                    <div className="description__sup-title">
                                        {t('Homepage.category-section.women.description_sup-title')}
                                    </div>
                                    <div className="description__title">
                                        {t('Homepage.category-section.women.description_title')}
                                    </div>
                                    <div className="description__text">
                                        <p>
                                            {t('Homepage.category-section.women.text-1')}
                                        </p>
                                        <p>
                                            {t('Homepage.category-section.women.text-2')}
                                        </p>
                                    </div>
                                    <div className="description__action-btn">
                                        <Link to="/shop?category=women" className="description__action-btn--link" >
                                            {t('Homepage.category-section.women.description-link')}
                                        </Link>
                                    </div>
                                </div>
                                <div className="gender-card__gender-img">
                                    <img src={femaleCategoryImg} alt="woman" />
                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </section>


            <section className="feature-section">
                <div className="feature__container">
                        
                    <div className="feature__container--title">
                        <h1>
                            {t('Homepage.feature-section.title')}
                        </h1>
                    </div>

                    <div className="feature__container--content">

                        <div className="feature-card__container">
                            <div className="feature-card__feature-image">
                                <img src={shippingIcon} alt="Shipping icon" />
                            </div>

                            <div className="feature-card__description">
                                <div className="description__title">
                                    {t('Homepage.feature-section.shipping.title')}
                                </div>
                                <div className="description__text">
                                    <p>
                                        {t('Homepage.feature-section.shipping.text')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="feature-card__container">

                            <div className="feature-card__feature-image">
                                <img src={refreshIcon} alt="Refresh icon" />
                            </div>

                            <div className="feature-card__description">
                                <div className="description__title">
                                    {t('Homepage.feature-section.returns.title')}
                                </div>
                                <div className="description__text">
                                    <p>
                                        {t('Homepage.feature-section.returns.text')}
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="feature-card__container">
                            
                            <div className="feature-card__feature-image">
                                <img src={customerSupportIcon} alt="Customer support icon" />
                            </div>

                            <div className="feature-card__description">
                                <div className="description__title">
                                    {t('Homepage.feature-section.customer.title')}
                                </div>
                                <div className="description__text">
                                    <p>
                                        {t('Homepage.feature-section.customer.text')}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            
        </div>
    )
}

export default HomePage

