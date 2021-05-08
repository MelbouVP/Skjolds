import React, { useState } from 'react';

import './product.styles.scss';

const ProductForm = ({ handleSubmit, editRecordData, hasContentLoaded }) => {

    const [ productData, setProductData ] = useState( editRecordData ? 
        editRecordData 
    :
        { 
            name: '',
            description: '',
            price: 0,
            image: null
        }
    )
    const [picturePreview, setPicturePreview] = useState('')


    const handleChange = (event) => {
        const { name, value } = event.target
        setProductData({ ...productData,[name]: value})
    }

    const handleImage = e => {

        setPicturePreview(URL.createObjectURL(e.target.files[0]));
        setProductData({...productData, image : e.target.files[0]})
    }

    const submitData = e => {
        e.preventDefault();

        handleSubmit(productData);
        setProductData({ 
            name: '',
            description: '',
            price: 0,
            image: null
        });
        setPicturePreview('')
        
    }

    return (
        <div className="product-page__container">
            
            <div className="product__container">

                <form className="product__form" onSubmit={submitData} >
                    <div className="product__name" >
                        <label htmlFor="name">Product name:</label>
                        <input type="text" name="name" max='50' value={productData.name} onChange={handleChange} />
                    </div>

                    <div className="product__description" >
                        <label htmlFor="description">Product description:</label>
                        <textarea name="description" rows="4" cols="50" value={productData.description} onChange={handleChange} />
                    </div>

                    <div className="product__price" >
                        <label htmlFor="price">Product price:</label>
                        <input type="number" name="price" step="0.01" min='1' max='129.99' value={productData.price} onChange={handleChange} />
                    </div>

                    <div className="product__image">
                        <div>
                            <label htmlFor="image">Select product image:</label>
                            <input type="file" name="image" accept=".png, .jpg, .jpeg" onChange={handleImage}/>
                        </div>
                        <div className="product__image--preview">
                            {
                                editRecordData && hasContentLoaded ? 
                                    <img src={`http://localhost:8000/${editRecordData.image_path}`} alt='Product' />
                                :
                                    (
                                        picturePreview ?
                                            <img src={picturePreview} alt="Uploaded product" value={picturePreview}/>
                                        :
                                            null
                                    )
                                    
                            }
                        </div>
                    </div>

                    <button type='submit' >Save</button>
                </form>
                
            </div>
        </div>
    )
}

export default React.memo(ProductForm);

