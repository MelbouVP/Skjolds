import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import history from '../../history'


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

const CartPage = ({ cartItems, cartTotal, removeItem, incrementItem, decrementItem }) => {


    const handleRedirect = (productID) => {
        history.push(`/product/${productID}`)
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
                                   <button type="submit">
                                       <Link to='/checkout'>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 30 24"><path d="M30,6H6A2.977,2.977,0,0,0,3.015,9L3,27a2.99,2.99,0,0,0,3,3H30a2.99,2.99,0,0,0,3-3V9A2.99,2.99,0,0,0,30,6Zm0,21H6V18H30Zm0-15H6V9H30Z" transform="translate(-3 -6)" fill="#fff"/></svg>
                                           <span>Checkout</span>
                                       </Link>    
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

})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
