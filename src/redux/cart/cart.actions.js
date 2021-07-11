import { ADD_CART_ITEM, DELETE_CART_ITEM, SUBTRACT_CART_ITEM, TOGGLE_CART_HIDDEN } from "./cart.types"

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN,
});

export const addCartItem = item => ({
    type: ADD_CART_ITEM,
    payload: item
});

export const deleteCartItem = item => ({
    type: DELETE_CART_ITEM,
    payload: item
});

export const subtractCartItem = item => ({
    type: SUBTRACT_CART_ITEM,
    payload: item
});