import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchInitialProductsStart, fetchFilteredProductsStart, clearShopFilter } from '../../Redux/shop/shop.actions.js';
import { selectInitialProducts, selectFilteredProducts, selectHasShopContentLoaded } from '../../Redux/shop/shop.select';

import ProductCard from '../../Components/Product-card/product-card.component';
import Spinner from '../../Components/Spinners/page-spinner.component';

import './shop.styles.scss';

const ShopPage = ({ 
    products, 
    filteredProducts, 
    hasShopLoaded,
    fetchInitialProductsStart, 
    fetchFilteredProductsStart,
    clearShopFilter
    }) => {


    const [ filterProperties, setFilterProperties ] = useState({ 
            category: [],
            size: [],
            min_price: null,
            max_price: null,
            color: []
    });

    useEffect(() => {
        if(!products){
            fetchInitialProductsStart();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    const handleChange = (event) => {

        const { name, value } = event.target;

        let data;

        if( Array.isArray(filterProperties[name])){
            if(filterProperties[name].indexOf(value) === -1) {
                
                data = { ...filterProperties, [name]: [...filterProperties[name], value]}
                setFilterProperties({ ...filterProperties, [name]: [...filterProperties[name], value]});
            } else {
                
                const updatedData = filterProperties[name].filter(data => data !== value);
                data = {...filterProperties, [name]: updatedData}
    
                setFilterProperties({...filterProperties, [name]: updatedData});
    
            }
        } else {
            data = {...filterProperties, [name]: value}
            setFilterProperties({...filterProperties, [name]: value});
        }


        submitFilter(data)
    }
    
    const clearFilter = () => {

        setFilterProperties({ 
            category: [],
            size: [],
            min_price: null,
            max_price: null,
            color: []
        });


        document.querySelectorAll('input').forEach(input => input.checked = false)

        // dispatch redux action to change view from filtered products to shop products
        clearShopFilter();

    }

    
    const submitFilter = (data) => {
        
        fetchFilteredProductsStart(data)
    }
    
    const productsList = products ? 
        products.map( (product) => 
            <ProductCard key={product.id} product={product} />
        )
    :
        null

    const filteredProductsList = filteredProducts ?
        filteredProducts.map( (product) => 
            <ProductCard key={product.id} product={product} />
        )
    :
        <div  className="product__not-found">No such products were found</div> 


    console.log(filterProperties)

    return (
        <div className="shop-page">
            <div className="shop-page__container">

                <aside className="filter">
                    <div className="filter__container">
                        <div className="filter__header">
                            <h1>Filter</h1>
                            <p onClick={clearFilter}>clear filter</p>
                        </div>
                        <div className="filter__filter-options" >
                            <form onChange={handleChange}>

                                <div className="filter-option__category">
                                    <div className="filter-option__category--title">
                                        <h3>
                                            Category
                                        </h3>
                                    </div>

                                    <div className="filter-option__category--checkbox" >
                                        <input 
                                            type="checkbox" 
                                            name="category" 
                                            id="men" 
                                            value="men" 
                                            // defaultChecked={filterProperties.category.find(category => category === 'men')}
                                        />
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
                                            <input type="checkbox" name="color" id="grey" value="grey" />
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

                            </form>
                        </div>
                    </div>
                </aside>

                <section className="shop">
                    <div className="shop__container">

                        {
                            hasShopLoaded ?
                                (
                                    filteredProducts ?
    
                                        filteredProductsList
                                    :
                                        productsList
                                )

                            :
                                <Spinner />
                        }

                    </div>
                                
                </section>

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    products: selectInitialProducts,
    filteredProducts: selectFilteredProducts,
    hasShopLoaded: selectHasShopContentLoaded
})

const mapDispatchToProps = dispatch =>({
    fetchInitialProductsStart: () => dispatch(fetchInitialProductsStart()),
    fetchFilteredProductsStart: (filteredProperties) => dispatch(fetchFilteredProductsStart(filteredProperties)),
    clearShopFilter: () => dispatch(clearShopFilter())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

