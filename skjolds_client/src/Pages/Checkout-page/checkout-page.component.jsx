import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import apiClient from '../../apiClient';
import history from '../../history';


import { selectCartTotal, selectCartItemCount } from '../../Redux/cart/cart.select'

import PageSpinner from '../../Components/Spinners/page-spinner.component';


import './checkout-page.styles.scss';

const CheckoutPage = (props) => {

    const [ contentHasLoaded, setContentHasLoaded ] = useState(false);
    const [ orderData, setOrderData ] = useState({});
    
    
    useEffect( () => {
        const params = new URLSearchParams(props.location.search); 
        const sessionId = params.get('session_id');
        const paymentSuccesful = params.get('success')


        const fetchData = async () => {

            try {
                apiClient.post('/api/payment-success', {
                    sessionId
                })

                sessionStorage.removeItem('cartItems');


            } catch (error) {
                
                history.push('/')
            }

            
        }
        
        
        if(paymentSuccesful){

            fetchData()
            
        } else {
            history.push('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div>
            {
                contentHasLoaded ?
                    <div>
                        Payment was succesful
                    </div>
                :
                    <PageSpinner />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartTotal: selectCartTotal,
    cartItemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
