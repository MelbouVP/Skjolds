<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('components.head')

        <link rel="stylesheet" type="text/css" href="{{ asset('css/shop-page.css') }}" >
    </head>

    <body>
        
        @include('components.navbar')

        <section class="shop-page">
            <div class="shop-page__container">

            </div>
        </section>


        @include('components.footer')

    </body>
</html>