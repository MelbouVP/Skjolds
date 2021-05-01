import React from 'react';

import twitterIcon from '../../Assets/images/Icon-twitter.png';
import facebookIcon from '../../Assets/images/Icon-facebook.png';
import instagramIcon from "../../Assets/images/Icon-instagram.png"


import './footer.styles.scss';


const Footer = () => {
    
    
    return (
        <footer className="page-footer">
            <div className="footer__container">

                <div className="footer__social-media">
                    <a href="/" className="footer__social-media--link">
                        <img src={twitterIcon} alt="Twitter icon"/>
                    </a>
                    <a href="/" className="footer__social-media--link">
                        <img src={facebookIcon} alt="Facebook icon"/>
                    </a>
                    <a href="/" className="footer__social-media--link">
                        <img src={instagramIcon} alt="Instagram icon"/>
                    </a>
                </div>

                <div className="footer__description">


                    <div className="description__information">
                        <div className="description__information--title">
                            Skjolds clothing
                        </div>
                        <div className="description__information--address">
                            skjolds.support@gmail.com
                        </div>
                        <div className="description__information--address">
                            +431 4400 230 32
                        </div>
                        <div className="description__information--address">
                            1 St. Olavs Pass, Oslo, Norway
                        </div>
                    </div>


                    <div className="description__copyright">
                        <p>
                            © Copyright 2021 MelbouVP Design Inc.
                        </p>
                        <p>
                            All rights reserved.
                        </p>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer;