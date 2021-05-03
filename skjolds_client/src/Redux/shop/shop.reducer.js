import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    initial_products: {
        current_page: null,
        data: null,
        first_page_url: null,
        from: null,
        next_page_url: null,
        path: null,
        per_page: null,
        prev_page_url: null,
        to: null
    },
    error: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_INITIAL_SHOP_PRODUCTS_SUCCESS:
            return {
                ...state,
                initial_products: action.payload
            }
        case ShopActionTypes.FETCH_INITIAL_SHOP_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;