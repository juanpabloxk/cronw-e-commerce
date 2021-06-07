import React from 'react';

import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

const StripeChecloutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Iw8CJI9B0cl8tAzS3WbhQ3qiK5NkTGwakQwTRP0xp8JxIASZU8NAlBTrhoqOHrPebA1BYHzHrwdBvGdVhCUWzbs00jAsGCvGJ'

  const onToken = token => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
    .then(response => {
      alert('Payment successful!')
    })
    .catch(error => {
      console.log('Payment error:', error);
      alert('There was an issue with you payment')
    })
  }

  return(
    <StripeCheckout
      label='Pay now'
      name='Crown clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeChecloutButton;
