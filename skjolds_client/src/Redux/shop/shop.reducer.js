import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    hasLoaded: true,
    initial_products: {
        current_page: null,
        data: [],
        first_page_url: null,
        from: null,
        next_page_url: null,
        path: null,
        per_page: null,
        prev_page_url: null,
        to: null
    },
    filtered_products: {
        urrent_page: null,
        data: [],
        first_page_url: null,
        from: null,
        next_page_url: null,
        path: null,
        per_page: null,
        prev_page_url: null,
        to: null
    },
    filterData: {
        filterProperties: {
            category: [],
            size: [],
            min_price: null,
            max_price: null,
            color: []
        },
        filterIsEmpty: true
    },
    currentProduct: null,
    error: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_FILTERED_SHOP_PRODUCTS_START:
        case ShopActionTypes.FETCH_INITIAL_SHOP_PRODUCTS_START:
        case ShopActionTypes.FETCH_PRODUCT_DATA_START:
            return {
                ...state,
                hasLoaded: false
            }
        case ShopActionTypes.FETCH_INITIAL_SHOP_PRODUCTS_SUCCESS:
            return {
                ...state,
                hasLoaded: true,
                initial_products: action.payload
            }
        case ShopActionTypes.FETCH_FILTERED_SHOP_PRODUCTS_SUCCESS:
            return {
                ...state,
                hasLoaded: true,
                filtered_products: action.payload
            }
        case ShopActionTypes.FETCH_INITIAL_SHOP_PRODUCTS_FAILURE:
        case ShopActionTypes.FETCH_FILTERED_SHOP_PRODUCTS_FAILURE:
        case ShopActionTypes.FETCH_PRODUCT_DATA_FAILURE:
            return {
                ...state,
                hasLoaded: true,
                error: action.payload
            }
        case ShopActionTypes.CLEAR_SHOP_FILTER:
            return {
                ...state,
                filtered_products: INITIAL_STATE.filtered_products,
                filterData: {
                    filterProperties: INITIAL_STATE.filterData.filterProperties,
                    filterIsEmpty: true
                }
            }
        case ShopActionTypes.CHANGE_SHOP_FILTER_DATA:
            return {
                ...state,
                filterData: {
                    filterProperties: {
                        ...state.filterData.filterProperties,
                        ...action.payload
                    },
                    filterIsEmpty: false
                }
            }
        case ShopActionTypes.CHANGE_CURRENTLY_VIEWED_PRODUCT:
        case ShopActionTypes.FETCH_PRODUCT_DATA_SUCCESS:
            return {
                ...state,
                hasLoaded: true,
                currentProduct: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;