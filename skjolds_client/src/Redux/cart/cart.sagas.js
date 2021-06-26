import { takeLatest, put, select, all, call } from 'redux-saga/effects';
import { retrieveCartSessionStorage } from './cart.actions';
import { selectCartItems } from './cart.select';
import CartActionTypes from './cart.types'



export function* SaveCartToSessionStorage(){

    const cartItems = yield select(selectCartItems)

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

}

export function* onSaveCartToSessionStorage(){
    yield takeLatest(
        [
            CartActionTypes.ADD_ITEM, 
            CartActionTypes.REMOVE_ITEM,
            CartActionTypes.INCREMENT_ITEM,
            CartActionTypes.DECREMENT_ITEM 
        ],
        SaveCartToSessionStorage
    )
}


export function* getCartSessionStorage(){

    // yield put(retrieveCartSessionStorage());
    console.log('checking');

    const cart = yield sessionStorage.getItem('cartItems');

    if(cart){
        yield put(retrieveCartSessionStorage(JSON.parse(cart)));
    }

}


export function* onGetCartSessionStorage(){
    yield takeLatest(
        CartActionTypes.CHECK_CART_SESSION_STORAGE,
        getCartSessionStorage
    )
}

export function* cartSagas() {
    yield all([
        call(onSaveCartToSessionStorage),
        call(onGetCartSessionStorage)
    ]);
}