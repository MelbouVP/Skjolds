import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import history from '../../history.js';


import { 
    fetchInitialProductsStart, 
    fetchFilteredProductsStart, 
    clearShopFilter,
    changeShopFilterData
} from '../../Redux/shop/shop.actions.js';

import { 
    selectInitialProducts, 
    selectFilteredProducts, 
    selectHasShopContentLoaded,
    selectFilterProperties,
    selectIsFilterEmpty
} from '../../Redux/shop/shop.select';

import ProductCard from '../../Components/Product-card/product-card.component';
import Spinner from '../../Components/Spinners/page-spinner.component';

import './shop.styles.scss';


const ShopPage = ({ 
    products, 
    filteredProducts, 
    hasShopLoaded,
    fetchInitialProductsStart, 
    fetchFilteredProductsStart,
    clearShopFilter,
    changeShopFilterData,
    filterIsEmpty,
    filterData,
    location
    }) => {


    const { t } = useTranslation();    

    useEffect(() => {

        
        const params = new URLSearchParams(location.search); 
        const categoryName = params.get('category')

        if(categoryName){
            clearShopFilter();
            
            const data = { category: [categoryName]}

            history.replace('/shop');

            return submitFilter(data)
        }
        
        if(!products.length){
            return fetchInitialProductsStart();
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    const handleChange = (event) => {

        console.log('click');

        const { name, value } = event.target;

        let data;

        if( Array.isArray(filterData[name])){
            if(filterData[name].indexOf(value) === -1) {
                
                data = { ...filterData, [name]: [...filterData[name], value]}
                changeShopFilterData({ ...filterData, [name]: [...filterData[name], value]});
            } else {
                
                const updatedData = filterData[name].filter(data => data !== value);
                data = {...filterData, [name]: updatedData}
    
                changeShopFilterData({...filterData, [name]: updatedData});
    
            }
        } else {
            data = {...filterData, [name]: value}
            changeShopFilterData({...filterData, [name]: value});
        }


        submitFilter(data)
    }

    
    const clearFilter = () => {

        if(!products.length){
            fetchInitialProductsStart()
        }

        // dispatch redux action to change view from filtered products to shop products
        clearShopFilter();

    }

    
    const submitFilter = (data) => {
        changeShopFilterData(data);
        fetchFilteredProductsStart(data)
    }
    
    const productsList = products ? 
        products.map( (product) => 
            <ProductCard key={product.id} product={product} />
        )
    :
        null

    const filteredProductsList = filteredProducts.length ?
        filteredProducts.map( (product) => 
            <ProductCard key={product.id} product={product} />
        )
    :
        <div className="shop__product-not-found">{t('Shop.products-not-found')}</div> 



    return (
        <div className="shop-page">
            <div className="shop-page__container">

                <aside className="filter">
                    <div className="filter__container">
                        <div className="filter__header">
                            <h1>
                                {t('Shop.filter.header_text-1')}
                            </h1>
                            <p onClick={clearFilter}>
                                {t('Shop.filter.header_text-2')}
                            </p>
                        </div>
                        <div className="filter__filter-options" >
                            <form>

                                <div className="filter-option__category">
                                    <div className="filter-option__category--title">
                                        <h3>
                                            {t('Shop.filter.options.category.title')}
                                        </h3>
                                    </div>

                                    <div className="filter-option__category--checkbox" >
                                        <input 
                                            type="checkbox" 
                                            name="category" 
                                            id="men" 
                                            value="men" 
                                            checked={filterData.category.find(category => category === 'men') ? true : false}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="men">
                                            {t('Shop.filter.options.category.men')}
                                        </label>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input 
                                            type="checkbox"
                                            name="category" 
                                            id="women" 
                                            value="women" 
                                            checked={filterData.category.find(category => category === 'women') ? true : false}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="women">
                                            {t('Shop.filter.options.category.women')}
                                        </label>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input 
                                            type="checkbox" 
                                            name="category" 
                                            id="upper-body" 
                                            value="upper-body" 
                                            checked={filterData.category.find(category => category === 'upper-body') ? true : false}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="upper-body">
                                            {t('Shop.filter.options.category.upper-body')}
                                        </label>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input 
                                            type="checkbox" 
                                            name="category" 
                                            id="pants" 
                                            value="pants" 
                                            checked={filterData.category.find(category => category === 'pants') ? true : false}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="pants">
                                            {t('Shop.filter.options.category.pants')}
                                        </label>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input 
                                            type="checkbox" 
                                            name="category" 
                                            id="hats" 
                                            value="hats" 
                                            checked={filterData.category.find(category => category === 'hats') ? true : false}    
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="hats">
                                            {t('Shop.filter.options.category.hats')}
                                        </label>
                                    </div>

                                    <div className="filter-option__category--checkbox">
                                        <input 
                                            type="checkbox" 
                                            name="category" 
                                            id="shoes" 
                                            value="shoes" 
                                            checked={filterData.category.find(category => category === 'shoes') ? true : false}   
                                            onChange={handleChange} 
                                        />
                                        <label htmlFor="shoes">
                                            {t('Shop.filter.options.category.shoes')}
                                        </label>
                                    </div>
                                </div>

                                <div className="filter-option__size">
                                    <div className="filter-option__size--title">
                                        <h3>
                                            {t('Shop.filter.options.size.title')}
                                        </h3>
                                    </div>

                                    <div className="filter-option__size--options">
                                        <label htmlFor="extra-small">
                                            <input 
                                                type="checkbox" 
                                                name="size" 
                                                id="extra-small" 
                                                value="extra-small" 
                                                checked={filterData.size.find(size => size === 'extra-small') ? true : false}
                                                onChange={handleChange}
                                                />
                                            <span>
                                                {t('Shop.filter.options.size.extra-small')}
                                            </span>
                                        </label>

                                        <label htmlFor="small">
                                            <input 
                                                type="checkbox" 
                                                name="size" 
                                                id="small" 
                                                value="small" 
                                                checked={filterData.size.find(size => size === 'small') ? true : false}
                                                onChange={handleChange}
                                            />
                                            <span>
                                                {t('Shop.filter.options.size.small')}
                                            </span>
                                        </label>

                                        <label htmlFor="medium">
                                            <input 
                                                type="checkbox" 
                                                name="size" 
                                                id="medium" 
                                                value="medium" 
                                                checked={filterData.size.find(size => size === 'medium') ? true : false}
                                                onChange={handleChange}
                                            />
                                            <span>
                                                {t('Shop.filter.options.size.medium')}
                                            </span>
                                        </label>

                                        <label htmlFor="large">
                                            <input 
                                                type="checkbox" 
                                                name="size" 
                                                id="large" 
                                                value="large" 
                                                checked={filterData.size.find(size => size === 'large') ? true : false}
                                                onChange={handleChange}
                                            />
                                            <span>
                                                {t('Shop.filter.options.size.large')}
                                            </span>
                                        </label>

                                        <label htmlFor="extra-large">
                                            <input 
                                                type="checkbox" 
                                                name="size" 
                                                id="extra-large" 
                                                value="extra-large" 
                                                checked={filterData.size.find(size => size === 'extra-large') ? true : false}
                                                onChange={handleChange}
                                            />
                                            <span>
                                                {t('Shop.filter.options.size.extra-large')}
                                            </span>
                                        </label>

                                        <label htmlFor="extra-extra-large">
                                            <input 
                                                type="checkbox" 
                                                name="size" 
                                                id="extra-extra-large" 
                                                value="extra-extra-large" 
                                                checked={filterData.size.find(size => size === 'extra-extra-large') ? true : false}
                                                onChange={handleChange}
                                            />
                                            <span>
                                                {t('Shop.filter.options.size.extra-extra-large')}
                                            </span>
                                        </label>
                                    </div>

                            
                                </div>

                                <div className="filter-option__price">
                                    <div className="filter-option__price--title">
                                        <h3>
                                            {t('Shop.filter.options.price.title')}
                                        </h3>
                                    </div>

                                    <div className="filter-option__price--options">

                                        <div className="price__options">
                                            <input 
                                                type="number" 
                                                name="min_price" 
                                                id="min-price" 
                                                min="10" 
                                                max="250" 
                                                placeholder="10" 
                                                value={filterData.min_price ? filterData.min_price : ''}
                                                onChange={handleChange}
                                            />
                                            <p>-</p>
                                            <input 
                                                type="number"  
                                                name="max_price" 
                                                id="max-price" 
                                                min="10" 
                                                max="250"
                                                placeholder="250" 
                                                value={filterData.max_price ? filterData.max_price : ''}
                                                onChange={handleChange}
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div className="filter-option__color">
                                    <div className="filter-option__color--title">
                                        <h3>
                                            {t('Shop.filter.options.color.title')}
                                        </h3>
                                    </div>

                                    <div className="filter-option__color--options">
                                        <label htmlFor="gray" className="color__options--gray">
                                            <input 
                                                type="checkbox" 
                                                name="color" 
                                                id="grey" 
                                                value="grey"
                                                checked={filterData.color.find(color => color === 'grey') ? true : false}
                                                onChange={handleChange}    
                                            />
                                        </label>

                                        <label htmlFor="black" className="color__options--black">
                                            <input 
                                                type="checkbox" 
                                                name="color" 
                                                id="black" 
                                                value="black" 
                                                checked={filterData.color.find(color => color === 'black') ? true : false}
                                                onChange={handleChange} 
                                            />
                                        </label>
                                        
                                        <label htmlFor="blue" className="color__options--blue">
                                            <input 
                                                type="checkbox" 
                                                name="color" 
                                                id="blue" 
                                                value="blue" 
                                                checked={filterData.color.find(color => color === 'blue') ? true : false}
                                                onChange={handleChange} 
                                            />
                                        </label>

                                        <label htmlFor="yellow" className="color__options--yellow">
                                            <input 
                                                type="checkbox" 
                                                name="color" 
                                                id="yellow" 
                                                value="yellow" 
                                                checked={filterData.color.find(color => color === 'yellow') ? true : false}
                                                onChange={handleChange} 
                                            />
                                        </label>

                                        <label htmlFor="red" className="color__options--red">
                                            <input 
                                                type="checkbox" 
                                                name="color" 
                                                id="red" 
                                                value="red" 
                                                checked={filterData.color.find(color => color === 'red') ? true : false}
                                                onChange={handleChange} 
                                            />
                                        </label>

                                        <label htmlFor="green" className="color__options--green">
                                            <input 
                                                type="checkbox" 
                                                name="color" 
                                                id="green" 
                                                value="green" 
                                                checked={filterData.color.find(color => color === 'green') ? true : false}
                                                onChange={handleChange} 
                                            />
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
                                    filterIsEmpty ?
    
                                        productsList
                                    :
                                        filteredProductsList
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
    hasShopLoaded: selectHasShopContentLoaded,
    filterData: selectFilterProperties,
    filterIsEmpty: selectIsFilterEmpty
})

const mapDispatchToProps = dispatch =>({
    fetchInitialProductsStart: () => dispatch(fetchInitialProductsStart()),
    fetchFilteredProductsStart: (filteredProperties) => dispatch(fetchFilteredProductsStart(filteredProperties)),
    clearShopFilter: () => dispatch(clearShopFilter()),
    changeShopFilterData: (filterData) => dispatch(changeShopFilterData(filterData))
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

