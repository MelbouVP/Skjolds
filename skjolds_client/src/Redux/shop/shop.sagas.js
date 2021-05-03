import { takeLatest, put, all, call } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';

import apiClient from '../../apiClient';

import {  fetchInitialProductsSuccess, fetchInitialProductsFailure } 
from './shop.actions';

function* fetchInitialProducts(){

    try {

        yield apiClient.get('/sanctum/csrf-cookie');
        const response = yield apiClient.get('/api/products')

        yield put(fetchInitialProductsSuccess(response.data));

    } catch (error) {
        yield put(fetchInitialProductsFailure(error))
    }

}

function* onFetchInitialProducts(){
    yield takeLatest(
        ShopActionTypes.FETCH_INITIAL_SHOP_PRODUCTS_START,
        fetchInitialProducts
    )
}

export function* shopSagas() {
    yield all([
        call(onFetchInitialProducts)
    ]);
}
