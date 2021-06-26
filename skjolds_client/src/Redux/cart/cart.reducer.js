import CartActionTypes from './cart.types';

import { 
    addItemToCart, 
    changeCartItemAttribute, 
    incrementItem, 
    decrementItem, 
    removeItemFromCart 
} from './cart.utils'

export const INITIAL_STATE = {
    cartOverlayHidden: true,
    cartItems: [],
    error: null
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.INCREMENT_ITEM:
            return {
                ...state,
                cartItems: incrementItem(state.cartItems, action.payload)
            }
        case CartActionTypes.DECREMENT_ITEM:
            return {
                ...state,
                cartItems: decrementItem(state.cartItems, action.payload)
            }
        case CartActionTypes.RETRIEVE_CART_SESSION_STORAGE:
            return {
                ...state,
                cartItems: action.payload
            }
        case CartActionTypes.CHANGE_CART_ITEM_ATTRIBUTE:
            return {
                ...state,
                cartItems: changeCartItemAttribute(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;