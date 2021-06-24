import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';


import { selectCartTotal, selectCartItemCount } from '../../Redux/cart/cart.select'


import { ReactComponent as VisaIcon } from '../../Assets/icons/Visa.svg';
import { ReactComponent as MasterCardIcon } from '../../Assets/icons/MasterCard.svg'
import { ReactComponent as MasterCardBlackIcon } from '../../Assets/icons/MasterCardBlack.svg';
import { ReactComponent as PayPalIcon } from '../../Assets/icons/PayPal.svg';
import { ReactComponent as AmericanExpressIcon } from '../../Assets/icons/AmericanExpress.svg';
import { ReactComponent as AmazonPayIcon } from '../../Assets/icons/AmazonPay.svg';
import { ReactComponent as ApplePayIcon } from '../../Assets/icons/ApplePay.svg';

import './checkout-page.styles.scss';

const CheckoutPage = ({ cartItemCount, cartTotal }) => {



    return (
        <div className="order-page">
            {
                cartItemCount ?
                    <div className="order-page__container">

                        <div className="order__container">

                            <div className="order-details">
                                <div className="order-details__header">
                                    <h1>Order details</h1>
                                </div>

                                <div className="order-details__buyer">
                                    
                                    <div className="buyer__details">
                                        <div>
                                            <label for="name">Name</label>
                                            <input type="text" name="name" id="name" placeholder="John" />
                                        </div>
                                        
                                        <div>
                                            <label for="surname">Surname</label>
                                            <input type="text" name="surname" id="surname" placeholder="Smith" />
                                        </div>
                                    </div>

                                    <div className="buyer__contact">
                                        <div>
                                            <label for="email">Email</label>
                                            <input type="email" name="email" id="email" placeholder="john.smith@example.com" />
                                        </div>
                                        
                                        <div>
                                            <label for="phone">Phone number</label>
                                            <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="28930028" />
                                        </div>
                                    </div>

                                    <div className="buyer__delivery">
                                        <div>
                                            <label for="delivery_city">Delivery city</label>
                                            <input type="text" name="delivery_city" id="delivery_city" />
                                        </div>
                
                                        <div>
                                            <label for="delivery_adress">Delivery adress</label>
                                            <input type="text" name="delivery_adress" id="delivery_adress" />
                                        </div>
                                    </div>


                                </div>

                                <div className="order-details__payment-details">
                                    
                                    <div>
                                        <label for="card_name">Name on card</label>
                                        <input type="text" name="card_name" id="card_name" placeholder="John Smith" />
                                    </div>

                                    <div>
                                        <label for="card_number">Credit card number</label>
                                        <input type="tel" name="card_number" id="card_number" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" />
                                    </div>

                                    <div>
                                        <label for="cvc_number">CVC</label>
                                        <input type="tel" name="cvc_number" id="cvc_number" maxlength="3" pattern="[0-3],{3}" placeholder="xxx" />
                                    </div>

                                </div>
                            </div>

                            <div className="order-summary">
                                <div className="order-summary__container">

                                    <div className="summary__header">
                                        <h2>Order summary</h2>
                                        <span>
                                            Item count: 
                                            {
                                                cartItemCount
                                            }
                                        </span>
                                        <div className="header__sub-total">
                                            <p>Sub-total:</p>
                                            <p>
                                                {
                                                    cartTotal.toFixed(2)
                                                }
                                                €
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
                                            }
                                            €
                                        </p>
                                        <div className="summary__action-btn">
                                            <button type="submit">
                                                <a href="/order">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 30 24"><path d="M30,6H6A2.977,2.977,0,0,0,3.015,9L3,27a2.99,2.99,0,0,0,3,3H30a2.99,2.99,0,0,0,3-3V9A2.99,2.99,0,0,0,30,6Zm0,21H6V18H30Zm0-15H6V9H30Z" transform="translate(-3 -6)" fill="#fff"/></svg>
                                                    <span>Pay</span>
                                                </a>    
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
                        </div>

                    </div>
        
                :
                    <Redirect to='shop' />
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
