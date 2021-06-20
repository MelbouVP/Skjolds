import React, { useState, useEffect } from 'react';

import { colors, clotheSizes, shoeSizes } from './productProperties'

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
    
    const [productColors, setProductColors] = useState(colors)

    const [productSizes, setProductSizes] = useState(clotheSizes)

    const [sizeType, setSizeType] = useState('clothes')

    const [picturePreview, setPicturePreview] = useState('')


    useEffect(() => {
        
        if(editRecordData){

            const updatedColors = productColors.map( color => {


                let colorExists = false

                editRecordData.colors.forEach(existingColor => {
                    if(color.color_name === existingColor.color_name){
                        colorExists = true
                    }
                })


                if(colorExists){

                    return {...color, isAdded: !color.isAdded}
                }


                return color
            })


            setProductColors(updatedColors);
        }

    },[])

    useEffect(() => {
        
        if(editRecordData){

            const updatedSizes = productSizes.map( size => {


                let sizeExists = false

                editRecordData.sizes.forEach(existingSize => {
                    if(size.size_value === existingSize.size_value){
                        sizeExists = true
                    }
                })


                if(sizeExists){

                    return {...size, isAdded: !size.isAdded}
                }


                return size
            })


            setProductSizes(updatedSizes);
        }

    },[sizeType])


    useEffect(() => {
        if(editRecordData){
            const ProductIsShoe = editRecordData.sizes.find(size => size.size_type === 'shoes')

            if(ProductIsShoe){
                setSizeType('shoes')
                setProductSizes(shoeSizes)
            }
        }
    }, [editRecordData, setSizeType, setProductSizes])


    // useEffect(() => {
    //     if(editRecordData){

    //         const blob = URL.createObjectURL(new Blob([`http://localhost:8000/${editRecordData.image_path}`], {type: 'image/svg+xml'}))


    //         setPicturePreview(blob);
    //     }
    // },[])


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

    const handleSizeTypeChange = (e) => {

        const { value } = e.target

        if(value === 'clothes') {
            setSizeType('clothes')
            setProductSizes(clotheSizes)
        } else if ( value === 'shoes'){
            setSizeType('shoes')
            setProductSizes(shoeSizes)
        }

        
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
                        <label htmlFor="size_type">Choose size type:</label>

                        <select id="size_type" value={sizeType} onChange={handleSizeTypeChange}>
                            <option value="clothes">Clothes</option>
                            <option value="shoes" >Shoes</option>
                        </select>
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

