import React from 'react';
import { useTranslation } from 'react-i18next';

import twitterIcon from '../../Assets/images/Icon-twitter.png';
import facebookIcon from '../../Assets/images/Icon-facebook.png';
import instagramIcon from "../../Assets/images/Icon-instagram.png"


import './footer.styles.scss';


const Footer = () => {
    
    const { t } = useTranslation();
    
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
                            {t('Footer.copyright-1')}
                        </p>
                        <p>
                            {t('Footer.copyright-2')}
                        </p>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer;