import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// import apiClient from '../../apiClient';
import history from '../../history'

// import { loadStripe } from "@stripe/stripe-js";


import { selectCartItems, selectCartTotal } from '../../Redux/cart/cart.select'

import { removeItem, incrementItem, decrementItem } from '../../Redux/cart/cart.actions'

import { ReactComponent as VisaIcon } from '../../Assets/icons/Visa.svg';
import { ReactComponent as MasterCardIcon } from '../../Assets/icons/MasterCard.svg'
import { ReactComponent as MasterCardBlackIcon } from '../../Assets/icons/MasterCardBlack.svg';
import { ReactComponent as PayPalIcon } from '../../Assets/icons/PayPal.svg';
import { ReactComponent as AmericanExpressIcon } from '../../Assets/icons/AmericanExpress.svg';
import { ReactComponent as AmazonPayIcon } from '../../Assets/icons/AmazonPay.svg';
import { ReactComponent as ApplePayIcon } from '../../Assets/icons/ApplePay.svg';


import './cart-page.styles.scss';
import { orderPaymentStart } from '../../Redux/order/order.actions';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CartPage = ({ cartItems, cartTotal, removeItem, incrementItem, decrementItem, orderPaymentStart }) => {


    const handleRedirect = (productID) => {
        history.push(`/product/${productID}`)
    }

    const handleClick = (event) => {

        orderPaymentStart()

    }

    const cartItemsList = cartItems.length ? 
        cartItems.map(cartItem => {
            return (
                <div className="content__cart-item">
                    <div className="cart-item__image" onClick={() => handleRedirect(cartItem.id)}>
                        <img src={`http://localhost:8000/${cartItem.image_path}`} alt="Women dress" />
                    </div>
                    <div className="cart-item__summary">
                        <div className="summary__price">
                            {
                                cartItem.price
                            }
                            €
                        </div>
                        <div className="summary__name">
                            <h3>
                                {
                                    cartItem.name
                                }
                            </h3>
                        </div>
                        <div className="summary__options">
                            <div className="summary__options--size">
                                <p>Size:</p>
                                <span>
                                    {
                                        cartItem.selectedAttributes[0]
                                    }
                                </span>
                            </div>
                            <div className="summary__options--color">
                                <p>Color:</p>
                                <span>
                                    {
                                        cartItem.selectedAttributes[1]
                                    }
                                </span>
                            </div>
                            <div className="summary__options--quantity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18" onClick={()=> decrementItem(cartItem)}><path d="M23.115,24.135l-6.87-6.885,6.87-6.885L21,8.25l-9,9,9,9Z" transform="translate(-12 -8.25)"/></svg>
                                <div className="quantity__count">
                                    {
                                        cartItem.quantity
                                    }
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 11.115 18" onClick={()=> incrementItem(cartItem)}><path d="M12.885,24.51l6.87-6.885-6.87-6.885L15,8.625l9,9-9,9Z" transform="translate(-12.885 -8.625)"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item__remove-btn" onClick={()=> removeItem(cartItem)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M37.523,10.523l-3-3-12,12-12-12-3,3,12,12-12,12,3,3,12-12,12,12,3-3-12-12Z" transform="translate(-7.523 -7.523)" fill="#3d3d3d"/></svg>
                    </div>
                </div>
            )
        })
    :
        <div>Cart is empty..</div>


    return (
        <div className="checkout-page">
            <div className="checkout-page__container">

                <div className="checkout__container">

                    <div className="checkout-cart">

                        <div className="checkout-cart__header">
                            <h1>Cart</h1>
                        </div>

                        <div className="checkout-cart__content">

                            {
                                cartItemsList
                            }

                        </div>

                        <div className="checkout-cart__continue-btn">
                            <Link to="/shop">
                                Continue shopping
                            </Link>
                        </div>

                    </div>


                   
                   {
                       cartTotal ?
                       <div className="checkout-summary">
                       <div className="checkout-summary__container">

                           <div className="summary__header">
                               <h2>Order summary</h2>
                               <span>Item count: {cartItems.length}</span>
                               <div className="header__sub-total">
                                   <p>Sub-total:</p>
                                   <p>
                                       {
                                           cartTotal.toFixed(2)
                                       }€
                                   </p>
                                   <p>Delivery:</p>
                                   <p>0.00€</p>
                               </div>
                           </div>

                           <div className="summary__content">
                               <p>Total:</p>
                               <p>
                                       {
                                           cartTotal.toFixed(2)
                                       }€
                                   </p>
                               <div className="summary__action-btn">
                                   <button type='button' onClick={handleClick}>
                                       <div>
                                       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <rect x="5" y="11" width="14" height="10" rx="2" />
                                            <circle cx="12" cy="16" r="1" />
                                            <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                                        </svg>
                                           <span>Pay</span>
                                       </div>    
                                   </button>
                               </div>
                           </div>

                           <div className="summary__payment">
                               <p>We accept:</p>
                               <div className="summary__payment--options">
                                   <VisaIcon />

                                   <MasterCardIcon />

                                   <MasterCardBlackIcon />

                                   <PayPalIcon />

                                   <AmericanExpressIcon />
                                   
                                   <AmazonPayIcon />

                                   <ApplePayIcon />


                               </div>
                           </div>
                       </div>

                   </div>
               
                       :
                       null
                   }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

const mapDispatchToProps = dispatch => ({
    removeItem: (product) => dispatch(removeItem(product)),
    incrementItem: (product) => dispatch(incrementItem(product)),
    decrementItem: (product) => dispatch(decrementItem(product)),
    orderPaymentStart: () => dispatch(orderPaymentStart())

})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
