
@extends('master')

@section('page-style-files')
    <link rel="stylesheet" type="text/css" href="{{ asset('css/shop-page.css') }}" >
@endsection    
    
@section('content')

    <body>

        <div class="shop-page">
            <div class="shop-page__container">

                <aside class="filter">
                    <div class="filter__container">
                        <div class="filter__header">
                            <h1>Filter</h1>
                            <p>clear filter</p>
                        </div>
                        <div class="filter__filter-options">
                            <form action="">
                                <div class="filter-option__category">
                                    <div class="filter-option__category--title">
                                        <h3>
                                            Category
                                        </h3>
                                    </div>

                                    <div class="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="men" value="men">
                                        <label for="men">Men</label>
                                    </div>

                                    <div class="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="women" Womalue="women">
                                        <label for="women">Women</label>
                                    </div>

                                    <div class="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="upper-body" value="upper-body">
                                        <label for="upper-body">Upper-body</label>
                                    </div>

                                    <div class="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="pants" value="pants">
                                        <label for="pants">Pants</label>
                                    </div>

                                    <div class="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="hats" value="hats">
                                        <label for="hats">Hats</label>
                                    </div>

                                    <div class="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="shoes" value="shoes">
                                        <label for="shoes">Shoes</label>
                                    </div>
                                </div>

                                <div class="filter-option__size">
                                    <div class="filter-option__size--title">
                                        <h3>
                                            Size
                                        </h3>
                                    </div>

                                    <div class="filter-option__size--options">
                                        <label for="extra-small">
                                            <input type="checkbox" name="size" id="extra-small" value="extra-small">
                                            <span>XS</span>
                                        </label>

                                        <label for="small">
                                            <input type="checkbox" name="size" id="small" value="small">
                                            <span>S</span>
                                        </label>

                                        <label for="medium">
                                            <input type="checkbox" name="size" id="medium" value="medium">
                                            <span>M</span>
                                        </label>

                                        <label for="large">
                                            <input type="checkbox" name="size" id="large" value="large">
                                            <span>L</span>
                                        </label>

                                        <label for="extra-large">
                                            <input type="checkbox" name="size" id="extra-large" value="extra-large">
                                            <span>XL</span>
                                        </label>

                                        <label for="extra-extra-large">
                                            <input type="checkbox" name="size" id="extra-extra-large" value="extra-extra-large">
                                            <span>XXL</span>
                                        </label>
                                    </div>

                            
                                </div>

                                <div class="filter-option__price">
                                    <div class="filter-option__price--title">
                                        <h3>
                                            Price
                                        </h3>
                                    </div>

                                    <div class="filter-option__price--options">

                                        <div class="price__options">
                                            <input type="number" name="min_price" id="min-price" min="10" max="250" placeholder="10">
                                            <p>-</p>
                                            <input type="number"  name="max_price" id="max-price" min="10" max="250" placeholder="250">
                                        </div>

                                    </div>
                                </div>

                                <div class="filter-option__color">
                                    <div class="filter-option__color--title">
                                        <h3>
                                            Color
                                        </h3>
                                    </div>

                                    <div class="filter-option__color--options">
                                        <label for="gray" class="color__options--gray">
                                            <input type="checkbox" name="color" id="gray" value="gray">
                                        </label>

                                        <label for="black" class="color__options--black">
                                            <input type="checkbox" name="color" id="black" value="black">
                                        </label>
                                        
                                        <label for="blue" class="color__options--blue">
                                            <input type="checkbox" name="color" id="blue" value="blue">
                                        </label>

                                        <label for="yellow" class="color__options--yellow">
                                            <input type="checkbox" name="color" id="yellow" value="yellow">
                                        </label>

                                        <label for="red" class="color__options--red">
                                            <input type="checkbox" name="color" id="red" value="red">
                                        </label>

                                        <label for="green" class="color__options--green">
                                            <input type="checkbox" name="color" id="green" value="green">
                                        </label>
                                    </div>

                                </div>


                                <div class="filter__submit-btn">
                                    <input type="submit" value="Submit">
                                </div>

                            </form>
                        </div>
                    </div>
                </aside>

                <section class="shop">
                    <div class="shop__container">

                        <div class="shop__item-card">
                            <div class="item-card__image">
                                <img src="/images/Greenshoe 2018 Women sports shoes.jpg" alt="Women shoes">
                                <div class="item-card__image--cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                                </div>
                            </div>
                            <div class="item-card__description">
                                <h4>Greenshoe 2018 Women sports shoes</h4>
                                <a href="shop/item" class="item-card__action-btn">
                                    Browse
                                </a>
                                <p>49.99€</p>
                            </div>
                        </div>

                        <div class="shop__item-card">
                            <div class="item-card__image">
                                <img src="/images/Woolrich Nap Wool Jacq Sweater.jpg" alt="Women shoes">
                                <div class="item-card__image--cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                                </div>
                            </div>
                            <div class="item-card__description">
                                <h4>Woolrich Nap Wool Jacq Sweater</h4>
                                <a href="" class="item-card__action-btn">
                                    Browse
                                </a>
                                <p>38.99€</p>
                            </div>
                        </div>


                        <div class="shop__item-card">
                            <div class="item-card__image">
                                <img src="/images/Jogs 2019 Woven Mens Sport Trousers.png" alt="Women shoes">
                                <div class="item-card__image--cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                                </div>
                            </div>
                            <div class="item-card__description">
                                <h4>Jogs 2019 Woven Mens Sport Trousers</h4>
                                <a href="" class="item-card__action-btn">
                                    Browse
                                </a>
                                <p>62.50€</p>
                            </div>
                        </div>

                        <div class="shop__item-card">
                            <div class="item-card__image">
                                <img src="/images/Felicciti 2019 Off-shoulders Dress.jpg" alt="Women shoes">
                                <div class="item-card__image--cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                                </div>
                            </div>
                            <div class="item-card__description">
                                <h4>Felicciti 2019 Off-shoulders Dress</h4>
                                <a href="" class="item-card__action-btn">
                                    Browse
                                </a>
                                <p>50.00€</p>
                            </div>
                        </div>

                        <div class="shop__item-card">
                            <div class="item-card__image">
                                <img src="/images/Garcia brown sweather with necler.jpg" alt="Women shoes">
                                <div class="item-card__image--cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                                </div>
                            </div>
                            <div class="item-card__description">
                                <h4>Garcia brown sweather with necler</h4>
                                <a href="" class="item-card__action-btn">
                                    Browse
                                </a>
                                <p>89.99€</p>
                            </div>
                        </div>

                        <div class="shop__item-card">
                            <div class="item-card__image">
                                <img src="/images/Roadmatia 2020 brown women trousers.jpg" alt="Women shoes">
                                <div class="item-card__image--cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                                </div>
                            </div>
                            <div class="item-card__description">
                                <h4>Roadmatia 2020 brown women trousers</h4>
                                <a href="" class="item-card__action-btn">
                                    Browse
                                </a>
                                <p>59.99€</p>
                            </div>
                        </div>

                        <div class="shop__item-card">
                            <div class="item-card__image">
                                <img src="/images/Wachs 2016 men jacket.jpg" alt="Women shoes">
                                <div class="item-card__image--cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                                </div>
                            </div>
                            <div class="item-card__description">
                                <h4>Wachs 2016 men jacket</h4>
                                <a href="" class="item-card__action-btn">
                                    Browse
                                </a>
                                <p>65.00€</p>
                            </div>
                        </div>

                        <div class="shop__item-card">
                            <div class="item-card__image">
                                <img src="/images/Felicciti 2019 Full white dress.jpg" alt="Women shoes">
                                <div class="item-card__image--cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                                </div>
                            </div>
                            <div class="item-card__description">
                                <h4>Felicciti 2019 Full white dress</h4>
                                <a href="" class="item-card__action-btn">
                                    Browse
                                </a>
                                <p>45.99€</p>
                            </div>
                        </div>

                        <div class="shop__item-card">
                            <div class="item-card__image">
                                <img src="/images/Sence 2017 women sweater.jpg" alt="Women shoes">
                                <div class="item-card__image--cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                                </div>
                            </div>
                            <div class="item-card__description">
                                <h4>Sence 2017 women sweater</h4>
                                <a href="" class="item-card__action-btn">
                                    Browse
                                </a>
                                <p>48.99€</p>
                            </div>
                        </div>

                    </div>
                              
                </section>

            </div>
        </div>
    </body>
@endsection

@section('page-js-script')
    <script type="text/javascript">

    </script>
@endsection