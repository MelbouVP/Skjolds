export const addItemToCart = (cartItems, cartItemToAdd) => {

    const selectedAttributesID = createAttributesKey(cartItemToAdd.selectedAttributes)
    cartItemToAdd = {...cartItemToAdd, selectedAttributesID}


    // Check if item to be added already exists in state
    const cartItemExists = cartItems.find(cartItem => 
        cartItem.id === cartItemToAdd.id &&
        cartItem.selectedAttributesID === cartItemToAdd.selectedAttributesID
    )


    // Create unique attributes key for cart item to be added
    // in order to differentiate items in the cart not only by name but 
    // also by selected attribute combination


    // If item to be added to the cart already exists increment it
    if(cartItemExists) {
        return cartItems.map(cartItem => {
            // 1.If name and attribute are equal then it means 
            //  that product quantity has to be incremented
            // 2.If name matches but attributes are different then it means 
            // that it is a "new item" because combination of attributes is different
            //  and item quantity has to be reset back to 1
            
            if(
                cartItem.id === cartItemToAdd.id && 
                cartItem.selectedAttributesID === cartItemToAdd.selectedAttributesID
            ){

                return cartItemToAdd
            }  else {
                return cartItem
            }

        })
    }

    // if item doesnt exist then return it with quantity of 1
    return [...cartItems, {...cartItemToAdd}]

}

// return all cart items where name and attribute combination doesnt match the item that has to be removed
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => 
        (cartItem.id !== cartItemToRemove.id && 
        cartItem.selectedAttributesID !== cartItemToRemove.selectedAttributesID) ||
        (cartItem.id === cartItemToRemove.id && 
        cartItem.selectedAttributesID !== cartItemToRemove.selectedAttributesID)
    )
}

// if item to be incremented matches existing cart attribute name and selected attributes
// then increment it
export const incrementItem = (cartItems, cartItemToIncrement) => {
    return cartItems.map(cartItem => {

        if(
            cartItem.id === cartItemToIncrement.id &&
            cartItem.selectedAttributesID === cartItemToIncrement.selectedAttributesID
        ) {
            return {...cartItem, quantity: cartItem.quantity + 1}
        } else {
            return cartItem
        }

    })
}

export const decrementItem = (cartItems, cartItemToDecrement) => {

    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToDecrement.id && 
        cartItem.selectedAttributesID === cartItemToDecrement.selectedAttributesID
    )

    // if quantity of cart item is 1 then it can be removed from cart
    if(existingCartItem.quantity === 1) {
        return removeItemFromCart(cartItems, existingCartItem)
    }

    return cartItems.map(cartItem => {
        
        if(
            cartItem.id === cartItemToDecrement.id &&
            cartItem.selectedAttributesID === cartItemToDecrement.selectedAttributesID
        ) {
            return {...cartItem, quantity: cartItem.quantity - 1}
        } else {
            return cartItem
        }
    })
}

// changes selected attributes for existing cart item
export const changeCartItemAttribute = (cartItems, cartItemToChange) => {
    // find the cart item, whose attributes have to be changed
    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToChange.id
    )

    // generete new attribute key
    let newAttributeKey = createAttributesKey(cartItemToChange.attributes)

    // return cart items and update one
    return cartItems.map( cartItem => {
        
        // update cart item with newly selected attributes and new attributes key
        if(cartItem.id === existingCartItem.id){
            return {
                ...existingCartItem, 
                selectedAttributes: cartItemToChange.attributes,
                selectedAttributesID: newAttributeKey,
                quantity: 1
            }
        } else {
            return cartItem
        }
    })
}


// create attribute key for the combination of selected attributes
// that will be used to differentiate items with the same name when adding/decrementing them
const createAttributesKey = (attributes) => {

    return attributes.map( attribute => {

        console.log(attribute)

        let attributeKey = ''

        for(let i = 0; i < attribute.length; i += 2){
            attributeKey += attribute[i]
        }
        
        return attributeKey
    })
    .join('')
}