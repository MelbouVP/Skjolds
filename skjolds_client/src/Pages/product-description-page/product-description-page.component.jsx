import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import history from '../../history';


import { fetchProductDataStart } from '../../Redux/shop/shop.actions';
 
import { selectCurrentProduct, selectHasShopContentLoaded } from '../../Redux/shop/shop.select';

import { addItem } from '../../Redux/cart/cart.actions'

import PageSpinner from '../../Components/Spinners/page-spinner.component';


import './product-description-page.styles.scss';

const ProductDescriptionPage = ({ productData, fetchProduct, hasContentLoaded, addItem, match : { params } }) => {

    const [productAttributes, setProductAttributes] = useState({
        size: null,
        color: null,
        quantity: 1
    })
    
    useEffect(() => {
        
        if(!productData || productData.id !== parseInt(params.id)){
            fetchProduct(params.id)
        }

        if(productData){
            setProductAttributes({
                ...productAttributes,
                color: productData.colors[0].color_name,
                size: productData.sizes[0].size_value
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productData])

    const redirect = (categoryName) => {

        history.push(`/shop?category=${categoryName}`);
    }

    console.log(productAttributes)

    const handleChange = (e) => {

        setProductAttributes({
            ...productAttributes,
            [e.target.name]: e.target.value
        })
    }

    const incrementItem = () => {
        console.log('click')
        setProductAttributes({
            ...productAttributes,
            quantity: productAttributes.quantity + 1
        })
    }

    const decrementItem = () => {
        
        if(productAttributes.quantity >= 2){
            setProductAttributes({
                ...productAttributes,
                quantity: productAttributes.quantity - 1
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(productAttributes)

        addItem({
            id: productData.id,
            name: productData.name,
            price: productData.price,
            description :productData.description,
            image_path: productData.image_path,
            selectedAttributes: [
                productAttributes.size,
                productAttributes.color
            ],
            quantity: productAttributes.quantity
        })
    }

    const categoryList = productData ?
        productData.categories.map( (category,index) => {

            if(index === 0 || index === productData.categories.length){
                return <span onClick={() => redirect(category.category_name)} > {category.category_name}</span>
            } else {
                return <span onClick={() => redirect(category.category_name)}>, {category.category_name}</span>
            }
        })
    :
        null

    const sizeList = productData ?
        productData.sizes.map( (size) => {

            return (
                <label htmlFor={`${size.size_name}`}>
                    <input 
                        type="radio" 
                        name="size" 
                        id={`${size.size_name}`} 
                        value={`${size.size_value}`} 
                        defaultChecked={productData.sizes[0].size_value === size.size_value ? true : false}
                    />
                    <span>{`${size.size_value}`}</span>
                </label>
            )
        })
    :
        null

    const colorList = productData ?
        productData.colors.map( (color) => {

            return (
                <label htmlFor={color.color_name} className={`color__options--${color.color_name}`}>
                    <input 
                        type="radio" 
                        name="color" 
                        id={color.color_name} 
                        value={color.color_name}
                        defaultChecked={productData.colors[0].color_name === color.color_name ? true : false}  
                    />
                </label>
            )
        })
    :
        null


    return (
        <div className="item-page">
            <div className="item-page__container">
            {
                hasContentLoaded && productData ?
                    <>
                    
                        <div className="item__visual">
                            <div className="item__visual--image">
                                <img src={`http://localhost:8000/${productData.image_path}`} alt="Product" />
                            </div>
                            <p className="item__visual--category">
                                Categories: 
                                {
                                    categoryList
                                }
                            </p>
                        </div>

                        <div className="item__information">
                            <div className="item__information--header">
                                <h1>
                                    {
                                        productData.name
                                    }
                                </h1>
                                <p className="information__header--availability">
                                    Availability: <span>In stock</span>
                                </p>
                                <p className="information__header--price">
                                    {
                                        productData.price
                                    }
                                    €
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} onChange={handleChange}>
                                <div className="item__information--item-options">

                                    <div className="item-options__size">
                                        <p>Size</p>
                                        {
                                            sizeList
                                        }
                                    </div>

                                    <div className="item-options__color">
                                        <p>Color</p>
                                        {
                                            colorList
                                        }
                                    </div>

                                    <div className="item-options__quantity">
                                        <p>Quantity</p>
                                        {
                                            productAttributes.quantity === 1 ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18" style={{visibility: 'hidden'}}><path d="M23.115,24.135l-6.87-6.885,6.87-6.885L21,8.25l-9,9,9,9Z" transform="translate(-12 -8.25)"/></svg>
                                            :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18" onClick={decrementItem} ><path d="M23.115,24.135l-6.87-6.885,6.87-6.885L21,8.25l-9,9,9,9Z" transform="translate(-12 -8.25)" /></svg>
                                        }
                                        <div className="quantity__count">
                                            {
                                                productAttributes.quantity
                                            }
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18"  onClick={incrementItem}><path d="M12.885,24.51l6.87-6.885-6.87-6.885L15,8.625l9,9-9,9Z" transform="translate(-12.885 -8.625)"/></svg>
                                    </div>
                                </div>


                                <div className="item__information--action-btn">
                                    <button type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                                        <span>Add to cart</span>
                                    </button>
                                </div>


                            </form>

                            <div className="item__information--description">
                                <div className="description__header">
                                    <h3>Product description</h3>
                                </div>
                                <p>
                                    {
                                        productData.description
                                    }
                                </p>
                            </div>

                        </div>
                        </>

            :
                <div className="item-page__spinner">
                    <PageSpinner />
                </div>
            }
                    </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    productData: selectCurrentProduct,
    hasContentLoaded: selectHasShopContentLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchProduct: (recordID) => dispatch(fetchProductDataStart(recordID)),
    addItem: (product) => dispatch(addItem(product))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductDescriptionPage);
