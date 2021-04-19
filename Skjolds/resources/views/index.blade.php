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
                    <img src="\images\Icon awesome-user-alt.png" alt="Login button">
                    <li class="navbar__link--content">
                        Login
                    </li>
                </a>
                <a href="" class="navbar__link">
                    <div class="navbar__cart-button">
                        <img src="\images\Icon feather-shopping-bag.png" alt="Shopping cart button">
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
                
            </section>
        </main>
    </body>
</html>
