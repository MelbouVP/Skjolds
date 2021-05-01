import React from 'react';

import twitterIcon from '../../Assets/images/Icon-twitter.png';
import facebookIcon from '../../Assets/images/Icon-facebook.png';
import instagramIcon from "../../Assets/images/Icon-instagram.png"


import './footer.styles.scss';


const Footer = () => {
    
    
    return (
        <footer class="page-footer">
            <div class="footer__container">

                <div class="footer__social-media">
                    <a href="/" class="footer__social-media--link">
                        <img src={twitterIcon} alt="Twitter icon"/>
                    </a>
                    <a href="/" class="footer__social-media--link">
                        <img src={facebookIcon} alt="Facebook icon"/>
                    </a>
                    <a href="/" class="footer__social-media--link">
                        <img src={instagramIcon} alt="Instagram icon"/>
                    </a>
                </div>

                <div class="footer__description">


                    <div class="description__information">
                        <div class="description__information--title">
                            Skjolds clothing
                        </div>
                        <div class="description__information--address">
                            skjolds.support@gmail.com
                        </div>
                        <div class="description__information--address">
                            +431 4400 230 32
                        </div>
                        <div class="description__information--address">
                            1 St. Olavs Pass, Oslo, Norway
                        </div>
                    </div>


                    <div class="description__copyright">
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