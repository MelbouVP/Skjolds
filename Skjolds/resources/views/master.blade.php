<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>Skjolds</title>

        
        {{-- default styles included --}}
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}" >
        <link rel="stylesheet" type="text/css" href="{{ asset('css/navbar.css') }}" >
        <link rel="stylesheet" type="text/css" href="{{ asset('css/footer.css') }}" >


        @yield('page-style-files')

    </head>
    
    @include('components.navbar')

    @yield('content')

    @include('components.footer')

    @yield('page-js-script')

</html>