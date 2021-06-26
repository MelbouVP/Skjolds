import OrderActionTypes from "./order.types";

export const orderPaymentStart = () => ({
    type: OrderActionTypes.ORDER_PAYMENT_START
})

export const orderPaymentSuccess = (data) => ({
    type: OrderActionTypes.ORDER_PAYMENT_SUCCESS,
    payload: data
})

export const orderPaymentFailure = (error) => ({
    type: OrderActionTypes.ORDER_PAYMENT_FAILURE,
    payload: error
})