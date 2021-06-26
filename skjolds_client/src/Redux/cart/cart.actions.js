
import CartActionTypes from './cart.types';


export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const incrementItem = (item) => ({
    type: CartActionTypes.INCREMENT_ITEM,
    payload: item
})

export const decrementItem = (item) => ({
    type: CartActionTypes.DECREMENT_ITEM,
    payload: item
})

export const changeCartItemAttribute = (newAttributeData) => ({
    type: CartActionTypes.CHANGE_CART_ITEM_ATTRIBUTE,
    payload: newAttributeData
})

export const checkCartSessionStorage = () => ({
    type: CartActionTypes.CHECK_CART_SESSION_STORAGE
})

export const retrieveCartSessionStorage = (cartItems) => ({
    type: CartActionTypes.RETRIEVE_CART_SESSION_STORAGE,
    payload: cartItems
})