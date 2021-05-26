import React, { useState } from 'react';

import './product.styles.scss';

const ProductForm = ({ handleSubmit, editRecordData }) => {

    const [ productData, setProductData ] = useState( editRecordData ? 
        editRecordData 
    :
        { 
            name: '',
            description: '',
            price: 0,
            colors: [],
            sizes: [],
            image: null
        }
    )
    
    const [productColors, setProductColors] = useState([
            { id: 1, color_name: 'black', isAdded: false },
            { id: 2, color_name: 'grey', isAdded: false },
            { id: 3, color_name: 'blue', isAdded: false },
            { id: 4, color_name: 'red', isAdded: false },
            { id: 5, color_name: 'yellow', isAdded: false },
            { id: 6, color_name: 'green', isAdded: false },
    ])

    const [productSizes, setProductSizes] = useState([
        { id: 1, size_value: 'XS', isAdded: false },
        { id: 2, size_value: 'S', isAdded: false },
        { id: 3, size_value: 'M', isAdded: false },
        { id: 4, size_value: 'L', isAdded: false },
        { id: 5, size_value: 'XL', isAdded: false },
        { id: 6, size_value: 'XXL', isAdded: false },
    ])

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
        // setProductData({ 
        //     name: '',
        //     description: '',
        //     price: 0,
        //     image: null
        // });
        // setPicturePreview('')
        
    }

    const handleColorChange = (e) => {
        const isChecked = e.target.checked;
        const colorName = e.target.value;
        const colorID = parseInt(e.target.id)

        let updatedColorsList = productColors
            .map( (color) => color.color_name === colorName ? 
                    color.isAdded ? {...color, isAdded: false } : {...color, isAdded: true }
                : 
                    color
        )
        setProductColors(updatedColorsList);

        let newAddedColors = []
    
        isChecked ?
                newAddedColors = productData.colors.concat([{ id: colorID, color_name: colorName }])
            :
                newAddedColors = productData.colors.filter(color => color.color_name !== colorName)
        
        setProductData({
            ...productData,
            colors: newAddedColors
        })
    }

    const handleSizeChange = (e) => {
        const isChecked = e.target.checked;
        const sizeValue = e.target.value;
        const sizeID = parseInt(e.target.id)

        let updatedSizesList = productSizes
            .map( (size) => size.size_value === sizeValue ? 
                    size.isAdded ? {...size, isAdded: false } : {...size, isAdded: true }
                : 
                    size
        )
        setProductSizes(updatedSizesList);

        let newAddedSizes = []
    
        isChecked ?
                newAddedSizes = productData.sizes.concat([{ id: sizeID, size_value: sizeValue }])
            :
                newAddedSizes = productData.sizes.filter(size => size.size_value !== sizeValue)
        
        setProductData({
            ...productData,
            sizes: newAddedSizes
        })
    }


    const colorsComponent = productColors.map( (color, index) => {

        return (
            <div className="product__color" key={index} >
                <label htmlFor={color.color_name}>
                    <input 
                        type="checkbox" 
                        name={color.color_name} 
                        value={color.color_name} 
                        id={color.id}
                        checked={color.isAdded} 
                        onChange={(e) => handleColorChange(e)} 
                    />
                    {color.color_name}
                </label>
            </div>
        )
    })

    const sizesComponent = productSizes.map( (size, index) => {

        return (
            <div className="product__size" key={index} >
                <label htmlFor={size.size_value}>
                    <input 
                        type="checkbox" 
                        name={size.size_value} 
                        value={size.size_value} 
                        id={size.id}
                        checked={size.isAdded} 
                        onChange={(e) => handleSizeChange(e)} 
                    />
                    {size.size_value}
                </label>
            </div>
        )
    })
    

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

                    <div className="product__options" >
                        {
                            colorsComponent
                        }
                    </div>

                    <div className="product__options" >
                        {
                            sizesComponent
                        }
                    </div>

                    <div className="product__image">
                        <div>
                            <label htmlFor="image">Select product image:</label>
                            <input type="file" name="image" accept=".png, .jpg, .jpeg" onChange={handleImage}/>
                        </div>
                        <div className="product__image--preview">
                            {

                                editRecordData ?
                                    (
                                        picturePreview ? 
                                            <img src={picturePreview} alt="Uploaded product" value={picturePreview}/>
                                        :
                                            <img src={`http://localhost:8000/${editRecordData.image_path}`} alt='Product' />
                                    )
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

