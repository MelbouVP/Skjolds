import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
    isOrderProcessing: false,
    error: null
};

const orderReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case OrderActionTypes.ORDER_PAYMENT_START:
            return {
                ...state,
                isOrderProcessing: true
            }
        case OrderActionTypes.ORDER_PAYMENT_FAILURE:
            return {
                ...state,
                isOrderProcessing: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default orderReducer;