import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectInitialProductsMetaData = createSelector(
    [selectShop],
    shop => shop.initial_products
);

export const selectInitialProducts = createSelector(
    [selectInitialProductsMetaData],    
    productsMetaData => productsMetaData.data
);