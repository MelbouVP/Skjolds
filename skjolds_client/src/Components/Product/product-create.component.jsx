import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import PageSpinner from '../Spinners/page-spinner.component';

import { createRecordStart } from '../../Redux/admin/admin.actions'
import { selectHasLoaded } from '../../Redux/admin/admin.select'

import './product.styles.scss';

const ProductCreate = ({ createRecordStart, hasContentLoaded  }) => {

    const [ productData, setProductData ] = useState({ 
        name: '',
        description: '',
        price: 0,
        image: null
    })

    const { name, description, price } = productData;

    const [picturePreview, setPicturePreview] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        setProductData({ ...productData,[name]: value})
    }

    const handleImage = e => {

        setPicturePreview(URL.createObjectURL(e.target.files[0]));
        setProductData({...productData, image : e.target.files[0]})
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        // console.log(e.tagert);
        
        const formData = new FormData();

        const data = {}
		for (const property in productData) {
            formData.append(property, productData[property]);
        }

        
        
		// formData.forEach((value, property) => data[property] = value)
        // formData.forEach((value, key) => console.log(key, value));
        console.log(data)

        createRecordStart(formData)
        setProductData({ 
            name: '',
            description: '',
            price: 0,
            image: null
        });
        setPicturePreview('');

        

    }



    return (
        <section className="product-page">
            {
                hasContentLoaded ? 
                    <div className="product-page__container">
                        
                        <div className="product__container">

                            <form className="product__form" onSubmit={handleSubmit} >
                                    <div className="product__name" >
                                        <label htmlFor="name">Product name:</label>
                                        <input type="text" name="name" max='50' value={name} onChange={handleChange} />
                                    </div>

                                    <div className="product__description" >
                                        <label htmlFor="description">Product description:</label>
                                        <textarea name="description" rows="4" cols="50" value={description} onChange={handleChange} />
                                    </div>

                                    <div className="product__price" >
                                        <label htmlFor="price">Product price:</label>
                                        <input type="number" name="price" step="1" min='1' max='129.99' value={price} onChange={handleChange} />
                                    </div>

                                    <div className="product__image">
                                        <div>
                                            <label htmlFor="image">Select product image:</label>
                                            <input type="file" name="image" accept=".png, .jpg, .jpeg" onChange={handleImage}/>
                                        </div>
                                        <div className="product__image--preview">
                                            {
                                                picturePreview ?
                                                    <img src={picturePreview} alt="" value={picturePreview}/>
                                                :
                                                    null
                                            }
                                        </div>
                                    </div>

                                <button onClick={handleSubmit}>Save</button>
                            </form>
                            
                        </div>
                    </div>
                :
                    <PageSpinner />
            }
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    hasContentLoaded: selectHasLoaded,
})

const mapDispatchToProps = dispatch => ({
    createRecordStart: (data) => dispatch(createRecordStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate);

