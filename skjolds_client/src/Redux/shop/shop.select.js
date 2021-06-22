import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectHasShopContentLoaded = createSelector(
    [selectShop],
    shop => shop.hasLoaded
)

export const selectInitialProductsMetaData = createSelector(
    [selectShop],
    shop => shop.initial_products
);

export const selectInitialProducts = createSelector(
    [selectInitialProductsMetaData],    
    productsMetaData => productsMetaData.data
);

export const selectFilteredProductsMetaData = createSelector(
    [selectShop],
    shop => shop.filtered_products
);

export const selectFilteredProducts = createSelector(
    [selectFilteredProductsMetaData],
    productsMetaData => productsMetaData.data
);

export const selectCurrentProduct = createSelector(
    [selectShop],
    shop => shop.currentProduct
)

