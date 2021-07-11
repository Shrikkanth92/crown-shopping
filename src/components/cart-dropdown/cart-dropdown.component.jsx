import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';

import { withRouter }  from 'react-router-dom';

import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(cartItem => (
                <CartItem item={cartItem} />
            )) : <span className="empty-message">Your cart is empty</span>}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            toggleCartHidden();
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
