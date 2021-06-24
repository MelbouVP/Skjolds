import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],    
    cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCart],    
    cart => cart.cartItems.length
);

export const selectCartOverlayHidden = createSelector(
    [selectCart],    
    cart => cart.cartOverlayHidden
);

// Calculate cart total
export const selectCartTotal = createSelector(
    [selectCart],
    cart => {
        
        return cart.cartItems.length ? 
            cart.cartItems.reduce((accumulator, currentCartItem) => {
            
                return (accumulator + (currentCartItem.price * currentCartItem.quantity))
            },0)
        :
            null
    }
)