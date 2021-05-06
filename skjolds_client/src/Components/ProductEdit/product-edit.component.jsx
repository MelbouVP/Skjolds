import React, { useEffect, useState } from 'react';

import './product-edit.styles.scss';

import history from '../../history';
import apiClient from '../../apiClient';

const ProductEdit = () => {

    const [productHasLoaded, setProductHasLoaded] = useState(false)

    const [ productData, setProductData ] = useState({ 
        name: '',
        description: '',
        price: 0,
        image: null
    })
    console.log(productData);

    const { name, description, price, image } = productData;

    console.log(image);

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
        console.log('submit1');
        
        const formData = new FormData();

        const data = {}
		for (const property in productData) {
            formData.append(property, productData[property]);
        }

        
        
		formData.forEach((value, property) => data[property] = value)

        // formData.forEach((value, key) => console.log(key, value));
        console.log(data)

        formData.append("_method", "put");

        apiClient.get('/sanctum/csrf-cookie').then( response => {
                console.log(response);
                apiClient.post(`/api/product/update/${productData.id}`, formData)
                    .then( response => {
                        console.log(response)
                        if (response.status === 201){
                            history.push('/resources/')
                        }
                    }
                )
            }
        )

    }


    useEffect(() => {
        let slug = history.location.pathname;
        
        let productID = slug.slice(24);

        console.log('fetching data')
        apiClient.get(`/api/product/edit/${productID}`).then( response => {
            setProductData(response.data)
            setProductHasLoaded(true)
        })
    },[])




    return (
        <div>
            {
                productHasLoaded ? 
                    <section className="product-page">
                        <div className="product-page__container">
                            
                            <div className="product__container">
            
                                <form className="product__form" onSubmit={handleSubmit}>
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
                    </section>
                :
                    null
            }
        </div>
    )
}

export default ProductEdit;