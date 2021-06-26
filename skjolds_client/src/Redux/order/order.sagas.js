import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import OrderActionTypes from "./order.types";
import { loadStripe } from "@stripe/stripe-js";

import { selectCartItems } from '../cart/cart.select';
import { selectIsAuthenticated, selectUserData } from '../user/user.select';
import { orderPaymentFailure, orderPaymentSuccess } from './order.actions';




import apiClient from '../../apiClient';
import history from '../../history';

function* orderPayment({ payload }){
    
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

    try {


        const isUserAuthenticated = yield select(selectIsAuthenticated);


        if(!isUserAuthenticated){
            yield put(orderPaymentFailure('Please log-in to complete order'))

            return history.push({
                pathname: '/login',
                state: { from: '/cart' }
            })

        }

        const cartItems = yield select(selectCartItems);

        console.log(cartItems);

        const stripe = yield stripePromise;

        const response = yield apiClient.post("/api/payment", {
            items: {
                ...cartItems
            },
            userId: 1
        });

        console.log(response);

        const session = yield response.data;

        console.log(session);

        // When the customer clicks on the button, redirect them to Checkout.
        const result = yield stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }

        console.log(result);

        yield put(orderPaymentSuccess(result));
        
        
    } catch (error) {
        
    }
}


function* onOrderPayment(){
    yield takeLatest(
        OrderActionTypes.ORDER_PAYMENT_START,
        orderPayment
    )
}

export function* orderSagas() {
    yield all([
        call(onOrderPayment)
    ]);
}