import React from 'react';
import { connect } from 'react-redux';
import { addCartItem, deleteCartItem, subtractCartItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, deleteCartItem, addQuantity, subtractQuantity}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={() => subtractQuantity(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addQuantity(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => deleteCartItem(cartItem)}>&#10005;</div>
    </div>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteCartItem: (cartItem) => dispatch(deleteCartItem(cartItem)),
    addQuantity: (cartItem) => dispatch(addCartItem(cartItem)),
    subtractQuantity: (cartItem) => dispatch(subtractCartItem(cartItem)),
});


export default connect(null, mapDispatchToProps)(CheckoutItem);