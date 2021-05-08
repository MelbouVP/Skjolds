import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import PageSpinner from '../Spinners/page-spinner.component';
import ProductForm from './product-form.component';

import { createRecordStart, editRecordStart } from '../../Redux/admin/admin.actions';
import { selectCurrentRecord, selectHasLoaded } from '../../Redux/admin/admin.select';

import './product.styles.scss';

const Product = ({ type, currentRecord, hasContentLoaded, editRecordStart, createRecordStart }) => {

    const handleSubmit = (productData) => {
        
        const formData = new FormData();

		for (const property in productData) {
            formData.append(property, productData[property]);
        }

        // formData.forEach((value, key) => console.log(key, value));

        if(type === 'edit'){
            formData.append("_method", "put");
            editRecordStart(formData)

        } else if (type === 'create'){
            createRecordStart(formData)
        }

    }

    return (
        <section className="product-page">
            {
                hasContentLoaded ?
                    (
                        type === 'create' ? // else is 'edit' type, meaning existing product data has to be passed to component as currentRecord
                            <ProductForm 
                                handleSubmit={handleSubmit} 
                                hasContentLoaded={hasContentLoaded} 
                            />
                        :
                            <ProductForm 
                                handleSubmit={handleSubmit} 
                                hasContentLoaded={hasContentLoaded} 
                                editRecordData={currentRecord}
                            />
                    )
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
    editRecordStart: (data) => dispatch(editRecordStart(data)),
    createRecordStart: (data) => dispatch(createRecordStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);