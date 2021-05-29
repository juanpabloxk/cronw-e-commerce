import React from 'react';

import StripeCheckout from "react-stripe-checkout";

const StripeChecloutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Iw8CJI9B0cl8tAzS3WbhQ3qiK5NkTGwakQwTRP0xp8JxIASZU8NAlBTrhoqOHrPebA1BYHzHrwdBvGdVhCUWzbs00jAsGCvGJ'

  const onToken = token => {
    console.log(token);
    alert('Payment successful!')
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
