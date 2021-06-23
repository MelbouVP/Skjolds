import { takeLatest, put, all, call, delay } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';

import apiClient from '../../apiClient';
import history from '../../history';

import { 
    fetchInitialProductsSuccess, 
    fetchInitialProductsFailure, 
    fetchFilteredProductsSuccess, 
    fetchFilteredProductsFailure,
    fetchProductDataSuccess,
    fetchProductDataFailure
} 
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

function* fetchFilteredProducts({ payload }){
    try {

        	
        yield delay(1000);
        yield apiClient.get('/sanctum/csrf-cookie');
        const response = yield apiClient.post(`/api/products/filter`, payload)

        yield console.log(response.data)

        yield put(fetchFilteredProductsSuccess(response.data));
        
    } catch (error) {
        yield put(fetchFilteredProductsFailure(error))
    }
}

function* onFetchFilteredProducts(){
    yield takeLatest(
        ShopActionTypes.FETCH_FILTERED_SHOP_PRODUCTS_START,
        fetchFilteredProducts
    )
}

function* fetchProductData({ payload }){
    console.log(payload)

    try {

        const response = yield apiClient.get(`/api/product/${payload}`)
        console.log(response)

        yield put(fetchProductDataSuccess(response.data));

    } catch (error) {
        yield history.push('/page-not-found')
        yield put(fetchProductDataFailure(error));
    }
}


function* onFetchProductData(){
    yield takeLatest(
        ShopActionTypes.FETCH_PRODUCT_DATA_START,
        fetchProductData
    )
}

export function* shopSagas() {
    yield all([
        call(onFetchInitialProducts),
        call(onFetchFilteredProducts),
        call(onFetchProductData)
    ]);
}
