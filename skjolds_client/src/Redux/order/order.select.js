import { createSelector } from 'reselect'

const selectOrder = state => state.order

export const selectIsOrderProcessing = createSelector(
    [selectOrder],    
    order => order.isOrderProcessing
);