<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/index-page.css') }}" >
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}" >

    </head>
    <body class="index-page">
        <nav class="navigation">
            <div class="navigation__navbar">
                <a href="" class="navbar__link">
                    <li class="navbar__link--content">
                        Home
                    </li>
                </a>
                <a href="" class="navbar__link">
                    <li class="navbar__link--content">
                        Shop
                    </li>
                </a>
                <a href="" class="navbar__link">
                    <li class="navbar__link--content">
                        Contact
                    </li>
                </a>
            </div>
            <div class="navigation__navbar">
                <a href="" class="navbar__link">
                    <img src="\images\Icon-user-alt.png" alt="Login button">
                    <li class="navbar__link--content">
                        Login
                    </li>
                </a>
                <a href="" class="navbar__link">
                    <div class="navbar__cart-button">
                        <img src="\images\Icon-shopping-bag.png" alt="Shopping cart button">
                        <div class="navbar__cart-button--items-counter">
                            <p>0</p>
                        </div>
                    </div>
                </a>
            </div>
        </nav>

        <main>
            <section class="welcome-section">

                <div class="welcome-section__container">
                    <div class="welcome-section__content">
                        <div class="content__text">
                            <div class="content__text--sup-title">
                                <p>
                                    Enjoy this season with
                                </p>
                            </div>
                            <div class="content__text--title">
                                Skjolds clothing
                            </div>
                            <div class="content__text--sub-title">
                                Release your inner passion through fashion.
                            </div>
                        </div>
    
                        <div class="content__action-btn">
                            <a href="/shop" class="content__action-btn--link">
                                Shop now
                            </a>
                        </div>
                    </div>
    
                    <div class="welcome-section__banner-img">
                        <img src="/images/hero-img.png" alt="">
                    </div>
                    <div class="welcome-section__half-elipse">
                        <img src="/images/half-elipse.png" alt="">
                    </div>
                    <div class="welcome-section__half-elipse">
                        <img src="/images/half-elipse.png" alt="">
                    </div>
                </div>
                
            </section>

            <section class="category-section">
                <div class="category__container-wrapper">

                    <div class="category__container">
                        
                        <div class="category__container--title">
                            <h1>Explore latest trends</h1>
                        </div>

                        <div class="category__container--content">
                            <div class="gender-card__container">
                                <div class="gender-card__description">
                                    <div class="description__sup-title">
                                        Discover
                                    </div>
                                    <div class="description__title">
                                        Men
                                    </div>
                                    <div class="description__text">
                                        <p>Fashion for the sophisticated men.</p>
                                        <p>Skjolds offers newest collections that follow newest trends within male fashion.</p>
                                    </div>
                                    <div class="description__action-btn">
                                        <a href="" class="description__action-btn--link" >
                                            Browse
                                        </a>
                                    </div>
                                </div>
                                <div class="gender-card__gender-img">
                                    <img src="/images/male-category-img.png" alt="Image of a man">
                                    
                                </div>
                            </div>

                            <div class="gender-card__container">
                                <div class="gender-card__description">
                                    <div class="description__sup-title">
                                        Discover
                                    </div>
                                    <div class="description__title">
                                        Women
                                    </div>
                                    <div class="description__text">
                                        <p>Skjolds showcases designer collections from variety of seasons and styles.</p>
                                        <p>Find the inner passion in women's collections.</p>
                                    </div>
                                    <div class="description__action-btn">
                                        <a href="" class="description__action-btn--link" >
                                            Browse
                                        </a>
                                    </div>
                                </div>
                                <div class="gender-card__gender-img">
                                    <img src="/images/female-category-img.png" alt="Image of a woman">
                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </section>


            <section class="feature-section">
                <div class="feature__container">
                        
                    <div class="feature__container--title">
                        <h1>Our features</h1>
                    </div>

                    <div class="feature__container--content">

                        <div class="feature-card__container">
                            <div class="feature-card__feature-image">
                                <img src="\images\Icon-shipping.png" alt="Shipping icon">
                            </div>

                            <div class="feature-card__description">
                                <div class="description__title">
                                    Free shipping
                                </div>
                                <div class="description__text">
                                    <p>
                                        SKJOLDS offers a free shipping on orders exceeding 50 EUR. Also note discounts that include free shipping!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="feature-card__container">

                            <div class="feature-card__feature-image">
                                <img src="\images\Icon-refresh.png" alt="Refresh icon">
                            </div>

                            <div class="feature-card__description">
                                <div class="description__title">
                                    Free returns
                                </div>
                                <div class="description__text">
                                    <p>
                                        Sometimes it's though to find your match and we at SKJOLDS understand it. Our solution? Free item returns!
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="feature-card__container">
                            
                            <div class="feature-card__feature-image">
                                <img src="\images\Icon-question-answer.png" alt="Support icon">
                            </div>

                            <div class="feature-card__description">
                                <div class="description__title">
                                    Customer support
                                </div>
                                <div class="description__text">
                                    <p>
                                        Hence the name, SKJOLDS prides itself in helping to unleash your passion through fashion! Chat with us to to find help.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <footer class="page-footer">
                <div class="footer__container">

                    <div class="footer__social-media">
                        <a href="" class="footer__social-media--link">
                            <img src="\images\Icon-twitter.png" alt="Twitter icon">
                        </a>
                        <a href="" class="footer__social-media--link">
                            <img src="\images\Icon-facebook.png" alt="Facebook icon">
                        </a>
                        <a href="" class="footer__social-media--link">
                            <img src="\images\Icon-instagram.png" alt="Instagram icon">
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
        </main>
    </body>
</html>
