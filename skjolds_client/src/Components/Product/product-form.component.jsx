import React, { useState } from 'react';

import './product.styles.scss';

const ProductForm = ({ handleSubmit }) => {

    const [ productData, setProductData ] = useState({ 
        name: '',
        description: '',
        price: 0,
        image: null
    })
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

        apiClient.get('/sanctum/csrf-cookie').then( response => {
                console.log(response);
                apiClient.post('/api/product/create', formData
                ).then( response => {
                    if (response.status === 201){
                        setProductData({
                            name: '',
                            description: '',
                            price: 0,
                            image: null
                        })

                        setPicturePreview('')
                    }
                })
            }
        )

    }



    return (
        <section className="product-page">
            <div className="product-page__container">
                
                <div className="product__container">

                    <form className="product__form" onSubmit={handleSubmit} >
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
                            <input type="number" name="price" step="1" min='1' max='129.99' value={productData.price} onChange={handleChange} />
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
        </section>
    )
}

export default ProductForm;

