import { ADD_CART_ITEM, TOGGLE_CART_HIDDEN } from "./cart.types"

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN,
});

export const addCartItem = item => ({
    type: ADD_CART_ITEM,
    payload: item
})