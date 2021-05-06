import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchInitialProductsStart } from '../../Redux/shop/shop.actions.js';
import { selectInitialProducts } from '../../Redux/shop/shop.select';

import ProductCard from '../../Components/Product-card/product-card.component';

import './shop.styles.scss';

const ShopPage = ({ products, fetchInitialProductsStart }) => {

    useEffect(() => {
        // if(!products){
            fetchInitialProductsStart()
        // }
    },[fetchInitialProductsStart])

    
    const productsList = products ? 
        products.map( (product) => 
            <ProductCard key={product.id} product={product} />
        )
    :
        null

    return (
        <div className="shop-page">
            <div className="shop-page__container">

                <aside className="filter">
                    <div className="filter__container">
                        <div className="filter__header">
                            <h1>Filter</h1>
                            <p>clear filter</p>
                        </div>
                        <div className="filter__filter-options">
                            <form action="">
                                <div className="filter-option__category">
                                    <div className="filter-option__category--title">
                                        <h3>
                                            Category
                                        </h3>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="men" value="men" />
                                        <label htmlFor="men">Men</label>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="women" value="women" />
                                        <label htmlFor="women">Women</label>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="upper-body" value="upper-body" />
                                        <label htmlFor="upper-body">Upper-body</label>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="pants" value="pants" />
                                        <label htmlFor="pants">Pants</label>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="hats" value="hats" />
                                        <label htmlFor="hats">Hats</label>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input type="checkbox" name="category" id="shoes" value="shoes" />
                                        <label htmlFor="shoes">Shoes</label>
                                    </div>
                                </div>

                                <div className="filter-option__size">
                                    <div className="filter-option__size--title">
                                        <h3>
                                            Size
                                        </h3>
                                    </div>

                                    <div className="filter-option__size--options">
                                        <label htmlFor="extra-small">
                                            <input type="checkbox" name="size" id="extra-small" value="extra-small" />
                                            <span>XS</span>
                                        </label>

                                        <label htmlFor="small">
                                            <input type="checkbox" name="size" id="small" value="small" />
                                            <span>S</span>
                                        </label>

                                        <label htmlFor="medium">
                                            <input type="checkbox" name="size" id="medium" value="medium" />
                                            <span>M</span>
                                        </label>

                                        <label htmlFor="large">
                                            <input type="checkbox" name="size" id="large" value="large" />
                                            <span>L</span>
                                        </label>

                                        <label htmlFor="extra-large">
                                            <input type="checkbox" name="size" id="extra-large" value="extra-large" />
                                            <span>XL</span>
                                        </label>

                                        <label htmlFor="extra-extra-large">
                                            <input type="checkbox" name="size" id="extra-extra-large" value="extra-extra-large" />
                                            <span>XXL</span>
                                        </label>
                                    </div>

                            
                                </div>

                                <div className="filter-option__price">
                                    <div className="filter-option__price--title">
                                        <h3>
                                            Price
                                        </h3>
                                    </div>

                                    <div className="filter-option__price--options">

                                        <div className="price__options">
                                            <input type="number" name="min_price" id="min-price" min="10" max="250" placeholder="10" />
                                            <p>-</p>
                                            <input type="number"  name="max_price" id="max-price" min="10" max="250" placeholder="250" />
                                        </div>

                                    </div>
                                </div>

                                <div className="filter-option__color">
                                    <div className="filter-option__color--title">
                                        <h3>
                                            Color
                                        </h3>
                                    </div>

                                    <div className="filter-option__color--options">
                                        <label htmlFor="gray" className="color__options--gray">
                                            <input type="checkbox" name="color" id="gray" value="gray" />
                                        </label>

                                        <label htmlFor="black" className="color__options--black">
                                            <input type="checkbox" name="color" id="black" value="black" />
                                        </label>
                                        
                                        <label htmlFor="blue" className="color__options--blue">
                                            <input type="checkbox" name="color" id="blue" value="blue" />
                                        </label>

                                        <label htmlFor="yellow" className="color__options--yellow">
                                            <input type="checkbox" name="color" id="yellow" value="yellow" />
                                        </label>

                                        <label htmlFor="red" className="color__options--red">
                                            <input type="checkbox" name="color" id="red" value="red" />
                                        </label>

                                        <label htmlFor="green" className="color__options--green">
                                            <input type="checkbox" name="color" id="green" value="green" />
                                        </label>
                                    </div>

                                </div>


                                <div className="filter__submit-btn">
                                    <input type="submit" value="Submit" />
                                </div>

                            </form>
                        </div>
                    </div>
                </aside>

                <section className="shop">
                    <div className="shop__container">

                        {
                            productsList
                        }

                    </div>
                                
                </section>

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    products: selectInitialProducts
})

const mapDispatchToProps = dispatch =>({
    fetchInitialProductsStart: () => dispatch(fetchInitialProductsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

