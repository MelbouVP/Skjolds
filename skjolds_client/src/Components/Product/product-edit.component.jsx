import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


import './product.styles.scss';

import { editRecordStart } from '../../Redux/admin/admin.actions';
import { selectCurrentRecord, selectHasLoaded } from '../../Redux/admin/admin.select';
import PageSpinner from '../Spinners/page-spinner.component';

const ProductEdit = ({ currentRecord, hasContentLoaded, editRecordStart}) => {
    console.log('rendered')
    const [ productData, setProductData ] = useState({ 
        name: '',
        description: '',
        price: 0,
        image: {}
    })

    useEffect(() => {
        setProductData(currentRecord)
    },[currentRecord])

    const [picturePreview, setPicturePreview] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        setProductData({ ...productData,[name]: value})
    }

    const handleImage = e => {

        setPicturePreview(URL.createObjectURL(e.target.files[0]));
        setProductData({...productData, image: e.target.files[0]})
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        
        const formData = new FormData();

		for (const property in productData) {
            formData.append(property, productData[property]);
        }

        formData.append("_method", "put");

        editRecordStart(formData)

    }

    return (
        <section className="product-page">
            {
                hasContentLoaded ?
                        <div className="product-page__container">
                            
                            <div className="product__container">
            
                                <form className="product__form" onSubmit={handleSubmit}>
                                    <div className="product__name" >
                                        <label htmlFor="name">Product name:</label>
                                        <input type="text" name="name" max='50' value={productData.name || ''} onChange={handleChange} />
                                    </div>
            
                                    <div className="product__description" >
                                        <label htmlFor="description">Product description:</label>
                                        <textarea name="description" rows="4" cols="50" value={productData.description || ''} onChange={handleChange} />
                                    </div>
            
                                    <div className="product__price" >
                                        <label htmlFor="price">Product price:</label>
                                        <input type="number" name="price" step="1" min='1' max='129.99' value={productData.price || 0} onChange={handleChange} />
                                    </div>
            
                                    <div className="product__image">
                                        <div>
                                            <label htmlFor="image">Select product image:</label>
                                            <input type="file" name="image" accept=".png, .jpg, .jpeg" onChange={handleImage}/>
                                        </div>
                                        <div className="product__image--preview">
                                            {
                                                picturePreview ?
                                                    <img src={picturePreview} alt="Uploaded product"/>
                                                :
                                                    <img src={`http://localhost:8000/${currentRecord.image_path}`} alt="Product"/>
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
    currentRecord: selectCurrentRecord,
    hasContentLoaded: selectHasLoaded
})

const mapDispatchToProps = dispatch => ({
    editRecordStart: (data) => dispatch(editRecordStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);