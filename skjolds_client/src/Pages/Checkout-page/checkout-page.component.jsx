import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import apiClient from '../../apiClient';
import history from '../../history';


import { selectCartTotal, selectCartItemCount } from '../../Redux/cart/cart.select'


import Invoice from '../../Components/Invoice/invoice.component';
import PageSpinner from '../../Components/Spinners/page-spinner.component';


import './checkout-page.styles.scss';

const CheckoutPage = (props) => {

    const { t } = useTranslation();
    const [ contentHasLoaded, setContentHasLoaded ] = useState(false);
    const [ showModal, setShowModal ] = useState(true);

    const [ orderData, setOrderData ] = useState({
        orderID: 'pi_1J6eQTKeSER6i7fHkEPUL3aN',
        order_date: 1624725153,
        payment_status: 'paid',
        userID: 'west@gmail.com',
        customer_name: 'Janis Berzs',
        customer_adress: {
            country: 'LV',
            city: 'Riga',
            street: 'Skanstes iela 54',
            postal_code: 'LV-3500',
        },
        customer_email: 'johndoe@example.com',
        order_total_amount: 14996/100,
        line_items: [
            {
                productID :'55',
                name: 'Jeans 2020',
                images: [
                    'https://s6.gifyu.com/images/Felicciti-2019-Off-shoulders-Dress.jpg',
                ],
                size:'XS',
                color: 'blue',
                quantity: '1',
                price: 8999/100,
            },
            {
                productID :'56',
                name: 'Pants 2020',
                images: [
                    'https://s6.gifyu.com/images/Felicciti-2019-Off-shoulders-Dress.jpg',
                ],
                size:'S',
                color: 'black',
                quantity: '3',
                price: 4999/100,
            }
        ]
    });

    
    
    useEffect( () => {
        const params = new URLSearchParams(props.location.search); 
        const sessionId = params.get('session_id');
        const paymentSuccesful = params.get('success')


        const fetchData = async () => {

            try {
                const response = await apiClient.post('/api/payment-success', {
                    sessionId
                })

                sessionStorage.removeItem('cartItems');

                setOrderData(response.data);
                setContentHasLoaded(true);


            } catch (error) {
                console.log('log error')
                
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
                    <div className="container">
                        {
                            showModal ?
                                <>
                                    <div class="background"></div>
                                    <div class="modal__container">
                                        <div class="modal__content">
                                            <div class="modalbox success col-sm-8 col-md-6 col-lg-5 center animate">
                                                <div class="checkmark-circle">
                                                    <div class="checkmark-background"></div>
                                                    <div class="checkmark draw"></div>
                                                </div>
                                                <h1>
                                                    {t('Checkout-page.modal.success')}
                                                </h1>
                                                <p>
                                                    {t('Checkout-page.modal.success_message-1')}
                                                    <br></br>{t('Checkout-page.modal.success_message-2')}</p>
                                                <button type="button" class="redo btn" onClick={() => setShowModal(false)}>OK</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                               
                            :
                                null
                        }
                        <Invoice invoiceData={orderData}/>
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
