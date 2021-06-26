import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { shopSagas } from './shop/shop.sagas';
import { adminSagas } from './admin/admin.sagas';
import { orderSagas } from './order/order.sagas';
import { cartSagas } from './cart/cart.sagas';


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(shopSagas),
        call(adminSagas),
        call(orderSagas),
        call(cartSagas)
    ]);
}