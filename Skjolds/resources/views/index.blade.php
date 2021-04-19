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

                <div class="welcome-section__hero-img">
                    <img src="/images/hero-img.png" alt="">
                </div>
                <div class="welcome-section__half-elipse">
                    <img src="/images/half-elipse.png" alt="">
                </div>
                <div class="welcome-section__half-elipse">
                    <img src="/images/half-elipse.png" alt="">
                </div>
            </section>
        </main>
    </body>
</html>
