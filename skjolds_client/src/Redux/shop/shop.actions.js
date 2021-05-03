import ShopActionTypes from './shop.types';


export const fetchInitialProductsStart = () => ({
    type: ShopActionTypes.FETCH_INITIAL_SHOP_PRODUCTS_START
})

export const fetchInitialProductsSuccess = (productsData) => ({
    type: ShopActionTypes.FETCH_INITIAL_SHOP_PRODUCTS_SUCCESS,
    payload: productsData
})

export const fetchInitialProductsFailure = (error) => ({
    type: ShopActionTypes.FETCH_INITIAL_SHOP_PRODUCTS_FAILURE,
    payload: error
})

