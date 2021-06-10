const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000;

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
}

app.listen(port, error => {
  if(error) throw error;
  console.log('Server running on port '+port);
});

app.post('/payment', (req, res) => {
  console.log('/payment request');
  console.log(req);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  }
  stripe.charges.create(body, (stripeError, stripeResponse) => {
    if(stripeError) {
      res.status(500).send({ error: stripeError})
    }
    else {
      res.status(200).send({ success: stripeResponse })
    }
  })
})