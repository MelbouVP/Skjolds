@extends('master')

@section('page-style-files')
    <link rel="stylesheet" type="text/css" href="{{ asset('css/item-page.css') }}" >
@endsection    
    

@section('content')
    <div class="item-page">
        <div class="item-page__container">
            
            <div class="item__visual">
                <div class="item__visual--image">
                    <img src="/images/Felicciti 2019 Off-shoulders Dress.jpg" alt="Women dress">
                </div>
                <p class="item__visual--category">
                    Categories: <span>Womens, upper-body</span>
                </p>
            </div>

            <div class="item__information">
                <div class="item__information--header">
                    <h1>Felicciti 2019 Off-shoulders Dress</h1>
                    <p class="information__header--availability">
                        Availability: <span>In stock</span>
                    </p>
                    <p class="information__header--price">
                        50.00€
                    </p>
                </div>

                <form action="">
                    <div class="item__information--item-options">

                        <div class="item-options__size">
                            <p>Size</p>
                            <label for="extra-small">
                                <input type="radio" name="size" id="extra-small" value="extra-small">
                                <span>XS</span>
                            </label>

                            <label for="small">
                                <input type="radio" name="size" id="small" value="small">
                                <span>S</span>
                            </label>

                            <label for="medium">
                                <input type="radio" name="size" id="medium" value="medium" checked>
                                <span>M</span>
                            </label>

                            <label for="large">
                                <input type="radio" name="size" id="large" value="large">
                                <span>L</span>
                            </label>

                            <label for="extra-large">
                                <input type="radio" name="size" id="extra-large" value="extra-large">
                                <span>XL</span>
                            </label>

                            <label for="extra-extra-large">
                                <input type="radio" name="size" id="extra-extra-large" value="extra-extra-large">
                                <span>XXL</span>
                            </label>
                        </div>

                        <div class="item-options__color">
                            <p>Color</p>
                            <label for="gray" class="color__options--gray">
                                <input type="radio" name="color" id="gray" value="gray" checked>
                            </label>

                            <label for="black" class="color__options--black">
                                <input type="radio" name="color" id="black" value="black">
                            </label>
                            
                            <label for="blue" class="color__options--blue">
                                <input type="radio" name="color" id="blue" value="blue">
                            </label>

                            <label for="yellow" class="color__options--yellow">
                                <input type="radio" name="color" id="yellow" value="yellow">
                            </label>

                            <label for="red" class="color__options--red">
                                <input type="radio" name="color" id="red" value="red">
                            </label>

                            <label for="green" class="color__options--green">
                                <input type="radio" name="color" id="green" value="green">
                            </label>
                        </div>

                        <div class="item-options__quantity">
                            <p>Quantity</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18"><path d="M23.115,24.135l-6.87-6.885,6.87-6.885L21,8.25l-9,9,9,9Z" transform="translate(-12 -8.25)"/></svg>
                            <div class="quantity__count">1</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18"><path d="M12.885,24.51l6.87-6.885-6.87-6.885L15,8.625l9,9-9,9Z" transform="translate(-12.885 -8.625)"/></svg>
                        </div>
                    </div>


                    <div class="item__information--action-btn">
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                            <span>Add to cart</span>
                        </button>
                    </div>


                </form>

                <div class="item__information--description">
                    <div class="description__header">
                        <h3>Product description</h3>
                    </div>
                    <p>When choosing a summer dress you want to find something that will keep you cool but also looking good. While each woman will have different opinions on the best summer dress, ultimately it’s up to you to choose what you’re comfortable and confident in.
                    </p>
                    <p>This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.</p>
                </div>

            </div>

        </div>
    </div>
@endsection

@section('page-js-script')
    <script type="text/javascript">

    </script>
@endsection