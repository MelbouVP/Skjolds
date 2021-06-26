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

export const fetchFilteredProductsStart = (filterProperties) => ({
    type: ShopActionTypes.FETCH_FILTERED_SHOP_PRODUCTS_START,
    payload: filterProperties
})

export const fetchFilteredProductsSuccess = (productsData) => ({
    type: ShopActionTypes.FETCH_FILTERED_SHOP_PRODUCTS_SUCCESS,
    payload: productsData
})

export const fetchFilteredProductsFailure = (error) => ({
    type: ShopActionTypes.FETCH_FILTERED_SHOP_PRODUCTS_FAILURE,
    payload: error
})

export const clearShopFilter = () => ({
    type: ShopActionTypes.CLEAR_SHOP_FILTER
})

export const changeShopFilterData = (filterProperties) => ({
    type: ShopActionTypes.CHANGE_SHOP_FILTER_DATA,
    payload: filterProperties
})

export const changeCurrentlyViewedProduct = (productData) => ({
    type: ShopActionTypes.CHANGE_CURRENTLY_VIEWED_PRODUCT,
    payload: productData
})

export const fetchProductDataStart = (recordID) => ({
    type: ShopActionTypes.FETCH_PRODUCT_DATA_START,
    payload: recordID
})

export const fetchProductDataSuccess = (recordData) => ({
    type: ShopActionTypes.FETCH_PRODUCT_DATA_SUCCESS,
    payload: recordData
})

export const fetchProductDataFailure = (errorMsg) => ({
    type: ShopActionTypes.FETCH_PRODUCT_DATA_FAILURE,
    payload: errorMsg
})

