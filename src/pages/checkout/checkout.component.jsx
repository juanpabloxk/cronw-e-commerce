import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeChecloutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
    <div className="test-warning">
      * Use the following test card for payments: 4242 4242 4242 4242 <b>Exp:</b> 01/22 <b>CVV:</b> 123
    </div>
    <StripeChecloutButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
