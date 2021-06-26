import React from 'react';

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

    return (
        <div className="index-page">

            <section className="welcome-section">

                <div className="welcome-section__container">
                    <div className="welcome-section__content">
                        <div className="content__text">
                            <div className="content__text--sup-title">
                                <p>
                                    Enjoy this season with
                                </p>
                            </div>
                            <div className="content__text--title">
                                Skjolds clothing
                            </div>
                            <div className="content__text--sub-title">
                                Release your inner passion through fashion.
                            </div>
                        </div>

                        <div className="content__action-btn">

                            <Link className="content__action-btn--link" to="/shop">Shop now</Link>
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
                            <h1>Explore latest trends</h1>
                        </div>

                        <div className="category__container--content">
                            <div className="gender-card__container">
                                <div className="gender-card__description">
                                    <div className="description__sup-title">
                                        Discover
                                    </div>
                                    <div className="description__title">
                                        Men
                                    </div>
                                    <div className="description__text">
                                        <p>Fashion for the sophisticated men.</p>
                                        <p>Skjolds offers newest collections that follow newest trends within male fashion.</p>
                                    </div>
                                    <div className="description__action-btn">
                                        <Link to="/shop?category=men" className="description__action-btn--link" >
                                            Browse
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
                                        Discover
                                    </div>
                                    <div className="description__title">
                                        Women
                                    </div>
                                    <div className="description__text">
                                        <p>Skjolds showcases designer collections from variety of seasons and styles.</p>
                                        <p>Find the inner passion in women's collections.</p>
                                    </div>
                                    <div className="description__action-btn">
                                        <Link to="/shop?category=women" className="description__action-btn--link" >
                                            Browse
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
                        <h1>Our features</h1>
                    </div>

                    <div className="feature__container--content">

                        <div className="feature-card__container">
                            <div className="feature-card__feature-image">
                                <img src={shippingIcon} alt="Shipping icon" />
                            </div>

                            <div className="feature-card__description">
                                <div className="description__title">
                                    Free shipping
                                </div>
                                <div className="description__text">
                                    <p>
                                        SKJOLDS offers a free shipping on orders exceeding 50 EUR. Also note discounts that include free shipping!
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
                                    Free returns
                                </div>
                                <div className="description__text">
                                    <p>
                                        Sometimes it's though to find your match and we at SKJOLDS understand it. Our solution? Free item returns!
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
                                    Customer support
                                </div>
                                <div className="description__text">
                                    <p>
                                        Hence the name, SKJOLDS prides itself in helping to unleash your passion through fashion! Chat with us to to find help.
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

